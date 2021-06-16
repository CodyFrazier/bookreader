import React, { useEffect, useState } from 'react';

const DraftEditor = ({ auth }) => {
    // TODO

    /*
        1. Make Use of Overlays to Display settings for a new draft.
        2. Prompt user to save or discard draft progress when clicking new draft while already working on something.
        3. Make Use of Overlays to upload the cover image for a piece. 
        3a. This may be redundant but it allow quick fix for those who didn't upload a cover initially.
    */
    return (
        <div className = 'columnNW'>
            <div className = 'topBorderAO bottomBorderAO topMargin1 bottomMargin1 topPad1 bottomPad1 leftPadHalf rightPadHalf rowNW spaceBetweenRow'>
                <input type = 'button' className = 'colOW bgDG noBorder' value = 'New Draft' />
                <input type = 'button' className = 'colOW bgDG noBorder' value = 'Save Draft' />
                <input type = 'button' className = 'colOW bgDG noBorder' value = 'Upload Cover Image' />
            </div>
        </div>
    )
}

export default DraftEditor;