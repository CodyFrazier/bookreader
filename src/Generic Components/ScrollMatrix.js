import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StoryPreview from './StoryPreview';

const ScrollMatrix = ({ auth, heading, publishedBooks, searchQuery }) => {

    //To Do
    /*
        1. Set up state for collecting a list of objects to display within the ScrollRow    -
        2. Set up Scrollability - ***Maybe unnecessary in this context***                   *
        3. Set up a way to determine the heading for the ScrollRow                          *
        4. Turn into a grid                                                                 *
    */

    //This is a vertically scrolling matrix for housing various things such as a list of featured stories or the like.

    //For Testing how the matrix looks:
    //<StoryPreview imgSize = { 'matrixIMG' } /> updated build 0.0.6

    const [filteredBooks, setFilteredBooks] = useState([]);

    useEffect(() => {
        const temp = heading == 'My Bookmarks' ? displayBookmarked() : heading == 'My Saved Work' ? displayMyWork() : heading == 'Search Results' ? displaySearch() : displayNull();
        //console.log(`Temp is current: ${ temp }, and of type: ${ typeof(temp) }`);
        setFilteredBooks([...temp]);
    }, [searchQuery]);

    const displayBookmarked = () => {
        const books = publishedBooks.filter(book => book.bookmarkedBool);
        //console.log(`Books is currently: ${ books }`);
        return books.length > 0 ? books : [ <div>You Currently Have No Bookmarks</div> ];
    };

    const displayMyWork = () => {
        const books = publishedBooks.filter(book => auth.id && book.uploaderID == auth.id);
        //console.log(`Books is currently: ${ books }`);
        return books.length > 0 ? books : [ <div>You Have Not Started Any Online Drafts</div> ];
    };

    const displaySearch = () => {
        const books = publishedBooks.filter(book => book);
        //console.log(`Books is currently: ${ books }`);
        if(!searchQuery){
            return [ <div></div> ];
        }
        return books.length > 0 ? books : [ <div>No Books Matched Your Search Results: "{ searchQuery }"</div> ];
    }
    //Just a catchall, might stick around, but will probably look different later.
    const displayNull = () => {
        return <div>We Could Not Find Any Books</div>
    };

    return (
        <div className = 'columnNW alignCenter'>
            <h3 className = 'marginHalf'>{ heading }</h3>
            <div className = 'rightMarginHalf leftMarginHalf bottomMarginHalf gridMatrix gridGap1px'>
                { filteredBooks.map((book, idx) => {
                    console.log(`Filtering Books... Current checking:`);
                    console.log(book);
                    console.log(book.type);
                    console.log(typeof(book.type));
                    if(book.type == 'Object'){
                        return ( <StoryPreview imgSize = { 'matrixIMG' } book = { book } /> )
                    }else{
                        return ( book.props.children );
                    }
                }) }
            </div>  
        </div>
        
    )
};

export default ScrollMatrix;