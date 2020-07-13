import React from "react";
import './Header.scss'

const Header = () => {
    return (
        <header className="header">
            <a className="reporter" href="/main">Новостник</a>
            <nav className="menu">
                <ul className="menuItems">
                    <li className="menuItem active">
                        <a className="main" href="/main">Главная</a>
                    </li>
                    <li className="menuItem">
                        <a className="news" href="/allnews">Новости</a>
                    </li>
                    <li className="menuItem">
                        <a className="contact" href="/contacts">Контакты</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header