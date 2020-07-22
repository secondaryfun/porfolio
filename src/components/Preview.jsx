import React from 'react';
import './Preview.css';

import { Link } from 'react-router-dom';

function Preview(props) {

    return (
        <div className={`Preview-wrapper flex-column space-around ${props.className}`}>
            <h2 className="oswald">{props.title}</h2>
            <Link to={props.link} className="open-sans headline">view project</Link>
        </div>
    );
}

export default Preview;
