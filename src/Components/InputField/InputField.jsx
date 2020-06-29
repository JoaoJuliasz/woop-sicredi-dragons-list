import React from 'react'
import './InputField.styles.scss'
const InputField = ({  handleChange, labelValue, ...props }) => {
    return (
        <div className="credential-container">
            <input className='login-input' onChange={handleChange} {...props} />
            <label className={`${props.shrinkvalidation ? 'shrink' : ''} form-input-label`}>{labelValue}</label>
        </div>
    );
};

export default InputField