import React from 'react';
import './ScrollTop.css';
import { useState, useEffect } from 'react'

import ArrowUpButton from "../components/ArrowUpButton.jsx"
import handleScroll, { getScrollingDiv } from '../services/services.js'

function Scrolltop(props) {
    const [showBtn, setShowBtn] = useState(false)
    const [scrollDiv, setScrollDiv] = useState()
    const [btnIsBlack, setBtnIsBlack] = useState(props.btnIsBlack)

    let arrowIsBlack
    useEffect(() => {
        if (btnIsBlack === false) {
            arrowIsBlack = false
        } else {
            arrowIsBlack = true
        }


        setScrollDiv(getScrollingDiv(props.page))

        console.log(scrollDiv)
        if (scrollDiv) {

            scrollDiv.addEventListener('scroll', (e) => hideOnScroll(e))
            console.log('listening to scroll')

            return (
                scrollDiv.removeEventListener('scroll', (e) => hideOnScroll(e))
            )
        }
    }, [btnIsBlack, scrollDiv])

    const hideOnScroll = (e) => {
        let navHeight = scrollDiv.scrollTop
        console.log(navHeight + " " + window.innerHeight * .2)
        if (navHeight > window.innerHeight * .2) onBtn()
        if (navHeight < window.innerHeight * .2) offBtn()
    }

    const onBtn = () => {
        setShowBtn(true)
    }

    const offBtn = () => {
        setShowBtn(false)
    }

    const handleMouseEnter = () => {
        setBtnIsBlack(!btnIsBlack)
    }
    const handleMouseLeave = () => {
        setBtnIsBlack(!btnIsBlack)
    }


    return (
        <div className={`ScrollTop__wrapper ${showBtn ? "" : 'hide--right'}`}
            onClick={() => handleScroll(props.page, 'top')}
        >
            <ArrowUpButton arrowIsBlack={arrowIsBlack} />
        </div >
    );
}

export default Scrolltop;

Scrolltop.defaultProps = {
    btnIsBlack: true,
    backgroundColor: false
};
