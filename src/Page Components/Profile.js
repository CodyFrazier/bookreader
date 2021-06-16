import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';

const Profile = ({ auth, login }) => {

    //TODO
    /*
        1. Fix Animation Timing on name fade.
        2. Add User Settings
        2a. ( username change, password change, account deletion, theme changing, pen name changing, email, link to forum posts they authored )
        3. Consider tracking readership from published works.
    */
    
    const [displayName, setDisplayName] = useState(true);
    const [displayClass, setDisplayClass] = useState('fadeIn');

    useEffect(() => {
        if(!auth.id){
            console.log('There is currently no profile');
        }
    }, [auth]);

    useEffect(() => {
        setTimeout(() => {
            setDisplayClass('fadeOut');
            setTimeout(() => {
                setDisplayName(!displayName);
                setDisplayClass('fadeIn');    
            }, 500)
            
        }, 5000);
    }, [displayName]);

    return (
        <div className = 'columnNW scrollable vh90'>
            <div className = 'topBorderAO bottomBorderAO topMargin1 padHalf bottomMargin1 rowNW spaceBetweenRow alignCenter'>
                <div className = { `${ displayClass }` }>{ displayName ? auth.username || 'No Username' : auth.penname || 'No Penname' }</div>
                <Link to = '/'>
                    <input type = 'button' className = 'colOW bgDG noBorder' onClick = { () => login({}) } value = 'Log Out' />
                </Link>
            </div>
            <Link to = '/help/' id = 'navHelp' className = '' value = 'Help'>
                <img className = 'bgAO height48' src = { `/assets/img/NavBarItems/HelpLogo${ '240' }.png` } />
            </Link>
        </div>
    )
}

export default Profile;