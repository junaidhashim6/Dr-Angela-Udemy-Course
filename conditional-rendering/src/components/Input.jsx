import React from 'react';

const Input = (props) => {
    return (
        <div>
            <input type={props.type} placeholder={props.placeholder} />
        </div>
    );
}

export default Input;
