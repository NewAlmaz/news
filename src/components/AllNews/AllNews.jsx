import React from "react";
import "./AllNews.scss";
import OneSmallNews from "../OneSmallNews/OneSmallNews";

const AllNews = () => {
    return (
        <div className="newsContainer">
            <div className="title">Быть в курсе <span className="titleSelect">событий</span></div>
            <div className="allNewsWrapper">
                <OneSmallNews/>
                <OneSmallNews/>
                <OneSmallNews/>
                <OneSmallNews/>
                <OneSmallNews/>
                <OneSmallNews/>

            </div>
        </div>
    )
}

export default AllNews