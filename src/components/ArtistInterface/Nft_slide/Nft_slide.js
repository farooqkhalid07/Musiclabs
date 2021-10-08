import React, { useState } from "react";
import { Col, Container, Row, Dropdown } from "react-bootstrap";
import { Modal, Button, } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faHeart, faPlay, faDotCircle, } from '@fortawesome/free-solid-svg-icons';
import MusicLayer from '../../../images/music-layers.svg';
import MusicGraph from '../../../images/music-graph.svg';
import Nft_slide_modal from '../Nft_slide_modal/Nft_slide_modal.js'
// import './Nft_slide.css';
import Pay_or_play_popup from "../Pay/PayOrPlayPopup";

function Nft_slide() {
    const [lgShows, setLgShows] = useState(false);
    const hideModels = () => { setLgShows(false) }

    return (
        <>
            <div className="slide-content">
                <div className="slide-head">
                    <span className="play-icon"><FontAwesomeIcon icon={faPlayCircle} /></span>
                    <h3>House of cards</h3>
                </div>
                <div className="d-flex justify-content-between  client-details">
                    <h5 className="client-name">Alexander Stewart</h5>
                    <div className="d-flex icons-row">
                        <div className="like">
                            <FontAwesomeIcon icon={faHeart} />
                            <span>2K</span>
                        </div>
                        <div className="view">
                            <FontAwesomeIcon icon={faPlay} />
                            <span>1M</span>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-between slide-bottom">
                    <div className="subtract">
                        <span><FontAwesomeIcon icon={faDotCircle} /></span>
                        <span>8 / 10</span>
                    </div>
                    <div className="button-aligns d-flex">
                        
                        <button type="button" className="btn btn-theme d-flex bg-gradient-green" >
                        See details
                        </button>
                    </div>
                </div>

            </div>
            <div className="modal-wrapper">
                <Pay_or_play_popup hideModel={hideModels} lgShows={lgShows} />
            </div>
               
            
        </>
    )
}
export default Nft_slide;