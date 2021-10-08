import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../Header/Header";
import SongsList from "../SongsList/SongsList";


function Business() {
  return (
    <div className="artist-dashboard">
      <Header />
      <div className="songs-projects">
        <Container>
          <Row>
            <Col md={12} xs={12}>
              <h1 className="title text-center">Business</h1>
            </Col>
          </Row>
          <Row>
            <Col md={12} sx={12}>
              <div className="my-5 text-center upload-btn">
                <button type="button" className="btn btn-theme upload-icon d-flex bg-gradient-green m-auto">Upload / Create</button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12} sx={12}>
              <SongsList />
              <SongsList />
              <SongsList />
              <SongsList />
              <SongsList />
              <SongsList />
            </Col>
          </Row>

        </Container>
      </div >

    </div>


  )
}
export default Business;