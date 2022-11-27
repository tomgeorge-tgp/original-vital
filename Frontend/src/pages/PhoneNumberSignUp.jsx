import React from 'react';
import { useState } from 'react';
import {Link,Navigate,useNavigate,useLocation} from "react-router-dom"
import "./style/phoneNumber.css";
import axios from 'axios';
import api from '../api';
import { signupUrl } from '../url/url';
import useLocalStorageRef from "../hooks/LocalStorage"


function PhoneNumber(){
 const location=useLocation();
 const [user, setUser, removeUser] = useLocalStorageRef("user")
 const [phone,setPhone] = useState("");
 const navigate = useNavigate();  
  function handleSubmit(e)
 {
    
    e.preventDefault();
    const data={
         name:location.state.name,
         email:location.state.email,
         password:location.state.password,
         phoneNumber:"+91"+phone,
         gender:location.state.gender,
         dob:location.state.dob,
   
  }
   console.log(data);
    
 

      
    api.post(
      //  signupUrl,
      location.state.url,
       data,
       {
       headers: {
         "Content-Type":"application/json",
         "Accept": "*/*",
       }
     }).then(res => { 
          console.log(res.status, res.data)
          console.log(res.data.user._id)
          setUser({id: res.data?.user?._id, accessToken: res.data?.accessToken});
          console.log(user.current);
     }
     )
     .catch(err =>  new Error(err))
     .finally(navigate("/dashboard",{state: data}));
     
    
     
   }
    
   
 
  

  return (
    <>
      <div className="ph-number-container">
        <div className="ph-number-container1">
          <div className="ph-number-container2"></div>
          <div className="ph-number-container3"></div>
          <button className="ph-number-button button" onClick={(e)=>{
                setPhone(phone+"+");
                console.log(phone);
            }}>+</button>
          <button className="ph-number-button01 button" onClick={(e)=>{
                setPhone(phone+"7");
                console.log(phone);
            }}>7</button>
          <button className="ph-number-button02 button" onClick={(e)=>{
                setPhone(phone+"4");
                console.log(phone);
            }}>4</button>
          <button className="ph-number-button03 button" onClick={(e)=>{
                setPhone(phone+"1");
                console.log(phone);
            }}>1</button>
          <button className="ph-number-button04 button" onClick={(e)=>{
                setPhone(phone+"0");
                console.log(phone);
            }}>0</button>
          <button className="ph-number-button05 button" onClick={(e)=>{
                setPhone(phone+"8");
                console.log(phone);
            }}>8</button>
          <button className="ph-number-button06 button" onClick={(e)=>{
                setPhone(phone+"5");
                console.log(phone);
            }}>5</button>
          <button className="ph-number-button07 button" onClick={(e)=>{
                setPhone(phone+"2");
                console.log(phone);
            }}>2</button>
          <button className="ph-number-button08 button" onClick={(e)=>{
                // setPhone(phone+"_");
                console.log(phone);
            }}>_</button>
          <button className="ph-number-button09 button" onClick={(e)=>{
                setPhone(phone+"9");
                console.log(phone);
            }}>9</button>
          <button className="ph-number-button10 button" onClick={(e)=>{
                setPhone(phone+"6");
                console.log(phone);
            }}>6</button>
          <button className="ph-number-button11 button" onClick={(e)=>{
                setPhone(phone+"3");
                console.log(phone);
            }}>3</button>
          <span className="ph-number-text">+91   -   {phone}</span>
          <button className="ph-number-button12 button" onClick={(e)=>{
                setPhone(phone);
                handleSubmit(e);
            }}
          >Continue</button>
          <span className="ph-number-text1">
            Enter your phone number to proceed
          </span>
          <div className="ph-number-html-node" onClick={(e)=>{
                setPhone(phone.slice(0, -1));
                
            }}>
            <span
              dangerouslySetInnerHTML={{
                __html:
                  '<svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n    <path\r\n        d="M5.27411 13C5.06741 13 4.87445 12.9007 4.74438 12.7363L0.16095 6.97265C-0.0538986 6.70175 -0.0538986 6.29812 0.162445 6.02724H0.16095L4.74438 0.262124C4.87647 0.095151 5.07256 1.04233e-07 5.27411 1.04233e-07H17.3072C17.6855 1.04233e-07 18 0.333087 18 0.733823V12.2659C18 12.6666 17.6855 12.9997 17.3072 12.9997L5.27411 13ZM5.59767 11.5324H16.6163V1.46615H5.59767L1.59765 6.49907L5.59767 11.5324ZM8.42781 9.6615C8.25102 9.6615 8.07192 9.58838 7.93806 9.44645C7.67075 9.16331 7.67075 8.69162 7.93806 8.40847L9.73918 6.49907L7.93806 4.59126C7.67116 4.30855 7.67198 3.83842 7.93806 3.55501V3.55343C8.07409 3.40833 8.25183 3.33838 8.42781 3.33838C8.60461 3.33838 8.78332 3.41093 8.91757 3.55343L10.7187 5.46124L12.5198 3.55527C12.6558 3.40888 12.8345 3.33864 13.0115 3.33864C13.1911 3.33864 13.3686 3.41478 13.4997 3.55182L13.5012 3.5534C13.7685 3.83654 13.7685 4.30823 13.5012 4.59138L11.6986 6.4992L13.5012 8.40859C13.7685 8.69173 13.7685 9.16342 13.5012 9.44657C13.2339 9.72971 12.7886 9.72971 12.5213 9.44657L10.7187 7.53717L8.91757 9.44657C8.78358 9.5885 8.60433 9.66162 8.42781 9.66162L8.42781 9.6615Z"\r\n        fill="#125873" />\r\n</svg>',
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default PhoneNumber;
