import React, { useState } from 'react';

import searchBar from '../assets/search-line-4.svg';
import notificationBar from '../assets/notification-2-line-2.svg';
import addSymbol from '../assets/add-line-1.svg';
import playSymbol from '../assets/play-circle-fill-3.svg';
import profileSymbol from '../assets/profile.svg';
import threeDotVertical from '../assets/three-dot-vertical.svg';
import checkbox from '../assets/brand-color-checkbox.svg';

import './TransactionDetails3dot.css';


const TransactionDetails3dot = (props) => {
    return (
        <>
            <div className="container">
                <div className="TransactionDetails3dot-bg">
                    <div className="Navbar-Rectangle">
                        <div className="row">
                            <div className="col-7">
                                <div className="Navbar-Unity-Name">
                                    Transaction
                                </div>
                            </div>
                            <div className="col-1">
                                <img src={searchBar}
                                    className="Navbar-Search" />
                            </div>
                            <div className="col-1">
                                <img src={notificationBar}
                                    className="Navbar-Notification" />
                            </div>
                            <div className="col-1">
                                <div className="Navbar-Create-Rectangle">
                                    <img src={addSymbol}
                                        className="Navbar-Add" />
                                    <span className="Navbar-Create">
                                        Create
                                    </span>
                                </div>
                            </div>
                            <div className="col-1">
                                <img src={playSymbol}
                                    className="Navbar-Play-Icon" />
                            </div>
                            <div className="col-1">
                                <img src={profileSymbol}
                                    className="Navbar-Profile-Icon" />
                            </div>
                        </div>
                    </div>

                    <div className="div">
                        <div className="TransactionDetails-DPN-Rectangle">
                            <span className="TransactionDetails-Details-Rectangle">
                                <span className="TransactionDetails-Details">Details</span>
                            </span>
                            <span className="TransactionDetails-Payment">
                                Payment
                            </span>
                            <span className="TransactionDetails-Notes">
                                Notes
                            </span>
                        </div>
                    </div>
                    <div className="TransactionDetails-details">
                        Details
                    </div>

                    <div className="row">
                        <div className="col-8">
                            <div className="TransactionDetails-Details-PDF-Rectangle">

                                <div className="TransactionDetails-Details-pdf-Oval">
                                    <img src={threeDotVertical}
                                        className="TransactionDetails-threeDot" />
                                </div>
                                <div className="TransactionDetails-Details-pdf-Rectangle">
                                    <div className="TransactionDetails3dot-Rectangle">
                                        <div className="TransactionDetails3dot-Download">
                                            Download
                                        </div>
                                        <div className="TransactionDetails3dot-Rename-file">
                                            Rename File
                                        </div>
                                        <div className="TransactionDetails3dot-Delete">
                                            Delete
                                        </div>

                                    </div>
                                    {/* // for pdf */}
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="TransactionDetails-Payment-Rectangle">
                                <span className="TransactionDetails-Payments">
                                    Payments
                                </span>
                                <div className="TransactionDetails-Payment-Range-Input-Rectangle"></div>
                                <div className="TransactionDetails-Payment-Money"> ₹50,000.00 / ₹50,000.00</div>
                                <div className="TransactionDetails-Payment-History">
                                    History
                                </div>
                                <div className="TransactionDetails-Payment-Line"></div>
                                <img src={checkbox}
                                    className="TransactionDetails-Payment-Checkbox" />
                                <span className="TransactionDetails-Payment-Payment-Mode">
                                    Payment made ( ₹50,000.00)
                                </span>
                                <div className="TransactionDetails-Payment-Payment-Mode-Date">
                                    08 Aug, 2021  | 8:27 PM
                                </div>

                                <img src={checkbox}
                                    className="TransactionDetails-Payment-IncomeCreated-Checkbox" />
                                <div className="TransactionDetails-Payment-Income-Created">
                                    Income Created
                                </div>
                                <div className="TransactionDetails-Payment-Payment-Mode-Date">
                                    08 Aug, 2021  | 8:27 PM
                                </div>
                                <div className="TransactionDetails-Payment-VerticalLine-Rectangle"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );

}

export default TransactionDetails3dot;

