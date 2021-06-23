import { Link } from 'gatsby'
import * as React from 'react'
import ArticleList from '../components/Articles/ArticleList'
import Container from '../components/Container'
import Page from '../components/Page'
import IndexLayout from '../layouts'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Lorem Ipsum</h1>
        <ArticleList />
        <Link to="/page-2/">Go to page 2</Link>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
