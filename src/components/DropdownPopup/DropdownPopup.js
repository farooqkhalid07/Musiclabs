import React, {useState} from "react";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Dropdown(){
    return(
        <div className="dropdown-popup">
            <div className="dropdown-content">
                <div className="right-icon float-end mt-2">
                    <img className="img-fluid" src="images/user-icon.svg" />
                </div>
                <div className="cross-btn float-end" onClick={() => props.hideModel()}>
                    <FontAwesomeIcon icon={faTimes} />
                </div>
                <h2 className="sub-heading">Marv’hELL</h2>
                <h3>Wallet account</h3>
                <h5>0,00034</h5>
                <span>3e1aaa2d5a4512e7ef8a011d8d4095800a4e6b3b0a0435355086630164586149</span>
                <hr/>
                <div className="d-flex">
                    <div className="">

                    </div>
                </div>

            </div>
        </div>
    )

}

export default Dropdown;