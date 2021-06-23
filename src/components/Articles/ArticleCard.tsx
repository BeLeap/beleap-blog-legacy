import * as React from 'react'

interface ArticleCardProps {
  title: string
  summary: string
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, summary }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{summary}</p>
    </div>
  )
}

export default ArticleCard
