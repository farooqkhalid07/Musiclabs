import React from "react";
import { Col, Container, Row, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlayCircle, faHeart, faPlay} from '@fortawesome/free-solid-svg-icons';
import './Nft_slide.css';

function Nft_slide(){
    return(
        <div className="slide-content">
            <div className="slide-head">
                <span className="play-icon"><FontAwesomeIcon icon={faPlayCircle}/></span>
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
                    <span><FontAwesomeIcon icon={faPlay} /></span>
                    <span>8 / 10</span>
                </div>
            </div>

        </div>
    )
}
export default Nft_slide;