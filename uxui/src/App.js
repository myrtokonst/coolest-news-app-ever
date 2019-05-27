import React, { PureComponent } from 'react';
import './App.css';
import News from './components/News'
import Nav from './components/Nav'


class App extends PureComponent {
  state = {
    news: []
  }

  getNews = async (search) => {
    console.log(`http://localhost:3000/good_news/${search}`)
    const resp = await fetch(`http://localhost:3000/good_news/${search}`);
    const news = await resp.json();
    return this.setState({ news });
  }


  render() {
    const { news } = this.state
    const { getNews } = this
    return (
      <div className="App">
        <header className="App-header">
          <Nav getNews={getNews} />
        </header>

        <section className="ui centered grid container">

          <News news={news} />

        </section>

        <footer>
        </footer>
      </div>
    );
  }
}

export default App;
