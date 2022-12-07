import React from "react";
import VolumeButton  from './PopUpVolume.jsx'
// import BloodPressureReaderImg from "../components/BloodPressureReaderImg.jsx";

import Button  from './ButtonPopUp.jsx'
import './style/popUp.css'
function PopUp({setPopUp})
{
    return(<>
 <div className="window">
 <div className="pop__up">
      <VolumeButton/> 
     <div className="center__pop__up">
     <div className="pop__up__container">
      <div className="circle"></div>
      <div onClick={(e)=>{
                console.log("click");
                 setPopUp("")}}>
                 <Button name="button"/>
                 </div>
     
     </div>
     </div>
     
   </div>

 </div>
  
   


    </>);
}

export default PopUp;