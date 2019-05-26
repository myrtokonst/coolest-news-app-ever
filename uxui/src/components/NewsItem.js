import React from 'react';
import { Card } from 'semantic-ui-react'

const NewsItem = ({ news }) =>
   <Card
      header={news.title}
      description={news.text.slice(0, 200)}
      meta={news.published}
   />

export default NewsItem;