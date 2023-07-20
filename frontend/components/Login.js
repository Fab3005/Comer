import React, { useState } from 'react';
import logo from './burger.svg';
import './CSS/Login.css';
import Modal from './Modal/Modal';
import ModalSignUp from './Modal/ModalSignup';

export default function Login () {
    const [showLogin, setShowLogin] = useState(false)
    const [showSignUp, setShowSignUp] = useState(false)
    return (
        <div>
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            </header>
            <button className='btn-left' onClick ={() => setShowLogin(true)}>Login</button>
            <Modal onClose={() => setShowLogin(false)} show={showLogin}/>
            <button className='btn-right' onClick ={() => setShowSignUp(true)}>Sign Up</button>
            <ModalSignUp onClose={() => setShowSignUp(false)} show={showSignUp}/>
        </div>
    )
}