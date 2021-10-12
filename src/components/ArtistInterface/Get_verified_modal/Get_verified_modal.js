import React, { useState } from "react";
import { Col, Container, Row, Dropdown, Form, Tabs, Tab } from "react-bootstrap";
import { Modal, Button, } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle, faTimes, faPause, faChevronRight, faChevronLeft, faPlus, faMinus, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import EthIcon from '../../../images/ethereum.svg'

function Get_verified_modal(props) {
    const [key, setKey] = useState('fixed');
    const [Info, setInfo] = useState(true);
    const [upload, setupload] = useState(false);
    const [songinfo, setsonginfo] = useState(false);
    const [quantity, setquantity] = useState(false);
    const [count, setCount] = useState(0);

    function setuploadview() {
        setInfo(false);
        setupload(true);

    }
    return (
        <>
            <Modal fullscreen={true}
                className="upload-modal"
                show={props.lgShows}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header >
                    <Modal.Title><img src="/images/musiclab-logo.svg" alt="Logo " className="img-fluid" /> </Modal.Title>
                    <div className="cross-btn float-end" onClick={() => props.hideModel()}>
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        {count == '0' ?
                            <Row>
                                <Col md={12}>
                                    <div className="content-wrapper">
                                        <h1>Get verified</h1>
                                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                        <Button className="btn-white right-arrow" onClick={() => setTimeout(() => setCount(x => x + 1), 100)}>Start <FontAwesomeIcon className="ms-1" icon={faChevronRight} /></Button>
                                    </div>
                                </Col>
                            </Row>
                            : ''}
                        {/* Upload File */}
                        {count == '1' ? <div className="upload-file">
                            <Row>
                                <Col md={12}>
                                    <div className="content-wrapper">
                                        <h1>upload your Face</h1>
                                        <p className="content">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                        <div className="select-file-btn"><input type="file" /><Button className="btn-outline-white right-arrow"><FontAwesomeIcon className="me-2" icon={faCloudUploadAlt} />Choose my file </Button></div>

                                        {/* <Button className="btn-white right-arrow"><FontAwesomeIcon className="me-1" icon={faChevronRight} /> Upload complete </Button> */}
                                        <br />
                                        <p>Or</p>
                                        <br />
                                        <p>drag the file directly in<br /> your browser</p>
                                        <p className="file-type-info">Compatible format : .MP3, .Wav, .AAC, .FLAC</p>
                                    </div>
                                </Col>
                            </Row>
                        </div> : ''}


                        {/* Song Information */}
                        {count == '2' ? <div className="song-info">
                            <Row>
                                <Col md={12}>
                                    <div className="content-wrapper">
                                        <h1>About you</h1>
                                        <p className="content">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                        <Form>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control type="email" />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Address</Form.Label>
                                                <Form.Control type="text" />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>City</Form.Label>
                                                <Form.Control type="text" />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>State</Form.Label>
                                                <Form.Control type="text" />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Zip code</Form.Label>
                                                <Form.Control type="text" />
                                            </Form.Group>
                                        </Form>
                                    </div>
                                </Col>
                            </Row>
                        </div> : ''}

                        {count == '3' ? <div className="quantity-prices">
                            <Row>
                                <Col md={12}>
                                    <div className="content-wrapper">
                                        <h1>Your informations have been sent</h1>
                                        <p className="content">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                        
                                         <Button className="btn-white right-arrow"> Upload complete <FontAwesomeIcon className="ms-1" icon={faChevronRight} /></Button>

                                    </div>
                                </Col>
                            </Row>
                        </div> : ""}


                    </Container>
                </Modal.Body>
                {count > '0' && count < '3' ? < Modal.Footer >
                    <div className=" footer-btns">
                        <Button className="btn-gray right-arrow" onClick={() => setTimeout(() => setCount(x => x - 1), 100)}> <FontAwesomeIcon icon={faChevronLeft} />  </Button>
                        <Button className="btn-white right-arrow" onClick={() => setTimeout(() => setCount(x => x + 1), 100)} >Confirm <FontAwesomeIcon className="ms-1" icon={faChevronRight} />  </Button>
                    </div>
                </Modal.Footer > : ''}

            </Modal>

        </>
    )
}
export default Get_verified_modal;