import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const {signInUsingGoogle, error, setError} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const handleGoogleLoghin = () => {
        signInUsingGoogle()
        .then(result => {
            // setUser(result.user);
            history.push(redirect_url)
        })
        .catch(error => {
            setError(error.message);
        })
        // .finally( () => setIsLoading(false))
    }

    return (
        <div className='login-style'>
            <div>
            <h3>Please Login</h3>
            <p className='text-danger'>{error}</p>
            <button onClick={handleGoogleLoghin} className='btn btn-primary'>Login With Google</button>
            </div>
        </div>
    );
};

export default Login;