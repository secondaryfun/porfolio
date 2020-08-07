import React from 'react';
import './ScrollTop.css';
import { useState, useEffect, useCallback } from 'react'

import ArrowUpButton from "../components/ArrowUpButton.jsx"
import handleScroll, { getScrollingDiv } from '../services/services.js'

function Scrolltop(props) {
    const [showBtn, setShowBtn] = useState(false)
    const [scrollDiv, setScrollDiv] = useState()

    const hideOnScroll = useCallback(
        () => {
            let navHeight = scrollDiv?.scrollTop
            if (navHeight > window.innerHeight * .2) onBtn()
            if (navHeight < window.innerHeight * .2) offBtn()
        },
        [scrollDiv],
    )

    const onBtn = () => {
        setShowBtn(true)
    }

    const offBtn = () => {
        setShowBtn(false)
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
        <div className={`ScrollTop__wrapper ${showBtn ? "show--bottom" : 'fadeout--bottom'}`}
            onClick={() => handleScroll(props.page, 'top')}
        >
            <ArrowUpButton />
        </div >
    );
}

export default Scrolltop;

Scrolltop.defaultProps = {
    btnIsBlack: true,
    backgroundColor: false
};
