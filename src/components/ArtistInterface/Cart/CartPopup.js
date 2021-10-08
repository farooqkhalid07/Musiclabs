import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faTimes } from '@fortawesome/free-solid-svg-icons';
import Trending_slide from "../Trending_slide/Trending_slide";
// import './Cart.css'



function CartPopup(props) {
    // const [lgShow, setLgShow] = useState(false);

    // const hideModel = () => { setLgShow(false) }
    return (
        <>
            <Modal
                className="cart-popup bg-pink"
                show={props.smShows}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >   
                <Modal.Body>
                    <div className="cart-content">
                        <div className="cross-btn float-end" onClick={() => props.hideModel()}>
                            <FontAwesomeIcon icon={faTimes} />
                        </div>
                        <h2 className="sub-heading mb-4">Pay</h2>
                        <Trending_slide />
                        <div className="cart-details pt-3">
                            <div className="d-flex justify-content-between pt-4" >
                                <span className="price">Price</span>
                                <span className="ethereum-icon ethrum-rate d-flex">0,09 ETH</span>
                            </div>
                            <div className="d-flex justify-content-between pt-4" >
                                <span className="price">My wallet</span>
                                <span className="ethereum-icon ethrum-rate d-flex">
                                    0,98301 ETH
                                </span>
                            </div>
                            <div className="text-center">
                                <button type="button" class="btn btn-theme cart-button bg-white">
                                    <svg width="18" height="19" viewBox="0 0 17 18"  xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0)">
                                        <path d="M2.125 9.53125L8.5 17.5L14.875 9.53125L8.5 12.1875L2.125 9.53125ZM5.54726 12.1082L8.09138 13.1683L8.5 13.3385V15.7992L5.54726 12.1082Z" fill="url(#paint0_linear)"/>
                                        <path d="M14.875 9.00002L8.5 0.5L2.125 9.00002L8.5 11.125L14.875 9.00002ZM8.5 7.93751L3.86362 8.45269L8.5 2.27077V7.93751Z" fill="url(#paint1_linear)"/>
                                        </g>
                                        <defs>
                                        <linearGradient id="paint0_linear" x1="14.5236" y1="9.53125" x2="1.17984" y2="11.7092" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#EA06B1"/>
                                        <stop offset="1" stop-color="#8200FE"/>
                                        </linearGradient>
                                        <linearGradient id="paint1_linear" x1="14.5236" y1="0.499999" x2="1.02661" y2="2.15222" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#EA06B1"/>
                                        <stop offset="1" stop-color="#8200FE"/>
                                        </linearGradient>
                                        <clipPath id="clip0">
                                        <rect width="17" height="17" fill="white" transform="translate(0 0.5)"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                    <span>Confirm & pay</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            {/* <div className="modal-wrapper">
                <Nft_slide_modal hideModel={hideModel} lgShow={lgShow} />
            </div> */}
        </>
    )
}
export default CartPopup;