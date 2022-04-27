import React from 'react';
import girl from '../../Assets/images/card/credit-card.png';
import visa from '../../Assets/images/card/visa.png';
import master from '../../Assets/images/card/mastercard.png';
import safe from '../../Assets/images/card/safebox.svg';
import onlinepay from '../../Assets/images/card/online-payment.svg';
import './Card.css';
const SendMoney = () => {
    return (
        <div className='my-5 container'>
            <div className="row align-items-center g-4 py-5">
                <div className="col-md-6  text-center p-0 sendmoney-img-container">
                    <img className='img-fluid absolute' src={visa} alt="" />
                    <img className='img-fluid girl-img' src={girl} alt="" />
                    <img className='img-fluid absolute2' src={master} alt="" />
                </div>
                <div className="col-md-6">
                    <h2 className='fs-1 fw-bold'>Best Ways to Send Your Money From Anywhere You Like</h2>

                    <div><p className='gray'>Banca came as a solution to the next generation. Through our portal, you can sit at the comfort of your home, office or pretty much anywhere, and send money to anywhere! Through our strong network.
                    </p></div>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='pe-3'>
                            <img className='mb-3' src={onlinepay} alt="" />
                            <h3>Online Payments</h3>
                            <p className='gray'>We acceept many type payments getway that you love.</p>
                        </div>
                        <div>
                            <img className='mb-3' src={safe} alt="" />
                            <h3>Safe Deposit</h3>
                            <p className='gray'>You can trust us for your deposit. No hidden fee.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SendMoney;