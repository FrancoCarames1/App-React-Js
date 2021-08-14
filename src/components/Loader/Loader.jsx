import React from "react";
import './Loader.css'

const Loader = () =>{

    return(
        // SACADO DE https://codepen.io/akellight/pen/oNxBJqG
        <div className="container_eye">
            <div class="eye">
            <svg class="sharingan" viewBox="0 0 100 100">
                <g id="full_pupil">
                <circle id="iris" r="30" cx="50%" cy="50%"></circle>
                <circle id="pupil" r="10" cx="50%" cy="50%"></circle>
                
                <text id="iris_anomaly" class="iris_anomaly" transform="rotate(180 30,8)">,</text>
                <use href="#iris_anomaly" transform="rotate(120 50,50)" fill="black"></use>
                <use href="#iris_anomaly" transform="rotate(240 50,50)" fill="black"></use>
                </g>
            </svg>
            </div>
        </div>
    )
}

export default Loader;