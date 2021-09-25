import React, { useState } from 'react';

import searchBar from '../assets/search-line-4.svg';
import notificationBar from '../assets/notification-2-line-2.svg';
import addSymbol from '../assets/add-line-1.svg';
import playSymbol from '../assets/play-circle-fill-3.svg';
import profileSymbol from '../assets/profile.svg';

import './TransactionNotes.css';


const TransactionNotes = (props) => {
    return (
        <>
            <div className="container">
                <div className="TransactionNotes-bg">
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

                            <span className="TransactionNotes-Payments">
                                Payment
                            </span>
                            <span className="TransactionNotes-Notes-Rectangle">
                                <span className="TransactionNotes-Notes">
                                    Notes
                                </span>
                            </span>

                        </div>
                    </div>
                    <div className="TransactionNotes-notes">
                        Notes
                    </div>
                    <div className="TransactionNotes-TextArea-Rectangle">
                        {/* <form>
                            <textarea
                                name="textarea"
                                id="textarea"
                                className="TransactionNotes-TextArea"
                                placeholder="Add a note.."
                            />
                        </form> */}

                        <div className="TransactionNotes-TextArea">
                            <div className="TransactionNotes-Add-a-note">
                                Add a note .....
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );

}

export default TransactionNotes;

