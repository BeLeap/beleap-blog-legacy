import styled from '@emotion/styled'
import * as React from 'react'
import * as variable from '../../styles/variables'

const AboutWrapper = styled.div`
  font-size: 1.5rem;
  padding: 2rem;
  ${variable.outdrop}
`

const Introduce = styled.div`
  font-weight: bold;
  font-size: 2rem;
`

const DetailedAboutWrapper = styled.div`
  padding: 0.5rem 1rem 2rem 2rem;
  margin-top: 2rem;
  ${variable.indrop}
`

const ImportantAnchor = styled.a`
  font-weight: bold;
`

const DiscordAnchor = styled.a`
  font-weight: bold;
  color: #5865f2;
`

const About: React.FC = () => {
  return (
    <AboutWrapper>
      <Introduce>
        Hi, I'm Changseo Jang(a.k.a <a href="https://github.com/BeLeap">BeLeap</a>)
        <br />I Love to Develop Anything
      </Introduce>
      <DetailedAboutWrapper>
        <h2>Biography</h2>
        Computer Science & Engineering @ <ImportantAnchor href="http://korea.edu">Korea Univ.</ImportantAnchor>
        <br />
        Backend Engineer @ <ImportantAnchor href="https://riiid.co">Riiid</ImportantAnchor>
        <br />
        Software Engineer @ <ImportantAnchor href="https://nearthlab.com">Nearthlab</ImportantAnchor>
        <br />
        ML Engineer @ <ImportantAnchor href="https://mindslab.ai:8080/kr/company">MINDs Lab</ImportantAnchor>
      </DetailedAboutWrapper>
      <DetailedAboutWrapper>
        <h2>Tech Spec</h2>
        Used <ImportantAnchor href="https://spring.io">Spring Boot</ImportantAnchor> (with{' '}
        <ImportantAnchor href="https://kotlinlang.org">Kotlin</ImportantAnchor>) &{' '}
        <ImportantAnchor href="https://grpc.io">gRPC</ImportantAnchor> at <ImportantAnchor href="https://riiid.co">Riiid</ImportantAnchor>{' '}
        as Backend Engineer
        <br />
        Used <ImportantAnchor href="https://www.typescriptlang.org">Typescript</ImportantAnchor> at{' '}
        <ImportantAnchor href="https://github.com/pbkit">pbkit</ImportantAnchor>
        <br />
        Used <ImportantAnchor href="https://nestjs.com">NestJS</ImportantAnchor> (with{' '}
        <ImportantAnchor href="https://www.typescriptlang.org">Typescript</ImportantAnchor>) at{' '}
        <ImportantAnchor href="https://nearthlab.com">Nearthlab</ImportantAnchor> as Software Engineer
        <br />
        Using <ImportantAnchor href="https://nestjs.com">Python</ImportantAnchor> &{' '}
        <ImportantAnchor href="https://grpc.io">gRPC</ImportantAnchor> at{' '}
        <ImportantAnchor href="https://mindslab.ai:8080/kr/company">MINDs Lab</ImportantAnchor> as ML Engineer
        <br />
        Using <ImportantAnchor href="https://rust-lang.org">Rust</ImportantAnchor> at{' '}
        <ImportantAnchor href="https://github.com/OxideEngine">OxideEngine</ImportantAnchor>
      </DetailedAboutWrapper>
      <DetailedAboutWrapper>
        <h2>Contact</h2>
        <h3>Mail</h3>
        <ImportantAnchor href="mailto:beelap@beleap.codes">belepa@beleap.cdoes</ImportantAnchor>
        <h3>Discord</h3>
        <DiscordAnchor href="https://discord.com/users/540435382853173280">BeLeap#1012</DiscordAnchor>
      </DetailedAboutWrapper>
    </AboutWrapper>
  )
}

export default About
