import React, { Component } from 'react';
import { GoogleComponent } from  '~/components/shared/headers/modules/GoogleComponent'; 

const API_KEY = 'AIzaSyDPgRKAUNl2uKfGyLSxfcXLKS2hT0v3h7Y'  // how to get key - step are below

class SearchLocationInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      place: null,
    };
  }

  render() {
    return (
      <div >
         <GoogleComponent
         
          apiKey={API_KEY}
          language={'en'}
          country={'country:in'}
          coordinates={true}
          currentCoordinates={{
            "lat": localStorage.getItem('latitude'),
            "lng": localStorage.getItem('longitude')
          }}
          placeholder={'Start typing location'}
          locationBoxStyle={'custom-style'}
          locationListStyle={'custom-style-list'}
          onChange={(e) => { this.setState({ place: e }) }} />
      </div>

    )
  } 
}


export default SearchLocationInput;