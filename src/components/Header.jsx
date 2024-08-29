// styles 
import '../scss/components/_header.scss'
import "../scss/components/_hamburger-menu.scss"
import { Link } from "react-router-dom"
import HamburgerMenu from './HamburgerMenu'
import { useState } from 'react'


function Header() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => { 
        setHamburgerOpen(!hamburgerOpen);
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
            <div className="hamburger" onClick={toggleHamburger}>
                    <HamburgerMenu />
                    {/* misses styles, animation and proper design. also ham-btn isn't animated to do turns into X for closing the menu */}
                    {hamburgerOpen && <div className='off-screen-menu'>
                        <div> <Link to="/home">
                        <button className="main-nav__list--button">Home</button>
                        </Link></div>
                        <div><Link to="/about">
                        <button className="main-nav__list--button">About</button>
                        </Link></div>
                        <div> <Link to="/contact">
                        <button className="main-nav__list--button">Contact</button>
                        </Link></div>
                        
                    </div>
                    }
                </div>
        </header>
    </>)
}

export default Header