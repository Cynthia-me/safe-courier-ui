import React from 'react'
import "../Styles/Form.css";

function Form(props) {
    return (props.trigger) ? (
        <div className = "popup">
            <div className="popup_inner">
                <button className="close-btn" onClick = {() => props.setTrigger(false)}>X</button>
                {props.children}
            </div>
            
        </div>
    ) : "";
}

export default Form
