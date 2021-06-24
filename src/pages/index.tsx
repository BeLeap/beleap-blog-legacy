import * as React from 'react'
import ArticleList from '../components/Article/ArticleList'
import Container from '../components/Container'
import Page from '../components/Page'
import IndexLayout from '../layouts'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <ArticleList />
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
