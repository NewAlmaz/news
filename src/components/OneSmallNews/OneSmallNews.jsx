import React from "react";
import "./OneSmallNews.scss";

const OneSmallNews = (props) => {
    return (
        <div className="itemNews">
            {/*id={props.id}<br/>*/}
            date={props.date}<br/>
            original={props.original}<br/>
            message={props.message}<br/>
        </div>
    )
}

export default OneSmallNews