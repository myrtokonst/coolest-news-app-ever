import React from 'react';
import NewsItem from './NewsItem';

const News = ({ news }) => {
   return (
      <div className='NewsContain'>
         {news.map(news => <NewsItem key={news.uuid} news={news} />)}
      </div>
   )
}


export default News;