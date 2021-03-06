import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Col, Container, Row, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faSearch, faThLarge, faChartLine } from '@fortawesome/free-solid-svg-icons';
// import './Header.css';
import DroppdownPopup from '../../DropdownPopup/DropdownPopup.js'
import UploadModal from '../Upload_create_modal/Upload_create_modal.js'

function Header() {
    const [lgShows, setLgShows] = useState(false);
    const hideModels = () => { setLgShows(false) }
    const [isopen, setisopen] = useState(false);
    const isopenhide = () => { setisopen(false) }

    const history = useHistory();
    const pathname = history.location.pathname;


    return (
        <>
            <header id="header">
                <Navbar collapseOnSelect expand="lg" className="pos-stat navbar-dark">
                    <Container>
                        <Navbar.Brand className="logo-img" href="/"><img className="img-fluid" src="/images/musiclab-logo.svg" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <ul className="navbar-nav m-auto">
                                <span className="material-icons-outlined"></span>
                                <li className={`nav-item ${pathname === '/artist/dashboard' ? 'active' : ''}`}><Link className="nav-link" to="/artist/dashboard"><i className="nav-icon"><FontAwesomeIcon icon={faThLarge} /></i>Dashboard </Link></li>
                                <li className={`nav-item ${pathname === '/artist/business' ? 'active' : ''}`}><Link className="nav-link" to="/artist/business"><i className="nav-icon"><FontAwesomeIcon icon={faChartLine} /></i>Business</Link></li>
                                <li className={`nav-item ${pathname === '/artist/songs-projects' ? 'active' : ''}`}><Link className="nav-link" to="/artist/songs-projects"><i className="nav-icon"><FontAwesomeIcon icon={faPlayCircle} /></i>Songs & Projects</Link></li>
                                <button type="button" className="d-flex d-lg-none btn btn-theme upload-icon d-flex bg-gradient-green" onClick={() => setLgShows(true)}><span>Upload / Create</span></button>
                            
                            </ul>
                        </Navbar.Collapse>
                        <div className="user-icon d-flex justify-content-end align-items-center gap-4 " >
                            <button type="button" className="d-none d-lg-flex btn btn-theme upload-icon d-flex bg-gradient-green" onClick={() => setLgShows(true)}><span>Upload / Create</span></button>
                            <div className=" float-end">
                                <img className="img-fluid" onClick={() => setisopen(true)} src="/images/user-icon.svg" />
                            </div>
                        </div>
                    </Container>
                    
                </Navbar>
                <DroppdownPopup isopenhide={isopenhide} isopen={isopen} />

               </header>
            <div className="modal-wrapper">
                <UploadModal hideModel={hideModels} lgShows={lgShows} />
            </div>
        </>
    )
}
export default Header;