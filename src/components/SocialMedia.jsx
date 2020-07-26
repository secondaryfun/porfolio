import React from 'react';
import './SocialMedia.css';

import linkedin from "../assets/images/icons/icon-linkedin.svg"
import email from "../assets/images/icons/icon-email.svg"
import twitter from "../assets/images/icons/icon-twitter.svg"
import github from "../assets/images/icons/icon-github.svg"

function SocialMedia(props) {

    const handleClick = () => {
        window.open("mailto:c.birkenhagen@gmail.com")
    }
    return (
        <div className={`flex-row space-around ${props.className}`} >
            <div onClick={handleClick}
                rel='noopener noreferrer'
                target='_blank'
                className={`social-media_link blue-on-hover margin-1  ${!props.large ? "" : "social-media_link--large "}`}>
                <img src={email} alt="email" className="max-size" />
            </div>
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
            <a href="https://github.com/secondaryfun"
                rel='noopener noreferrer'
                target='_blank'
                className={`social-media_link blue-on-hover margin-1 ${!props.large ? "" : "social-media_link--large"}`}>
                <img src={github} alt="twitter" className="max-size" />
            </a>
        </div >
    );
}

export default SocialMedia;
