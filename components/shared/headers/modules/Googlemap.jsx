import React, { Component } from 'react';
import Map from  '~/components/shared/headers/modules/Map'; 

class Googlemap extends Component {

	render() {
		return(
			<div style={{ margin: '100px' }}>
				<Map
					google={this.props.google}
					center={{lat: 18.5204, lng: 73.8567}}
					height='300px'
					zoom={15}
					visibility={false}
				/>
			</div>
		)
	}
}

export default Googlemap;