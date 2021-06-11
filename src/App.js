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
import InvalidBook from './Page Components/InvalidBook';

console.log('Loading App...');

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
    const [auth, setAuth] = useState({});

    useEffect(() => {
        console.log('authenticating...')
    }, [auth]);

    const login = (credentials) => {
        console.log(auth.id ? 'logging out...' : 'logging in...' );
        //make a call to the database and retrieve auth info for the given user.
        setAuth(auth.id ? {} : { id: '0000-0000-0000-0000', username: credentials.username, penname: credentials.penname });
    }

    return (
        <Router>
            <div id = 'container'>
                <main className = 'bgDG colOW .scrollable'>
                    <NavBar auth = { auth } />
                    <Route path = '/' exact render = { (props) => ( <>{ <Landing auth = { auth } /> }</> )} />
                    <Route path = '/search/' exact render = { (props) => ( <>{ <SearchBrowser auth = { auth } /> }</> )} />
                    <Route path = '/help/' exact render = { (props) => ( <>{ <Help auth = { auth } /> }</> )} />
                    <Route path = '/community/' exact render = { (props) => ( <>{ <Community auth = { auth } /> }</> )} />
                    <Route path = '/mywork/' exact render = { (props) => ( <>{ <MyWork auth = { auth } /> }</> )} />
                    <Route path = '/bookmarks/' exact render = { (props) => (<> { <Bookmarks auth = { auth } /> }</> ) } />
                    <Route path = '/profile/' exact render = { (props) => ( <>{ auth.id && <Profile auth = { auth } login = { login } /> }</> )} />
                    <Route path = '/login/' exact render = { (props) => ( <>{ !auth.id && <Login login = { login } /> }</> )} />
                    <Route path = '/browse/story-does-not-exist/' exact render = { (props) => ( <>{ <InvalidBook /> }</> )} />
                </main>
                <Route path = '/' exact render = { (props) => ( <>{ <Footer /> }</> )} />
            </div>
        </Router>
        
    )
};

export default App;