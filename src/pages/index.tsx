import * as React from 'react'
import ArticleList from '../components/Article/ArticleList'
import Container from '../components/Container'
import Page from '../components/Page'
import IndexLayout from '../layouts'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1
          style={{
            marginBottom: '1rem'
          }}
        >
          Lorem Ipsum
        </h1>
        <ArticleList />
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
