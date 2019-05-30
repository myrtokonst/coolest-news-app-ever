import React, { PureComponent } from 'react'

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

   handleSubmitToAuth0 = (e) => {
      e.preventDefault()
      sendEmail(e.target.username.value)
   }

   render() {
      return (
         <form onSubmit={this.handleSubmit}>
            <div>
               <label>
                  Username
                <input
                     type="email"
                     value={this.state.username}
                     onChange={event => this.handleInputChange(event)}
                  />
               </label>
            </div>
            <div>
               <button type="submit" onClick={() => {
                  this.setState({ last_login: Date.now() })
               }}>Checkin</button>
            </div>
         </form>
      )
   }
}

export default Login