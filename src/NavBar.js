import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className = 'rowNW bgAO padHalf spaceBetweenRow'>
            <Link to = '/' className = '' value = ''>
                <img className = 'bgAO height48' src = { `/assets/img/NavBarItems/NomadReader${ '240' }.png`} />
            </Link>
            <Link to = '/search/' className = '' value = 'Search'>
                <img className = 'bgAO height48' src = { `/assets/img/NavBarItems/SearchLogo${ '240' }.png` } />
            </Link>
            <Link to = '/community/' className = '' value = 'Community'>
                <img className = 'bgAO height48' src = { `/assets/img/NavBarItems/ChatLogo${ '240' }.png` } />  
            </Link>
            <Link to = '/mywork/' className = '' value = 'MyWork'>
                <img className = 'bgAO height48' src = { `/assets/img/NavBarItems/MyWorkLogo${ '240' }.png` } />
            </Link>
            <Link to = '/bookmarks/' className = '' value = 'Bookmarks'>
                <img className = 'bgAO height48' src = { `/assets/img/NavBarItems/BookmarkLogo${ '240' }.png` } />
            </Link>
            <Link to = '/profile/' className = '' value = 'Profile'>
                <img className = 'bgAO height48' src = { `/assets/img/NavBarItems/ProfileDefault${ '240' }.png` } />
            </Link>
        </nav>
    )
};

export default NavBar;