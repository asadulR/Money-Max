import React from 'react';
import './Card.css';
import svg1 from '../../Assets/images/card/icon-11.svg';
import svg2 from '../../Assets/images/card/icon-12.svg';
import svg3 from '../../Assets/images/card/icon-13.svg';
import svg4 from '../../Assets/images/card/icon-14.svg';
import svg5 from '../../Assets/images/card/icon-15.svg';
import svg6 from '../../Assets/images/card/icon-16.svg';
const CardFeaturs = () => {
    return (
        <section className='card-features'>
            <div>
                <h2 className='text-center'>Great Features Of Money Max Card</h2>
                <p className='w-75 mt-3 gray mx-auto text-center'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
            </div>
            <div className='container py-5'>
                <div className="row g-4">
                    <div className="col-md-6 col-lg-4 ">
                        <div className='bg-white py-4 px-3 service-card'>
                            <img src={svg1} alt="" />
                            <h4>Online banking</h4>
                            <p>Online banking, also known as internet banking or web banking, is an electronic as internet banking payment system.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="bg-white py-4 px-3 service-card">
                            <img src={svg2} alt="" />
                            <h4>Up to 20.000$ limit</h4>
                            <p>Online banking, also known as internet banking or web banking, is an electronic as internet banking payment system.</p>
                        </div>

                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="bg-white py-4 px-3 service-card">
                            <img src={svg3} alt="" />
                            <h4>Mobile application</h4>
                            <p>Online banking, also known as internet banking or web banking, is an electronic as internet banking payment system.</p>

                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="bg-white py-4 px-3 service-card">
                            <img src={svg4} alt="" />
                            <h4>Online Shopping</h4>
                            <p>Online banking, also known as internet banking or web banking, is an electronic as internet banking payment system.</p>

                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="bg-white py-4 px-3 service-card">
                            <img src={svg5} alt="" />
                            <h4>Protection & security</h4>
                            <p>Online banking, also known as internet banking or web banking, is an electronic as internet banking payment system.</p>

                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="bg-white py-4 px-3  service-card">
                            <img src={svg6} alt="" />
                            <h4>Small payments fees</h4>
                            <p>Online banking, also known as internet banking or web banking, is an electronic as internet banking payment system.</p>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default CardFeaturs;