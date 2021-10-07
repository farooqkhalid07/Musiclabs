import React, { useState } from "react";
import { Col, Container, Row, Dropdown } from "react-bootstrap";
import { Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faDotCircle, faTimes, faPause } from '@fortawesome/free-solid-svg-icons';
import PayPlayBg from '../../images/Pay-play-bg.png';
import { Link, useHistory } from "react-router-dom";



function Pay_or_play_popup(props) {
    // const [lgShow, setLgShow] = useState(false);

    // const hideModel = () => { setLgShow(false) }
    return (
        <>
            <Modal
                className="house-of-cards dark-popup"
                show={props.lgShows}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Body>
                    <Row>
                        <Col className="mobile-hide">
                            <div className="left-side-constent text-center">
                               <img className="img-fluid" src={PayPlayBg} />
                            </div>
                        </Col>
                        <Col>
                            <div className="pay-or-play-mobile-bg right-side-content text-center">
                                <div className="cross-btn float-end" onClick={() => props.hideModel()}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </div>
                                <h1 className="title pay-title">Pay<br/> or play</h1>
                                <p>
                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                    Velit officia consequat duis enim velit mollit. 
                                    Exercitation veniam consequat sunt nostrud amet.
                                </p>

                                <div className="buttons">
                                    <button className="btn btn-theme bg-gradient mb-3 mt-4"><Link to="/singer-details">Start to play - Free</Link></button>
                                    <span className="d-block">Or</span>
                                    <button className="btn btn-theme ethereum-icon d-flex bg-gray m-auto mt-3">0,09 ETH</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
            {/* <div className="modal-wrapper">
                <Nft_slide_modal hideModel={hideModel} lgShow={lgShow} />
            </div> */}
        </>
    )
}
export default Pay_or_play_popup;