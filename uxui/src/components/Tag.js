import React, { PureComponent } from 'react';
import '../styling/button.css'

class Tag extends PureComponent {
   state = { selected: false }
   render() {
      return (
         <React.Fragment>
            {!this.state.selected
               ? <button
                  className='ui button'
                  key={this.props.cat.id}
                  onClick={() => {
                     this.props.addCategory()
                     this.setState({ selected: true })
                  }}
               >{this.props.cat.name}</button>
               : null}
         </React.Fragment>
      )
   }
}

export default Tag;