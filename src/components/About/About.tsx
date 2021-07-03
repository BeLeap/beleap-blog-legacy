import styled from '@emotion/styled'
import * as React from 'react'

const AboutWrapper = styled.div`
  font-size: 1.5rem;
`

const Introduce = styled.div`
  font-weight: bold;
  font-size: 2rem;
`

const ImportantAnchor = styled.a`
  font-weight: bold;
`

const About: React.FC = () => {
  return (
    <AboutWrapper>
      <Introduce>
        Hi, I'm Changseo Jang(a.k.a <a href="https://github.com/BeLeap">BeLeap</a>)
        <br />I Love to Develop Anything
      </Introduce>
      <h2>Biography</h2>
      Computer Science & Engineering @ <ImportantAnchor href="http://korea.edu">Korea Univ.</ImportantAnchor>
      <br />
      Backend Engineer @ <ImportantAnchor href="https://riiid.co">Riiid</ImportantAnchor>
      <h2>Tech Spec</h2>
      Using <ImportantAnchor href="https://spring.io">Spring</ImportantAnchor> (with{' '}
      <ImportantAnchor href="https://kotlinlang.org">Kotlin</ImportantAnchor>) &{' '}
      <ImportantAnchor href="https://grpc.io">gRPC</ImportantAnchor> at <ImportantAnchor href="https://riiid.co">Riiid</ImportantAnchor> as
      Backend Engineer
      <br />
      Using <ImportantAnchor href="https://rust-lang.org">Rust</ImportantAnchor> at{' '}
      <ImportantAnchor href="https://github.com/OxideEngine">OxideEngine</ImportantAnchor>
    </AboutWrapper>
  )
}

export default About
