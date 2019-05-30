import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'

class Nav extends PureComponent {

   state = {
      isLoading: false,
      search: '',
   }

   debug =  () => {
      debugger
   }
   render() {
      return (
         <div>
            <Link to='/news'><img src={require('../styling/logo.png')} alt='logo' /></Link>
            <Link to='/news'>News | </Link>
            <Link to='/profile' onClick={this.debug} >Profile</Link>
         </div>

      )
   }

}

export default Nav