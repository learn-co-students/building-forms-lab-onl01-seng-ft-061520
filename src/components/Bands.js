import React, { Component } from 'react'

export default class Bands extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.bands.map(band => {
            return (<li>{band.name}</li>)
          })}
        </ul>
      </div>
    )
  }
}
