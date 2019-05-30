import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'

class Nav extends PureComponent {

   state = {
      isLoading: false,
      search: '',
   }

   render() {
      return (
         <div>

            <Link to='/news'>News | </Link>
            <Link to='/profile'>Profile</Link>
         </div>

      )
   }

}

export default Nav