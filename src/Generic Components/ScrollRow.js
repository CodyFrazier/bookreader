import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StoryPreview from './StoryPreview';

const ScrollRow = ({ rowName, rowNum }) => {

    //To Do
    /*
        1. Set up state for collecting a list of objects to display within the ScrollRow
        2. Set up Scrollability
        3. Set up a way to determine the heading for the ScrollRow
    */

    //This is a scrolling row for housing various things such as a list of featured stories or the like.
    return (
        <div className = 'topMargin1 leftMarginHalf rightMarginHalf'>
            <h3>{ rowName } { rowNum }</h3>
            <div className = 'padHalf borderOW rowNW scrollable'>
                <StoryPreview num = { 1 } imgSize = { 'rowIMG' } />
                <StoryPreview num = { 2 } imgSize = { 'rowIMG' } />
                <StoryPreview num = { 3 } imgSize = { 'rowIMG' } />
                <StoryPreview num = { 4 } imgSize = { 'rowIMG' } />
                <StoryPreview num = { 5 } imgSize = { 'rowIMG' } />
                <StoryPreview num = { 6 } imgSize = { 'rowIMG' } />
                <StoryPreview num = { 7 } imgSize = { 'rowIMG' } />
                <StoryPreview num = { 8 } imgSize = { 'rowIMG' } />
                <StoryPreview num = { 9 } imgSize = { 'rowIMG' } />
                <StoryPreview num = { 10 } imgSize = { 'rowIMG' } />
                <StoryPreview num = { 11 } imgSize = { 'rowIMG' } />
                <StoryPreview num = { 12 } imgSize = { 'rowIMG' } />
            </div>  
        </div>
        
    )
};

export default ScrollRow;