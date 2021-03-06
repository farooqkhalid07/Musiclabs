import React from "react";
import { Col, Container, Row, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Banner.css';

function Banner(){
    return(
        <Container>
            <Row>
                <Col md={12}>
                    <div className="input-group header-search">
                        <input type="text" name="search" className="form-control" />
                        <span className="search-icon"><FontAwesomeIcon icon={faSearch} /></span>
                    </div>
                </Col>
                <Col md={12}>
                    <div className="banner-top-dropdown d-flex justify-content-center">
                        {/* Music Style */}
                        <Dropdown>
                            <Dropdown.Toggle  id="dropdown-basic">
                                Music style
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        {/* Rarity */}
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">
                                Rarity
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        {/* Price */}
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">
                                Price
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        {/*  */}
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">
                                lorem
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="banner-content">
                        <h1 className="banner-heading">Birdy nam nam<br/> on music labs</h1>
                        <button type="button" className="btn btn-theme banner-btn bg-gradient">Discover</button>
                    </div>
                </Col>
            </Row>
        </Container>
    
    )
}
export default Banner;