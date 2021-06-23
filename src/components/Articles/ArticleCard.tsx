import styled from '@emotion/styled'
import * as React from 'react'

interface ArticleCardProps {
  title: string
  excerpt: string
}

const Card = styled.div`
  border-radius: 1.5rem;
  background: #e0e0e0;
  box-shadow: 0.5rem 0.5rem 1rem #bebebe, -0.5rem -0.5rem 1rem #ffffff;
  padding: 1.5rem;
  margin-bottom: 2rem;
`

const ArticleCard: React.FC<ArticleCardProps> = ({ title, excerpt }) => {
  return (
    <Card>
      <h1>{title}</h1>
      <p>{excerpt}</p>
    </Card>
  )
}

export default ArticleCard
