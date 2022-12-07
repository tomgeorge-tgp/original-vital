import React from "react";
import "./style/popUpVolume.css"
import group36 from './assets/Group 36.svg'
function VolumeButton()
{
    return(<div className="volume__button">
       <img className="volume__icon" src={group36} alt="this is an  img" /> 
    </div>);
}

export default VolumeButton;