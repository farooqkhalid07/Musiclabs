import React , {useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../Header/Header";
import SongsList from "../SongsList/SongsList";
import Verified from '../Get_verified_modal/Get_verified_modal'

function SongsProjects() {
  const [lgShows, setLgShows] = useState(false);
  const hideModels = () => { setLgShows(false) }
  return (
    <>
      <div className="artist-dashboard">
        <Header />
        <div className="songs-projects">
          <Container>
            <Row>
              <Col md={12} xs={12}>
                <h1 className="title text-center">Songs & projects</h1>
              </Col>
            </Row>
            <Row>
              <Col md={12} sx={12}>
                <div className="my-5 text-center upload-btn">
                  <button type="button" className="btn btn-theme upload-icon d-flex bg-gradient-green m-auto" onClick={() => setLgShows(true)}>Upload / Create</button>
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
      <div className="modal-wrapper">
        <Verified hideModel={hideModels} lgShows={lgShows} />
      </div>

    </>
  )
}
export default SongsProjects;