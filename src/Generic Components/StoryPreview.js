import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const StoryPreview = ({ num }) => {
    const [story, setStory] = useState({});

    //This will be the image representing a story in such places as within a ScrollRow. 
    //Clicking it should take the user to the story view page.
    return (
        <div className ='padHalf'>
            <img className = 'storyIMG' src = { story.coverImage ? 'url' : '/assets/img/DefaultImages/defaultStoryIMG.png' }/>
            <div>{ story.title ? story.title : 'Story Title' } { num }</div>
        </div>
    )
};

export default StoryPreview;