import React, { Component } from 'react';
import Googlemap from  '~/components/shared/headers/modules/Googlemap'; 
import LocationSearchInputFun from  '~/components/shared/headers/modules/LocationSearchInputFun'; 
const API_KEY = 'AIzaSyDPgRKAUNl2uKfGyLSxfcXLKS2hT0v3h7Y'  // how to get key - step are below

class SearchLocationInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      place: null,
      userid: window.localStorage.getItem('userID'),
    };
    console.log( 'newuserID', localStorage.getItem('userID'));
  }
   setcurrent = () => {
    navigator.geolocation.getCurrentPosition(function(position) {
      localStorage.setItem('latitude', position.coords.latitude);
          localStorage.setItem('longitude', position.coords.longitude);
      console.log("current Latitude is :", localStorage.getItem('latitude'));
      console.log("current Longitude is :",localStorage.getItem('longitude'));
    });
    window.location.href='/';
    //Router.push('/');
  }
  render() {
    let mapstruc;
    console.log( 'newuserID11', this.state.userid);

    if(this.state.userid !==null)
    {
      mapstruc=<div >
      <Googlemap />
         
        
       </div>
      
    }
    else
  {
    mapstruc=<div>
      
    <LocationSearchInputFun />
    <p> <a
                href="#" onClick={() =>this.setcurrent()}>Use Current Location</a>
                </p>
      </div>
    
  }
  return( mapstruc ) 
   
  } 
}


export default SearchLocationInput;