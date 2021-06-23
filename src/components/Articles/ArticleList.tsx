import * as React from 'react'
import ArticleCard from './ArticleCard'

const ArticleList: React.FC<{}> = () => {
  return (
    <>
      <ArticleCard title="Lorem Ipsum 1" summary="lorem ipsum" />
      <ArticleCard title="Lorem Ipsum 2" summary="lorem ipsum" />
    </>
  )
}

export default ArticleList
