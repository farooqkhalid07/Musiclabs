import React from "react";
import { Col, Container, Row } from "react-bootstrap";


function ArtistOverview() {
  return (
    <div className="overview-section">
      <Container>
        <Row>
          <Col md={12} xs={12}>
            <h2 className="sub-heading">Overview</h2>
          </Col>
        </Row>

        <div className="overview-items">
          <Row>
            <Col xs={3}>
              <div className="overview-item bg-darkgrey">
                <h2>Popularity</h2>
                <div className="summary">
                  <div className="value text-white">2 398</div>
                  <h3 className="text-white">View last week</h3>
                </div>

              </div>
            </Col>
            <Col xs={3}>
              <div className="overview-item bg-darkgrey">
                <h2>Songs sold</h2>
                <div className="summary">
                  <div className="value text-white">23</div>
                  <h3 className="text-white">sold last week</h3>
                </div>
              </div>
            </Col>
            <Col xs={6}>
              <div className="overview-item bg-darkgrey">
                <h2>Visit</h2>
                <div className="image">
                  <img src="/images/visit-graph.png" alt="Visit Graphj" className="dark img-fluid" />
                  <img src="/images/visit-graph-light.png" alt="Visit Graphj" className="light img-fluid" />
                </div>
                <div className="d-flex justify-content-between">
                  <div className="summary">
                    <div className="value text-white">2 398</div>
                    <h3 className="text-white">unique visitors</h3>
                  </div>
                  <div className="summary">
                    <div className="value text-white">2 398</div>
                    <h3 className="text-white">unique visitors</h3>
                  </div>
                </div>

              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div >

  )
}
export default ArtistOverview;