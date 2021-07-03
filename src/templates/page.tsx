import styled from '@emotion/styled'
import { graphql, Link } from 'gatsby'
import * as React from 'react'
import Container from '../components/Container'
import Page from '../components/Page'
import IndexLayout from '../layouts'
import * as variables from '../styles/variables'

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: {
          name: string
          url: string
        }
      }
    }
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: {
        title: string
      }
    }
  }
}

const NeumorphicTitle = styled.h1`
  display: block;
  color: black;
  padding: 2rem;
  margin-bottom: 2rem;
  ${variables.outdrop}
`

const NeumorphicContent = styled.div`
  display: block;
  color: black;
  padding: 2rem;
  margin-bottom: 2rem;
  ${variables.outdrop}
`

const NeumorphicLink = styled(Link)`
  display: block;
  padding: 2rem;
  margin-bottom: 2rem;
  text-align: right;
  font-weight: bold;
  ${variables.outdrop}

  &:hover {
    ${variables.indrop}
  }
`

const PageTemplate: React.FC<PageTemplateProps> = ({ data }) => (
  <IndexLayout>
    <Page>
      <Container>
        <NeumorphicTitle>{data.markdownRemark.frontmatter.title}</NeumorphicTitle>
        {/* eslint-disable-next-line react/no-danger */}
        <NeumorphicContent dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        <NeumorphicLink to="/"> {'< Back to Article List'}</NeumorphicLink>
      </Container>
    </Page>
  </IndexLayout>
)

export default PageTemplate

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
      }
    }
  }
`
