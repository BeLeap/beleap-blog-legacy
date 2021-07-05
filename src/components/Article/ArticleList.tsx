import styled from '@emotion/styled'
import { Index } from 'elasticlunr'
import { graphql, useStaticQuery } from 'gatsby'
import React, { ChangeEvent, useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
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

const InputWrapper = styled.div`
  position: relative;
`

const Input = styled.input`
  border: 0;
  outline: none;
  padding: 1.5rem;
  margin: 1rem 0 4rem 0;
  width: 100%;
  ${variables.outdrop}

  &:focus {
    ${variables.indrop}
  }
`

const SearchIcon = styled(BiSearchAlt)`
  display: none;
  position: absolute;
  overflow: hidden;
  top: 28%;
  right: 2rem;

  @media screen and (min-width: ${variables.breakpoints.xs}px) {
    display: block;
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
  }

  return (
    <>
      <InputWrapper>
        <SearchIcon />
        <Input type="search" value={query} onChange={search} placeholder="Search Anything Here!" />
      </InputWrapper>
      {results.length !== 0
        ? results.map(page => <ArticleCard link={page.slug} title={page.title} excerpt={page.excerpt} />)
        : data.allMarkdownRemark.nodes.map((node: ArticleNode) => (
            <ArticleCard link={node.fields.slug} title={node.frontmatter.title} excerpt={node.excerpt} />
          ))}
    </>
  )
}

export default ArticleList
