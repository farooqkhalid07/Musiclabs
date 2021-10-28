import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Nft from '../NFT_Slider/Nft.js';
import Header from "../Header/Header";

const Project = () => {
    return (
        <div className="project-detail">
            <Header />
            <div className="about-project">
                <Container>
                    <Row>
                        <Col md={8}>
                            <div className="abt-project">
                                <h1>
                                    Project name
                                </h1>
                                <img className="img-fluid" src="/images/image 1.png" />
                                <p>
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                                </p>
                                <h3>
                                    Why I NEED your support
                                </h3>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                                <h3>
                                    Why I NEED your support
                                </h3>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="pro-detail">
                                <h3>
                                    Soutenez le projet
                                </h3>
                                <div className="pro-line"><span></span>
                                    <p>987 €</p>
                                </div>
                            </div>
                            <Row>
                                <Col md={6}>
                                    <div className="project-content">
                                        <p>
                                            1 132
                                        </p>
                                        <span>
                                            Participants
                                        </span>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="project-content">
                                        <p>
                                            13
                                        </p>
                                        <span>
                                            days left
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                            <div className="project-button">
                                <button type="button" class="btn btn-theme banner-btn bg-gradient">Participate</button>
                            </div>
                            <div className="project-cont">
                                <img className="img-fluid" src="/images/image 3.png" />
                                <h3>
                                    About <br/>
                                    Alexander Stewart
                                </h3>
                                <p>
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="top-section">
            
            < Nft />
         </div>
        </div>
    );
};

export default Project;