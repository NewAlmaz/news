import React from "react";
import "./Contacts.scss"

const Contacts = () => {
    return (
        <div className="info">

            <ul className="infoList">
                <li className="phone">+375 (29) 123 45 67</li>
                <li className="fio">Пчёлко<br/>Алексей</li>
                <li className="email">PsyDemon@yandex.by</li>
                <li className="description">JavaScript разработчик</li>
                <li className="skill">ES5, ES6, <span className="perfectSkill">React</span></li>
            </ul>

            <img className="photo"
                 src="https://decider.com/wp-content/uploads/2017/06/gilfoyle.jpg?quality=90&strip=all&w=1156&h=771&crop=1"
                 alt="Моя фото"
            />

        </div>
    )
};

export default Contacts;