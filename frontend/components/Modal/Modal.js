import React from 'react';
import './Modal.css'
import UserLogin from './UserLogin.jsx';

export default function Modal(props){
    if(!props.show){ //The show() method shows the hidden, selected elements.
        return null;
    }
    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h4>Welcome Back!</h4>
                </div>
                <UserLogin />
            </div>
        </div>
    )
}
