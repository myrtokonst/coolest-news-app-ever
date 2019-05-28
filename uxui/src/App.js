import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';

import News from './components/News'
import LogIn from './components/LogIn';

import Nav from './components/Nav'
import Login from './components/Login'
import Profile from './components/Profile'
import Search from './components/Search'

class App extends PureComponent {
  state = {
    news: []
  }

  getNews = async (search) => {
    const resp = await fetch(`http://localhost:3000/good_news/${search}`);
    const news = await resp.json();
    return this.setState({ news });
  }


  updateNews = (news) => {
    this.setState({
      news
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Nav getNews={this.getNews} />
          </header>
          <Route exact path='/' component={Login} />
          <Route path='/search' component={Search} />
          <Route path='/profile' component={Profile} />
          <footer>
          </footer>
        </div>
      </Router>

    );
  }
}

export default App;
