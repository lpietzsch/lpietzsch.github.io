module.exports = {
  siteMetadata: {
    navbarLinks: [
      {to: "/blog", name: "Blog"}
    ],
    title: "Lara Pietzsch",
    description: "Website Beschreibung",
    siteUrl: "https://www.lara-pietzsch.de",
    homepageHeader: "Willkommen auf meinem Blog",
    homepageAbout: "Ich bin Kommunikatorin aus Leidenschaft",
    xing: "https://www.xing.com/profile/Lara_Pietzsch",
    twitter: "https://twitter.com/lara_pietzsch",
    linkedIn: "https://www.linkedin.com/in/lara-pietzsch-15a96394/"
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
            {
              allMarkdownRemark(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] },
                filter: {frontmatter: {type: {eq: "post"}}}
              ) {
                edges {
                  node {
                    excerpt
                    html
                    frontmatter {
                      slug
                      title
                      date
                    }
                  }
                }
              }
            }
          `,
            output: "/rss.xml",
            title: "Lara Pietzsch RSS Feed",
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'content',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1400,
            },
          },
        ],
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Karla', 'Playfair Display', 'Lora']
        }
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: "UA-134848998-1",
        head: false,
        anonymize: true,
        respectDNT: true,
        cookieDomain: "lara-pietzsch.de"
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.lara-pietzsch.de',
        sitemap: 'https://www.lara-pietzsch.de/sitemap.xml',
        policy: [{userAgent: '*', disallow: ['/hochzeit-16-07-2022', '/hochzeit-16-07-2022/']}]
      }
    }
  ]
}
