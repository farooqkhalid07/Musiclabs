import React, { useState } from "react";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './DropdownPopup.css';
import {ToggleButtonGroup, ToggleButton} from "react-bootstrap";
import { Link } from "react-router-dom";


function Dropdown(props) {
    return (
        <>
            {props.isopen ?
                <div className="dropdown-popup">
                    <div className="dropdown-content">
                        <div className="p-4">
                            <div className="user-icon" >
                                <img className="img-fluid" src="images/user-icon.svg" />
                            </div>
                            <div className="cross-btn float-end" onClick={() => props.isopenhide()}>
                                <FontAwesomeIcon icon={faTimes} />
                            </div>
                            <h2 className="sub-heading mt-3 mb-4">Marv’hELL</h2>
                            <h3 className="account-name">Wallet account</h3>
                            <h4 className="amount">0,00034</h4>
                            <span className="code">3e1aaa2d5a4512e7ef8a011d8d4095800a4e6b3b0a0435355086630164586149</span>
                        </div>
                        <div className="p-4 border-top">
                            <div className="d-flex justify-content-between imgs-row">
                                <div className="img-box">
                                    <img className="img-fluid" src="images/user-icon.svg" />
                                    <span>23</span>
                                </div>
                                <div className="img-box">
                                    <img className="img-fluid" src="images/user-icon.svg" />
                                    <span>23</span>
                                </div>
                                <div className="img-box">
                                    <img className="img-fluid" src="images/user-icon.svg" />
                                    <span>23</span>
                                </div>
                            </div>
                            <div className="mt-5 mb-3">
                                <h5>Paiement history</h5>
                            </div>
                            <div className="mt-4 mb-2">
                                <h5>Preferences</h5>
                            </div>
                        </div>
                        <div className="p-4 border-top">
                            <div className="theme-row d-flex justify-content-between">
                                <h5>Theme</h5>
                                <div className="theme-buttons">
                                    <ToggleButtonGroup type="radio" name="options" defaultValue={2}>
                                        <ToggleButton id="tbg-radio-2" value={2}>
                                            Light
                                        </ToggleButton>
                                        <ToggleButton id="tbg-radio-3" value={3}>
                                            Dark
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-top text-center">
                            <span className="switch-account">
                                Switch to artist account
                            </span>
                        </div>
                    </div>
                </div>
                : ''}
        </>
    )

}

export default Dropdown;