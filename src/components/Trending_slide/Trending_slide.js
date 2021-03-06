import React, { useState } from "react";
import music_img from '../../images/music_item.png';
import './Trending_slide.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlayCircle, faHeart, faPlay, faDotCircle } from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from "react-router-dom";
import Nft_slide_modal from '../Nft_slide_modal/Nft_slide_modal.js'; 
import CartPopup from "../Cart/CartPopup";


function Trending_slide(){
    const [lgShow, setLgShow] = useState(false);
    const [smShows, setsmShows] = useState(false);

    const hideModel = () => { setLgShow(false) };
    const hideModel1 = () => { setsmShows(false) };

    return(
        <>
         <div className="music-content d-flex">
             <div className="music">
                <img onClick={() => setLgShow(true)} className="img-fluid" src={music_img} />
             </div>
             <div className="music-details">
                <div className="music-head d-flex">
                    <div className="music-title">
                        <h3>NATOXIE Ft Lionel Nidaud - SHATTA...</h3>
                        <span>Alexander Stewart</span>
                    </div>
                    <button type="button" className="btn btn-theme ethereum-icon d-flex bg-gradient" onClick={() => setsmShows(true)}>
                            0,09 ETH
                    </button>
                </div>
                 <div className="d-flex icons-row">
                    <div className="like">
                        <FontAwesomeIcon icon={faHeart} />
                        <span>2K</span>
                    </div>
                    <div className="view">
                        <FontAwesomeIcon icon={faPlay} />
                        <span>1M</span>
                    </div>
                    <div className="subtract">
                        <span><FontAwesomeIcon icon={faDotCircle} /></span>
                        <span>8 / 10</span>
                    </div>
                    
                </div>
             </div>
            
         </div>
        <div className="modal-wrapper">
            <Nft_slide_modal hideModel={hideModel} lgShow={lgShow} />
            <CartPopup hideModel={hideModel1} smShows={smShows} />
        </div>
        </>           
    )
}

export default Trending_slide;