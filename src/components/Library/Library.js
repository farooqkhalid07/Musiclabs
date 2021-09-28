import React from "react";
import { Col, Container, Row, Tabs, Tab } from "react-bootstrap";
import Header from "../Header/Header";
import LibraryTabs from "../LibraryTabs/LibraryTabs";
import MusicBox from '../MusicBox/MusicBox'
import './Library.css'

function Library() {
    return(
        <>
        <Header/>
        <Container>
            <Row>
                <Col md={12}>
                    <h1 className="title mt-5 mb-5">Library</h1>
                </Col>
                <Col md={6}>
                    <h2 className="sub-heading">Last buy</h2>
                    <Row>
                        <MusicBox />
                        <MusicBox />
                        <MusicBox />
                        <MusicBox />
                        <MusicBox />
                        <MusicBox />
                    </Row>
                </Col>
                <Col md={6}>
                    <LibraryTabs/>
                </Col>
            </Row>

        </Container>
        </>
    )
}

export default Library;