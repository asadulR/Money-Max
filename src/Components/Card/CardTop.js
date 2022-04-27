import React from 'react';
import { Link } from 'react-router-dom';
import card from '../../Assets/images/card/hero-card.png';
import img from '../../Assets/images/card/hero-img-4.png';
import './Card.css';
const CardTop = () => {
    return (
        <section className='card-top'>
            <div className="container">
                <div className="row g-3 pt-5 align-items-center">
                    <div className="col-12 col-md-6">
                        <h2 className='text-white card-title'>The credit card as it should be.</h2>
                        <p className='dark-white mt-4 mb-5'>Without an annuity, it gives you cashback on all your purchases and access to months without interest.</p>
                        <Link className='top-btn' to='/'>Apply For Card</Link>
                    </div>
                    <div className="col-12 top-img col-md-6 img-area text-center">
                        <img src={img} alt="" />
                        <img className='img-fluid transition me-5 pe-2' src={card} alt="cardimage" />
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CardTop;