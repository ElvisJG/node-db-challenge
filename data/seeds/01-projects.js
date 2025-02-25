exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('projects').insert([
        // 1
        {
          project_name: 'Best Navbar Ever',
          project_description:
            'Our team is tasked to create the best navbar ever by a very big client',
          completed: false
        },
        // 2
        {
          project_name: 'Great Algorithm',
          project_description: '[REDACTED]',
          completed: false
        },
        // 3
        {
          project_name: 'Give the cat treats',
          project_description: 'The office cat needs treats',
          completed: true
        }
      ]);
    });
};
