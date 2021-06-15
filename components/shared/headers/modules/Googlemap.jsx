import React, { Component } from 'react';
import Map from  './Map'; 

class Googlemap extends Component {
	constructor( props ){
			super( props );
			this.state = {
				lat: 0.0,
				lng: 0.0,
				visibility: false,
				height: '0px'
			}
			this.child = React.createRef();
			this.setcurrent = this.setcurrent.bind(this);
		}

	   setcurrent = (evt) => {
		evt.preventDefault();
		navigator.geolocation.getCurrentPosition((position) => {
	
		  localStorage.setItem('latitude', position.coords.latitude);
		  localStorage.setItem('longitude', position.coords.longitude);
		  console.log("current Latitude is :", localStorage.getItem('latitude'));
		  console.log("current Longitude is :",localStorage.getItem('longitude'));
		  this.child.current.getCurrentLocation(position.coords.latitude,position.coords.longitude); 
		  this.setState({
				lat: position.coords.latitude,
				lng: position.coords.longitude,
				visibility: true,
				height: '130px'
			});
		
		  console.log(this.state);
		});
	   }
	render() {
		
		return(
			<div style={{ margin: '100px' }}>
				<Map
				     ref={this.child}
					google={this.props.google}
					center={{lat: this.state.lat, lng: this.state.lng}}
					height={this.state.height}
					zoom={15}
					visibility={this.state.visibility}
					
				/>
				 <p> <button onClick={(e) => this.setcurrent(e)}>Use Current Location</button>
                  </p> 
			</div>
		)
	}
}

export default Googlemap;