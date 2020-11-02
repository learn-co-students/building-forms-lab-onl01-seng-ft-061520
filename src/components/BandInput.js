// Add BandInput component
import React, { Component } from 'react';

class BandInput extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: '',
    })
  }

  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.name}
            name="name"
            onChange={this.handleChange}
          />
          <button type="submit">Add Band</button>
        </form>
      </div>
    )
  }
}

export default BandInput;
