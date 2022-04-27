import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../Auth/firebase.init';
import Loading from '../../../Loading/Loading';
import '../FormStyle.css';
import SocialLogin from '../SocialLogin/SocialLogin';
const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    let errorElement;
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});


    // console.log(email, password)
    const handleSingup = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(email, password)
    }

    if (error) {

        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    if (user) {
        toast.success('Account Created!');
    }
    useEffect(() => {
        if (user) {
            toast.success('Account Created!');
            navigate('/');
        }
    },[user])

    if(loading){
        return <Loading/>
    }
    return (
        <div className='my-5 py-5'>
            <div className="formbg-outer">
                <div className="formbg p-5">
                    <div className="formbg-inner padding-horizontal--48">
                        <span className="padding-bottom--15 title-form mb-4 text-center fw-bold">Sign up</span>
                        <form onSubmit={handleSingup} id="stripe-login">
                            <div className="field mb-3 padding-bottom--24">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id='name' />
                            </div>
                            <div className="field mb-3 padding-bottom--24">
                                <label htmlFor="email">Email</label>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id='email' required />
                            </div>
                            <div className="field mb-3 padding-bottom--24">
                                <label htmlFor="password">Password</label>
                                <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id='password' required/>
                            </div>
                                {errorElement}
                            <div className="field padding-bottom--24">
                                <input type="submit" name="submit" value="Continue" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="footer-link mt-3 padding-top--24">
                    <span>Already have an account? <Link to="/login">Login</Link></span>
                    <SocialLogin />
                    {/* <Toaster/> */}
                </div>
            </div>

        </div>
    );
};

export default Signup;