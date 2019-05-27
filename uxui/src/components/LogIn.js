import React, {Component} from 'react'

class LogIn extends Component {
    state = {
     user: {
      username: '',
      last_login: ''   
     }
    }
     
    handleInputChange = (event) => {
    this.setState({
        user: { ...this.state.user,
      username: event.target.value}
    })
  }
    
  handleSubmit = (event) =>  {
      event.preventDefault()
    const time = Date.now()
        this.setState({user: {
             ...this.state.user,
            last_login: time}
        })
    }

 render(){ 
    let { user } = this.state
    let { username, last_login } = user
    return(  
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
  )}
}

export default LogIn