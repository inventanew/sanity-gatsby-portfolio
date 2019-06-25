export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5d123182fb1a3d40a92cc93a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-wfhftath',
                  apiId: '157e479e-5df5-4f1e-ac92-830dabfd7767'
                },
                {
                  buildHookId: '5d1231822788430e6fe25f08',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-hrtcn3zp',
                  apiId: '35a62f2a-0b57-45b8-a3ae-dce5ff5b0a4f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/inventanew/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-hrtcn3zp.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
