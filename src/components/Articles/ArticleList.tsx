import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import ArticleCard from './ArticleCard'

interface ArticleNode {
  frontmatter: {
    title: string
  }
  excerpt: string
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
        }
      }
    }
  `)

  return (
    <>
      {data.allMarkdownRemark.nodes.map((node: ArticleNode) => (
        <ArticleCard title={node.frontmatter.title} excerpt={node.excerpt} />
      ))}
    </>
  )
}

export default ArticleList
