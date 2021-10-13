import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const {signInWithGoogle}=useAuth();

    const  histroy=useHistory();
    const location=useLocation();
    const redirect_uri= location.state?.from || '/';


    const handleSignInWithGoogle=()=>{
        signInWithGoogle()
        .then(result=>{
            histroy.push(redirect_uri)
        })
    }
    return (
        <div>
            <div style={{textAlign: 'center'}}>
            <h1>please Login</h1>
            <button onClick={handleSignInWithGoogle}>Google sign in</button>
            </div>
        </div>
    );
};

export default Login;