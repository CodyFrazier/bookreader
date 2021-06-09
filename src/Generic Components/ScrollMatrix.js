import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StoryPreview from './StoryPreview';

const ScrollMatrix = ({ heading }) => {

    //To Do
    /*
        1. Set up state for collecting a list of objects to display within the ScrollRow
        2. Set up Scrollability - ***Maybe unnecessary in this context***
        3. Set up a way to determine the heading for the ScrollRow
        4. Turn into a grid
    */

    //This is a vertically scrolling matrix for housing various things such as a list of featured stories or the like.
    return (
        <div className = 'topMargin1 columnNW alignCenter'>
            <h3>{ heading }</h3>
            <div className = 'columnNW borderOW rightMarginHalf leftMarginHalf bottomMarginHalf'>
                <div className = 'rowNW'>
                    <StoryPreview imgSize = { 'matrixIMG' } />
                    <StoryPreview imgSize = { 'matrixIMG' } />
                    <StoryPreview imgSize = { 'matrixIMG' } />
                </div>
                <div className = 'rowNW'>
                    <StoryPreview imgSize = { 'matrixIMG' } />
                    <StoryPreview imgSize = { 'matrixIMG' } />
                    <StoryPreview imgSize = { 'matrixIMG' } />
                </div> 
                <div className = 'rowNW'>
                    <StoryPreview imgSize = { 'matrixIMG' } />
                    <StoryPreview imgSize = { 'matrixIMG' } />
                    <StoryPreview imgSize = { 'matrixIMG' } />
                </div> 
            </div>  
        </div>
        
    )
};

export default ScrollMatrix;