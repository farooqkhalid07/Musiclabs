import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import './Trending_slider.css';
import Slider from "react-slick";
import Trending_slide from "../Trending_slide/Trending_slide";
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
function Trending_slider() {
    return (
        <section className="trending-section">
            <Container>
                <Row>
                    <Col md={12} xs={12}>
                        <h2 className="sub-heading">Last investors</h2>
                    </Col>
                    <div className="no-data bg-darkgrey">
                        <p>
                            You have no investors yet.<br />
                            Try to make some publicity on your social <br />network lorem ipsum
                        </p>
                    </div>
                    <Col className="section-content">
                        <Slider className="music-group mt-2" {...settings}>
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
        </section>
    )
}
export default Trending_slider;