import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import ArticleList from '../components/Article/ArticleList'
import Search from '../components/Article/Search'
import Container from '../components/Container'
import Page from '../components/Page'
import IndexLayout from '../layouts'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SearchIndexQuery {
      siteSearchIndex {
        index
      }
    }
  `)
  return (
    <IndexLayout>
      <Page>
        <Container>
          <Search searchIndex={data.siteSearchIndex.index} />
          <ArticleList />
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default IndexPage
