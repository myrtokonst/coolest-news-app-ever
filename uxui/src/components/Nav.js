import React, { PureComponent } from 'react';

class Nav extends PureComponent {

   state = {
      isLoading: false,
      search: '',
   }

   render() {
      return (
         <img src={require('../styling/logo.png')} alt='logo' />)
   }

}

export default Nav