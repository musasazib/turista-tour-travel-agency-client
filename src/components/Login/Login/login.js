import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

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
        <div>
            <h2>Please Login</h2>
            <button onClick={handleGoogleLogin}>Google Sign In</button>
        </div>
    );
};

export default Login;