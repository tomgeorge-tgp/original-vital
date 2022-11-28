import React, { useEffect, useState } from 'react'
// idea to the car
import Header from '../components/header'
import Toolbar from '../components/toolbar';
import {Link,Navigate,useNavigate,useLocation} from "react-router-dom";
import Card from '../components/cards';
import Profile from '../components/ProfileCard';
import Lastreadings from '../components/Lastreadings';
import bp_icon from '../components/assets/bp.png';
import axios from 'axios';
import api from '../api';
import "./style/dashBoard.css"
import { fetchUserUrl} from '../url/url';

import PopUp from '../components/PopUp';
import useLocalStorageRef from "../hooks/LocalStorage"



function Dashboard(){
  const navigate = useNavigate();
  const location=useLocation();
  const [diagnosisPage,setDiagnosisPage]=useState("");
 // const [id, setId, removeId] = useLocalStorage("userid",)
  const [user, setUser, removeUser] = useLocalStorageRef("user")
  
  const [userData,setUserData]=useState([]);
  //console.log(user.current);
//   const data={
//     name:location.state.name,
//     email:location.state.email,
//     password:location.state.password,
//     phoneNumber:location.state.phoneNumber,
//     gender:location.state.gender,
//     dob:location.state.dob,

// }

  if(diagnosisPage==="Blood Pressure")
    {
      navigate("/bpexisting",{state:userData});  //state: data
    }

  if(diagnosisPage==="Heart Rate")
  {
     navigate("/heartrateexisting",{state:userData});
  }  
  if(diagnosisPage==="Body Temperature")
  {
     navigate("/bodytemperatureexisting",{state:userData});
  }  
  if(diagnosisPage==="Blood Glucose")
  {
     navigate("/bloodglucoseexisting",{state:userData});
  }  
  if(diagnosisPage==="Digital Stethoscope")
  {
    //  navigate("",{});
  }  
  if(diagnosisPage==="ECG")
  {
    //  navigate("/heartrate",{});
  } 







  
  const userDataFetch=async()=>{
    try{
      console.log("user",user.current.id);
    const token=user.current.accessToken;
    if(!token){
       throw new Error("token not found");
       
    }
    const response=await api.get(fetchUserUrl+`/${user.current.id}`,
    {headers: {
      "Accept": "*/*",
      "Authorization": `Bearer ${token}`,
    }});
    console.table("data hear",response.data);
    setUserData(response.data);
  }catch(err)
  {
    if(err.response){
    //Not in the 200 response range
    console.log(err.response.data);
    console.log(err.response.status);
    console.log(err.response.headers);
  }
  else
  {
    console.log(`Error:${err.message}`);
  }
 navigate("/loginForm");
  }
  }
  useEffect(()=>{
     userDataFetch();
  },[])



 
    return (
      <>
        <div className="dashboard-container">
          <div className="dashboard-container1">
            <Header rootClassName="header-root-class-name"></Header>
            {/* <Toolbar rootClassName="toolbar-root-class-name"></Toolbar> */}
            
            <div className='mid-section'>
              <div className='readings'>
                   <div className='profile-card'><Profile data={userData?.name ?? ""}/></div> 
                  <div className='reading-cards'>
                {/* {popUp && <div className="pop__up"><PopUp setPopUp={setPopUp}/></div>} */}
                  <div onClick={(e)=>{
                console.log("click");
                setDiagnosisPage("Blood Pressure")}}>
                 <Card name = "Blood Pressure" img  = {bp_icon}></Card>
                 </div>


                   <div onClick={(e)=>{
                console.log("click")
                setDiagnosisPage("Heart Rate")}}>
                <Card name = "Heart Rate & SP02" img  = {bp_icon}></Card>
                </div>

                <div onClick={(e)=>{
                console.log("click");
                setDiagnosisPage("Body Temperature")}}>
                   <Card name = "Body Temperature" img  = {bp_icon}></Card>
                   </div>
                   <div onClick={(e)=>{
                console.log("click");
                setDiagnosisPage("Blood Glucose")}}>
                   <Card name = "Blood Glucose" img  = {bp_icon}></Card>
                   </div>
                   <div onClick={(e)=>{
                console.log("click");
                setDiagnosisPage("Digital Stethoscope")}}>
                   <Card name = "Digital Stethoscope" img  = {bp_icon}></Card>
                   </div>
                   <div onClick={(e)=>{
                console.log("click");
                setDiagnosisPage("Ecg")}}>
                   <Card name = "ECG" img  = {bp_icon}></Card>
                   </div>
                  </div>
              </div>
              <Lastreadings name1="Blood Pressure" name2="Heart Rate" name3="SpO2" name4="Body Temperature" name5="Blood Glucose" values = {[99,140,96,98,97,86]} ></Lastreadings>  
            </div>
          </div>
        </div>
      
      </>
    )
  }
  
  export default Dashboard