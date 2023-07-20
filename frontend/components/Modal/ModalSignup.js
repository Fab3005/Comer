import React from 'react';
import './Modal.css';
import UserSignUp from './UserSignUp.jsx';

export default function ModalSignUp(props){
    if(!props.show){
        return null;
    }
    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">Please Create the Following</h4>
                </div>
                <UserSignUp />
            </div>
        </div>
    );
}