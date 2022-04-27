import React from 'react';
import '../FormStyle.css';

import google from '../../../Assets/images/login/google.png'
import github from '../../../Assets/images/login/github.png'

const SocialLogin = () => {
    
    return (
        <div>
            <div className='d-flex w-90 mx-auto align-items-center'>
                <div className='left-hr'></div>
                <p className='my-0 mx-3'>Or</p>
                <div className='right-hr'></div>
            </div>

            <div className='w-75 mx-auto'>
                <button  className='w-100 btn another-signin-btn my-2 btn-white'> <img className='me-3' src={google}  alt="" />Log in with Google</button>
                <button  className='w-100 btn another-signin-btn my-2 btn-white'> <img className='me-3' src={github}  alt="" />Log in with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;