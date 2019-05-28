import React, { PureComponent } from 'react';
import { Route, withRouter } from 'react-router-dom'

import './App.css';

import News from './components/News'
import LogIn from './components/LogIn';

import Nav from './components/Nav'
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
    this.setState({news}, () => this.props.history.push('/news'))
  }

  render() {
    return (
    
        <div className="App">
          <header className="App-header">
            <Nav getNews={this.getNews} />
          </header>

          <Route exact path='/' component={props => <LogIn {...props} updateNews={this.updateNews} />} />
          <Route path='/profile' component={Profile} /> 
          <Route path='/news' component={props => <News {...props} news={this.state.news}/ >} /> }
          <Route path='/search' component={Search} />
          
          <footer>
          </footer>
        </div>

    );
  }
}

export default withRouter(App)
