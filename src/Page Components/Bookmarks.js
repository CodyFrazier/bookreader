import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ScrollMatrix from '../Generic Components/ScrollMatrix.js';

const Bookmarks = ({ auth, publishedBooks }) => {

    const [bookmarks, setBookmarks] = useState([]);
    const [bookmarkNum, setBookmarkNum] = useState(0);

    useEffect(() => {
        //api route with axios
        //console.log(bookmarks);
        setBookmarkNum(bookmarks.length);
    }, [bookmarks, bookmarkNum]);

    return (
        <div className = 'scrollable vh90'>
            <div className = 'topBorderAO bottomBorderAO topMargin1 bottomMargin1 rowNW spaceAroundRow'>
                <div className = 'margin1'>Current Bookmarks:</div>
                <div className = 'margin1'>{ bookmarkNum }</div>
            </div>
            <ScrollMatrix auth = { auth } heading = { 'My Bookmarks' } publishedBooks = { publishedBooks } />
        </div>
    )
}

export default Bookmarks;