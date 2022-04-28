import React from 'react';
import './LoanApply.css'
const LoanApply = () => {
    return (
        <section className='loan-form-section'>
            <div className='container'>
                <form className="row g-3 apply-form">
                    <div className="col-md-6">
                        <select className="form-select form-select-md select-option mb-3 " aria-label=".form-select-lg example">
                            <option selected>Choose your financing type</option>
                            <option className='gray' value="Debt Financing">Debt Financing</option>
                            <option className='gray' value="Equity Finance">Equity Finance</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <select className="form-select form-select-md mb-3 select-option" aria-label=".form-select-lg example">
                            <option selected>Choose your preferred bank service</option>
                            <option className='gray' value="Individual Banking">Individual Banking</option>
                            <option className='gray' value="Business Banking">Business Banking</option>
                            <option className='gray' value="Digital Banking">Digital Banking</option>
                            <option className='gray' value="Loans">Loans</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <p className='mb-2'>Loan Type *</p>
                        <select className="form-select form-select-md mb-3 select-option" aria-label=".form-select-lg example">
                            <option selected className='gray' value="Personal Loan">Personal Loan</option>
                            <option className='gray' value="Home Loan">Home Loan</option>
                            <option className='gray' value="Business Loan">Business Loan</option>
                            <option className='gray' value="Car Loan">Car Loan</option>
                        </select>
                    </div>
                    <div className="col-md-6 mb-4">
                        <label for="inputLoan" className="form-label">Your loan amount *</label>
                        <input type="number" placeholder='$' required className="form-control" id="inputLoan" />
                    </div>
                    <h5 className='my-3'>Loan duration *</h5>
                    <div className="row row-cols-md-5">
                        <div className="col">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label gray" for="flexRadioDefault1">
                                    12 months
                                </label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label gray" for="flexRadioDefault1">
                                    18 months
                                </label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label gray" for="flexRadioDefault1">
                                    24 months
                                </label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label gray" for="flexRadioDefault1">
                                    36 months
                                </label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label gray" for="flexRadioDefault1">
                                    5 years +
                                </label>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-6">
                        <input type="text" placeholder='Your first name *' required className="form-control" id="name" />
                    </div>
                    <div className="col-md-6">
                        <input type="text" placeholder='Your last name' className="form-control" id="lastname" />
                    </div>
                    <div className="col-md-6">
                        <input type="email" placeholder='Email *' required className="form-control" id="email" />
                    </div>
                    <div className="col-md-6">
                        <input type="number" placeholder='Mobile number *' required className="form-control" id="number" />
                    </div>
                    <div className="col-md-6">
                        <label for="birth" className="form-label">Date of Birth *</label>
                        <input type="date" required className="form-control" id="birth" />
                    </div>
                    <div className="col-md-6 ">
                        <h6 className='d-block w-100'>Marital Status *</h6>
                        <div className="d-flex g-3">
                            <div className="form-check me-3">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label gray" for="flexRadioDefault1">
                                    Single
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label gray" for="flexRadioDefault1">
                                    Married
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <input type="text" className="form-control" id="inputAddress" placeholder="Present Address *" required />
                    </div>
                    <div className="col-md-5">
                        <input type="text" className="form-control" id="inputCity" placeholder='City *' required />
                    </div>

                    <div className="col-md-4">
                        <input type="text" className="form-control" id="inputState" placeholder='State *' required />
                    </div>

                    <div className="col-md-3">
                        <input type="text" className="form-control" id="inputZip" placeholder='Postal / Zip Code *' required />
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" required />
                            <label className="form-check-label gray" for="gridCheck">
                                I hereby agree that the information given is true, accurate and complete as of the date of this application submission. *
                            </label>
                        </div>
                    </div>
                    <div className="col-12 d-flex align-items-center justify-content-center">
                        <input type="submit" value='Apply' className="apply-form-btn" />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default LoanApply;