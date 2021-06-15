export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60c878c04ff1eaf1af1a3d84',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-dhyh5vzv',
                  apiId: '53141fb1-4830-48c8-a8c2-9c8bf2ef644e'
                },
                {
                  buildHookId: '60c878bf6aeb13d393193106',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-v3qn8g4q',
                  apiId: '4dd23a26-a1c1-467d-bffa-f92b752fa5ad'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Mafeddie/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-v3qn8g4q.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
