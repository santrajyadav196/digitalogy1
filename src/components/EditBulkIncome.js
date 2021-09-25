
import React, { useState } from 'react';
import closeCircle from '../assets/close-circle-line-3.svg';
import checkbox from "../assets/checkbox-line-1.svg";
import coloredCheckbox from '../assets/checkbox.svg';
import coloredArrow from '../assets/green-arrow-path.svg';
import rupeesSymbol from '../assets/rupees-path.svg';
import fileAttachmentSymbol from '../assets/attachment-line-1.svg';
import forMore from '../assets/delete-bin-6-line-copy.svg';
import deleteSymbol from '../assets/delete.svg';
import editSymbol from '../assets/edit.svg';

import './EditBulkIncome.css';

const EditBulkIncome = (props) => {
    return (
        <>
            <div className="container">
                <div className="EditBulkIncome-Rectangle">
                    <span className="Edit-Bulk-Income">Edit Bulk Income</span>
                    <span className="Shape"><img src={closeCircle} alt="close-mark" /></span>
                    <div className="Edit-Bulk">
                        <div className="Details-Rectangle">
                            <img
                                src={coloredCheckbox}
                                className="checkbox"
                            />
                            {/* <img src={checkbox}
                                    className="checkbox-line-1"
                                /> */}
                            <img
                                src={coloredArrow}
                                className="Arrow-Path"
                            />

                            <span className="Invoice-1">
                                Invoice 1
                            </span>
                            <span className="Hudson-Agency">
                                HudsonAgency
                            </span>
                            <span className="Revenue">
                                Revenue
                            </span>
                            <span className="Edit-Bulk-Income-Date">
                                14 Jul 2021
                            </span>
                            <img src={rupeesSymbol}
                                className="Rupees-Path" />
                            <span className="Edit-Bulk-Income-Rupees">
                                9394
                            </span>
                            <img src={fileAttachmentSymbol}
                                className="attachment-line-1" />
                            <img src={forMore}
                                className="delete-bin-6-line-copy" />
                        </div>
                        <div className="Details-Rectangle">
                            <img
                                src={coloredCheckbox}
                                className="checkbox"
                            />
                            {/* <img src={checkbox}
                                    className="checkbox-line-1"
                                /> */}
                            <img
                                src={coloredArrow}
                                className="Arrow-Path"
                            />

                            <span className="Invoice-1">
                                Invoice 1
                            </span>
                            <span className="Hudson-Agency">
                                HudsonAgency
                            </span>
                            <span className="Revenue">
                                Revenue
                            </span>
                            <span className="Edit-Bulk-Income-Date">
                                14 Jul 2021
                            </span>
                            <img src={rupeesSymbol}
                                className="Rupees-Path" />
                            <span className="Edit-Bulk-Income-Rupees">
                                9394
                            </span>
                            <img src={fileAttachmentSymbol}
                                className="attachment-line-1" />
                            <img src={forMore}
                                className="delete-bin-6-line-copy" />
                        </div>
                        <div className="Details-Rectangle">
                            {/* <img
                                src={coloredCheckbox}
                                className="checkbox"
                            /> */}
                            <img src={checkbox}
                                className="checkbox-line-1"
                            />
                            <img
                                src={coloredArrow}
                                className="Arrow-Path"
                            />

                            <span className="Invoice-1">
                                Invoice 1
                            </span>
                            <span className="Hudson-Agency">
                                HudsonAgency
                            </span>
                            <span className="Revenue">
                                Revenue
                            </span>
                            <span className="Edit-Bulk-Income-Date">
                                14 Jul 2021
                            </span>
                            <img src={rupeesSymbol}
                                className="Rupees-Path" />
                            <span className="Edit-Bulk-Income-Rupees">
                                9394
                            </span>
                            <img src={fileAttachmentSymbol}
                                className="attachment-line-1" />
                            <img src={forMore}
                                className="delete-bin-6-line-copy" />
                        </div>
                        <div className="Details-Rectangle">
                            <img
                                src={coloredCheckbox}
                                className="checkbox"
                            />
                            {/* <img src={checkbox}
                                    className="checkbox-line-1"
                                /> */}
                            <img
                                src={coloredArrow}
                                className="Arrow-Path"
                            />

                            <span className="Invoice-1">
                                Invoice 1
                            </span>
                            <span className="Hudson-Agency">
                                HudsonAgency
                            </span>
                            <span className="Revenue">
                                Revenue
                            </span>
                            <span className="Edit-Bulk-Income-Date">
                                14 Jul 2021
                            </span>
                            <img src={rupeesSymbol}
                                className="Rupees-Path" />
                            <span className="Edit-Bulk-Income-Rupees">
                                9394
                            </span>
                            <img src={fileAttachmentSymbol}
                                className="attachment-line-1" />
                            <img src={forMore}
                                className="delete-bin-6-line-copy" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 col-md-6 col-sm-12 Select-All-Rectangle">
                            <img src={checkbox}
                                className="Select-All-Checkbox"
                            />
                            <span className="Sellect-All">
                                Sellect All
                            </span>
                        </div>
                        <div className="col-3 col-md-3 col-sm-6 Delete-Bulk-Rectangle">
                            <img src={deleteSymbol}
                                className="delete" />
                            <span className="Delete">
                                Delete
                            </span>
                        </div>
                        <div className="col-3 col-md-3 col-sm-6 Edit-Bulk-Rectangle">
                            <img src={editSymbol}
                                className="edit" />
                            <span className="Edit">
                                Edit
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );

}

export default EditBulkIncome;

