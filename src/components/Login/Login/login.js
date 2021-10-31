import React from 'react';
import './Login.css';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Header/Footer/Footer';

const Login = () => {
    const { signInUsingGoogle, setUser } = useAuth();
    const history = useHistory()
    const location = useLocation()
    const url = location.state?.from || "/home"

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then((res) => {
                // setIsLoading(true)
                setUser(res.user)
                history.push(url)
            })
            .catch((err) => console.log(err))
            .finally(() => {
                // setIsLoading(false)
            })
    };

    return (
        <div className="container-login">
            <div className="login">
                <h2 className=" header-style p-4">Please Login</h2>
                <button className="btn btn-style" onClick={handleGoogleLogin}>Google Sign In</button>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;