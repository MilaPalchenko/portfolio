// styles 
import '../scss/components/_header.scss'

import { Link } from "react-router-dom"

function NavLinks() {
     

    return (<>
        {/* fix class names */}
        <div className='main-nav__list--item'><Link to="/home">
        <button className="main-nav__list--button">Home</button>
            </Link></div>
        <div className='main-nav__list--item'><Link to="/about">
        <button className="main-nav__list--button">About</button>
        </Link></div>
        <div className='main-nav__list--item'> <Link to="/contact">
        <button className="main-nav__list--button">Contact</button>
        </Link></div>

    </>);
}

export default NavLinks
