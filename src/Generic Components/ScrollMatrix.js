import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StoryPreview from './StoryPreview';

const ScrollMatrix = () => {

    //To Do
    /*
        1. Set up state for collecting a list of objects to display within the ScrollRow
        2. Set up Scrollability
        3. Set up a way to determine the heading for the ScrollRow
    */

    return (
        <div className = 'topMargin1'>
            <div>This is a vertically scrolling matrix for housing various things such as a list of featured stories or the like.</div>
            <h3>Variable ScrollMatrix Heading</h3>
            <div>
                <div>
                    <StoryPreview />
                    <StoryPreview />
                    <StoryPreview />
                </div>
                <div>
                    <StoryPreview />
                    <StoryPreview />
                    <StoryPreview />
                </div> 
                <div>
                    <StoryPreview />
                    <StoryPreview />
                    <StoryPreview />
                </div> 
            </div>  
        </div>
        
    )
};

export default ScrollMatrix;