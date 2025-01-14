exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments();
      tbl.string('project_name', 128).notNullable();
      tbl.string('project_description');
      tbl.boolean('completed', 128).defaultTo(false);
    })
    .createTable('tasks', tbl => {
      tbl.increments();
      tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.string('task_name', 128).notNullable();
      tbl.string('task_description', 128).notNullable();
      tbl.string('task_notes', 128);
      tbl.boolean('completed').defaultTo(false);
    })
    .createTable('resources', tbl => {
      tbl.increments();
      tbl
        .string('resource_name', 128)
        .unique()
        .notNullable();
      tbl.string('description', 128);
    })
    .createTable('project_resources', tbl => {
      tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl
        .integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.primary(['project_id', 'resource_id']);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project-resources')
    .dropTableIfExists('projects')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources');
};
