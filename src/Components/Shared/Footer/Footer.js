import React from 'react';
import './Footer.css';
import linkedin from '../../../Assets/images/social/linkedin.png';
import fb from '../../../Assets/images/social/facebook.png';
import git from '../../../Assets/images/social/github.png';
import icon from '../../../Assets/images/favicon.png';
const Footer = () => {
    const yearNow = new Date().getFullYear();
    return (

        <footer className='py-5'>
            <div className="container">
                <div className="row g-4">
                    <div className="col-md-4 text-center">
                        <h4 className='text-white fw-bold'><img src={icon} alt="" /> Money Max</h4> 
                    </div>
                    <div className="col-md-4 text-center">
                        <p className='mb-1 text-white'>Copyright &copy; Money Max {yearNow} </p> 
                       <span className='text-white fs-6'> Developed by <a className='social-link' href="https://github.com/asadulR" target="_blank" rel="noopener noreferrer">Asadul Rahman</a></span>
                    </div>
                    <div className="col-md-4 text-center">
                        <a className='me-4 social-link' href="https://web.facebook.com/beingAsad.galib" target="_blank" rel="noopener noreferrer"> <img className='logo-social' src={fb} alt="" /></a>
                        <a className='me-4 social-link' href="https://www.linkedin.com/in/md-asadul-rahman/" target="_blank" rel="noopener noreferrer"> <img className='logo-social' src={linkedin} alt="" /></a>
                        <a className='social-link' href="https://github.com/asadulR" target="_blank" rel="noopener noreferrer"> <img className='logo-social' src={git} alt="" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;