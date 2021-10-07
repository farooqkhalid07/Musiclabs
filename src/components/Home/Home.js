import React  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import './Home.css';
import Banner from '../Banner/Banner';
import Nft from '../NFT_Slider/Nft.js';
import Trending_slider from '../Trending/Trending_slider';
import Golden_West from "../Golden_West/Golden_West";
import HouseOfCard from "../HouseOfCard/HouseOfCard";
// import Footer from '../Footer/Footer.js';


function Home(){
    return(
        <React.Fragment>
             <div className="banner-section">
                <Header/>
                <Banner/>
             </div>
             <div className="top-section">
             <  Nft/>
             </div>
             <div className="sec-bg-gradient">
                <Trending_slider/>
                <Golden_West/>
             </div>
                <Trending_slider/>
             
        </React.Fragment>
    )
}
export default Home;