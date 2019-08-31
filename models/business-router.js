const express = require('express');
const db = require('../data/db-config.js');
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

router.post('/', (req, res) => {
  db('projects')
    .insert(req.body)
    .then(ids => {
      const id = ids[0];

      db('projects')
        .where({ id })
        .first()
        .then(project => {
          res.status(201).json(project);
        });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post('/resources', (req, res) => {
  db('resources')
    .insert(req.body)
    .then(ids => {
      const id = ids[0];

      db('resources')
        .where({ id })
        .first()
        .then(resource => {
          res.status(201).json(resource);
        });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post('/tasks', (req, res) => {
  db('tasks')
    .insert(req.body)
    .then(ids => {
      const id = ids[0];

      db('resources')
        .where({ id })
        .first()
        .then(task => {
          res.status(201).json(task);
        });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

function convertBool(int) {
  return int === 1 ? true : false;
}

function convertInt(bool) {
  return bool === true ? 1 : 0;
}

module.exports = router;
