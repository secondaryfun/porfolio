import React from 'react';
import './SocialMedia.css';

import linkedin from "../assets/images/icons/icon-linkedin.svg"
import email from "../assets/images/icons/icon-email.svg"
import twitter from "../assets/images/icons/icon-twitter.svg"

function SocialMedia(props) {
    return (
        <div className={`flex-row space-around ${props.className}`} >
            <a href="mailto:c.birkenhagen@gmail.com"
                rel='noopener noreferrer'
                target='_blank'
                className={`social-media_link blue-on-hover margin-1  ${!props.large ? "" : "social-media_link--large "}`}>
                <img src={email} alt="email" className="max-size" />
            </a>
            <a href="https://www.linkedin.com/in/birkenhagen/"
                rel='noopener noreferrer'
                target='_blank'
                className={`social-media_link blue-on-hover margin-1 ${!props.large ? "" : "social-media_link--large"}`}>
                <img src={linkedin} alt="linkedin" className="max-size" />
            </a>
            <a href="https://twitter.com/secondaryfun"
                rel='noopener noreferrer'
                target='_blank'
                className={`social-media_link blue-on-hover margin-1 ${!props.large ? "" : "social-media_link--large"}`}>
                <img src={twitter} alt="twitter" className="max-size" />
            </a>
        </div >
    );
}

export default SocialMedia;
