import React from 'react';
import closeCircle from '../assets/close-circle-line-3.svg';
import dropDownArrow from '../assets/arrow-down-s-line-copy.svg';
import './EditPayment.css'


const EditPayment = (props) => {
    return (
        <div className="container EditPayment-Rectangle" >
            <div className="mb-2">
                <div className="Edit-Payment">Edit Payment</div>
                <img src={closeCircle}
                    className="img.close-circle-line-3" />
            </div>
            <div className="mb-4">
                <span className="Payment-created-At">
                    Payment created 30 Jul, 2021
                </span>
            </div>
            <form>
                <div className="row">
                    <div className="mb-3">
                        <label htmlFor="amount" className="form-label Amount">Amount</label>
                        <input
                            type="text"
                            id="amount"
                            className="form-control Amount-Rectangle"
                            placeholder="Rs0.00"
                        />
                        <div className="INR-EditPayment-Rectangle">
                            <span className="INR-EditPayment">
                                INR
                            </span>
                            <img src={dropDownArrow}
                                className="arrow-down-s-line-copy"
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="date" className="form-label EditPayment-Date">Date</label>
                        <input
                            type="date"
                            id="date"
                            className="form-control EditPayment-Date-Rectangle"
                        />
                    </div>
                    <div className="mt-5">
                        <span className="EditPayment-Cancel-Rectangle EditPayment-Cancel">
                            Cancel
                        </span>
                        <span className="EditPayment-Save-Rectangle EditPayment-Save">
                            Create
                        </span>
                    </div>
                </div>
            </form >
        </div >
    );
}

export default EditPayment;
