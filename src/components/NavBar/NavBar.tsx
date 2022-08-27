import {Link} from "react-router-dom";
import React from "react";
import './NavBar.css'

const NavBar = () => {
    return (
        <div className='navbar'>
            <div>
                <h3>Translator</h3>
            </div>
            <div>
                <Link className='nav-item' to={'/'}>Переводы</Link>
                <Link className='nav-item' to={'favorite'}>Избранное</Link>
            </div>
        </div>
    )
}

export default NavBar;