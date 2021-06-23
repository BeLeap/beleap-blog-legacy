import * as React from 'react'

interface ArticleCardProps {
  title: string
  excerpt: string
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, excerpt }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{excerpt}</p>
    </div>
  )
}

export default ArticleCard
