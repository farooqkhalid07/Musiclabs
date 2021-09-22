import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Trending_slider.css';
import Slider from "react-slick";
import Trending_slide from "../Trending_slide/Trending_slide";
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
  };
function Trending_slider(){
    return(
        <Container>
            <Row>
                <Col md={6}>
                   <h2 className="sub-heading">Trending</h2>
                </Col>
                <Col md={6}>
                    <div className="float-end">
                        <button type="button" className="btn btn-theme">Show all</button>
                   </div>
                </Col>
                <Col>
                <Slider className="music-group mt-2 mb-5" {...settings}>
                    <div className="music-list">
                        <Trending_slide />
                        <Trending_slide />
                    </div>
                    <div className="music-list">
                        <Trending_slide />
                        <Trending_slide />
                    </div>
                    <div className="music-list">
                        <Trending_slide />
                        <Trending_slide />
                    </div>
                    <div className="music-list">
                        <Trending_slide />
                        <Trending_slide />
                    </div>
                    <div className="music-list">
                        <Trending_slide />
                        <Trending_slide />
                    </div>
                </Slider>
                </Col>
            </Row>
        </Container>
    )
}
export default Trending_slider;