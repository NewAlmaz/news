import React from "react";
import "./Main.scss"
import OneSmallNews from "../OneSmallNews/OneSmallNews";

const Main = (props) => {
    let newsItems = props.state.news.map( el => <OneSmallNews  id={el.id} date={el.date} original={el.original} message={el.message}/> );

    return (
        <div className="newsContainer">
            <div className="title">Всегда свежие <span className="titleSelect">новости</span></div>
            <div className="mainNewsWrapper">
                {newsItems}
            </div>
        </div>
    )
}

export default Main