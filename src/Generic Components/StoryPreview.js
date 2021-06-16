import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const StoryPreview = ({ num, imgSize, book }) => {
    const [story, setStory] = useState({});

    //For testing text scroll
    // Current Issues: 
    //The text does not scroll all the way if the width of the title is greater than the container. 
    
    useEffect(() => {
        setStory({ title: 'Potato Max the Gargantuan III: Baken not Stirredified'});
    }, []);
    
    useEffect(() => {
        setStory({ ... book });
    }, []);
    

    //This will be the image representing a story in such places as within a ScrollRow. 
    //Clicking it should take the user to the story view page.
    return (
        <div className = { `padHalf borderOW pixMargin1 columnNW ${ imgSize == 'rowIMG' ? 'maxWidth135' : '' }` }>
            <Link to = { `/search/${ story.title ? story.title : 'story-does-not-exist/' }` }>
                <img className = { `widthundred ${ imgSize == 'rowIMG' ? 'rowIMG' : '' }` } src = { story.coverImage ? 'url' : '/assets/img/DefaultImages/defaultStoryIMG.png' }/>
            </Link>
            <div className = 'widthundred noverflow'>
                <div className = { `rowWrap widthundred ${ !story.title ? '' : story.title.length > 19 ? 'textScroll' : '' }` }>
                    <Link to = { `/search/${ story.title ? story.title : 'story-does-not-exist' }` } className = 'undecorated widthundred'>
                        <div className = 'topMarginHalf whitespaceNW'>{ story.title ? story.title : 'Story Title' } { num }</div>       
                    </Link>
                </div>    
            </div>
            
            
        </div>
    )
};

export default StoryPreview;