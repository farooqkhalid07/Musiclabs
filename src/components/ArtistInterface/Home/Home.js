import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
// import './Home.css';
import Banner from '../Banner/Banner';
import Nft from '../NFT_Slider/Nft.js';
import Trending_slider from '../Trending/Trending_slider';
import ArtistOverview from "../ArtistOverview/ArtistOverview";
// import Footer from '../Footer/Footer.js';


function Home() {
   return (
      <div className="artist-dashboard">
         <Header />
         <div className="banner-section main-padding-top">

            <Banner />
            <ArtistOverview />
         </div>
         <div className="top-section">
            
            < Nft />
         </div>
         <div className="sec-bg-gradient">
            <Trending_slider />
            <div className="empty">
               <Trending_slider />
            </div>
         </div>

      </div>
   )
}
export default Home;