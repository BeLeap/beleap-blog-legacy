import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import ArticleCard from './ArticleCard'

interface ArticleNode {
  frontmatter: {
    title: string
  }
  excerpt: string
  fields: {
    slug: string
  }
}

const ArticleList: React.FC<{}> = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark {
        nodes {
          excerpt
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  `)

  return (
    <>
      {data.allMarkdownRemark.nodes.map((node: ArticleNode) => {
        return <ArticleCard link={node.fields.slug} title={node.frontmatter.title} excerpt={node.excerpt} />
      })}
    </>
  )
}

export default ArticleList
