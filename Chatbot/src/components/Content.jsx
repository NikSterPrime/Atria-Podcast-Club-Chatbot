import React from "react";
import "./component_styles/content.css";

function Content(){
    return(
        <div className="Content">
            <div className="titlequote">
                <p id="Quote">A Wave of Voices:</p>
                <p id="subquote">Where Every Story Gets Heard...</p>
            </div>
            <button id="listen-button">Listen Now</button>
        </div>
    )
}

export default Content;