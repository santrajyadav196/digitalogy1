import React, { useState } from 'react';

import searchBar from '../assets/search-line-4.svg';
import notificationBar from '../assets/notification-2-line-2.svg';
import addSymbol from '../assets/add-line-1.svg';
import playSymbol from '../assets/play-circle-fill-3.svg';
import profileSymbol from '../assets/profile.svg';
import blackDropDown from '../assets/arrow-down-black.svg';
import copyAttachment from '../assets/brand-color-copy.svg';
import exportSymbol from '../assets/export.svg';


import './Proposals.css';


const Proposals = (props) => {
    return (
        <>
            <div className="container">
                <div className="Proposals-bg">
                    <div className="Navbar-Rectangle">
                        <div className="row">
                            <div className="col-7">
                                <div className="Navbar-Unity-Name">
                                    Proposals
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
                    <span className="Proposals-Add-NewProposals-Rectangle">
                        <img src={addSymbol}
                            className="Navbar-Add" />
                        <span class="Proposals-Add-NewProposals">
                            New Proposals
                        </span>
                    </span>

                    <span class="Proposals-Filter">
                        Filter
                    </span>
                    <span class="Proposals-VerticalBar-Rectangle"></span>
                    <span className="Proposals-Sort">
                        Sort
                    </span>
                    <img src={blackDropDown}
                        className="Proposals-DropDown" />

                    <div className="Proposals-Rectangle">
                        <div className="Proposals-Header-Rectangle">
                            <div class="row">
                                <div class="col-2">
                                    <div className="Proposals-Header-Project">
                                        Project
                                    </div>
                                </div>
                                <div class="col-2">
                                    <div className="Proposals-Header-Provider">
                                        Provider
                                    </div>
                                </div>
                                <div class="col-2">
                                    <div className="Proposals-Header-Start">
                                        Start
                                    </div>
                                </div>
                                <div class="col-2">
                                    <div className="Proposals-Header-Ends-Expires">
                                        Ends-Expires
                                    </div>
                                </div>
                                <div class="col-2">
                                    <div className="Proposals-Header-Status">
                                        Status
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="Proposals-Header-Details-Rectangle">
                            <div class="row">
                                <div class="col-2">
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="Proposals-Header-Project-Name">
                                                Fashion App
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="Proposals-Header-Project-NameInfo">
                                                Proposal
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-2">
                                    <div class="Proposals-Header-Provider-Name">
                                        Hudson Agency
                                    </div>
                                </div>
                                <div class="col-2">
                                    <div class="Proposals-Header-Start-Date">
                                        19 Oct 2021
                                    </div>
                                </div>
                                <div class="col-2">
                                    <div class="Proposals-Header-Ends-Expire-Date">
                                        19 Oct 2021
                                    </div>
                                </div>
                                <div class="col-2">
                                    <div class="Proposals-Header-Status-Rectangle">
                                        <div className="Proposals-Header-Status-Name">
                                            Draft
                                        </div>
                                    </div>
                                </div>
                                <div class="col-2">
                                    <img src={copyAttachment}
                                        className="Proposals-Copy" />
                                    {/* <img src={exportSymbol}
                                        class="export"> */}
                                </div>

                            </div>

                        </div>
                        <div className="Proposals-Header-Details-Rectangle">

                        </div>
                        <div className="Proposals-Header-Details-Rectangle">

                        </div>
                        <div className="Proposals-Header-Details-Rectangle">

                        </div>

                    </div>


                </div>
            </div>

        </>
    );

}

export default Proposals;

