import React from "react";
import "./component_styles/content.css";

function Content(){
    return(
        <div className="Content">
            <div className="Title-quote">
                <p>A Wave of Voices:</p>
                <p id="subquote">Where Every Story Gets Heard...</p>
            </div>
            <div className="Interaction"><button>Listen Now</button></div>
        </div>
    )
}

export default Content;