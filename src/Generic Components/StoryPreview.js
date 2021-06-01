import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const StoryPreview = () => {
    const [story, setStory] = useState({});

    return (
        <div className ='padHalf'>This will be the image representing a story in such places as within a ScrollRow. Clicking it should take
            the user to the story view page.
        </div>
    )
};

export default StoryPreview;