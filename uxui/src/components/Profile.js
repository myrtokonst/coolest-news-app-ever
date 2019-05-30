import React, { PureComponent } from 'react';
import Tag from './Tag'
import '../styling/button.css'

class Profile extends PureComponent {
   state = {
      cats: [],
      selectedCats: [],
      newCat: '',
   }

   componentDidMount() {
      const { existingCats } = this.props
      this.getCats().then(cats => {
         this.setState({ cats })
      })
      if (existingCats != undefined) { this.setState({ selectedCats: existingCats }) }
   }

   getCats = () => fetch('http://localhost:3000/cats')
      .then(resp => resp.json())

   removeCatFromCats = cat =>
      this.state.cats.filter(filterCat => filterCat != cat)

   addCategory = (cat) => {
      const { selectedCats } = this.state
      this.saveCats(cat).then((cat) => {
         this.setState({
            cats: this.removeCatFromCats(cat),
            selectedCats: [...selectedCats, cat]
         })
      })
   }

   saveCats = cat =>
      fetch('http://localhost:3000/cats', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            id: this.props.id,
            cats: cat
         })
      }).then(r => r.json())

   handleCat = (event) => {
      this.setState({ newCat: event.target.value })
   }

   render() {
      const { cats, selectedCats } = this.state
      return (
         <React.Fragment>
            <h2>Current interests</h2>
            <div>
               {selectedCats != undefined && selectedCats.map(cat =>
                  <Tag
                     key={cat.id}
                     cat={cat}
                     addCategory={() => this.props.tryToFilter(cat)}
                  />
               )}
            </div>

            <h2>What interests you?</h2>
            <div>
               {cats != undefined && cats.map(cat =>
                  <Tag
                     key={cat.id}
                     cat={cat}
                     addCategory={() => this.addCategory(cat)} />)}
            </div>
            <div className='ui form'>
               <input
                  className='field'
                  placeholder='your interest'
                  type="text"
                  value={this.state.newCat}
                  onChange={(event) => this.handleCat(event)} />
               <button
                  className='ui button'
                  onClick={() => this.addCategory({ name: this.state.newCat })}
               >Add</button>
               <button
                  className='ui button'
                  onClick={this.props.getNews}>News
               </button>
            </div>
         </React.Fragment>
      )
   }
}

export default Profile