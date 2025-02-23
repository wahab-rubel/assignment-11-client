import React from 'react';
import Banner from '../../components/Banner';
import Map from '../../components/Map';
import FeaturedRooms from '../../components/FeaturedRooms';
import SpecialOffers from '../../pages/SpecialOffers/SpecialOffers'


const Home = () => {
 return (
  <div>
   <Banner></Banner>
   <FeaturedRooms></FeaturedRooms>
   <SpecialOffers></SpecialOffers>
   <Map></Map>
  </div>
 );
};

export default Home;