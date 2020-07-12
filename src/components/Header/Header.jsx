import React from "react";
import s from "./Header.module.css"
import Main from "../Main/Main";
import Contacts from "../Contacts/Contacts";

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.reporter}><a href="/main">Новостник</a></div>
            <div className={s.menuItems}>
                <div className={s.main}><a href="/main">Главная</a></div>
                <div className={s.news}><a href="/allnews">Новости</a></div>
                <div className={s.contact}><a href="/contacts">Контакты</a></div>
                <Main/>
            </div>
            <Contacts/>
        </header>
    )
}

export default Header