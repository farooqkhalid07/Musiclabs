import React from "react";
import { Col, Container, Row, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlayCircle} from '@fortawesome/free-solid-svg-icons';
import './Nft_slide.css';

function Nft_slide(){
    return(
        <div className="slide-content">
            <FontAwesomeIcon icon={faPlayCircle}/>
            <h3>House of cards</h3>
            <span>Alexander Stewart</span>
            <div className="d-flex">
                <span></span>
            </div>
        </div>
    )
}
export default Nft_slide;