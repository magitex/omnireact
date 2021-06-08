import React, { Component } from 'react';
import LocationSearchInputFun from  '~/components/shared/headers/modules/LocationSearchInputFun'; 

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
         <LocationSearchInputFun />
         
        </div>

    )
  } 
}


export default SearchLocationInput;