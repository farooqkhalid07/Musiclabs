import React, { useState } from "react";
import music_img from '../../../images/music_item.png';
// import './Trending_slide.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faHeart, faPlay, faDotCircle } from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from "react-router-dom";
import Nft_slide_modal from '../Nft_slide_modal/Nft_slide_modal.js';
import CartPopup from "../Cart/CartPopup";


function Trending_slide() {
    const [lgShow, setLgShow] = useState(false);
    const [smShows, setsmShows] = useState(false);

    const hideModel = () => { setLgShow(false) };
    const hideModel1 = () => { setsmShows(false) };

    return (
        <>
            <div className="music-content d-flex">
                <div className="music">
                    <img onClick={() => setLgShow(true)} className="img-fluid" src={music_img} />
                </div>
                <div className="music-details">
                    <div className="music-head d-flex">
                        <div className="music-title">
                            <h3 className="font-normal"><span>Esteban</span> bought one copy of House of Flies for <span>0,0098 ETH</span></h3>
                        </div>
                    </div>
                    <div className="d-flex icons-row">
                        <button type="button" className="btn btn-theme d-flex bg-gradient-green" onClick={() => setsmShows(true)}>
                            Transation detail
                        </button>

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