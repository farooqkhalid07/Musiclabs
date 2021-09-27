import React, { useState } from "react";
import { Col, Container, Row, Dropdown } from "react-bootstrap";
import { Modal, Button, } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faHeart, faPlay, faDotCircle, faTimes, faPause } from '@fortawesome/free-solid-svg-icons';
import MusicLayer from '../../images/music-layers.svg';
import MusicGraph from '../../images/music-graph.svg';
import './Nft_slide_modal.css';

function Nft_slide_modal(props) {
    // console.log(props);
    // const [lgShow, setLgShow] = useState(props.lgShow);

    

//   const handleClose = () => setLgShow(false);
//   const handleShow = () => setLgShow(true);
    return (
        <>
            
            <Modal
                className="house-of-cards dark-popup"
                // size="xl"
                show={props.lgShow}
                // onHide={() => setShowFromChild(!props.lgShow)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Body>
                    <Row>
                        <Col md={7}>
                            <div className="left-side-content text-center">
                                <h2 className="title">House of <br />cards</h2>
                                <span className="singer-name d-block">Alexander Stewart</span>
                                <div className="media-icons"><FontAwesomeIcon icon={faPause} /></div>
                                <div className="layers">
                                    <img className="img-fluid layers-img" src={MusicLayer} />
                                </div>
                                <p className="time-duration d-block">0:34 / 3:45</p>
                                <div className="category">
                                    <div className="subtract pr-3">
                                        <span><FontAwesomeIcon icon={faDotCircle} /></span>
                                        <span>987</span>
                                    </div>
                                    <button type="button" className="btn btn-theme bg-gradient ethereum-icon d-flex">
                                        0,09 ETH
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col md={5}>
                            <div className="right-side-content">
                                <div className="cross-btn float-end" onClick={() => props.hideModel()}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </div>
                                <div className="scroll">
                                    <div className="d-flex justify-content-between w-100">
                                        <div className="content-box">
                                            <span>Value delta</span>
                                            <h6>-76%</h6>
                                        </div>
                                        <div className="content-box">
                                            <span>Buying pace</span>
                                            <h6>2 per day</h6>
                                        </div>
                                        <div className="content-box">
                                            <span>Available since</span>
                                            <h6>2 months</h6>
                                        </div>
                                    </div>
                                    <div className="graph pt-3 pb-2">
                                        <img className="img-fluid" src={MusicGraph} />
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span>19/06</span>
                                        <span>26/06</span>
                                        <span>3/07</span>
                                        <span>10/07</span>
                                        <span>17/07</span>
                                        <span>24/07</span>
                                        <span>1/08</span>
                                        <span>8/08</span>
                                        <span>15/08</span>
                                        <span>22/08</span>
                                    </div>
                                    <div className="content">
                                        <h2 className="sub-heading mt-4">About the song</h2>
                                        <p>
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                            accusantium doloremque laudantium, totam rem aperiam,
                                            eaque ipsa quae ab illo inventore veritatis et quasi architecto
                                            beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                                            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                                            ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-between w-100 pt-4">
                                        <div className="content-box">
                                            <span>Published</span>
                                            <h6>2021</h6>
                                        </div>
                                        <div className="content-box">
                                            <span>Genre</span>
                                            <h6>House</h6>
                                        </div>
                                        <div className="content-box">
                                            <span>Copy left</span>
                                            <h6>234 / <span className="color-gray">1 000</span></h6>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="content">
                                        <h2 className="sub-heading mt-4">Alexander Stewart</h2>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    )
}
export default Nft_slide_modal;