import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Col, Container, Row, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faExchangeAlt, faPlayCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import DroppdownPopup from '../DropdownPopup/DropdownPopup.js'

function Header() {

    const [isopen, setisopen] = useState(false);
    const isopenhide = () => { setisopen(false) }

    const history = useHistory();
    const pathname = history.location.pathname;


    return (

        <header id="header">
            <Navbar collapseOnSelect expand="lg" className="pos-stat navbar-dark">
                <Container>
                    <Navbar.Brand className="logo-img" href="/"><img className="img-fluid" src="/images/musiclab-logo.svg" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <ul className="navbar-nav m-auto">
                            <span className="material-icons-outlined"></span>
                            <li className={`nav-item ${pathname === '/' ? 'active' : ''}`}><Link className="nav-link" to="/"><i className="nav-icon"><FontAwesomeIcon icon={faCompass} /></i>Catch </Link></li>
                            <li className={`nav-item ${pathname === '/trade' ? 'active' : ''}`}><Link className="nav-link" to="/trade"><i className="nav-icon"><FontAwesomeIcon icon={faExchangeAlt} /></i>Trade </Link></li>
                            <li className={`nav-item ${pathname === '/library' ? 'active' : ''}`}><Link className="nav-link" to="/library"><i className="nav-icon"><FontAwesomeIcon icon={faPlayCircle} /></i>Listen</Link></li>
                        </ul>
                    </Navbar.Collapse>
                    <div className="user-icon float-end">
                        <img className="img-fluid" onClick={() => setisopen(true)} src="/images/user-icon.svg" />
                    </div>
                </Container>
            </Navbar>
            <DroppdownPopup isopenhide={isopenhide} isopen={isopen} />
        </header>

    )
}
export default Header;