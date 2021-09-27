import React from "react";
import { Col } from "react-bootstrap";
import MusicImg from '../../images/music-img.png'
import './MusicBox.css'

function MusicBox(){
    return(
        <Col md={4}>
            <div className="music-box mt-3">
                <img src={MusicImg} className="img-fluid" />
                <div className="music-content ms-2">
                    <h6>House of cards</h6>
                    <span>Alexander Stewart</span>
                </div>
            </div>
        </Col>
    )
}

export default MusicBox;