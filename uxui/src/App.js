import React, { PureComponent } from 'react';
import { Route, withRouter } from 'react-router-dom'

import './styling/app.css';

import News from './components/News'
import Login from './components/Login';
import Profile from './components/Profile'

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
      // let cats = categories.map(cat => cat.name)
      this.setState({
        user: { ...this.state.user, cats: categories }
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

  // updateNews = (news) => {
  //   alert(news)
  //   this.setState({ news }, () => this.state.news.length > 0 ? this.props.history.push('/news') : this.props.history.push('/profile'))
  // }

  tryToFilter = (cat) => {
    this.setState({
      user: {
        ...this.state.user,
        cats: cat
      }
    })
    this.props.history.push('/news')
    this.getNews()
  }
  render() {
    return (

      <div className='App'>
        <header className="App-header">
          {this.state.user.id !== 0 &&
            <div>
              <button onClick={() => {
                this.props.history.goBack()
                this.props.history.push('/news')
              }}>
                News
            </button>
              <button onClick={() => {
                this.props.history.push('/profile')
              }}
              >
                Profile
            </button>
            </div>
          }
        </header>
        <div className='NewsContain'>
          <Route exact path='/' component={props => <Login {...props} updateUser={this.updateUser} />} />
          <Route path='/profile' component={props => <Profile
            {...props}
            getNews={this.getNews}
            id={this.state.user.id}
            existingCats={this.state.user.cats} />}
            tryToFilter={this.tryToFilter}
          />
          <Route path='/news' component={props => <News {...props} news={this.state.news} />} />
        </div>
      </div>
    );
  }
}

export default withRouter(App)
