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
      slidesToScroll: 1
    };
function Nft(){
    return(
        <Container>
            <Row>
                <Col md={6}>
                    <div className="sub-heading"><h2>Pay or play</h2></div>
                </Col>
                <Col md={6}>
                    <div className="float-end">
                        <button type="button" className="btn btn-theme">Show all</button>
                   </div>
                </Col>
                <div>
                <Slider {...settings}>
                <div className="slide">
                   <Nft_slide/>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
                </Slider>
            </div>
            </Row>
        </Container>

    )
}
export default Nft;