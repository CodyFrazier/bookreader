import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const StoryPreview = ({ num, imgSize }) => {
    const [story, setStory] = useState({});

    //This will be the image representing a story in such places as within a ScrollRow. 
    //Clicking it should take the user to the story view page.
    return (
        <div className ='padHalf borderOW pixMargin1 columnNW'>
            <Link to = { `/browse/${ story.title ? story.title : 'story-does-not-exist/' }` }>
                <img className = { `${ imgSize }` } src = { story.coverImage ? 'url' : '/assets/img/DefaultImages/defaultStoryIMG.png' }/>
            </Link>
            <div className = 'rowNW'>
                <Link to = { `/browse/${ story.title ? story.title : 'story-does-not-exist' }` } className = 'undecorated noverflow'>
                    <div className = 'topMarginHalf textScroll whitespaceNW'>{ story.title ? story.title : 'Story Title' } { num }</div>       
                </Link>
                <Link to = { `/browse/${ story.title ? story.title : 'story-does-not-exist' }` } className = 'undecorated noverflow'>
                    <div className = 'topMarginHalf textScrollAfter whitespaceNW'>{ story.title ? story.title : 'Story Title' } { num }</div>       
                </Link>    
            </div>
            
        </div>
    )
};

export default StoryPreview;