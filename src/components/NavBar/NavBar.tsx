import {Link} from "react-router-dom";
import React from "react";
import './NavBar.css'
import {useTheme} from "../../hooks/useTheme";

const NavBar = () => {
    const {theme, setTheme} = useTheme()

    const enableLightTheme = () => {
        setTheme('light');
    }

    const enableDarkTheme = () => {
        setTheme('dark');
    }
    return (
        <div className='navbar'>
            <div>
                <h3 className='navbar-header'>Translator</h3>
            </div>
            <div>
                <Link className='nav-item' to={'/'}>Translations</Link>
                <Link className='nav-item' to={'favorite'}>Favorites</Link>
                <button onClick={enableDarkTheme}>Dark</button>
                <button onClick={enableLightTheme}>Light</button>
            </div>
        </div>
    )
}

export default NavBar;