// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  constructor(){
    super();
    this.state = {
      name: ''
    }
  }

    handleChange(event) {
      this.setState({
        name: event.target.value,
      });
    }
  
    handleSubmit(event) {
      event.preventDefault();
      this.props.addBand(this.state);
      this.setState({
        name: '',
      });
    }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
        <input type='text' onChange={(event) => this.handleChange(event)} value={this.state.name} name='name' />
        <input type='submit' value='Add Band' />
        </form>
      </div>
    )
  }
}

export default BandInput
