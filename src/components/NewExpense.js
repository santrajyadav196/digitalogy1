import React, { useState } from 'react';
import receiptImage from '../assets/receipt.svg';
import closeCircle from '../assets/close-circle-line-3.svg';
import radioButton1 from '../assets/radio-active.svg';
import radioButton2 from '../assets/radio-button-line-2.svg';
import questionMark from '../assets/question-line-1.svg';
import percentMark from '../assets/percent-line.svg';
import repeatLine from '../assets/repeat-line.svg';
import addNote from '../assets/edit-box-line-1.svg';


import './NewExpense.css';

const NewExpense = (props) => {
    const [enteredAssignTo, setEnteredAssignTo] = useState('');
    const [checked, setChecked] = useState('');

    const addNewExpenseHandler = (event) => {
        event.preventDefault();
        console.log(enteredAssignTo, checked);
        setEnteredAssignTo('');
    }

    const AssignToChangeHandler = (event) => {
        setEnteredAssignTo(event.target.value);
    }

    const radioChangeHandler = (event) => {
        setChecked(event.target.value);
    }

    return (
        <>
            <div className="container">
                <div className="row Whole-Rectangle">
                    <div className="col-sm-6 Left-Rectangle">
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
                    <div className="col-sm-6">
                        <div>
                            <span className="New-Expense">
                                New Expense
                            </span>
                            <span className="Shape"><img src={closeCircle} alt="close-mark" /></span>
                        </div>
                        <form onSubmit={addNewExpenseHandler}>
                            <div className="mb-3">
                                <label htmlFor="assignTo" className="form-label Assign-To">Assign To</label>
                                <input type="text"
                                    className="form-control Assign-To-Rectangle"
                                    id="assignTo" name="assignTo"
                                    placeholder="Medical app"
                                    value={enteredAssignTo}
                                    onChange={AssignToChangeHandler}
                                />
                            </div>
                            {/* <div className="form-check form-check-inline">
                                <label className="form-check-label Tax-deductable" htmlFor="TaxDeduction">
                                    Tax deduction
                                </label>

                                <input
                                    className="form-check-input Tax-deducitble-Rectangle"
                                    type="radio"
                                    name="Taxable"
                                    id="TaxDeduction"
                                    value="Tax deduction"
                                    checked={checked.Taxable === "Tax deduction"}
                                    onChange={radioChangeHandler}
                                    selected
                                />
                            </div>
                            <div className="form-check form-check-inline">

                                <label className="form-check-label Billable-to-client" htmlFor="BillableToClient">
                                    Billable to client
                                </label>
                                <input
                                    className="form-check-input Billable-to-client-Rectangle"
                                    type="radio"
                                    name="Taxable"
                                    id="BillableToClient"
                                    value="Billable to client"
                                    checked={checked.Taxable === "Billable to client"}
                                    onChange={radioChangeHandler}
                                />
                            </div> */}

                            <div>
                                <span><img className="radioactive" src={radioButton1} alt="radio-button" /></span>
                                <span className="Tax-deducitble">Tax deducitble </span>
                                <span><img src={radioButton2} className="radio-button-line-2" /></span>
                                <span className="Billable-to-client"> Billable to client</span>

                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="total" className="form-label Total">Total</label>
                                            <input type="number" id="total" className="form-control Total-Rectangle" placeholder="Rs0.00" />
                                        </div>
                                        <div className="col Total-Selector">
                                            <select id="total" className="form-select Total-Selector-Rectangle">
                                                <option selected>AEU</option>
                                                <option>ABC</option>
                                                <option>CDE</option>
                                                <option>EFG</option>
                                                <option>HIJ</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <label htmlFor="date" className="form-label Date">Date</label>
                                    <input type="date" id="date" className="form-control Date-Rectangle" />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="marchant" className="form-label Merchant">Marchant</label>
                                <input type="text" className="form-control Marchant-Rectangle" id="marchant" name="marchant" placeholder="Microsoft Co." />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="purpose" className="form-label Purpose">Purpose</label>
                                <input type="text" className="form-control Purpose-Rectangle" id="purpose" name="purpose" placeholder="Dinner with client" />
                            </div>
                            <div className="mb-3">
                                <div>
                                    <span className="Tax-Category">Tax Category</span><img src={questionMark} className="question-line-1" />

                                </div>
                                {/* <label htmlFor="purpose" className="form-label Tax-Category">Tax Category </label> */}
                                <select className="form-select Tax-Category-Rectangle" aria-label="Default select example">
                                    <option selected>Cost of goods and sold</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            {/* <div className="mb-3">
                                <label htmlFor="addNote" className="form-label">Purpose</label>
                                <input type="text" className="form-control" id="addNote" name="addNote" placeholder="Dinner with client" />
                            </div> */}

                            {/* <div className="mb-3">
                                <label htmlFor="repeating" className="form-label">Repeating</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>One time</option>
                                    <option value="1">Daily</option>
                                    <option value="2">Weekly</option>
                                    <option value="3">Bi-weekly</option>
                                    <option value="3">Monthly</option>
                                    <option value="3">Yearly</option>
                                </select>
                            </div> */}

                            {/* <div className="mb-3">
                                <label htmlFor="addNote" className="form-label">Add Note</label>
                                <input type="text" className="form-control" id="addNote" name="addNote" placeholder="Here is a sample text will come..." />
                            </div> */}

                            <div>
                                <span className="Include-taxes-Rectangle"><img src={percentMark} className="percent-line" /><span className="Include-Taxes">
                                    Include Taxes
                                </span></span>
                                <span className="Repeat-Rectangle"><img src={repeatLine}
                                    className="repeat-line" /><span className="Make-Repeating">
                                        Make Repeating
                                    </span></span>
                                <span className="Add-Note-Rectangle">
                                    <img src={addNote}
                                        className="edit-box-line-1" /><span className="Add-Note">
                                        Add Note
                                    </span>
                                </span>
                            </div>

                            <div>
                                <span className="Cancel-Rectangle"><span className="Cancel">
                                    Cancel
                                </span></span>
                                <span className="Create-Rectangle"><span className="Create">
                                    Create
                                </span></span>
                            </div>

                            {/* <div className="mb-3">
                                <button type="submit" className="btn Cancel-Rectangle">Cancel</button>
                                <button type="submit" className="btn Submit-Rectangle">Create</button>
                            </div> */}
                        </form>
                    </div>
                </div>
            </div>
        </>
    );

}

export default NewExpense;

