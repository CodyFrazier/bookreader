import React, { useState, useEffect } from 'react';
import ScrollRow from '../Generic Components/ScrollRow.js';

const Landing = ({ auth }) => {

    return (
        <div className = 'scrollable vh82'>
            <div>The Landing Page</div>
            <div>Featured Books, Suggestions, Aaaadvertisements...?, Random Selection ( within whitelisted tags ), Featured Tag or two</div>
            <ScrollRow />
            <ScrollRow />
            <ScrollRow />
        </div>
    )
}

export default Landing;