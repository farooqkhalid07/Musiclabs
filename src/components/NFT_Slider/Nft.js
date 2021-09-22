import React from "react";
import { Col, Container, Row, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlayCircle} from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
import Nft_slide from "../Nft_slide/Nft_slide";
import './Nft.css';

 const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
    };
function Nft(){
    return(
        <Container>
            <Row>
                <Col md={6}>
                    <h2 className="sub-heading">Pay or play</h2>
                </Col>
                <Col md={6}>
                    <div className="float-end">
                        <button type="button" className="btn btn-theme">Show all</button>
                   </div>
                </Col>
                <Slider className="home-slider mt-2 mb-5" {...settings}>
                    <div className="slide">
                    <Nft_slide/>
                    </div>
                    <div className="slide">
                    <Nft_slide/>
                    </div>
                    <div className="slide">
                    <Nft_slide/>
                    </div>
                    <div className="slide">
                    <Nft_slide/>
                    </div>
                    <div className="slide">
                    <Nft_slide/>
                    </div>
                    <div className="slide">
                    <Nft_slide/>
                    </div>
                    <div className="slide">
                    <Nft_slide/>
                    </div>
                    <div className="slide">
                    <Nft_slide/>
                    </div>
                    <div className="slide">
                    <Nft_slide/>
                    </div>
                    <div className="slide">
                    <Nft_slide/>
                    </div>
                </Slider>
            </Row>
        </Container>

    )
}
export default Nft;