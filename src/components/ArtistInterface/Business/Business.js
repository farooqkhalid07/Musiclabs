import React from "react";
import { Tabs, Tab, Col, Container, Row, Button } from "react-bootstrap";
import Header from "../Header/Header";
import SongsList from "../SongsList/SongsList";
import Trending_slide from "../Trending_slide/Trending_slide";


function Business() {
  return (
    <div className="artist-dashboard">
      <Header />
      <div className="songs-projects main-padding-top">
        <Container>
          <Row>
            <Col md={12} xs={12}>
              <h1 className="title text-center">Business</h1>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="library-tabs-section lib-tabs">
                <Tabs defaultActiveKey="songs" id="uncontrolled-tab-example" className="mb-3">
                  <Tab eventKey="songs" title="Sellings">
                    <Row>
                      <Col>
                      <div className="graphing">
                          <div className="graph1">
                            <img className="img-fluid dark" src="/images/Random.png" />
                            <img className="img-fluid light" src="/images/Random-light.png" />
                          </div>
                          <div className="graph2">
                            <span>
                              7287328
                            </span>
                            <img className="img-fluid dark" src="/images/graph-line.png" />
                            <img className="img-fluid light" src="/images/graph-line-light.png" />
                          </div>
                        </div>
                        <div className="dates">
                          <ul>
                            <li>
                              26 May
                            </li>
                            <li>
                              2 June
                            </li>
                            <li>
                              9 June
                            </li>
                            <li>
                              16 June
                            </li>
                            <li>
                              23 June
                            </li>
                            <li>
                              30 June
                            </li>
                            <li>
                              6 July
                            </li>
                            <li>
                              13 July
                            </li>
                            <li>
                              20 July
                            </li>
                            <li>
                              27 July
                            </li>
                            <li>
                              3 Aug
                            </li>
                            <li>
                              17 Aug
                            </li>
                            <li>
                              24 Aug
                            </li>
                            <li>
                              31 Aug
                            </li>
                            <li>
                              7 sept
                            </li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col >
                        <div className="data">
                          <div className="data1">
                            <p>
                              Value delta
                            </p>
                            <span>
                              +276%
                            </span>
                          </div>
                          <div className="data1">
                            <p>
                              Money
                            </p>
                            <span>
                              2,389 ETH
                            </span>
                          </div>
                          <div className="data1">
                            <p>
                              Lorem ispum
                            </p>
                            <span>
                              7287328
                            </span>
                          </div>

                          <div className="data1">
                            <p>
                              Value delta
                            </p>
                            <span>
                              +276%
                            </span>
                          </div>
                          <div className="data1">
                            <p>
                              Money
                            </p>
                            <span>
                              2,389 ETH
                            </span>
                          </div>
                          <div className="data1">
                            <p>
                              Lorem ispum
                            </p>
                            <span>
                              7287328
                            </span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Tab>
                  <Tab eventKey="albums" title="Fans">
                    <Row>
                      <Col>
                        <div className="graphing">
                          <div className="graph1">
                            <img className="img-fluid dark" src="/images/Random.png" />
                            <img className="img-fluid light" src="/images/Random-light.png" />
                          </div>
                          <div className="graph2">
                            <span>
                              7287328
                            </span>
                            <img className="img-fluid dark" src="/images/graph-line.png" />
                            <img className="img-fluid light" src="/images/graph-line-light.png" />
                          </div>
                        </div>
                        <div className="dates">
                          <ul>
                            <li>
                              26 May
                            </li>
                            <li>
                              2 June
                            </li>
                            <li>
                              9 June
                            </li>
                            <li>
                              16 June
                            </li>
                            <li>
                              23 June
                            </li>
                            <li>
                              30 June
                            </li>
                            <li>
                              6 July
                            </li>
                            <li>
                              13 July
                            </li>
                            <li>
                              20 July
                            </li>
                            <li>
                              27 July
                            </li>
                            <li>
                              3 Aug
                            </li>
                            <li>
                              17 Aug
                            </li>
                            <li>
                              24 Aug
                            </li>
                            <li>
                              31 Aug
                            </li>
                            <li>
                              7 sept
                            </li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div className="data">
                          <div className="data1">
                            <p>
                              Value delta
                            </p>
                            <span>
                              +276%
                            </span>
                          </div>
                          <div className="data1">
                            <p>
                              Money
                            </p>
                            <span>
                              2,389 ETH
                            </span>
                          </div>
                          <div className="data1">
                            <p>
                              Lorem ispum
                            </p>
                            <span>
                              7287328
                            </span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div className="faning">
                          <img className="img-fluid dark" src="/images/Frame172.png" />
                          <img className="img-fluid light" src="/images/fans-light.png" />
                        </div>
                      </Col>
                    </Row>
                  </Tab>
                  <Tab eventKey="artists" title="Visitors">
                  </Tab>
                </Tabs>
              </div>
            </Col>
          </Row>
        </Container>


        <div className="history">
          <Container>
            <h2>History</h2>

            <Row>
              <Col md={12} sx={12}>
                <h4>Yesterday</h4>
                <Trending_slide/>
                <Trending_slide/>
                <Trending_slide/>
                <hr />
                <h4>Last week</h4>
                <Trending_slide/>
                <Trending_slide/>
                <Trending_slide/>
                <hr />
                <div className="load-more">
                  <Button className="btn-dark">Load more</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>



      </div>

    </div>


  )
}
export default Business;