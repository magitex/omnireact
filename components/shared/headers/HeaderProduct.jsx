import React,  {useEffect,useState} from 'react';
import MenuCategories from '~/components/shared/headers/modules/MenuCategories';
import SearchHeader from '~/components/shared/headers/modules/SearchHeader';
import HeaderActions from '~/components/shared/headers/modules/HeaderActions';
import NavigationDefault from '~/components/shared/navigation/NavigationDefault';
import ProductOnHeader from '~/components/elements/products/ProductOnHeader';
import { stickyHeader } from '~/utilities/common-helpers';
import Link from 'next/link';
import Logo from '~/components/elements/common/Logo';
import Hyperlocation from '~/components/shared/headers/modules/Hyperlocation';
const HeaderProduct = ({ product }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [address, setaddress] = useState(false);
    const [deliverymethod, setdeliverymethod] = useState(false);
        const requestOptions = {
        headers: ('Access-Control-Allow-Origin: *')
    };
    const togglePopup = () => {
        setIsOpen(!isOpen);
      }
    async function getcurrentaddress() {
        setdeliverymethod(localStorage.getItem('deliverymethod'));
      var obj = "latlng=" + localStorage.getItem('latitude') + "," + localStorage.getItem('longitude');

      let _fire = fetch('https://maps.googleapis.com/maps/api/geocode/json?' + obj + '&key=AIzaSyDPgRKAUNl2uKfGyLSxfcXLKS2hT0v3h7Y'
      )
      return _fire.then((resp) => {
        return resp.json().then((res) => {
         setaddress(res.results[0].formatted_address)
          
        })
      }).catch(error => {
        

      })
    }
    useEffect(() => {
        if (process.browser) {
            window.addEventListener('scroll', stickyHeader);
        }
        getcurrentaddress();
    }, []);
    let delivery;
    let fulladdress;
    let addresstype='';
    fulladdress=address;
    if(deliverymethod==1)
    {
        delivery='Pickup From';
        if (typeof window !== 'undefined')
{
        if (window.localStorage.getItem('storename') !== null)
        {
        fulladdress=localStorage.getItem('storename') + ', ' + localStorage.getItem('storeaddress');
        }
    }
    }
    else{
        if (typeof window !== 'undefined')
{
        if (window.localStorage.getItem('city') !== null)
        {
            fulladdress=localStorage.getItem('address') + ', ' + localStorage.getItem('state') + ', ' + localStorage.getItem('city');
        
            addresstype=localStorage.getItem('addresstype');
        }
    }
        delivery='Deliverying To ' + addresstype ; 
    }
    return (
        <header
            className="header header--1 header--product"
            data-sticky="true"
            id="headerSticky">
            <div className="header__top">
                <div className="ps-container">
                    <div className="header__left">
                        <Logo />
                        <div className="menu--product-categories">
                            <div className="menu__toggle">
                                <i className="icon-menu"></i>
                                <span> Shop by Department</span>
                            </div>
                            <div className="menu__content">
                                <MenuCategories />
                            </div>
                        </div>
                    </div>
                    <div className="header__center">
                        <SearchHeader />
                        
                    </div>
                    <div className="header__center">

<a className="address_holder" onClick={togglePopup}>
{delivery},
<br/>    
{fulladdress}
</a>


{isOpen && <Hyperlocation
content={<>
<b>Design your Popup</b>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<button>Test button</button>
</>}
handleClose={togglePopup}
/>}


</div>
                    <div className="header__right">
                        <HeaderActions />
                    </div>
                </div>
            </div>
            <NavigationDefault />
            <nav className="navigation navigation--product">
                <div className="container">
                    <ProductOnHeader product={product} />
                </div>
            </nav>
        </header>
    );
};
export default HeaderProduct;
