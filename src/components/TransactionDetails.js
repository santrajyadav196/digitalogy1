import React, { useState } from 'react';

import searchBar from '../assets/search-line-4.svg';
import notificationBar from '../assets/notification-2-line-2.svg';
import addSymbol from '../assets/add-line-1.svg';
import playSymbol from '../assets/play-circle-fill-3.svg';
import profileSymbol from '../assets/profile.svg';
import threeDotVertical from '../assets/three-dot-vertical.svg';
import checkbox from '../assets/brand-color-checkbox.svg';
import dropDownArrow from '../assets/arrow-down-s-line-copy.svg';
import autoCompleteChipsCircle from '../assets/close-circle-fill-2.svg';


import './TransactionDetails.css';


const TransactionDetails = (props) => {
    return (
        <>
            <div className="container">
                <div className="TransactionDetails-bg">
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

                    <form>
                        <div className="mb-3">
                            <label
                                htmlFor="source"
                                className="form-label TransactionDetailsSource">
                                Source
                            </label>
                            <input
                                type="text"
                                id="source"
                                className="form-control TransactionDetailsSource-Rectangle"
                                placeholder="Hudson Agency"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="Description"
                                className="form-label TransactionDetailsDescription">
                                Description
                            </label>
                            <input
                                type="text"
                                id="Description"
                                className="form-control TransactionDetailsDescription-Rectangle"
                                placeholder="Sample text here ................."
                            />
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="mb-3">
                                    <label
                                        htmlFor="Amount"
                                        className="form-label TransactionDetailsAmount">
                                        Amount
                                    </label>
                                    <input
                                        type="text"
                                        id="Amount"
                                        className="form-control TransactionDetailsAmount-Rectangle"
                                        placeholder="₹50,000.00"
                                    />
                                    <div className="INR-EditPayment-Rectangle" style={{ margin: "-48px 0px 0 189px" }}>
                                        <span className="INR-EditPayment">
                                            INR
                                        </span>
                                        <img src={dropDownArrow}
                                            className="arrow-down-s-line-copy"
                                        />
                                    </div>
                                </div>

                            </div>
                            <div className="col-6">
                                <div className="mb-3">
                                    <label
                                        htmlFor="Date"
                                        className="form-label TransactionDetailsDate">
                                        Date
                                    </label>
                                    <input
                                        type="date"
                                        id="Date"
                                        className="form-control TransactionDetailsDate-Rectangle"

                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="AssignTo"
                                className="form-label TransactionDetailsAssign-To">
                                Assign To
                            </label>
                            <input
                                type="text"
                                id="AssignTo"
                                className="form-control TransactionDetailsAssign-To-Rectangle"
                            />
                            <div className="AutoComplete-Chips-Rectangle" style={{ margin: "-47px 10px 36px 42px" }}>
                                <span className="Medical-App">
                                    Medical App
                                </span>
                                <img src={autoCompleteChipsCircle}
                                    className="close-circle-fill-2" />
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="row">
                                <div className="col-4">
                                    <div className="TransactionDetails-CancelChanges-Rectangle">
                                        <span className="TransactionDetails-CancelChanges">
                                            Cancel Changes
                                        </span>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="TransactionDetails-SaveChanges-Rectangle">
                                        <span className="TransactionDetails-SaveChanges">
                                            Save Changes
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </div>

        </>
    );

}

export default TransactionDetails;

