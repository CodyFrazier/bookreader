import React, { useState, useEffect } from 'react';

const Community = ({ auth }) => {

    //TODO

    /*
        1. Not Sure How much of this will even be used. But here's a mock up of what might be included.
    */

    return (
        <div className = 'scrollable vh90'>
            <div className = 'topBorderAO bottomBorderAO topMargin1 bottomMargin1 pad1 rowNW spaceAroundRow'>
                <input type = 'button' className = 'colOW bgDG noBorder' value = 'Forums' />
                <input type = 'button' className = 'colOW bgDG noBorder' value = 'Messages' />
                <input type = 'button' className = 'colOW bgDG noBorder' value = 'Settings' />
            </div>
        </div>
        
    )
}

export default Community;