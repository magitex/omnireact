import React, {useEffect,useState} from 'react';
import SearchLocationInput from '~/components/shared/headers/modules/SearchLocationInput';
import Helper from '~/components/helpers/networks';
import {HomeContext} from '~/components/helpers/context';

const Hyperlocation = props => {
  const [address, setaddress] = useState([]);
  const [storeinfo, setstoreinfo] = useState([]);
  const [storename, setstorename] = useState([]);
  const [userid, setuserid] = useState([]);
  async function getaddress() {
       
    console.log("123 ",localStorage.getItem("token"));
    let data;
   
    const token=await Helper.getToken();
    //console.log("new token11",localStorage.getItem("token"));
    data= await Helper.dashboardData();
    console.log("new data",data);
     const tempaddress =data && data.data.data.userInfo.userAddress; 
     const tempstoreadress =data && data.data.data.storeAddress; 
     const tempstorename =data && data.data.data.storeName; 
     localStorage.setItem('storename',tempstorename);
     localStorage.setItem('storeaddress',tempstoreadress);
    console.log("123 address>>",tempaddress);
     setaddress(tempaddress);
     setstoreinfo(tempstoreadress);
     setstorename(tempstorename);


}

  const setdelivery = (item) => {
    console.log('deliverymethod', item);
    localStorage.setItem('deliverymethod', item);
  }
  const setlat = (lat,long,address,state,city,addresstype) => {
    localStorage.setItem('latitude', lat);
    localStorage.setItem('longitude',long);
    localStorage.setItem('address',address);
    localStorage.setItem('state',state);
    localStorage.setItem('city',city);
    localStorage.setItem('addresstype',addresstype);
    console.log('new lat', localStorage.getItem('latitude'));
    console.log('new longitude', localStorage.getItem('longitude'));
    window.location.href='/';
  }
  
  useEffect(() => {
    getaddress();
    setuserid(window.localStorage.getItem('userID'));
    
}, []);
  // Views
  let mainCarouselView;
  if(userid !==null)
  {
  if (address) {
  // if (banners) {
      const carouseItems = address.map((item,key1) => (
          // <div className="slide-item" key={item.id}>
          <div className='slide-item'  key={key1+1} >
              
                  <a
                  href="#" onClick={() => setlat(item.endUserlatitude,item.endUserLongitude,item.endUserDeliveraddress,item.endUserStat,item.endUserCity,item.addressType)}>{item.endUserDeliveraddress},{item.endUserStat},{item.endUserCity}</a>
                  
              
          </div>
      ));
      mainCarouselView=carouseItems;
  }
}
else
{
  mainCarouselView='';
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
    
   {mainCarouselView}
      </div>
      
    </div>
  );
};

export default Hyperlocation;