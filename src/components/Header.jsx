// styles 
import '../scss/components/_header.scss'

import { Link } from "react-router-dom"


function Header() {

    return (<>
        <header>
            <nav className="main-nav">
                <div className="personal-name">Mila Palchenko</div>
                <ul className="main-nav__list">
                    <button className="main-nav__list--button">
                        <li className="main-nav__list--item">
                            <Link to="/home">Home</Link>
                        </li>
                    </button>
                    <button className="main-nav__list--button">
                        <li className="main-nav__list--item">
                            <Link to="/about">About</Link>
                        </li>
                    </button>
                    <button className="main-nav__list--button">
                        <li className="main-nav__list--item">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </button>
                </ul>
            </nav>
        </header>
    </>)
}

export default Header