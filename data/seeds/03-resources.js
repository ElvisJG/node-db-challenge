exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('resources').insert([
        // 1
        {
          resource_name: 'Awesome Laptops',
          description: 'the latest and greatest'
        },
        // 2
        {
          resource_name: 'Great Developers',
          description: 'Our core team of developers'
        },
        // 3
        {
          resource_name: 'Incredible QA',
          description: 'ALL THE EDGE CASES'
        },
        // 4
        {
          resource_name: 'Coffee',
          description: 'Developer fuel'
        },
        // 5
        {
          resource_name: 'Sarah Drasner',
          description: 'Head of DX @Netlify and overall incredible designer'
        },
        // 6
        {
          resource_name: 'cat treats',
          description: 'Salem LOVES these'
        }
      ]);
    });
};
