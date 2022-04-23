module.exports = {
  siteMetadata: {
    title: 'BeLeap Blog',
    description: 'BeLeap Blog built with gatsby',
    keywords: 'gatsbyjs, gatsby, javascript, sample, something',
    siteUrl: 'https://www.beleap.codes',
    author: {
      name: 'Changseo Jang',
      url: 'https://twitter.com/beleap_',
      email: 'beleap@beleap.codes'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            slug: node => node.fields.slug
          }
        }
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com'
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {},
        // Set to false to allow builds to continue on image errors
        failOnError: true,
        // deprecated options and their defaults:
        base64Width: 20,
        forceBase64Format: `png`, // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'BeLeap Blog',
        short_name: 'BeLeap Blog',
        start_url: '/',
        background_color: '#e0e0e0',
        theme_color: '#e0e0e0',
        display: 'standalone',
        icon: 'src/images/gatsby-icon.png'
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-image'
  ]
}
