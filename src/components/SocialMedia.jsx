import React from 'react';
import './SocialMedia.css';

import linkedin from "../assets/images/icons/icon-linkedin.svg"
import email from "../assets/images/icons/icon-email.svg"
import twitter from "../assets/images/icons/icon-twitter.svg"

function SocialMedia(props) {
    return (
        <div className='flex-row space-around'>
            <a href="mailto:c.birkenhagen@gmail.com" target='_blank' className="social-media_link">
                <img src={email} alt="email" className="max-size" />
            </a>
            <a href="https://www.linkedin.com/in/birkenhagen/" target='_blank' className="social-media_link">
                <img src={linkedin} alt="linkedin" className="max-size" />
            </a>
            <a href="https://twitter.com/secondaryfun" target='_blank' className="social-media_link">
                <img src={twitter} alt="twitter" className="max-size" />
            </a>
        </div>
    );
}

export default SocialMedia;
