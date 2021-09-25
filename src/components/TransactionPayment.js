import React, { useState } from 'react';

import searchBar from '../assets/search-line-4.svg';
import notificationBar from '../assets/notification-2-line-2.svg';
import addSymbol from '../assets/add-line-1.svg';
import playSymbol from '../assets/play-circle-fill-3.svg';
import profileSymbol from '../assets/profile.svg';
import rupeesSymbol from '../assets/rupees-path.svg';
import sendingSymbol from '../assets/send-plane-line.svg';
import coloredEditSymbol from '../assets/coloredEdit.svg';
import coloredDeleteSymbol from '../assets/coloredDelete.svg';

import './TransactionPayment.css';


const TransactionPayment = (props) => {
    return (
        <>
            <div className="container">
                <div className="TransactionPayment-bg">
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

                            <span className="TransactionPayment-details">
                                Details
                            </span>
                            <span className="TransactionPayment-Payments-Rectangle">
                                <span className="TransactionPayment-Payments">
                                    Payment
                                </span>
                            </span>
                            <span className="TransactionDetails-Notes">
                                Notes
                            </span>
                        </div>
                    </div>
                    <div className="TransactionPayment-Payment">
                        Payment
                    </div>
                    <div className="TransactionPayment-Header-Rectangle">
                        <div className="row">
                            <div className="col-3">
                                <div className="TransactionPayment-Header-Client">
                                    Client
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="TransactionPayment-Header-Provider">
                                    Provider
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="TransactionPayment-Header-Date">
                                            Date
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="TransactionPayment-Header-Amount">
                                            Amount
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="TransactionPayment-Rectangle">
                        <div className="row">
                            <div className="col-3">
                                <div className="TransactionPayment-Client-Name">
                                    Hudson Agency .............
                                </div>
                                <div className="TransactionPayment-Client-text">
                                    Sample text here....
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="TransactionPayment-Provider-Name">
                                    Fashan App ..................
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="TransactionPayment-Date-Dates">
                                            19 Oct 2021
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <img src={rupeesSymbol}
                                            className="TransactionPayment-Rupees-Symbol" />
                                        <div className="TransactionPayment-Rupees">
                                            9394
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <img src={sendingSymbol}
                                    className="TransactionPayment-SendingFileSymbol" />

                                <img src={coloredEditSymbol}
                                    className="Transaction-edit" />

                                <img src={coloredDeleteSymbol}
                                    className="Transaction-delete" />
                            </div>
                        </div>
                    </div>
                    <div className="TransactionPayment-Rectangle">

                    </div>
                    <div className="TransactionPayment-Rectangle">

                    </div>
                    <div className="TransactionPayment-Rectangle">

                    </div>
                    <div className="TransactionPayment-Rectangle">

                    </div>

                </div>
            </div>

        </>
    );

}

export default TransactionPayment;

