import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ErrorMessage = ({ error }) => {
    return (
        <div className = 'rowNW spaceAroundRow colorAO point14'>
            <div>Error: { error.description }</div>
            <div>Code:</div>
            <Link to = { `/help/errors/${ error.id }` }>{ error.id }</Link>
        </div>
    )
}

export default ErrorMessage;