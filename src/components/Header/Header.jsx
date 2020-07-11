import React from "react";
import s from "./Header.module.css"

const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://static.1tv.ru/uploads/video/material/splash/2/_original/492242_a585d0ae20.jpg'/>
            <div>Вот это шапка!</div>
        </header>
    )
}

export default Header