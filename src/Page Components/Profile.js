import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';

const Profile = ({ auth, login }) => {

    const [profile, setProfile] = useState({});

    useEffect(() => {
        if(!profile.id){
            console.log('There is currently no profile');
        }
    }, [profile]);

    return (
        <div className = 'columnNW scrollable vh90'>
            <div>Profile</div>
            <div>Username: { auth.username }</div>
            <div>Penname: { auth.penname }</div>
            <Link to = '/help/' id = 'navHelp' className = '' value = 'Help'>
                <img className = 'bgAO height48' src = { `/assets/img/NavBarItems/HelpLogo${ '240' }.png` } />
            </Link>
            <Link to = '/'>
                <input type = 'button' onClick = { () => login({}) } value = 'Log Out' />
            </Link>
        </div>
    )
}

export default Profile;