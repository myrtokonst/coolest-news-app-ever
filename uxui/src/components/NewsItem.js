import React from 'react';
import '../NewsItem.css'

const NewsItem = ({ news }) =>
   <div className="ui card">
      {console.log(news)}
      <div className="content">
         <div className="header"> {news.title}</div>
         <div className="meta">
            <span>{news.published}</span>
         </div>
         <p> {news.text.slice(0, 300)}</p>
      </div>
   </div>

export default NewsItem;