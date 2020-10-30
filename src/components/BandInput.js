// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  constructor(){
    super()
    this.state = {
      name: ""
    }
  }

  handleOnChange = (e) => {
    this.setState({name: e.target.value})
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    const band = {name: this.state.name};
    this.props.addBand(band);
    this.setState({name: ""});
  }
  
  render() {
    return(
      <div>
        Band Input
        <form onSubmit={event => this.handleOnSubmit(event)} >
          <input type="text" value={this.state.name} onChange={event => this.handleOnChange(event)}/>
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}

export default BandInput
