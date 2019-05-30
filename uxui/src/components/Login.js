import React, {Component} from 'react'
import sendEmail from '../auth.js'

class LogIn extends Component {
   state = {
      user: {
         username: '',
         last_login: ''
      }
   }

   handleInputChange = (event) => {
      this.setState({
         user: {
            ...this.state.user,
            username: event.target.value
         }
      })
   }

   handleSubmit = (event) => {
      event.preventDefault()
      const time = Date.now()
      this.setState({
         user: {
            ...this.state.user,
            last_login: time
         }
      })
      const username = this.state.user.username
      return fetch('http://localhost:3000/users', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            user: {
               username: username,
               last_login: time
            }
         })
      }
      ).then(resp => resp.json()).then(data => this.props.updateNews(data))
   }

   handleSubmitToAuth0 = (e) => {
      e.preventDefault()
      sendEmail(e.target.username.value)
   }

   render() {
      let { user } = this.state
      let { username } = user
      return (
         <form onSubmit={this.handleSubmit}>
            <div>
               <label>
                  Username
            <input id="username" name="username" type="text"
                     value={username}
                     onChange={event => this.handleInputChange(event)}
                  />
               </label>
            </div>
            <div>
               <button type="submit">Log in</button>
            </div>
         </form>
      )
   }
}

export default LogIn