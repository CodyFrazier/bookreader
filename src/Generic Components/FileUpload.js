import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FileUpload = ({ auth }) => {
    //TODO
    /*
        1. When Submit is clicked, redirect to the new page for the uploaded file
        1a. - Perhaps prompt to see if the user would like to upload another file instead of redirect?
        2. When Cancel is pressed, redirect to Landing.                                                 *
    */

    const [uploadSelection, setUploadSelection] = useState([0, 1]); //change this when Upload Selection Tool is built.

    const onSubmit = (event) => {
        event.preventDefault();
        console.log('You Uploaded a Thing!')
    };

    return (
        <div className = ''>
            <div className = 'topBorderAO bottomBorderAO topMargin1 bottomMargin1 pad1'>
                <Link to = '/help/content-guidelines'>
                    <input type = 'button' className = 'colOW bgDG noBorder' value = 'Upload Standards' />
                </Link>
            </div>
            <form onSubmit = { onSubmit } className = 'margin1 borderOW columnNW'>
                <div className = 'alignCenter'>
                    { uploadSelection && <div className = 'padHalf'>
                        Preview Image Here, hidden if no data.
                    </div> }
                    <div className = 'padHalf'>
                        File Upload Selection Tool Here
                    </div>    
                </div>
                
                <div className = 'rowNW padHalf spaceAroundRow'>
                    <Link to = '/'>
                        <input type = 'button' value = 'Cancel' />
                    </Link>
                    <input type = 'submit' value = 'Submit' />
                </div>
            </form>
        </div>
    )
}

export default FileUpload;