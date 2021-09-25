import React, { useState } from 'react';
import closeCircle from '../assets/close-circle-line-3.svg';

import './TransactionFilter.css';

const TransactionFilter = (props) => {
    return (
        <>
            <div className="container">
                <div className="TransactionFilter-Rectangle">
                    <span className="Transaction-Filter">
                        Filter
                    </span>
                    <span className="Transaction-Path">
                        <img src={closeCircle} alt="close-mark" />
                    </span>
                    <form>
                        <div className="mb-3">
                            <label
                                htmlFor="date-range"
                                className="form-label TransactionFilter-Date-Range">
                                Date Range
                            </label>
                            <select
                                className="form-select Transaction-Filter-Rectangle"
                                aria-label="Default select example"
                            >
                                <option selected>All Time</option>
                                <option value="1">Last One Week</option>
                                <option value="2">Last Month</option>
                                <option value="3">Last Three Month</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="client"
                                className="form-label TransactionFilter-Client">
                                Client
                            </label>
                            <select
                                className="form-select Transaction-Filter-Rectangle"
                                aria-label="Default select example"
                            >
                                <option selected>All Client</option>

                            </select>
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="project"
                                className="form-label TransactionFilter-Project">
                                Project
                            </label>
                            <select
                                className="form-select Transaction-Filter-Rectangle"
                                aria-label="Default select example"
                            >
                                <option selected>All Project</option>

                            </select>
                        </div>

                        <div className="mb-3">
                            <label
                                htmlFor="transactions"
                                className="form-label TransactionFilter-Transactions">
                                Project
                            </label>
                            <select
                                className="form-select Transaction-Filter-Rectangle"
                                aria-label="Default select example"
                            >
                                <option selected>All Transactions</option>

                            </select>
                        </div>
                        <div className="row">
                            <div className="col-6 Clear-Filters-Rectangle">
                                <span className="Clear-Filters">
                                    Clear Filters
                                </span>
                            </div>
                            <div className="col-6 Apply-Filters-Rectangle">
                                <span className="Apply-Filters">
                                    Apply
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default TransactionFilter;
