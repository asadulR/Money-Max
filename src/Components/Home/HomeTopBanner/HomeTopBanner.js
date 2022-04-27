import React from 'react';
import { Link } from 'react-router-dom';
import './HomeTopBanner.css'
import { ArrowRightIcon} from '@heroicons/react/solid'
import img from '../../../Assets/images/home/banner-img-2.png'
const HomeTopBanner = () => {
    return (
        <section className='top-section py-5'>
            <div className="container py-5">
                <div className="row row-cols-1 row-cols-md-2 align-items-center">
                    <div className="col mb-5">
                        <h2 className='title'>Flexible home loans for the international lifestyle.</h2>
                        <p className='para'>Banca is the one you can rely that will support you all the way by offering Home Loan facilities.</p>

                        <button className='apply-btn'><Link className='link-deco' to='/'>Apply Now <span> <ArrowRightIcon className='icon'></ArrowRightIcon></span></Link></button>
                    </div>
                    <div className="col text-center">
                        <img className='img-fluid' src={img} alt="banner" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeTopBanner;