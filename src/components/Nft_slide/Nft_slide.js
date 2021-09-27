import React, { useState } from "react";
import { Col, Container, Row, Dropdown } from "react-bootstrap";
import { Modal, Button, } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faHeart, faPlay, faDotCircle, faTimes, faPause } from '@fortawesome/free-solid-svg-icons';
import MusicLayer from '../../images/music-layers.svg';
import MusicGraph from '../../images/music-graph.svg';
import Nft_slide_modal from '../Nft_slide_modal/Nft_slide_modal.js'
import './Nft_slide.css';

function Nft_slide() {
    const [lgShow, setLgShow] = useState(false);

    const hideModel = () => { setLgShow(false) }

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
                        <button type="button" className="btn btn-theme ethereum-icon d-flex bg-gray" onClick={() => setLgShow(true)}>
                            Free - Play
                        </button>
                        <button type="button" className="btn btn-theme ethereum-icon d-flex bg-gradient">
                            0,09 ETH
                        </button>
                    </div>
                </div>

            </div>
            <div className="modal-wrapper">
                <Nft_slide_modal hideModel={hideModel} lgShow={lgShow} />
                </div>
            
        </>
    )
}
export default Nft_slide;