import React, { useEffect,createContext,useState } from 'react';
import SiteFeatures from '~/components/partials/homepage/home-default/SiteFeatures';
import HomeAdsColumns from '~/components/partials/homepage/home-default/HomeAdsColumns';
import HomeAds from '~/components/partials/homepage/home-default/HomeAds';
import DownLoadApp from '~/components/partials/commons/DownLoadApp';
import NewArrivals from '~/components/partials/homepage/home-default/NewArrivals';
import Newletters from '~/components/partials/commons/Newletters';
import HomeDefaultDealOfDay from '~/components/partials/homepage/home-default/HomeDefaultDealOfDay';
import HomeDefaultTopCategories from '~/components/partials/homepage/home-default/HomeDefaultTopCategories';
import ContainerHomeDefault from '~/components/layouts/ContainerHomeDefault';
import HomeDefaultProductListing from '~/components/partials/homepage/home-default/HomeDefaultProductListing';
import HomeDefaultBanner from '~/components/partials/homepage/home-default/HomeDefaultBanner';
import HomeDefaultCategories from '~/components/partials/homepage/home-default/HomeDefaultCategories';
import HomeDefaultOffer from '~/components/partials/homepage/home-default/HomeDefaultOffer';
import HomeDefaultTopBrands from '~/components/partials/homepage/home-default/HomeDefaultTopBrands';
import Helper from '~/components/helpers/networks';
import {HomeContext} from '~/components/helpers/context';

const HomepageDefaultPage = () => {
    const [banners, setBanners] = useState([]);
    const [prodcategories, setProdCategories] = useState([]);
    const [offers, setoffers] = useState([]);

    async function getBannerItems() {
       
        console.log("123 ",localStorage.getItem("token"));
        let data;
        if(localStorage.getItem("token")!==null){
            data =await Helper.dashboardData()
        console.log("setp1",localStorage.getItem("token"),);
        }else{
            const token=await Helper.getToken();
            // setTimeout(async()=>{
if(token)
   data= await Helper.dashboardData();

            // },1000)
        }
        // console.log("123 token",data);
        const tempBanners =data && data.data.data.dashboardPanel.banners; 
        const tempProdCategories =data && data.data.data.dashboardPanel.productCategories; 
        const tempoffers =data && data.data.data.dashboardPanel.offers;
        console.log("123 banners>>",tempoffers)
        setBanners(tempBanners);
        setProdCategories(tempProdCategories);
        setoffers(tempoffers);
    }

    useEffect(()=>{ 
             getBannerItems();
    },[])
    console.log("123 get",banners)
    return (
        <HomeContext.Provider
        value={{
            banners,
            prodcategories,
            offers
        }}
        >
        <ContainerHomeDefault title="Multipurpose Marketplace React Ecommerce Template">
            <HomeDefaultBanner />  
            <HomeDefaultOffer collectionSlug="deal-of-the-day" />          
            <HomeDefaultDealOfDay collectionSlug="deal-of-the-day" />
            <HomeDefaultTopBrands />             
            <HomeDefaultProductListing
                collectionSlug="consumer-electronics"
                title="TrendingItems"
            />
            <HomeDefaultCategories />
			 <SiteFeatures />  
             <Newletters />
        </ContainerHomeDefault>
        </HomeContext.Provider>
    );
};

export default HomepageDefaultPage;
