import React,{useState} from "react";
import './HouseOfCard.css'
import { Modal,Button } from "react-bootstrap";
function HouseOfCard(){
    
    const [lgShow, setLgShow] = useState(false);
    return(
        <>
       
        <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Large Modal
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>...</Modal.Body>
      </Modal>
      </>
    )
}

export default HouseOfCard;