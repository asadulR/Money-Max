import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Auth/firebase.init';
import Loading from '../../../Loading/Loading';
import '../FormStyle.css';
import SocialLogin from '../SocialLogin/SocialLogin';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    let errorElement;

    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user])

    const handleLogin = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    if (loading || sending) {
        return <Loading />
    }
    if (error || resetError) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const resetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Sent email');
        }
        else {
            toast.error('please enter your email address');
        }
    }

    return (
        <div className='my-5 py-5'>
            <div className="formbg-outer">
                <div className="formbg p-5">
                    <div className="formbg-inner padding-horizontal--48">
                        <span className="padding-bottom--15 title-form mb-4 text-center fw-bold">Login</span>
                        <form onSubmit={handleLogin} id="stripe-login">
                            <div className="field mb-3 padding-bottom--24">
                                <label htmlFor="email">Email</label>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id='email' required />
                            </div>
                            <div className="field mb-3 padding-bottom--24">
                                <div className="grid--50-50">
                                    <label htmlFor="password">Password</label>
                                    <div className="reset-pass">
                                        <p onClick={resetPassword} className='pointer'>Forgot your password?</p>
                                    </div>
                                </div>
                                <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id='password' required />
                            </div>
                            {errorElement}
                            <div className="field padding-bottom--24">
                                <input type="submit" name="submit" value="Continue" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="footer-link mt-3 padding-top--24">
                    <span>Don't have an account? <Link to="/signup">Signup</Link></span>
                    <SocialLogin />
                    <Toaster />
                </div>
            </div>

        </div>
    );
};

export default Login;