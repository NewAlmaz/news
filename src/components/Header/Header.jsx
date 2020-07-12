import React from "react";
import s from "./Header.module.css"

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.reporter}> Новостник </div>
            <div className={s.menuItems}>
                <div className={s.main}> Главная </div>
                <div className={s.news}> Новости </div>
                <div className={s.contact}> Контакты </div>
            </div>
        </header>
    )
}

export default Header