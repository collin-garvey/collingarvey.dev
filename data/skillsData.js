const data = {
  name: 'Skills',
  children: [
    {
      name: 'Front-End',
      children: [
        {
          name: 'HTML',
          children: [
            {
              name: 'Accessibility',
              value: 7,
            },
            {
              name: 'SEO',
              value: 9,
            },
            {
              name: 'Semantics',
              value: 10,
            },
          ],
        },
        {
          name: 'JavaScript',
          children: [
            {
              name: 'TypeScript',
              value: 8.5,
            },
            {
              name: 'D3',
              value: 5,
            },
            {
              name: 'ThreeJS',
              value: 7,
            },
            {
              name: 'React',
              children: [
                {
                  name: 'Hooks API',
                  value: 9,
                },
                {
                  name: 'Redux',
                  value: 9,
                },
              ],
            },
            {
              name: 'Testing',
              children: [
                {name: 'Jest', value: 9},
                {
                  name: 'Cypress',
                  value: 8,
                },
              ],
            },
            {
              name: 'VueJS',
              value: 6,
            },
            {
              name: 'Angular',
              value: 3,
            },
          ],
        },
        {
          name: 'CSS',
          children: [
            {
              name: 'SCSS',
              value: 10,
            },
            {
              name: 'Modules',
              value: 10,
            },
            {
              name: 'CSS in JS',
              value: 9,
            },
          ],
        },
      ],
    },
    {
      name: 'Back-End',
      children: [
        {
          name: 'PHP',
          value: 9,
        },
        {name: 'Docker', value: 7},
        {
          name: 'Relational DBs',
          value: 5,
        },
        {
          name: 'NodeJS',
          value: 8,
        },
        {
          name: 'AWS',
          children: [
            {
              name: 'S3',
              value: 9,
            },
            {
              name: 'EC2',
              value: 7,
            },
          ],
        },
      ],
    },
    {
      name: 'Management',
      children: [
        {
          name: 'Interpersonal',
          children: [
            {
              name: 'Conflict Resolution',
              value: 10,
            },

            {
              name: 'Mentorship',
              value: 8,
            },
            {
              name: 'Interviewing',
              value: 9,
            },
          ],
        },

        {
          name: 'Technical Direction',
          children: [
            {
              name: 'Code Review',
              value: 10,
            },
            {
              name: 'Effort Estimation',
              value: 10,
            },
            {
              name: 'Performance Review',
              value: 8,
            },
          ],
        },
      ],
    },
  ],
};

export default data;
