import React from "react";
import music_img from '../../images/music_item.png';
import './Trending_slide.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlayCircle, faHeart, faPlay, faDotCircle } from '@fortawesome/free-solid-svg-icons';

function Trending_slide(){
    return(
         <div className="music-content d-flex">
             <div className="music">
                <img className="img-fluid" src={music_img} />
             </div>
             <div className="music-details">
                 <h3>NATOXIE Ft Lionel Nidaud - SHATTA...</h3>
                 <span>Alexander Stewart</span>
                 <div className="d-flex icons-row">
                    <div className="like">
                        <FontAwesomeIcon icon={faHeart} />
                        <span>2K</span>
                    </div>
                    <div className="view">
                        <FontAwesomeIcon icon={faPlay} />
                        <span>1M</span>
                    </div>
                    <div className="view">
                        <FontAwesomeIcon icon={faPlay} />
                        <span>1M</span>
                    </div>
                    <div className="button">
                        <button type="button" className="btn btn-theme ethereum-icon d-flex bg-gradient">
                                0,09 ETH
                        </button>
                    </div>
                </div>
             </div>
             
         </div>
    )
}

export default Trending_slide;