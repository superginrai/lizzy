import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import LocationSearchInput from '../LocationSearchInput/LocationSearchInput';

export class MapContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {

    };
}

  render() {
    return (
      <div>
      <Map google={this.props.google} zoom={14}
      initialCenter={{ lat: 44.805870, lng: -93.608780 }}>
        
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              {/* <h1>{this.state.selectedPlace.name}</h1> */}
            </div>
        </InfoWindow>
      </Map>
      <LocationSearchInput></LocationSearchInput>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDFYDfN3cmij0aoznnGRGZb35VMEo4vW6w')
})(MapContainer)