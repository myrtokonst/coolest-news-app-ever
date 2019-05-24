import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'

class News extends Component {
   state = {
      news: []
   }

   getNews = () =>
      fetch('https://localhost/3000')
         .then(resp => resp.json())
         .then(news => this.setState({ news }))

   componentDidMount() {
      this.getNews()
   }

   render() {
      const { news } = this.state
      return (
         <div>
            {news.map(news => <Card
               key={news.uuid}
               items={{
                  header: news.title,
                  description: news.text,
                  meta: news.thread.published
               }} />)}
         </div>

      )
   }
}

export default News;