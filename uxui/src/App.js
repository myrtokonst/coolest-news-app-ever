import React, { PureComponent } from 'react';
import { Route, withRouter } from 'react-router-dom'

import './styling/app.css';

import News from './components/News'
import Login from './components/Login';
import Nav from './components/Nav'
import Profile from './components/Profile'
import Search from './components/Search'

class App extends PureComponent {
  state = {
    news: [],
    user: {
      id: 0,
      username: '',
      last_login: 0,
      cats: [],
    }
  }

  updateUser = ({ id, username, last_login, categories }) => {

    this.setState({
      user: {
        id: id,
        username: username,
        last_login: last_login,
      }
    })
    if (categories.length === 0) {
      this.props.history.push('/profile')
    } else {
      let cats = categories.map(cat => cat.name)
      this.setState({
        user: { ...this.state.user, cats }
      })
      this.getNews()
    }
  }

  getNews = () =>
    fetch('http://localhost:3000/good_news', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: this.state.user.id })
    })
      .then(resp => resp.json())
      .then(news => this.setState({ news }))
      .then(() => this.props.history.push('/news'))

  updateNews = (news) => {
    alert(news)
    this.setState({ news }, () => this.state.news.length > 0 ? this.props.history.push('/news') : this.props.history.push('/profile'))
  }

  render() {
    return (

      <div className="App">
        <header className="App-header">
          <div>
            <button onClick={() => this.props.history.push('/news')}>News</button>
            <button onClick={() => this.props.history.push('/profile')}>Profile</button>
          </div>
        </header>

        <Route exact path='/' component={props => <Login {...props} updateUser={this.updateUser} />} />
        <Route path='/profile' component={props => <Profile {...props} getNews={this.getNews} id={this.state.user.id} />} />
        <Route path='/news' component={props => <News {...props} news={this.state.news} />} />
        <Route path='/search' component={Search} />

        <footer>
        </footer>
      </div>

    );
  }
}

export default withRouter(App)
