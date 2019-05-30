import React from 'react';
import '../styling/newsitem.css'

const NewsItem = ({ news }) =>
   <div className="ui card" >
      <div className='image'>
         <img
            key={news.uuid}
            src={news.thread.main_image}
            alt={news.title}
         />
      </div>
      <div className="content">
         <div className="header"> {news.title}</div>
         <div className="meta">
            <span>{news.published}</span>
         </div>
         <p> {news.text.slice(0, 300)}</p>
      </div>
   </div>

export default NewsItem;