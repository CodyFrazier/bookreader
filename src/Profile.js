import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Profile = ({ auth }) => {

    const [profile, setProfile] = useState({});

    useEffect(() => {
        if(!profile.id){
            console.log('There is currently no profile');
        }
    }, [profile]);

    return (
        <div>
            <div>Profile</div>
            <Link to = '/help/' id = 'navHelp' className = '' value = 'Help'>
                <img className = 'bgAO height48' src = { `/assets/img/NavBarItems/HelpLogo${ '240' }.png` } />
            </Link>
        </div>
    )
}

export default Profile;