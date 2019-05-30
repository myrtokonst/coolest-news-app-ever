import React, { PureComponent } from 'react';
import { Icon, Label } from 'semantic-ui-react'
import './Profile.css'

class Profile extends PureComponent {
   state = {
      cats: [],
      selectedCats: [],
      newCat: ''
   }

   getCats = () => {
      return fetch('http://localhost:3000/cats')
      .then(resp => resp.json())
      .then(cats => this.setState({cats}))
   }

   componentDidMount() {
      this.getCats()
   }

   addCat = (cat) => {
      this.setState({selectedCats: [...this.state.selectedCats, cat]})
       
   }

   saveCats = () => {
      fetch('http://localhost:3000/cats', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(this.state.selectedCats)
      })
      .then(resp => resp.json()).then(data => this.props.updateNews(data))
      
   }

   handleCat = (event) => {
      this.setState({newCat: event.target.value})
   }

   render() {
      return (
         <div>
         <h1>Pick your interests!</h1>
            {this.state.cats.map(cat => !this.state.selectedCats.includes(cat)  
               && <Label as='a' key ={cat.id} onClick={e => this.addCat(cat)}>
                  <div>{cat.name}</div>
               </Label>
            )}
            <label>
               Add your own:
               <input type="text" name="cat" value={this.state.newCat} onChange={(event) => this.handleCat(event)} />
               <button onClick={() => this.addCat({name: this.state.newCat})}>Add me!</button>
            </label>
            <button onClick={this.saveCats}> Seeeend me to the moooon</button>
         </div>
      )
   }
}

export default Profile