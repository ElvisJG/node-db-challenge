const db = require('../data/db-config.js');

module.exports = {
  get,
  getTasks
};

function get(target, id) {
  return id
    ? db(target).then(bool =>
        table.map(table => {
          if (table.completed === 1) {
            table.completed = true;
          } else table.completed = false;
          return bool;
        })
      )
    : db(target);
}

function getTasks(id) {
  return db('tasks as t')
    .innerJoin('projects as p', 't.project_id', 'p.id')
    .select(
      'p.project_name',
      't.task_name',
      't.task_description',
      't.task_notes',
      't.completed'
    )
    .where('t.project_id', id)
    .then(tasks =>
      tasks.map(task => {
        if (task.completed == 1) {
          task.completed = true;
        } else task.completed = false;
        return task;
      })
    );
}

// function addProject(project) {
//   return db('projects')
//     .insert(project)
//     .then(([id]) => this.get(id));
// }
