import React, { useState } from "react";
import { Col, Container, Row, Dropdown, Form, Tabs, Tab } from "react-bootstrap";
import { Modal, Button, } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle, faTimes, faPause, faChevronRight, faChevronLeft, faPlus, faMinus, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import EthIcon from '../../../images/ethereum.svg'

function Upload_create_modal(props) {
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
                                <Col className="border-right" md={6}>
                                    <div className="content-wrapper">
                                        <h1>upload a song</h1>
                                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                        <Button className="btn-white right-arrow" onClick={() => setTimeout(() => setCount(x => x + 1), 100)}>Upload <FontAwesomeIcon className="ms-1" icon={faChevronRight} /></Button>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="content-wrapper">
                                        <h1>CREATE A PROJECT</h1>
                                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                        <Button className="btn-white right-arrow" onClick={() => setTimeout(() => setCount(x => x + 1), 100)}>Create <FontAwesomeIcon className="ms-1" icon={faChevronRight} /></Button>
                                    </div>
                                </Col>
                            </Row>
                            : ''}
                        {/* Upload File */}
                        {count == '1' ? <div className="upload-file">
                            <Row>
                                <Col md={12}>
                                    <div className="content-wrapper">
                                        <h1>upload your file</h1>
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
                                        <h1>Song informations</h1>
                                        <p className="content">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                        <Form>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Name of the song</Form.Label>
                                                <Form.Control type="text" />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Featuring</Form.Label>
                                                <Form.Control type="text" />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Song description</Form.Label>
                                                <Form.Control as="textarea" rows={8} />
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
                                        <h1>Quantity & Price</h1>
                                        <p className="content">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                        <Tabs
                                            id="controlled-tab-example"
                                            activeKey={key}
                                            onSelect={(k) => setKey(k)}
                                            className="mb-3"
                                        >
                                            <Tab eventKey="fixed" title="Fixed price">
                                                <div className="item d-flex justify-content-between align-items-center">
                                                    <div className="description d-flex">
                                                        <h2>Price</h2>
                                                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                                    </div>
                                                    <div className="price d-flex justify-content-end">
                                                        <div className="currency">
                                                            <span className="icon"> <img src={EthIcon} alt="Etherium Icon" className="img-fluid" /></span>ETH
                                                        </div>
                                                        <div className="value">
                                                            0,09
                                                            <span>9,87€</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item d-flex justify-content-between align-items-center">
                                                    <div className="description d-flex">
                                                        <h2>Quantity</h2>
                                                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  </p>
                                                    </div>
                                                    <div className="quantity d-flex justify-content-end">
                                                        <span><FontAwesomeIcon icon={faPlus} /></span>
                                                        <input type="text" name="quantity" value="10" />
                                                        <span><FontAwesomeIcon icon={faMinus} /></span>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="item d-flex justify-content-between align-items-center">
                                                    <div className="description d-flex">
                                                        <h2>Free copy</h2>
                                                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                                    </div>
                                                    <div className="quantity d-flex justify-content-end">
                                                        <span><FontAwesomeIcon icon={faPlus} /></span>
                                                        <input type="text" name="quantity" value="14" />
                                                        <span><FontAwesomeIcon icon={faMinus} /></span>
                                                    </div>
                                                </div>
                                            </Tab>
                                            <Tab eventKey="auction" title="Auction">
                                                <div className="item d-flex justify-content-between align-items-center">
                                                    <div className="description d-flex">
                                                        <h2>Price</h2>
                                                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                                    </div>
                                                    <div className="price d-flex justify-content-end">
                                                        <div className="currency">
                                                            <span className="icon"> <img src={EthIcon} alt="Etherium Icon" className="img-fluid" /></span>ETH
                                                        </div>
                                                        <div className="value">
                                                            0,09
                                                            <span>9,87€</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item d-flex justify-content-between align-items-center">
                                                    <div className="description d-flex">
                                                        <h2>Quantity</h2>
                                                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  </p>
                                                    </div>
                                                    <div className="quantity d-flex justify-content-end">
                                                        <span><FontAwesomeIcon icon={faPlus} /></span>
                                                        <input type="text" name="quantity" value="10" />
                                                        <span><FontAwesomeIcon icon={faMinus} /></span>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="item d-flex justify-content-between align-items-center">
                                                    <div className="description d-flex">
                                                        <h2>Free copy</h2>
                                                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                                    </div>
                                                    <div className="quantity d-flex justify-content-end">
                                                        <span><FontAwesomeIcon icon={faPlus} /></span>
                                                        <input type="text" name="quantity" value="14" />
                                                        <span><FontAwesomeIcon icon={faMinus} /></span>
                                                    </div>
                                                </div>
                                            </Tab>
                                        </Tabs>

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
export default Upload_create_modal;