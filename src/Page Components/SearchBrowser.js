import React, { useState, useEffect } from 'react';
import ScrollMatrix from '../Generic Components/ScrollMatrix';

const SearchBrowser = ({ auth, publishedBooks }) => {
    
    const [searchString, setSearchString] = useState('');
    const [currentResultSearch, setCurrentResultSearch] = useState('');

    const search = () => {
        if(searchString && !(currentResultSearch == searchString)){
            console.log(`Search with the following parameters: ${ searchString.split(' ').map(str => `"${ str }"`)}`);
            setCurrentResultSearch(searchString);  
        }
        
    };

    return (
        <div className = 'scrollable vh90'>
            <div className = 'topBorderAO bottomBorderAO topMargin1 bottomMargin1 rowNW widthundred alignCenter'>
                <input type = 'text' className = 'bgPG colOW topLeft15 bottomLeft15 noborder padHalf widthundred' placeholder = 'Search...' onChange = { ({ target }) => setSearchString(target.value) } value = { searchString } />
                <input type = 'button' className = 'colOW bgDG borderAO topRight15 bottomRight15 padHalf' onClick = { search } value = 'Search'/>
                <img className = 'height36 leftMarginHalf rightMarginHalf' src = '/assets/img/NavBarItems/FilterBurger.png'/>
            </div>
            <ScrollMatrix auth = { auth } heading = { 'Search Results' } publishedBooks = { publishedBooks } searchQuery = { currentResultSearch } />
        </div>
    )
}

export default SearchBrowser;