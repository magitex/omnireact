import React , {useState} from 'react'
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
        setLatLng(yarn );
    };
    
    const handleSelect = (address) => {
        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then(latLng => { setAddress(address); setLatLng(latLng);console.log('Success', latLng)})
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
