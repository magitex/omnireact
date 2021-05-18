import React from "react";

const Hyperlocation = props => {
  const setdelivery = (item) => {
    console.log('deliverymethod', item);
    localStorage.setItem('deliverymethod', item);
  }
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
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
    </div>
  );
};

export default Hyperlocation;