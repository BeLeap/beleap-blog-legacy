import styled from '@emotion/styled'
import { Index } from 'elasticlunr'
import { Link } from 'gatsby'
import React, { ChangeEvent, useState } from 'react'
import * as variables from '../../styles/variables'

interface SearchProps {
  searchIndex: any
}

interface Page {
  id: string
  title: string
  slug: string
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

const Search: React.FC<SearchProps> = ({ searchIndex }) => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Page[]>([])

  const index = Index.load(searchIndex)
  const search = (evt: ChangeEvent<HTMLInputElement>) => {
    setQuery(evt.target.value)
    setResults(
      index.search(query, { expand: true }).map(({ ref }: { ref: string }) => {
        return index.documentStore.docs[ref]
      })
    )
  }

  return (
    <>
      <Input type="text" value={query} onChange={search} placeholder="Search Anything Here!" />
      <ul>
        {results.map(page => (
          <li key={page.id}>
            <Link to={page.slug}>{page.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Search
