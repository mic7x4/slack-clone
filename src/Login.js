import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import {auth , provider} from './firebase';

function Login() {
        const signIn = () => {
            auth
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                alert(error);
            })
        }
    return (
        <div className='login'>
            <div className="login__container">
                <img src="https://www.todogator.com/image/slack.png" alt=""/>

                <h1>Sign in To Crookz Artworks</h1>
                <p>Full Stack Designer</p>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login
