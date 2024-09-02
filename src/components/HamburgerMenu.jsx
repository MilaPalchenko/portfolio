// styles
import '../scss/components/_burger-menu.scss'

import React from 'react';
import { useState } from "react";

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(true);

    const setOpenState = () => {
        let reverseOpened = isOpen;
        setIsOpen(!reverseOpened);
    }

    return (
        <div className="menu-wrap">
            <div className={isOpen ? 'menu-btn' : 'menu-btn-open'}
                onClick={() => setOpenState()}>
                <div className="menu-btn-burger">
                    {/* lines here via ::before && ::after styles */}
                </div>
            </div>
        </div>
    )
}

export default HamburgerMenu