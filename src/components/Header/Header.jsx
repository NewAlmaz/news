import React from "react";
import './Header.scss'

const Header = () => {
    return (
        <header className="header">
            <a className="reporter" href="/news//Main">Новостник</a>
            <nav className="menu">
                <ul className="menuItems">
                    <li className="menuItem active">
                        <a className="main" href="/news//Main">Главная</a>
                    </li>
                    <li className="menuItem">
                        <a className="news" href="/news/AllNews">Новости</a>
                    </li>
                    <li className="menuItem">
                        <a className="contact" href="/news/Contacts">Контакты</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header