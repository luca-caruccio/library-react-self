import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LibraryLogo from '../assets/Library.svg';

const Nav = () => {
    return (
        <nav>
            <div className="nav_container">
                <a href="/">
                <img src="{LibraryLogo}" alt="" className="logo" />
                </a>
                <ul className="nav__links">
                    <li className="nav__list">
                        <a href="/" className="nav_link">
                        Home
                        </a>
                    </li>
                    <li className="nav__list">
                        <a href="/" className="nav_link">
                        Books
                        </a>
                    </li>
                    <button className="btn__menu">
                        <FontAwesomeIcon icon="bars" />
                    </button>
                    <li className="nav__icon">
                        <a href="/cart" className='nav__link'>
                        <FontAwesomeIcon icon="shopping-cart"/>
                        </a>
                        <span className='cart__length'>3</span>
                    </li>
                 </ul>
                 <div className="manu__backdrop">
                    <button className="btn__menu btn__menu--close">
                        <FontAwesomeIcon icon='times'/>
                    </button>
                    <ul className="menu__links">
                        <li className="menu__list">
                            <a href="/" className='menu__link'>
                            Home </a>
                        </li>
                        </ul>
                    <ul className="menu__links">
                        <li className="menu__list">
                            <a href="/books" className='menu__link'>
                            Books </a>
                        </li>
                        </ul>
                    <ul className="menu__links">
                        <li className="menu__list">
                            <a href="/cart" className='menu__link'>
                            Cart </a>
                        </li>
                    </ul>
                 </div>
            </div>
        </nav>
    );
}

export default Nav;