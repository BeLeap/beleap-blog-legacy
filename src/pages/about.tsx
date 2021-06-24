import * as React from 'react'
import About from '../components/About/About'
import Container from '../components/Container'
import Page from '../components/Page'
import IndexLayout from '../layouts'

const AboutPage: React.FC<{}> = () => {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <About />
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default AboutPage
