import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Login = ({ login }) => {
    const [currentForm, setCurrentForm] = useState(false);
    const [username, setUsername] = useState('');
    const [pass1, setPass1] = useState('');
    const [pass2, setPass2] = useState('');
    const [penname, setPenname] = useState('');

    const changeForm = () => {
        setCurrentForm(!currentForm);
    }

    const signUp = () => {
        if(pass1 === pass2){
            const credentials = { username, pass1, penname };
            //make a call to the backend and add this user to the database.
            login(credentials);    
        }
        
    }

    const onSubmit = () => {
        console.log(currentForm);
        if(currentForm){
            signUp();
        }else{
            login({ username, pass1, penname });
        }
    }

    return (
        <div className = 'scrollable vh90 columnNW'>
            <div className = 'topBorderAO bottomBorderAO topMargin1 bottomMargin1 rowNW spaceAroundRow'>
                <Link to = '/help/'>
                    <div className = 'padHalf'>Help Page</div>
                </Link>
            </div>
            <div className = 'alignCenter margin1'>
                <div className = 'rowNW'>
                    <div className = { `widthundred topLeft15 centerText padHalf borderOW ${ currentForm ? '' : 'bottomBorderDG' }` } onClick = { () => { if(currentForm){ changeForm() } } }>Log In</div>
                    <div className = { `widthundred topRight15 centerText padHalf borderOW ${ currentForm ? 'bottomBorderDG' : '' }` } onClick = { () => { if(!currentForm){ changeForm() } } }>Sign Up</div> 
                </div>
                <div className = { `borderOW topBorderDG` }>
                    <div className = 'rowNW spaceBetweenRow margin1'>
                        <div>Username:</div>
                        <input id = 'username' placeholder = 'type username...' value = { username } onChange = { ({ target }) => setUsername(target.value) } required />
                    </div>
                    <div className = 'rowNW spaceBetweenRow margin1'>
                        <div>Password:</div>
                        <input id = 'pass1' placeholder = 'type password...' value = { pass1 } onChange = { ({ target }) => setPass1(target.value) } required />
                    </div>
                    { currentForm && <div className = 'rowNW spaceBetweenRow margin1'>
                        <div>Confirm Password:</div>
                        <input id = 'pass2' placeholder = 'retype password...' value = { pass2 } onChange = { ({ target }) => setPass2(target.value) } required />
                    </div> }
                    { currentForm && <div className = 'rowNW spaceBetweenRow margin1'>
                        <div>Pen Name:</div>
                        <input id = 'penname' placeholder = 'type pen name...' value = { penname } onChange = { ({ target }) => setPenname(target.value) } />
                    </div> }
                    <div className = 'rowNW margin1 justifyCenter'>
                        <Link to = '/'>
                            <input type = 'button' className = 'widthundred' value = 'Cancel' />
                        </Link>
                        <Link to = '/profile/'>
                            <input type = 'submit' className = 'widthundred' onClick = { ({ target }) => onSubmit() } value = { `Dummy ${ currentForm ? 'Sign Up' : 'Log In' }` } />
                        </Link>     
                    </div>
                </div>    
            </div>
            
        </div>
        
    )
};

export default Login;