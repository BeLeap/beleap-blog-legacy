import styled from '@emotion/styled'
import * as React from 'react'

interface ArticleCardProps {
  link: string
  title: string
  excerpt: string
}

const Card = styled.a`
  display: block;
  color: black;
  border-radius: 1.5rem;
  background: #e0e0e0;
  box-shadow: 0.5rem 0.5rem 1rem #bebebe, -0.5rem -0.5rem 1rem #ffffff;
  padding: 2rem;
  margin-bottom: 2rem;

  &:hover {
    border-radius: 1.5rem;
    background: #e0e0e0;
    box-shadow: inset 0.5rem 0.5rem 1rem #bebebe, inset -0.5rem -0.5rem 1rem #ffffff;
  }
`

const ArticleCard: React.FC<ArticleCardProps> = ({ link, title, excerpt }) => {
  return (
    <Card href={link}>
      <h1>{title}</h1>
      <p>{excerpt}</p>
    </Card>
  )
}

export default ArticleCard
