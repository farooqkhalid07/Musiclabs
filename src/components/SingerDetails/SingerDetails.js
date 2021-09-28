import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './SingerDetails.css'
import Singer from '../../images/Singer.svg'
import Header from "../Header/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import LibraryTabs from "../LibraryTabs/LibraryTabs";
import { Link, useHistory } from "react-router-dom";

function SingerDetails(){

   return(
        <>
        <Header/>
        <Container>
            <Row>
                <Col>
                    <div className="singerFeatureImg">
                        <img className="img-fluid" src={Singer} />
                    </div>
                </Col>
                <Col>
                    <div className="content singer-details-content">
                        <Link to="/" className="back">
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </Link>
                        <h1 className="title">Alexander Stewart</h1>
                        <span className="sub-catregory mt-3">Electro</span>
                        <div className="d-flex mt-3 inline-buttons">
                            <button className="btn btn-theme ethereum-icon d-flex bg-gradient" type="button">
                                Invest
                            </button>
                            <button className="btn btn-theme bg-white" type="button">
                                Follow
                            </button>
                        </div>
                        <div className="tabs mt-4">
                            <LibraryTabs/>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
           
        </>
   )
}

export default SingerDetails;