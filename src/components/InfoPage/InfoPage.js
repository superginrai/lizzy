import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import LocationSearchInput from '../LocationSearchInput/LocationSearchInput';

export class MapContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  mapClicked(mapProps, map, clickEvent) {
    console.log('clicked a Smap!')
  };

  onMouseoverMarker(props, marker, e) {
    console.log('oh look is Chaska')
  };

  render() {
    return (
      <div>
        <Map google={this.props.google} zoom={14}
          style={{ height: '634px', width: '1140px', position: 'absolute', top: '50px' }}
          // style={{width: '100%', height: '100%', position: 'relative', top: '50px'}}
          initialCenter={{ lat: 44.805870, lng: -93.608780 }}
          onClick={this.OnMapClicked} >

          <Marker onClick={this.onMarkerClick}
            //onMouseover={this.onMouseoverMarker}
            name={'Home'} />

          <InfoWindow
            //onClose={this.onInfoWindowClose}
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
          <LocationSearchInput></LocationSearchInput>
        </Map>

      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDFYDfN3cmij0aoznnGRGZb35VMEo4vW6w')
})(MapContainer)