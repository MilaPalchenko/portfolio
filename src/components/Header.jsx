// styles 
import '../scss/components/_header.scss'

import { Link } from "react-router-dom"
import { useState } from 'react'



function Header() {
    
     const [hamburgerOpen, setHamburgerOpen] = useState(false);

     const toggleHamburger = () => { 
        let reverseOpened = hamburgerOpen;
        setHamburgerOpen(!reverseOpened);
         console.log(hamburgerOpen);
     }

    return (<>
        <header>
            <nav className="main-nav">
                <div className="personal-name">Mila Palchenko</div>
                <ul className="main-nav__list">
                    <li className="main-nav__list--item">
                        <Link to="/home">
                            <button className="main-nav__list--button">Home</button>
                        </Link>
                    </li>
                    <li className="main-nav__list--item">
                        <Link to="/about">
                            <button className="main-nav__list--button">About</button>
                        </Link>
                    </li>
                    <li className="main-nav__list--item">
                        <Link to="/contact">
                            <button className="main-nav__list--button">Contact</button>
                        </Link>
                    </li>
                </ul>
            </nav>                
        </header>
    </>)
}

export default Header