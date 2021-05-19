import React from "react";
import SearchLocationInput from '~/components/shared/headers/modules/SearchLocationInput';

const Hyperlocation = props => {
  const setdelivery = (item) => {
    console.log('deliverymethod', item);
    localStorage.setItem('deliverymethod', item);
  }
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
          <input
      type="button"
      value="Pickup from store"
      onClick={() => setdelivery(1)} 
    />
     <input
      type="button"
      value="Home Delivery"
      onClick={() => setdelivery(2)}
    />
    <SearchLocationInput />
    <div ></div>
      </div>
      
    </div>
  );
};

export default Hyperlocation;