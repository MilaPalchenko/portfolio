import './styles/scroll-to-top.css';
import React, { useState, useEffect } from 'react';

import ArrowUp from '../assets/icons-arrow-up-50.png'

// doesn't work with ParallaxLayers due to Parallax not actually creating 2nd page
// works if pages are something like <div> containers and take more than 100vh total
const ScrollToTop = () => {

    const [showTopBtn, setShowTopBtn] = useState(false);

    // doesn't animate button to appear and disappear 
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    // works
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="scroll-to-top-btn">
            <button className='icon-position icon-style' onClick={goToTop}>
                <img src={ArrowUp}
                className='arrow-image'></img>
            </button>
        </div>
    );
};
export default ScrollToTop;