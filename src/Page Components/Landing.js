import React, { useState, useEffect } from 'react';
import ScrollRow from '../Generic Components/ScrollRow.js';

const Landing = ({ auth }) => {

    //Featured Books, Suggestions, Aaaadvertisements...?, Random Selection ( within whitelisted tags ), Featured Tag or two
    return (
        <div className = 'scrollable vh82'>
            <ScrollRow rowName = { 'Untitled Row' } rowNum = { 1 } />
            <ScrollRow rowName = { 'Untitled Row' } rowNum = { 2 } />
            <ScrollRow rowName = { 'Untitled Row' } rowNum = { 3 } />
            <ScrollRow rowName = { 'Untitled Row' } rowNum = { 4 } />
            <ScrollRow rowName = { 'Untitled Row' } rowNum = { 5 } />
            <ScrollRow rowName = { 'Untitled Row' } rowNum = { 6 } />
        </div>
    )
}

export default Landing;