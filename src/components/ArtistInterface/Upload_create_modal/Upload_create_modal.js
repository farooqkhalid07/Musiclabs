import React, { useState } from "react";
import { Col, Container, Row, Dropdown, } from "react-bootstrap";
import { Modal, Button, } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle, faTimes, faPause, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Upload_create_modal(props) {

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
                        <Row>
                            <Col md={6}>
                                <div className="content-wrapper">
                                    <h1>upload a song</h1>
                                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                    <Button className="btn-white right-arrow">Upload <FontAwesomeIcon className="ms-1" icon={faChevronRight} /></Button>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="content-wrapper">
                                    <h1>CREATE A PROJECT</h1>
                                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                    <Button className="btn-white right-arrow">Create <FontAwesomeIcon className="ms-1" icon={faChevronRight} /></Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>

        </>
    )
}
export default Upload_create_modal;