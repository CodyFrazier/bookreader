import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ScrollMatrix from '../Generic Components/ScrollMatrix.js';

const MyWork = ({ auth }) => {

    return (
        <div className = 'scrollable vh90'>
            <div className = 'topBorderAO bottomBorderAO topMargin1 bottomMargin1 rowNW spaceAroundRow'>
                <Link to = '/mywork/upload'>
                    <input type = 'button' className = 'colOW bgDG margin1 noBorder' value = 'Upload' />    
                </Link>
                <Link to = '/mywork/draft'>
                    <input type = 'button' className = 'colOW bgDG margin1 noBorder' value = 'New Draft' />
                </Link>
            </div>
            <ScrollMatrix heading = { 'My Saved Work' } />
        </div>
    )
}

export default MyWork;