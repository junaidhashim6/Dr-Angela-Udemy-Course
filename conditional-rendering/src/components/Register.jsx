import React from 'react';
import Input from './Input';

const Register = (props) => {
    return (
        <div>
         <h1>Register</h1>
            <form className="form">
                <Input type="text" placeholder="Username"/>
                <Input type="password" placeholder="Password"/>
                <Input type="password" placeholder="Confirm password"/>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
