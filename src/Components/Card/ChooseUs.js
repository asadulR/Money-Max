import { CreditCardIcon, ShieldCheckIcon, SupportIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
const ChooseUs = () => {
    return (
        <section className='chooseus-section py-5'>
            <div className="container mt-5">
                <h2 className='text-center fs-1 fw-bolder text-white'>Why You Choose Us?</h2>

                <p className='gray text-center w-75 mx-auto'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>


                <div className='row my-5 g-4'>
                    <div className='col-md-4 text-center'>
                        <SupportIcon className='text-info mb-3 w-25'></SupportIcon>
                        <h4 className='text-white mb-3'>Easy to Use</h4>
                        <p className='gray'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                    </div>
                    <div className='col-md-4 text-center'>
                        <CreditCardIcon className='text-info mb-3  w-25'></CreditCardIcon>
                        <h4 className='text-white mb-3'>Faster Payments</h4>
                        <p className='gray'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                    </div>
                    <div className='col-md-4 text-center'>
                        <ShieldCheckIcon className='text-info mb-3  w-25'></ShieldCheckIcon>
                        <h4 className='text-white mb-3'>100% Secure</h4>
                        <p className='gray'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-center'><Link className='top-btn' to='/'>Apply For Card</Link></div>
            </div>
        </section>
    );
};

export default ChooseUs;