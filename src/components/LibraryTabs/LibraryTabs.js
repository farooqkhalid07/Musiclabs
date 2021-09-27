import React from "react";
import { Tabs, Tab, Row, Col } from "react-bootstrap";
import Trending_slide from "../Trending_slide/Trending_slide";
function LibraryTabs (){
    return(
        <div className="library-tabs-section">
            <Tabs defaultActiveKey="songs" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="songs" title="Songs">
                    <Row>
                        <Col md={12}>
                            <Trending_slide/>
                            <hr/>
                            <Trending_slide/>
                            <hr/>
                            <Trending_slide/>
                            <hr/>
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="albums" title="Albums">
                </Tab>
                <Tab eventKey="artists" title="Artists">
                </Tab>
            </Tabs>
        </div>        

    )
}

export default LibraryTabs;