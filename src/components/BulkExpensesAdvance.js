import React, { useState } from 'react';
import receiptImage from '../assets/receipt.svg';
import closeCircle from '../assets/close-circle-line-3.svg';
import questionMark from '../assets/question-line-1.svg';
import imageAddIcon from '../assets/image-add-line.svg';
import dropDownArrow from '../assets/arrow-down-s-line-copy.svg';
import autoCompleteChipsCircle from '../assets/close-circle-fill-2.svg';

import './BulkExpensesAdvance.css';

const BulkExpensesAdvance = (props) => {
    return (
        <>
            <div className="container">
                <div className="BulkExpenses-Rectangle" style={{ height: "1025px" }}>
                    <div className="row">
                        <div className="col">
                            <div className="BulkExpenses-Left-Rectangle">
                                <img
                                    className="img-receipt-toBulkExpenses"
                                    src={receiptImage} alt="reciept image"
                                />
                                <div className="No-Expenses-yet">
                                    No Expenses yet
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <span className="BulkExpenses-New-Expense">
                                New Expense
                            </span>
                            <span className="Shape">
                                <img src={closeCircle} alt="close-mark" />
                            </span>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="assignTo" className="form-label BulkExpenses-AssignTo">Assign To</label>
                                    <input type="text"
                                        className="form-control BulkExpenses-AssignTo-Rectangle"
                                        id="assignTo"
                                        name="assignTo"
                                    />
                                    <div className="AutoComplete-Chips-Rectangle" style={{ margin: "-48px 10px 24px -6px" }}>
                                        <span className="Medical-App">
                                            Medical App
                                        </span>
                                        <img src={autoCompleteChipsCircle}
                                            className="close-circle-fill-2" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="category" className="form-label BulkExpenses-Category">
                                        Category
                                        <img
                                            src={questionMark}
                                            className="question-line-1"
                                        />
                                    </label>
                                    <select className="form-select BulkExpenses-Category-Rectangle" aria-label="Default select example">
                                        <option selected>Business Insurance</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="purpose"
                                        className="form-label BulkExpenses-Purpose">
                                        Purpose
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control BulkExpenses-Purpose-Rectangle"
                                        id="purpose"
                                        name="purpose"
                                        placeholder="Dinner with client"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="total"
                                        className="form-label BulkEexpenses-Total">
                                        Total
                                    </label>
                                    <input
                                        type="text"
                                        id="total"
                                        className="form-control BulkExpenses-Total-Rectangle"
                                        placeholder="Rs0.00"
                                    />
                                    <div className="INR-Rectangle" style={{ margin: "-48px 0px 0 466px" }}>
                                        <span className="INR">
                                            INR
                                        </span>
                                        <img src={dropDownArrow}
                                            className="arrow-down-s-line-copy"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col col-md-6 col-sm-12">
                                        <div className="mb-3">
                                            <label
                                                htmlFor="billToProject"
                                                className="form-label BulkExpenses-Bill-To-Project">
                                                Bill To (Project)
                                            </label>
                                            <input type="text"
                                                className="form-control BulkExpenses-Bill-To-Project-Rectangle"
                                                id="billToProject"
                                                name="billToProject"
                                            />
                                            <div className="AutoComplete-Chips-Rectangle" style={{ margin: "-48px 10px 24px -6px" }}>
                                                <span className="Medical-App">
                                                    Medical App
                                                </span>
                                                <img src={autoCompleteChipsCircle}
                                                    className="close-circle-fill-2" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-md-6 col-sm-12">
                                        <div className="mb-3">
                                            <label
                                                htmlFor="spent"
                                                className="form-label BulkExpenses-Spent">
                                                Spent
                                            </label>
                                            <input type="date"
                                                className="form-control BulkExpenses-Spent-Rectangle"
                                                id="spent"
                                                name="spent"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col col-md-6 col-sm-12">
                                        <div className="mb-3">
                                            <label
                                                htmlFor="time"
                                                className="form-label BulkExpenses-Time">
                                                Time
                                            </label>
                                            <select className="form-select BulkExpenses-Time-Rectangle" aria-label="Default select example">
                                                <option value="1">Daily</option>
                                                <option value="2" selected>Weekly</option>
                                                <option value="3">Monthly</option>
                                                <option value="4">Yearly</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col col-md-6 col-sm-12">
                                        <div className="mb-3">
                                            <label
                                                htmlFor="stopOn"
                                                className="form-label BulkExpenses-Stop-On">
                                                Stop On
                                            </label>
                                            <input type="date"
                                                className="form-control BulkExpenses-Stop-On-Rectangle"
                                                id="stopOn"
                                                name="stopOn"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="Receipt-Rectangle">
                                    <img src={imageAddIcon}
                                        className="image-add-line" />
                                    <span className="BulkExpenses-Add-Receipt">
                                        Add Receipt
                                    </span>
                                </div>
                                <div className="mt-5 BulkExpenses">
                                    <span className="BulkExpenses-Cancel-Rectangle">
                                        <span className="BulkExpenses-Cancel">
                                            Cancel
                                        </span>
                                    </span>
                                    <span className="BulkExpenses-Create-Rectangle">
                                        <span className="BulkExpenses-Create">
                                            Create
                                        </span>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BulkExpensesAdvance;

