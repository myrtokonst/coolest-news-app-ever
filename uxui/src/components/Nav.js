import React, { PureComponent } from 'react';

class Nav extends PureComponent {

   state = {
      isLoading: false,
      search: '',
   }

   render() {
      return (
         <img src={require('../LogoMakr_0bes0T.png')} alt='logo' /> )
   }

}

export default Nav