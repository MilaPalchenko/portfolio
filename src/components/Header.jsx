// styles 
import '../scss/components/_header.scss'

import { Link } from "react-router-dom"


function Header() {

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