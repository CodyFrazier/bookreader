import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ScrollMatrix from '../Generic Components/ScrollMatrix.js';

const Bookmarks = ({ auth }) => {

    const [bookmarks, setBookmarks] = useState([]);
    const [bookmarkNum, setBookmarkNum] = useState(0);

    useEffect(() => {
        //api route with axios
        //console.log(bookmarks);
        setBookmarkNum(bookmarks.length);
    }, [bookmarks, bookmarkNum]);

    const dummyBookmarker = () => {
        setBookmarks([...bookmarks, {}]);
        //console.log(`Bookmarks: ${ bookmarks.length }`);
    };

    return (
        <div className = 'scrollable vh90'>
            <div>Bookmarked works for ease finding reading material</div>
            <div className = 'rowNW spaceBetweenRow margin1'>
                <div>Current Bookmarks:</div>
                <div>{ bookmarkNum }</div>
            </div>
            <input type = 'button' onClick = { () => { dummyBookmarker() } } value = 'Add Bookmark Dummy' />
            <ScrollMatrix heading = { 'My Bookmarks' } />
        </div>
    )
}

export default Bookmarks;