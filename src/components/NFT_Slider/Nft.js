import React from "react";
import { Col, Container, Row, Dropdown, Section } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlayCircle} from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
import Nft_slide from "../Nft_slide/Nft_slide";
import './Nft.css';
import HouseOfCard from "../HouseOfCard/HouseOfCard";

 const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
      responsive: [
        {
          breakpoint: 1399,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
function Nft(){
    return(
        <div className="tops-section">
            <Container>
                <Row>
                    <Col md={6} xs={8}>
                        <h2 className="sub-heading">Pay or play</h2>
                    </Col>
                    <Col md={6} xs={4}>
                        <div className="float-end">
                            <button type="button" className="btn btn-theme">Show all</button>
                    </div>
                    </Col>
                    <Slider className="home-slider mt-2" {...settings}>
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
            <HouseOfCard/>
        </div>

    )
}
export default Nft;