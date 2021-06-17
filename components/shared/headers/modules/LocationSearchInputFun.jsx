import React , {useState} from 'react'
import Link from 'next/link';
import Router from 'next/router';

import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';
 
const initial = {
    lat: '',
    lng: ''
}
function LocationSearchInputFun() {
    const [address,setAddress] = useState('');
    const [latLng,setLatLng] = useState(initial);
    const handleChange = (address) => {
        setAddress(address);
    };
    const handleChangeLatLng = (latLngObj) => {
        setLatLng(latLngObj );
    };
    
    const handleSelect = (address) => {
        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then(latLng => { setAddress(address); setLatLng(latLng);
            localStorage.setItem('latitude', latLng.lat);
          localStorage.setItem('longitude', latLng.lng);
            console.log('Success', latLng);
            //Router.push('/');
            window.location.href='/';
          })
          .catch(error => {setLatLng({});console.error('Error', error)});
         
          
      };
      return (
        <PlacesAutocomplete
          value={address}
          onChange={handleChange}
          onSelect={handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: 'Search Places ...',
                  className: 'location-search-input',
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion,i) => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                  return (
                    <div
                      key={i}
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
              {/*<input type="text"  value={latLng.lat} onChange={handleChangeLatLng} placeholder="Latitude"/>
            <input type="text"  value={latLng.lng} onChange={handleChangeLatLng} placeholder="Longitude"/>*/}
            </div>
          )}
        </PlacesAutocomplete>
   
      );
}

export default LocationSearchInputFun
