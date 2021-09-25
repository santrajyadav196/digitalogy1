import React, { useState } from 'react';

import searchBar from '../assets/search-line-4.svg';
import notificationBar from '../assets/notification-2-line-2.svg';
import addSymbol from '../assets/add-line-1.svg';
import playSymbol from '../assets/play-circle-fill-3.svg';
import profileSymbol from '../assets/profile.svg';
import whiteDropDown from '../assets/arrow-down-s-line.svg';
import blackDropDown from '../assets/arrow-down-black.svg';
import imageDownloader from '../assets/download-2-line-3.svg';
import dropDownArrow from '../assets/arrow-down-s-line-copy.svg';
import rupeesSymbol from '../assets/rupees-path.svg';
import greenArrow from '../assets/green-arrow-path.svg';
import redArrow from '../assets/red-down-arrow.svg';
import fileAttachmentSymbol from '../assets/attachment-line-1.svg';
import copyAttachment from '../assets/brand-color-copy.svg';
import coloredEditSymbol from '../assets/coloredEdit.svg';
import coloredDeleteSymbol from '../assets/coloredDelete.svg';


import './Transaction.css';


const Transaction = (props) => {
    return (
        <>
            <div className="container">
                <div className="Transaction-bg">
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



                    <div className="row">
                        <div className="col-2">
                            <div className="Transaction-NewExpense-Rectangle">
                                <img src={addSymbol}
                                    className="Navbar-Add" />
                                <span className="Transaction-New-Expense">
                                    New Expense
                                </span>
                            </div>
                        </div>
                        <div className="col-1">
                            <div className="Transaction-New-Expense-DropDown-Rectangle">
                                <img src={whiteDropDown}
                                    className="Transaction-New-Expense-DropDown" />
                            </div>
                        </div>
                        <div className="col-1">
                            <div className="Transaction-Bulk-Edit-Rectangle">
                                <span className="Transaction-Bulk-Edit">
                                    Bulk Edit
                                </span>
                                <img src={blackDropDown}
                                    className="Transaction-New-Expense-DropDown" />
                            </div>
                            {/* <select className="form-select Transaction-Bulk-Edit-Rectangle" aria-label="Default select example">
                                    <option selected>Bulk Edit</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select> */}
                        </div>
                        <div className="col-5"></div>
                        <div className="col-1 Transaction-Filter-Padding">
                            <span className="Transaction-Filter">
                                Filter
                            </span>
                            <span className="Transaction-StrightLinePartition-Rectangle">
                            </span>
                        </div>
                        <div className="col-1 Transaction-Filter-Padding">
                            <span className="Transaction-Sort">
                                Sort
                            </span>
                            <img src={blackDropDown}
                                className="Transaction-New-Expense-DropDown" />
                        </div>
                        <div className="col-1">
                            <div className="Transaction-Oval">
                                <img src={imageDownloader}
                                    className="Transaction-Image-downloader" />
                            </div>
                        </div>
                    </div>
                    <div className="Transaction-Graph-Rectangle">
                        <div className="row">
                            <div className="col-5">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="Transaction-Profit-before-taxes">
                                            Profit before taxes
                                        </div>
                                        <div>
                                            <img src={rupeesSymbol}
                                                className="Transaction-Rupees-Symbol" />
                                            <span className="Transaction-Amount">
                                                5000.00
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="Transaction-Graph-Filter-Rectangle">
                                            <span className="Transaction-Graph-Selector">
                                                Current Year
                                            </span>
                                            <img src={dropDownArrow}
                                                className="Transaction-Graph-Arrow-Down"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="Transaction-Path-5" />
                                <div className="row">
                                    <div className="col-6">
                                        <img
                                            src={greenArrow}
                                            className="Transaction-Green-Arrow"
                                        />
                                        <span className="Transaction-Graph-Income">
                                            ₹ 300.00 income
                                        </span>
                                    </div>
                                    <div className="col-6">
                                        <img
                                            src={redArrow}
                                            className="Transaction-Red-Arrow"
                                        />
                                        <span className="Transaction-Graph-Expenses">
                                            ₹ 300.00 income
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7 Transaction-Graph-col-7">
                                <span className="Transaction-Graph-Chart-Rectangle">
                                    <span className="Transaction-Graph-Month-Name">J</span>
                                </span>
                                <span className="Transaction-Graph-Chart-Rectangle">
                                    <span className="Transaction-Graph-Month-Name">F</span>
                                </span>
                                <span className="Transaction-Graph-Chart-Rectangle">
                                    <span className="Transaction-Graph-Month-Name">M</span>
                                </span>
                                <span className="Transaction-Graph-Chart-Rectangle">
                                    <span className="Transaction-Graph-Month-Name">A</span>
                                </span>
                                <span className="Transaction-Graph-Chart-Rectangle">
                                    <span className="Transaction-Graph-Month-Name">M</span>
                                </span>
                                <span className="Transaction-Graph-Chart-Rectangle">
                                    <span className="Transaction-Graph-Month-Name">J</span>
                                </span>
                                <span className="Transaction-Graph-Chart-Rectangle">
                                    <span className="Transaction-Graph-Month-Name">J</span>
                                </span>
                                <span className="Transaction-Graph-Chart-Rectangle">
                                    <span className="Transaction-Graph-Month-Name">A</span>
                                </span>
                                <span className="Transaction-Graph-Chart-Rectangle">
                                    <span className="Transaction-Graph-Month-Name">S</span>
                                </span>
                                <span className="Transaction-Graph-Chart-Rectangle">
                                    <span className="Transaction-Graph-Month-Name">O</span>
                                </span>
                                <span className="Transaction-Graph-Chart-Rectangle">
                                    <span className="Transaction-Graph-Month-Name">N</span>
                                </span>
                                <span className="Transaction-Graph-Chart-Rectangle">
                                    <span className="Transaction-Graph-Month-Name">D</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="Transaction-Details-Rectangle">
                        <div className="row">
                            <div className="col-2">
                                <span className="Transaction_Description">
                                    Description
                                </span>
                            </div>
                            <div className="col-2">
                                <span className="Transaction_SourceMerchant">
                                    Source/Merchant
                                </span>
                            </div>
                            <div className="col-2">
                                <span className="Transaction_Category">
                                    Category
                                </span>
                            </div>
                            <div className="col-2">
                                <span className="Transaction_Date">
                                    Date
                                </span>
                            </div>
                            <div className="col-2">
                                <span className="Transaction_Amount">
                                    Amount
                                </span>
                            </div>
                            <div className="col-2">
                            </div>
                        </div>
                    </div>
                    <div className="Transaction-Detail-Rectangle">
                        <div className="row">
                            <div className="col-2">
                                <img
                                    src={greenArrow}
                                    className="Transaction_Green_Arrow"
                                />
                                {/* <img
                                    src={redArrow}
                                    className="Transaction_Green_Arrow"
                                /> */}
                                <span className="Transaction_Description_Name">
                                    Invoice 1..............
                                </span>
                            </div>
                            <div className="col-2">
                                <span className="Transaction_Source_Name">
                                    Hudson Agency.......
                                </span>
                            </div>
                            <div className="col-2">
                                <span className="Transaction_Category_Name">
                                    Revenue.......
                                </span>
                            </div>
                            <div className="col-2">
                                <span className="Transaction_Detail_Date">
                                    14 Jul 2021
                                </span>
                            </div>
                            <div className="col-2">
                                <img src={rupeesSymbol}
                                    className="Transaction_RupeesSymbol" />
                                <span className="Transaction_Detail_Amount">
                                    9394
                                </span>
                            </div>
                            <div className="col-2">
                                <img src={fileAttachmentSymbol}
                                    className="Transaction-File-Attachment" />
                                <img src={copyAttachment}
                                    className="Transaction-copy" />
                                <img src={coloredEditSymbol}
                                    className="Transaction-edit" />

                                <img src={coloredDeleteSymbol}
                                    className="Transaction-delete" />
                            </div>
                        </div>
                    </div>

                    <div className="Transaction-Detail-Rectangle">
                        <div className="row">
                            <div className="col-2">
                                <img
                                    src={greenArrow}
                                    className="Transaction_Green_Arrow"
                                />
                                {/* <img
                                    src={redArrow}
                                    className="Transaction_Green_Arrow"
                                /> */}
                                <span className="Transaction_Description_Name">
                                    Invoice 1..............
                                </span>
                            </div>
                            <div className="col-2">
                                <span className="Transaction_Source_Name">
                                    Hudson Agency.......
                                </span>
                            </div>
                            <div className="col-2">
                                <span className="Transaction_Category_Name">
                                    Revenue.......
                                </span>
                            </div>
                            <div className="col-2">
                                <span className="Transaction_Detail_Date">
                                    14 Jul 2021
                                </span>
                            </div>
                            <div className="col-2">
                                <img src={rupeesSymbol}
                                    className="Transaction_RupeesSymbol" />
                                <span className="Transaction_Detail_Amount">
                                    9394
                                </span>
                            </div>
                            <div className="col-2">
                                <img src={fileAttachmentSymbol}
                                    className="Transaction-File-Attachment" />
                                <img src={copyAttachment}
                                    className="Transaction-copy" />
                                <img src={coloredEditSymbol}
                                    className="Transaction-edit" />

                                <img src={coloredDeleteSymbol}
                                    className="Transaction-delete" />
                            </div>
                        </div>
                    </div>

                    <div className="Transaction-Detail-Rectangle">
                        <div className="row">
                            <div className="col-2">
                                {/* <img
                                    src={greenArrow}
                                    className="Transaction_Green_Arrow"
                                /> */}
                                <img
                                    src={redArrow}
                                    className="Transaction_Green_Arrow"
                                />
                                <span className="Transaction_Description_Name">
                                    Invoice 1..............
                                </span>
                            </div>
                            <div className="col-2">
                                <span className="Transaction_Source_Name">
                                    Hudson Agency.......
                                </span>
                            </div>
                            <div className="col-2">
                                <span className="Transaction_Category_Name">
                                    Revenue.......
                                </span>
                            </div>
                            <div className="col-2">
                                <span className="Transaction_Detail_Date">
                                    14 Jul 2021
                                </span>
                            </div>
                            <div className="col-2">
                                <img src={rupeesSymbol}
                                    className="Transaction_RupeesSymbol" />
                                <span className="Transaction_Detail_Amount">
                                    9394
                                </span>
                            </div>
                            <div className="col-2">
                                <img src={fileAttachmentSymbol}
                                    className="Transaction-File-Attachment" />
                                <img src={copyAttachment}
                                    className="Transaction-copy" />
                                <img src={coloredEditSymbol}
                                    className="Transaction-edit" />

                                <img src={coloredDeleteSymbol}
                                    className="Transaction-delete" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );

}

export default Transaction;

