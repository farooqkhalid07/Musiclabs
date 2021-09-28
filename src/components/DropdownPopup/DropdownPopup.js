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
            </div>
        </div>
    )

}

export default Dropdown;