import { BadgeCheckIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import './FastLoas.css'
const FastLoan = () => {
    return (
        <section className='py-5'>
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                        <h3 className='fast-title'>Fast, secure & easy loans in just 7 days</h3>
                        <p className='para max-w'> Need some fast cash? Bad cradit history? We dont mind about your past, just the future. Try loan start and feel secure in your future.</p>
                    </div>
                    <div className="col-12 col-md-3 para-area">
                        <p><BadgeCheckIcon className='badge-icon'></BadgeCheckIcon>Get up to $15,000 Cash Fast</p>
                        <p><BadgeCheckIcon className='badge-icon'></BadgeCheckIcon>15 MinuteOnline Application</p>
                        <p><BadgeCheckIcon className='badge-icon'></BadgeCheckIcon>Centrelink Considered*</p>
                        <p><BadgeCheckIcon className='badge-icon'></BadgeCheckIcon>Bad Credit Considered2</p>
                        <button className='apply-for-loans mt-5'><Link className='link-deco' to='/'>Apply For Loans</Link></button>
                    </div>
                    <div className="col-12 col-md-3">
                        <p className='bg-para'>1.   Subject to verifcation, suitability and affordability</p>
                        <p className='bg-para mt-3'>2.  Your income from Centrelink must be less then 50% of your total income in order to qialify.</p>
                        <button className='apply-for-loans'><Link className='link-deco' to='/'>Learn more</Link></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FastLoan;