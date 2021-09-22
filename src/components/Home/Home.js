import React  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from "react-bootstrap";
import Header from '../Header/Header';
import './Home.css';
import Banner from '../Banner/Banner';
import Nft from '../NFT_Slider/Nft.js';
// import Footer from '../Footer/Footer.js';


function Home(){
    return(
        <React.Fragment>
             <div className="banner-section">
                <Header/>
                <Banner/>
             </div>
             <Nft/>
        </React.Fragment>
    )
}
export default Home;