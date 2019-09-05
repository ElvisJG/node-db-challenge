exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          project_id: 1,
          task_name: 'Create Links',
          task_description:
            'Create links to home, about us, contact us, and shop',
          task_notes: 'The client would like these links to be #00acee',
          completed: true
        },
        {
          project_id: 1,
          task_name: 'Create awesome SVG graphics with swoosh animations!',
          task_description:
            'We are going to need to bring @sarah_edo in for this one',
          task_notes: 'Someone contact Sarah Drasner!',
          completed: false
        },
        {
          project_id: 1,
          task_name: 'Release the Demo!',
          task_description: 'Compile a demo to show the client!',
          task_notes: 'Lets hope this does not have TOO many bugs',
          completed: false
        },
        {
          project_id: 1,
          task_name: 'Client Feedback!',
          task_description:
            'The client loves the animations, and wants us to add another link',
          task_notes: 'phew',
          completed: false
        },
        {
          project_id: 1,
          task_name: 'Test the changes!',
          task_description: 'Where are the QA Engineers?!',
          task_notes: 'I think i saw one feeding the cat',
          completed: false
        },
        {
          project_id: 1,
          task_name: 'DEPLOY! DEPLOY! DEPLOY!',
          task_description: 'Navbar is function and has passed the tests!',
          task_notes: 'Great job guys',
          completed: false
        },
        {
          project_id: 2,
          task_name:
            'A client needs an algorithm to help crunch some very important data',
          task_description: 'Lets work together and make sure to follow TDD',
          task_notes: '',
          completed: false
        },
        {
          project_id: 2,
          task_name: 'Continued integration and tests',
          task_description: 'The QA Engineers are on fire today!',
          task_notes: '',
          completed: false
        },
        {
          project_id: 2,
          task_name: 'We found a bug!',
          task_description:
            'Guys this is very important [Redacted] expects us to do a great job on this one',
          task_notes: 'I think there might be something wrong on line 88',
          completed: false
        },
        {
          project_id: 2,
          task_name:
            'The algorithm is complete! [Redacted] loves it and says we will continue to do business',
          task_description: 'We would make @getify proud',
          task_notes: 'Great job!',
          completed: false
        },
        {
          project_id: 3,
          task_name: 'The kitty demands treats!',
          task_description:
            'Our resident cat, Salem, is very chonky and demands treats!',
          task_notes: 'We love this little guy',
          completed: false
        }
      ]);
    });
};
