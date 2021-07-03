import styled from '@emotion/styled'
import * as React from 'react'
import * as variables from '../../styles/variables'

interface ArticleCardProps {
  link: string
  title: string
  excerpt: string
}

const ExcerptWrapper = styled.p`
  margin-top: 2rem;
  padding: 2rem;
  ${variables.indrop}
`
const Card = styled.a`
  display: block;
  color: black;
  padding: 2rem;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  ${variables.outdrop}

  &:hover {
    ${variables.indrop}
  }
`

const ArticleCard: React.FC<ArticleCardProps> = ({ link, title, excerpt }) => {
  return (
    <Card href={link}>
      <h1>{title}</h1>
      <ExcerptWrapper>{excerpt}</ExcerptWrapper>
    </Card>
  )
}

export default ArticleCard
