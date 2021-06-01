import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className = 'justifyCenter spaceAroundRow rowNW'>
            <div>© 2021 Cody Frazier</div>
            <div>•</div>
            <Link to = '/help/'>
                <div>Help Page</div>
            </Link>
        </footer>
    )
}

export default Footer;