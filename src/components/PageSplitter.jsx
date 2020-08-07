import React from 'react';
import './PageSplitter.css';
import { useState, useEffect, useCallback } from 'react'

import { getScrollingDiv } from '../services/services.js'

function PageSplitter(props) {
    const [showSplitScreen, setShowSplitScreen] = useState(false)
    const [scrollDiv, setScrollDiv] = useState()

    const hideOnScroll = useCallback(
        () => {
            let navHeight = scrollDiv?.scrollTop
            let elementHeight = document.querySelector('.Page-splitter__animated').getBoundingClientRect().top
            let activationHeight = elementHeight
            // console.log(elementHeight)
            if (navHeight > activationHeight) onSplitScreen()
            if (navHeight < activationHeight) offSplitScreen()
        },
        [scrollDiv],
    )

    const onSplitScreen = () => {
        setShowSplitScreen(true)
    }

    const offSplitScreen = () => {
        setShowSplitScreen(false)
    }
    useEffect(() => {
        setScrollDiv(getScrollingDiv(props.page))
        if (scrollDiv) {
            scrollDiv.addEventListener('scroll', (e) => hideOnScroll(e))
            return (
                scrollDiv.removeEventListener('scroll', (e) => hideOnScroll(e))
            )
        }
    }, [scrollDiv, hideOnScroll, props.page])

    return (
        <div className={`${props.className} 
        Page-splitter__animated ${!showSplitScreen ? "" : 'Page-splitter__animate hover-opacity'}`} >
        </div>
    );
}

export default PageSplitter;

PageSplitter.defaultProps = {
    backgroundColor: false
};
