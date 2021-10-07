import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../Header/Header";
import Nft from "../NFT_Slider/Nft";
import Trending_slider from "../Trending/Trending_slider";
import './Trade.css'

function Trade(){
    return(
        <>
        <Header/>
        <Container>
            <Row>
                <Col md={8} sm={12}>
                    <h1 className="title">Trade</h1>
                    <p className="paragraph-text">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                        Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                </Col>
                {/* <Col md={12}>
                    <h2 className="sub-heading mt-5">
                        Latest add
                    </h2>
                </Col> */}
            </Row>
        </Container>
        <div className="trade-trending">
            <Trending_slider/>
        </div>
        <div className="trade-nft">
            <Nft/>
        </div>

        </>
    )
}

export default Trade;