import React  from "react";
import { Link, useHistory } from "react-router-dom";
import { Col, Container, Row, Navbar} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCompass, faExchangeAlt, faPlayCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import './Header.css';


function Header(){


    const history = useHistory();
    const pathname = history.location.pathname;


    return(

            <header id="header">
                <Container>
                    <Row>
                        <Col md={2}>
                            <div className="logo-container mt-2">
                                <Link className="logo-img" to="/">
                                <img className="img-fluid" src="images/musiclab-logo.svg"/>
                                </Link>
                            </div>
                        </Col>
                        <Col md={8}>
                            <Navbar expand="lg" className="pos-stat">
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <ul className="navbar-nav m-auto">
                                    <span className="material-icons-outlined"></span>
                                        <li className={`nav-item ${pathname==='/' ? 'active' : ''}`}><Link className="nav-link" to="/"><i className="nav-icon"><FontAwesomeIcon icon={faCompass} /></i>Discover </Link></li>
                                        <li className={`nav-item ${pathname==='/trade' ? 'active' : ''}`}><Link className="nav-link" to="/trade"><i className="nav-icon"><FontAwesomeIcon icon={faExchangeAlt} /></i>Trade</Link></li>
                                        <li className={`nav-item ${pathname==='/library' ? 'active' : ''}`}><Link className="nav-link" to="/library"><i className="nav-icon"><FontAwesomeIcon icon={faPlayCircle}/></i>Library</Link></li>
                                    </ul>
                                </Navbar.Collapse>
                            </Navbar>
                        </Col>
                        <Col md={2}>
                        <div className="right-icon float-end mt-2">
                                <img className="img-fluid" src="images/user-icon.svg" />
                        </div>
                        </Col>

                       
                    </Row>
                </Container>
            </header>
        
    )
}
export default Header;