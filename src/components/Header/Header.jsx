import React from "react";
import './Header.scss'

const Header = () => {
    return (
        <header className="header">
            <a className="reporter" href="/Main">Новостник</a>
            <nav className="menu">
                <ul className="menuItems">
                    <li className="menuItem active">
                        <a className="main" href="/Main">Главная</a>
                    </li>
                    <li className="menuItem">
                        <a className="news" href="/AllNews">Новости</a>
                    </li>
                    <li className="menuItem">
                        <a className="contact" href="/Contacts">Контакты</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header