const express = require('express');

const Data = require('./helpers');

const router = express.Router();

// GET 4000/api/projects
router.get('/', async (req, res) => {
  try {
    const route = 'projects';
    const getProjects = await Data.get(route);
    res.json(getProjects);
  } catch (error) {
    res.status(500).json({ message: `Could not retrieve ${route}` });
  }
});

// GET 4000/api/projects/resources
router.get('/resources', async (req, res) => {
  try {
    const route = 'resources';
    const getResources = await Data.get(route);
    res.json(getResources);
  } catch (error) {
    res.status(500).json({ message: `Could not retrieve ${route}` });
  }
});

// GET 4000/api/projects/:id/tasks
router.get('/:id/tasks', (req, res) => {
  const { id } = req.params;
  const route = 'projects';
  Data.getTasks(id)
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: `Could not retrieve ${route}'s under project ${id}` });
    });
});

router.post('/', async (req, res) => {
  try {
    const addProject = await Data.addProject(req.body);
    res.status(201).json(addProject);
  } catch (error) {
    res.status(500).json({ message: 'error posting project' });
  }
});

router.post('/resources', (req, res) => {});

router.post('/:id/tasks', (req, res) => {});

module.exports = router;
