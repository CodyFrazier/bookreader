import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './Page Components/NavBar';
import Landing from './Page Components/Landing';
import SearchBrowser from './Page Components/SearchBrowser';
import Help from './Page Components/Help';
import Community from './Page Components/Community';
import Profile from './Page Components/Profile';
import MyWork from './Page Components/MyWork';
import Bookmarks from './Page Components/Bookmarks';
import Footer from './Page Components/Footer';
import Login from './Page Components/Login';

import DraftEditor from './Page Components/DraftEditor';
import FileUpload from './Generic Components/FileUpload';
import InvalidBook from './Page Components/InvalidBook';

import axios from 'axios';

console.log('Loading App...');
console.log(`Local Storage.token: `);
console.log(window.localStorage.getItem('token'));
console.log(typeof(window.localStorage.getItem('token')));

/* 
**********************************************TO DO********************************************
1 . Develop Navbar with the following options and assets to represent them:
Profile / Account
Saved / Bookmarked ( list of books to read )
Publish / My Works ( for uploading new work to the database )
Community / Forums / Chats ( These may be seperate later, if any of them are even implemented )
Help / Feedback ( navigates to documentation on how to use the site and give feedback to the dev )
Search / Browse ( navigates to a browser with featured content and a comprehensive content search feature)
Consider adding other nav bar items as well

2 . Establish Minimum requirements for works added to the database as well as content flagging for innapporpriate content
    - For instance, a minimum number of tags to ensure proper cataloging of material 
        - Genre, Target Audience, Language, Age Restriction
    - Warning that account deletion and removal of all uploaded content results from uploading innappropriate material
    without proper restriction ( sexual content without a proper age restriction for instance )

3 . Establish Profile Information and Settings for Accessibility
    - Username, Email, Bio ( for authors ), Reading History, ???

    - Theme and Theme Customization

    - Upload Visibility, Management ( deletion ), Editing ( uploading updated version )

4 . Determine how to store files and render them ( PDF ? )
***********************************************************************************************
*/

const App = () => {

    //State
    const [auth, setAuth] = useState({ });
    const [publishedBooks, setPublishedBooks] = useState([]);

    useEffect(() => {
        console.log('authenticating...');
        const token = window.localStorage.getItem('token');
        if(!auth.id){
            //setAuth({ token });
            console.log('hi')
        }
    }, [auth]);

    const login = async (credentials) => {
        console.log(auth.id ? `logging out...` : `logging in as ${ credentials.username }...` );
        //make a call to the database and retrieve auth info for the given user.
        if(!auth.id){
            const token = (await axios.post('/api/auth', credentials)).data.token;
            console.log('App.login.token: ', token)
            window.localStorage.setItem('token', token.id);
            setAuth(token);
            /*      //This was in the original version of this code. I don't understand why though. 
            await axios.get('/api/auth', token)
            .then( user => {
                console.log(`User Data at App.login:`);
                console.log(user);
                console.log(user.data);
                setAuth(user.data);
            })
            .catch( ex => console.log(`Error at App.login: ${ ex }`));
            //*/
        }else{
            setAuth({ });
        };
    }

    /*
    const exchangeTokenForAuth = async() => {
        const token = window.localStorage.getItem('token');
        { headers : { authorization : token } };
    }
    */

    return (
        <Router>
            <div id = 'container'>
                <main className = 'bgDG colOW .scrollable'>
                    <NavBar auth = { auth } />
                    <Route path = '/' exact render = { (props) => ( <>{ <Landing auth = { auth } /> }</> )} />
                    <Route path = '/search/' exact render = { (props) => ( <>{ <SearchBrowser auth = { auth } publishedBooks = { publishedBooks } /> }</> )} />
                    <Route path = '/help/' exact render = { (props) => ( <>{ <Help auth = { auth } /> }</> )} />
                    <Route path = '/community/' exact render = { (props) => ( <>{ <Community auth = { auth } /> }</> )} />
                    <Route path = '/mywork/' exact render = { (props) => ( <>{ <MyWork auth = { auth } publishedBooks = { publishedBooks } /> }</> )} />
                    <Route path = '/bookmarks/' exact render = { (props) => (<> { <Bookmarks auth = { auth } publishedBooks = { publishedBooks } /> }</> ) } />
                    { auth.id && <Route path = { `/profile/${ auth.username.replace(/ /g, '-') }` } exact render = { (props) => ( <>{ auth.id && <Profile auth = { auth } login = { login } /> }</> )} /> }
                    <Route path = '/login/' exact render = { (props) => ( <>{ !auth.id && <Login auth = { auth } login = { login } /> }</> )} />

                    <Route path = '/mywork/draft/' exact render = { (props) => ( <>{ <DraftEditor auth = { auth } /> }</> )} />
                    <Route path = '/mywork/upload/' exact render = { (props) => ( <>{ <FileUpload auth = { auth } /> }</> )} />
                    <Route path = '/search/story-does-not-exist/' exact render = { (props) => ( <>{ <InvalidBook /> }</> )} />
                </main>
                <Route path = '/' exact render = { (props) => ( <>{ <Footer /> }</> )} />
            </div>
        </Router>
        
    )
};

export default App;