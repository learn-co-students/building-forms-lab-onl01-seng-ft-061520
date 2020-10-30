import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';

class BandsContainer extends Component {

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        Bands:
        <ul>
          {this.props.bands.map((band, dex) => <li key={dex}>{band.name}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => 
({
  bands: state.bands
})

const addBand = (band) => ({
  type: 'ADD_BAND',
  band: band
})
export default connect(mapStateToProps, {addBand})(BandsContainer);
