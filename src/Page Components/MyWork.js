import React, { useState, useEffect } from 'react';

import ScrollMatrix from '../Generic Components/ScrollMatrix.js';

const MyWork = ({ auth }) => {

    return (
        <div>
            <div>Personally Uploaded Projects and Drafts</div>
            <ScrollMatrix />
        </div>
    )
}

export default MyWork;