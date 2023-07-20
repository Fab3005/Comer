import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function () {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    function submitSignUp (event) {
        event.preventDefault();
        let userData = {
            username: username,
            password: password
        }
        fetch("/api/signup", {
            method: 'post',
            headers: {
                "Content-Type" : "application/json",
                'Accept': 'text/html'
            },
            body: JSON.stringify(userData)
        })
        .then(data => data.json())
        .then(data => {
            if(data) {
                navigate('/frontpage')
            }
        })
        console.log('Clicked')
    }


    return (
    <div>
        <form method="POST" action='/signup' onSubmit={submitSignUp}>
            <div className="modal-body">
                <input name="username" type="text" placeholder="username" onChange={e => setUsername(e.target.value)}></input>
            </div>
            <div className="modal-body">
                <input name="password" type="password" placeholder="password" onChange={e => setPassword(e.target.value)}></input>
            </div>
            <div className="modal-footer">
                <input type="submit" value="Sign Up"></input>
            </div>
        </form>
    </div>
    )
}