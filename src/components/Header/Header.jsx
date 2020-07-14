import React from "react";
import './Header.scss'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <a className="reporter" href="/news/Main">Новостник</a>
            <nav className="menu">
                <ul className="menuItems">
                    <li className="menuItem active">
                        <NavLink className="main" to="/news/Main">Главная</NavLink>
                    </li>
                    <li className="menuItem">
                        <NavLink className="news" to="/news/AllNews">Новости</NavLink>
                    </li>
                    <li className="menuItem"> 
                        <NavLink className="contact" to="/news/Contacts">Контакты</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header