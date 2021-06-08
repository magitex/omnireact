import React, { Component } from 'react';
import Googlemap from  '~/components/shared/headers/modules/Googlemap'; 

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
          <Googlemap />
         
        </div>

    )
  } 
}


export default SearchLocationInput;