import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Login = ({ login }) => {

    return (
        <div>
            <div>LoginScreen</div>
            <div className = 'rowNW spaceBetweenRow margin1'>
                <div>Username:</div>
                <input placeholder = 'type username...' />
            </div>
            <Link to = '/profile/'>
                <input type = 'button' onClick = {() => login() } value = 'Dummy Log In' />
            </Link>
        </div>
        
    )
};

export default Login;