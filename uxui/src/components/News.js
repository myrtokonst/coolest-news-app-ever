import React, { Component } from 'react';
import NewsItem from './NewsItem';

class News extends Component {
   state = {
      news: []
   }

   getNews = () =>
      fetch('http://localhost:3000/good_news')
         .then(resp => resp.json())
         .then(news => this.setState({ news }))

   componentDidMount() {
      this.getNews()
   }

   render() {
      const { news } = this.state
      return (
         <div>
            {news.map(news => <NewsItem key={news.uuid} news={news} />)}
         </div>
      )
   }
}

export default News;