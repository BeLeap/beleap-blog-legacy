import styled from '@emotion/styled'
import { Index } from 'elasticlunr'
import { graphql, useStaticQuery } from 'gatsby'
import React, { ChangeEvent, useState } from 'react'
import * as variables from '../../styles/variables'
import ArticleCard from './ArticleCard'

interface SearchProps {
  searchIndex: any
}

interface Page {
  id: string
  title: string
  slug: string
  excerpt: string
}

interface ArticleNode {
  id: string
  frontmatter: {
    title: string
  }
  excerpt: string
  fields: {
    slug: string
  }
}

const Input = styled.input`
  border: 0;
  outline: none;
  padding: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  ${variables.outdrop}

  &:focus {
    ${variables.indrop}
  }
`

const ArticleList: React.FC<SearchProps> = ({ searchIndex }) => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Page[]>([])

  const data = useStaticQuery(graphql`
    query GetListOfArticle {
      allMarkdownRemark {
        nodes {
          id
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

  const findExcerptById = (id: string): string => {
    return data.allMarkdownRemark.nodes.reduce((prev: string, curr: ArticleNode) => {
      if (curr.id === id) return `${curr.excerpt}`
      return `${prev}`
    }, '')
  }

  const index = Index.load(searchIndex)
  const search = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target
    setQuery(value)
    if (value.length <= 1) {
      setResults([])
    } else {
      setResults(
        index
          .search(query, { expand: true })
          .map(({ ref }: { ref: string }) => {
            return index.documentStore.docs[ref]
          })
          .map((page: Page) => {
            return {
              ...page,
              excerpt: findExcerptById(page.id)
            }
          })
      )
    }
    console.log('search')
  }

  return (
    <>
      <Input type="text" value={query} onChange={search} placeholder="Search Anything Here!" />
      {results.length !== 0
        ? results.map(page => <ArticleCard link={page.slug} title={page.title} excerpt={page.excerpt} />)
        : data.allMarkdownRemark.nodes.map((node: ArticleNode) => (
            <ArticleCard link={node.fields.slug} title={node.frontmatter.title} excerpt={node.excerpt} />
          ))}
    </>
  )
}

export default ArticleList
