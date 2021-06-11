import React, { useEffect, useSate } from 'react';

const InvalidBook = () => {
    return (
        <div className = 'columnNW bgDG colOW'>
            <div className = 'topBorderAO pad1 bottomBorderAO topMargin1 bottomMargin1'></div>
            <div className = 'margin1'>We're Sorry, We Could Not Locate That Piece In Our Library</div>
            <div className = 'margin1'>Please Check That You Are Logged In, And That The Title You Entered Is Correct</div>
        </div>
    )
}

export default InvalidBook;