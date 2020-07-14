import React from "react";
import './Header.scss'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <NavLink className="reporter" href="/Main">Новостник</NavLink>
            <nav className="menu">
                <ul className="menuItems">
                    <li className="menuItem active">
                        <NavLink className="main" to="/Main">Главная</NavLink>
                    </li>
                    <li className="menuItem">
                        <NavLink className="news" to="/AllNews">Новости</NavLink>
                    </li>
                    <li className="menuItem">
                        <NavLink className="contact" to="/Contacts">Контакты</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header