import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Golden_West_Banner from '../../../images/Golden-west-banner.png';
import Profile_img from '../../../images/profile.png';
// import './Golden_West.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faHeart, faPlay, faDotCircle } from '@fortawesome/free-solid-svg-icons';

function Golden_West() {
    return (
        <div className="golden-bg">
            <Container>
                <Row>
                    <Col md={7} xs={12} className="mobile-hide">
                        <div className="image">
                            <img src={Golden_West_Banner} alt="" className="img-fluid" />
                        </div>
                    </Col>
                    <Col md={5} xs={12}>
                        <div className="detail mobile-bg-set">
                            <div className="profile-image">
                                <img src={Profile_img} alt="" className="img-fluid" />
                            </div>
                            <h2 className="sub-heading">The Golden West</h2>
                            <h5>Ethan Luck</h5>
                            <div className="price-section">
                                <div className="d-flex flex-column">
                                    <div className="progress-label">987 € <span>/ 10 000 €</span></div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <button className="btn btn-theme bg-gradient">Participate</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Golden_West;