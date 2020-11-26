import React from 'react';
import './Login.css';
import Button from '@material-ui/core/Button';

function Login() {
    return (
        <div className='login'>
            <div className="login__container">
                <img src="https://www.todogator.com/image/slack.png" alt=""/>

                <h1>Sign in To Crookz Artworks</h1>
                <p>Full Stack Designer</p>
                <Button>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login
