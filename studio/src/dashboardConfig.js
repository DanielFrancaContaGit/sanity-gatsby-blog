export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5edd500e4265ffdda34f1856',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-on1um48u',
                  apiId: 'be0f42b7-e1b2-4f2b-ac4e-4deee1877671'
                },
                {
                  buildHookId: '5edd500f1311f816bad10e93',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-cbortsp2',
                  apiId: '201d04e3-1f31-45f2-8184-c0b1ea8a06a1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DanielFrancaContaGit/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-cbortsp2.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
