import React, { useState } from 'react';
import receiptImage from '../assets/receipt.svg';
import closeCircle from '../assets/close-circle-line-3.svg';
import radioButton1 from '../assets/radio-active.svg';
import radioButton2 from '../assets/radio-button-line-2.svg';
import questionMark from '../assets/question-line-1.svg';
import dropDownArrow from '../assets/arrow-down-s-line-copy.svg';
import autoCompleteChipsCircle from '../assets/close-circle-fill-2.svg';


import './NewExpenseOne.css';

const NewExpenseOne = (props) => {
    return (
        <>
            <div className="container">
                <div className="row Whole-Rectangle" style={{ height: "1160px" }}>
                    <div className="col-md-6 Left-Rectangle col-sm-12">
                        <div>
                            <img className="Img-receipt" src={receiptImage} alt="reciept image" />
                        </div>
                        <div className="Attach-a-receipt">
                            <span>Attach a receipt</span>
                        </div>
                        <div className="Click-to-upload">
                            <span>click to upload a file, or just drag & drop.</span>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div>
                            <span className="New-Expense">
                                New Expense
                            </span>
                            <span className="Shape"><img src={closeCircle} alt="close-mark" /></span>
                        </div>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="assignTo" className="form-label Assign-To">Assign To</label>
                                <input type="text"
                                    className="form-control Assign-To-Rectangle"
                                    id="assignTo"
                                    name="assignTo"
                                />
                                <div>
                                    <div className="AutoComplete-Chips-Rectangle">
                                        <span className="Medical-App">
                                            Medical App
                                        </span>
                                        <img src={autoCompleteChipsCircle}
                                            className="close-circle-fill-2" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span><img className="radioactive" src={radioButton1} alt="radio-button" /></span>
                                <span className="Tax-deducitble">Tax deducitble </span>
                                <span><img src={radioButton2} className="radio-button-line-2" /></span>
                                <span className="Billable-to-client"> Billable to client</span>

                            </div>
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12">
                                            <label htmlFor="total" className="form-label Total">Total</label>
                                            <input type="number" id="total" className="form-control Total-Rectangle" placeholder="Rs0.00" />
                                        </div>
                                        <div>
                                            <div className="INR-Rectangle">
                                                <span className="INR">
                                                    INR
                                                </span>
                                                <img src={dropDownArrow}
                                                    className="arrow-down-s-line-copy"
                                                />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <label htmlFor="date" className="form-label Date">Date</label>
                                    <input type="date" id="date" className="form-control Date-Rectangle" />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="Merchant" className="form-label Merchant">Merchant</label>
                                <input type="text" className="form-control Merchant-Rectangle" id="Merchant" name="Merchant" placeholder="Microsoft Co." />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="purpose" className="form-label Purpose">Purpose</label>
                                <input type="text" className="form-control Purpose-Rectangle" id="purpose" name="purpose" placeholder="Dinner with client" />
                            </div>
                            <div className="mb-3">
                                <div>
                                    <span className="Tax-Category">Tax Category</span><img src={questionMark} className="question-line-1" />

                                </div>
                                {/* <label htmlFor="category" className="form-label Tax-Category">Tax Category </label> */}
                                <select className="form-select Tax-Category-Rectangle" aria-label="Default select example">
                                    <option selected>Cost of goods and sold</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <span className="Tax-Included">
                                    Tax included
                                </span>
                                <span className="Shape " style={{ marginLeft: "385px" }}>
                                    <img src={closeCircle} alt="close-mark" />
                                </span>
                                <div className="row">
                                    <div className="col-3">
                                        <div className="Tax-Included-Rectangle">
                                            <span className="Percentage-Rectangle">
                                                <span className="Percentage-Color">
                                                    <h3><i className="bi bi-percent"></i></h3>
                                                </span>
                                            </span>
                                            <span>
                                                <span className="RS-Color">
                                                    RS
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <input
                                            type="text"
                                            id="date"
                                            className="form-control Tax-Label-Rectangle"
                                            placeholder="Tax-Label"
                                        />
                                    </div>
                                    <div className="col-4">
                                        <input
                                            type="text"
                                            id="date"
                                            className="form-control Tax-Rate-Rectangle"
                                            placeholder="Tax Rate"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="repeating" className="form-label Repeating">Repeating</label>
                                <select className="form-select Repeating-Rectangle" aria-label="Default select example">
                                    <option selected>One time</option>
                                    <option value="1">Daily</option>
                                    <option value="2">Weekly</option>
                                    <option value="3">Bi-weekly</option>
                                    <option value="3">Monthly</option>
                                    <option value="3">Yearly</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="addNote" className="form-label Add-NoteOne">Add Note</label>
                                <input type="text" className="form-control Add-NoteOne-Rectangle" id="addNote" name="addNote" placeholder="Here is a sample text will come..." />
                            </div>


                            <div className="mb-5 mt-5">
                                <span className="Cancel-Rectangle"><span className="Cancel">
                                    Cancel
                                </span></span>
                                <span className="Create-Rectangle"><span className="Create">
                                    Create
                                </span></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </>
    );

}

export default NewExpenseOne;

