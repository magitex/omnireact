import React, {useEffect,useState} from 'react';
import SearchLocationInput from '~/components/shared/headers/modules/SearchLocationInput';
import Helper from '~/components/helpers/networks';
import {HomeContext} from '~/components/helpers/context';

const Hyperlocation = props => {
  const [address, setaddress] = useState([]);
  async function getaddress() {
       
    console.log("123 ",localStorage.getItem("token"));
    let data;
   
    const token=await Helper.getToken();
    //console.log("new token11",localStorage.getItem("token"));
    data= await Helper.dashboardData();
    console.log("new data",data);
     const tempaddress =data && data.data.data.userInfo.userAddress; 

    console.log("123 address>>",tempaddress)
     setaddress(tempaddress);

}

  const setdelivery = (item) => {
    console.log('deliverymethod', item);
    localStorage.setItem('deliverymethod', item);
  }
  const setlat = (lat,long) => {
    localStorage.setItem('latitude', lat);
    localStorage.setItem('longitude',long);
    window.location.href='/';
  }
  useEffect(() => {
    getaddress();
    
}, []);
  // Views
  let mainCarouselView;
  if (address) {
  // if (banners) {
      const carouseItems = address.map((item,key1) => (
          // <div className="slide-item" key={item.id}>
          <div className='slide-item'  key={key1+1} >
              
                  <a
                  href="#" onClick={() => setlat(item.endUserlatitude,item.endUserLongitude)}>{item.endUserDeliveraddress},{item.endUserStat},{item.endUserCity}</a>
                  
              
          </div>
      ));
      mainCarouselView=carouseItems;
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
    <SearchLocationInput />    <input
      type="button"
      value="Add Location"
     
    />
    <div ></div>
   {mainCarouselView}
      </div>
      
    </div>
  );
};

export default Hyperlocation;