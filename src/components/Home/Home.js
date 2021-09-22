import React  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from "react-bootstrap";
import Header from '../Header/Header';
import './Home.css';
import Banner from '../Banner/Banner';
import Nft from '../NFT_Slider/Nft.js';
import Trending_slider from '../Trending/Trending_slider';
import Golden_West from "../Golden_West/Golden_West";
// import Footer from '../Footer/Footer.js';


function Home(){
    return(
        <React.Fragment>
             <div className="banner-section">
                <Header/>
                <Banner/>
             </div>
             <Nft/>
             <Trending_slider/>
             <Golden_West/>
        </React.Fragment>
    )
}
export default Home;