import React, { PureComponent } from 'react';

class Nav extends PureComponent {

   state = {
      isLoading: false,
      search: '',
   }

   handleSearch = () => {
      this.props.getNews(this.state.search)
   }

   handleSearchChange = search => {
      this.setState({ isLoading: true, search })
      setTimeout(() => {
         if (search.length < 1) return this.setState({ search: '' })
         this.setState({
            isLoading: false,
            search
         })
      }, 200)
   }

   render() {
      const { search } = this.state
      const { handleSearch, handleSearchChange } = this
      return (
         <React.Fragment>
            <input
               value={search}
               placeholder='topic'
               onChange={(e) => handleSearchChange(e.target.value)}
            // onKeyDown={(e) => e.which === 13 && handleSearch}
            />
            <button onClick={handleSearch}>Search</button>
         </React.Fragment>
      )
   }

}

export default Nav