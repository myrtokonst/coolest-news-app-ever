import React, { PureComponent } from 'react';
import Tag from './Tag'
import '../styling/button.css'

class Profile extends PureComponent {
   state = {
      cats: [],
      selectedCats: [],
      newCat: '',
   }

   getCats = () => {
      return fetch('http://localhost:3000/cats')
         .then(resp => resp.json())
         .then(cats => this.setState({ cats }))
   }

   componentDidMount() {
      this.getCats()
   }

   addCategory = (cat) => {
      if (cat.id === undefined) { cat.id = this.state.cats.length + 1 }
      this.setState({
         selectedCats: [...this.state.selectedCats, cat],
         // cats: [...this.state.cats, cat]
      })

   }

   saveCats = () =>
      fetch('http://localhost:3000/cats', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(this.state.selectedCats)
      })
         .then(() => { this.props.history.push('/') })
         .catch(error => alert(error))

   handleCat = (event) => {
      this.setState({ newCat: event.target.value })
   }

   render() {
      return (
         <React.Fragment>
            <h1>Your categories</h1>
            {this.state.selectedCats.map(cat =>
               <Tag
                  key={cat.id}
                  cat={cat}
                  addCategory={() => this.addCategory(cat)} />
            )}
            <h1>Pick your interests!</h1>
            <div>
               {this.state.cats.map(cat =>
                  <Tag
                     key={cat.id}
                     cat={cat}
                     addCategory={() => this.addCategory(cat)} />)}
            </div>
            <label>Add your own: </label>
            <input type="text" name="cat" value={this.state.newCat} onChange={(event) => this.handleCat(event)} />
            <button onClick={() => this.addCategory({ name: this.state.newCat })}>Add me!</button>
            <button onClick={this.saveCats}>News</button>
         </React.Fragment>
      )
   }
}

export default Profile