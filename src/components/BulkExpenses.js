import React, { useState } from 'react';
import receiptImage from '../assets/receipt.svg';
import closeCircle from '../assets/close-circle-line-3.svg';
import questionMark from '../assets/question-line-1.svg';
import plusCircle from '../assets/close-plus-circle-line.svg';
import dropDownArrow from '../assets/arrow-down-s-line-copy.svg';
import autoCompleteChipsCircle from '../assets/close-circle-fill-2.svg';

import './BulkExpenses.css';

const BulkExpenses = (props) => {
    return (
        <>
            <div className="container">
                <div className="BulkExpenses-Rectangle">
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
                                <div class="mb-3">
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
                                <div class="mb-3">
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
                                <div className="mb-5">
                                    <img src={plusCircle}
                                        class="close-plus-circle-line" />
                                    <span className="BulkExpenses-Advance">Advance</span>
                                </div>
                                <div className="mt-5">
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

export default BulkExpenses;

