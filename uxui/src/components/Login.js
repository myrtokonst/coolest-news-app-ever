import React, { PureComponent } from 'react'
import '../styling/button.css'
import '../styling/login.css'

class Login extends PureComponent {
   state = {
      username: '',
      last_login: 0
   }

   handleInputChange = (event) => {
      this.setState({
         username: event.target.value
      })
   }

   handleSubmit = (event) => {
      event.preventDefault()
      const { username, last_login } = this.state
      return fetch('http://localhost:3000/users', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            user: {
               username: username,
               last_login: last_login
            }
         })
      }
      ).then(resp => resp.json()).then(user => this.props.updateUser(user))
   }

   render() {
      return (
         <form onSubmit={this.handleSubmit} className='ui form'>
            <div className='field'>
               <input
                  placeholder='username'
                  type="email"
                  value={this.state.username}
                  onChange={event => this.handleInputChange(event)}
               />
            </div>
            <div>
               <button
                  className='ui button'
                  type="submit"
                  onClick={() => {
                     this.setState({ last_login: Date.now() })
                  }}>Checkin</button>
            </div>
         </form>
      )
   }
}

export default Login