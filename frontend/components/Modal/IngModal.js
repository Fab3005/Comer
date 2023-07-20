import React, {useEffect} from 'react';
import './Modal.css'
import Ingredients from '../ingrediants';
// import {v4 as uuid} from 'uuid'

// export default function IM ({ingredients}, props){
//     // if(!props.show){
//     //     return null
//     // }
export default function IM({ ingredients, onClose, show }) {
    useEffect(() => {
      function handleCloseModal(event) {
        if (event.target === document.querySelector('.modal')) {
          onClose();
        }
      }
      if (show) {
        window.addEventListener('click', handleCloseModal);
      }
      return () => {
        window.removeEventListener('click', handleCloseModal);
      };
    }, [onClose, show]);
  
    if (!show) {
      return null;
    }
    return (
        <div className="modal" /*onClick={props.onClose}*/>
            <div className="modal-content" /*onClick={(e) => e.stopPropagation()}*/>
                <div className="modal-header">
                    <h4 className="modal-title">Ingredients List!</h4>
                </div>
                <Ingredients ingredients={ingredients}/>
            </div>
        </div>
    )
}