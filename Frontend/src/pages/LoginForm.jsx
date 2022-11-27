import React from 'react'
import "./style/loginForm.css";
import {useState,useEffect} from "react";
import "./style/signUpForm.css";
import {Link,Navigate,useNavigate,useParams} from "react-router-dom"
import axios from 'axios';
import api from '../api';
import { loginUrl } from '../url/url';


function LoginForm(){
    const navigate = useNavigate();
    const [loginMode,setLoginMode]=useState("");
    const [email,setEmail]=useState("1gfege3@gmail.com");
    const [name,setName]=useState("");
    const [phoneNumber,setPhoneNumber]=useState("");
    const [password,setPassword]=useState("*************");
 
    async function handleSubmit(e)
    {
      e.preventDefault();
      const data={
         name,
         email,
         password,
         phoneNumber,
         url:loginUrl,
         type:"login",
         gender:"",
         dob:"",
      };
      console.log(data);
  
    if(loginMode==="phonenumber")
    {
      navigate("/phonenumber",{state: data});  
    }
}
  return (
    <>
      <div className="loginexisting-container">
        <div className="loginexisting-container1">
          <div className="loginexisting-container2"></div>
          <input
            type="text"
            placeholder="Enter"
            className="loginexisting-input content input"
            onChange={(e)=>{
                setName(e.target.value);
                console.log(name);
            }}
          />
          <span className="loginexisting-text">Exisitng user sign-in</span>
          <span className="loginexisting-text1">Name</span>
          <span className="loginexisting-text2">    </span>
          <span className="loginexisting-text3">
            Enter your name and proceed
          </span>
          <span className="loginexisting-text4">Select a mode to sign-up</span>

          <button className="loginexisting-button button"
            onClick={(e)=>{
            setLoginMode("phonenumber");
          }}>
          Phone
          </button>

          <button className="loginexisting-button1 button">
            Unique Identification No.
          </button>
          <button className="loginexisting-button2 button">
          Email
          </button>
          <button className="loginexisting-button3 button"   onClick={(e)=>{
                handleSubmit(e);
            }}>
          Continue
          </button>
          <div className="loginexisting-html-node">
            <span
              dangerouslySetInnerHTML={{
                __html:
                  '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n    <path fill-rule="evenodd" clip-rule="evenodd"\r\n        d="M10.7911 9.33957C10.827 9.30361 10.8219 9.24317 10.7786 9.21392L8.9585 7.98085C8.92574 7.95874 8.88214 7.96297 8.85445 7.99077L8.22272 8.6224C8.13262 8.71249 7.96347 8.8526 7.69401 8.88762C7.44769 8.91955 7.20445 8.85197 6.97229 8.7408C6.51963 8.52402 5.88676 8.03085 4.92791 7.07199C3.96916 6.11314 3.47598 5.48026 3.25911 5.02761C3.14793 4.79554 3.08046 4.5522 3.11238 4.30599C3.14731 4.03651 3.28742 3.86727 3.3775 3.77728L4.00924 3.14555C4.03693 3.11776 4.04116 3.07415 4.01905 3.0415L2.78609 1.22134C2.75674 1.17805 2.6963 1.17288 2.66034 1.20894L1.94946 1.91982C1.39285 2.47643 1.09755 2.82432 1.20791 3.46319C1.27124 3.82938 1.47758 4.33555 1.96465 5.04209C2.44955 5.74553 3.19174 6.61768 4.28698 7.71287C5.38222 8.80805 6.25439 9.55041 6.95775 10.0352C7.66429 10.5224 8.17048 10.7287 8.53665 10.7919C9.1755 10.9024 9.52341 10.607 10.08 10.0505L10.7911 9.33957ZM11.4433 8.23274C12.1015 8.67868 12.1921 9.61429 11.6289 10.1775L10.9129 10.8935C10.3726 11.4338 9.62401 12.1825 8.33494 11.9597C7.73503 11.856 7.06653 11.5495 6.2853 11.0109C5.50086 10.4701 4.57216 9.67391 3.4492 8.55087C2.32617 7.42783 1.52986 6.49905 0.989036 5.71478C0.450517 4.93354 0.143948 4.26493 0.0403123 3.66513C-0.182457 2.37595 0.566135 1.62735 1.10643 1.08717L1.82256 0.371026C2.38568 -0.192199 3.32129 -0.101471 3.76725 0.556804L5.00022 2.37688C5.34088 2.87988 5.27693 3.55386 4.8473 3.98348L4.32375 4.50702C4.3251 4.50981 4.32654 4.51271 4.32799 4.51581C4.45105 4.77267 4.81662 5.28474 5.76595 6.2341C6.71531 7.18357 7.22738 7.54902 7.48435 7.67217C7.48735 7.67352 7.49024 7.67496 7.49313 7.67631L8.01658 7.15286C8.4463 6.72314 9.1203 6.65918 9.62317 6.99984L11.4433 8.23274ZM7.38486 7.78453C7.38475 7.78463 7.38486 7.78453 7.38517 7.78422L7.38486 7.78453ZM4.21575 4.61488L4.21554 4.61509C4.21544 4.61519 4.21554 4.61509 4.21554 4.61509L4.21575 4.61488Z"\r\n        fill="#8DC1D6" />\r\n</svg>',
              }}
            />
          </div>
          <div className="loginexisting-html-node1">
            <span
              dangerouslySetInnerHTML={{
                __html:
                  '<svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n    <path\r\n        d="M13.5001 0H1.49995C1.10221 0.000389164 0.720983 0.158515 0.439743 0.43974C0.158503 0.720965 0.000398498 1.10221 0 1.49994V9.50006C0.000389133 9.8978 0.158516 10.279 0.439743 10.5603C0.720969 10.8415 1.10221 10.9996 1.49995 11H13.5001C13.8978 10.9996 14.279 10.8415 14.5603 10.5603C14.8415 10.279 14.9996 9.8978 15 9.50006V1.49994C14.9996 1.10221 14.8415 0.720978 14.5603 0.43974C14.279 0.158502 13.8978 0.000398495 13.5001 0ZM7.85333 6.43935C7.75955 6.53301 7.63242 6.58554 7.49983 6.58554C7.36724 6.58554 7.24014 6.53301 7.14633 6.43935L1.70683 0.999892H13.2928L7.85333 6.43935ZM4.79287 5.49993L0.999831 9.29295V1.70692L4.79287 5.49993ZM5.49984 6.2069L6.43926 7.14632V7.14645C6.72063 7.42768 7.10213 7.58569 7.49987 7.58569C7.8976 7.58569 8.2791 7.42769 8.56047 7.14645L9.4999 6.20689L13.2929 9.99991H1.70693L5.49984 6.2069ZM10.2068 5.49993L13.9998 1.70692V9.29295L10.2068 5.49993Z"\r\n        fill="#8DC1D6" />\r\n</svg>',
              }}
            />
          </div>
          <div className="loginexisting-html-node2">
            <span
              dangerouslySetInnerHTML={{
                __html:
                  '<svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n    <rect x="0.5" y="0.5" width="17" height="11" rx="1.5" stroke="#8DC1D6" stroke-linejoin="round" />\r\n    <path\r\n        d="M10.355 7.95974C10.3546 7.95192 10.3546 7.94401 10.355 7.93618C10.4012 6.8503 11.4457 5.97684 12.5109 5.97684C13.5761 5.97684 14.8084 6.85022 14.8513 7.93849C14.852 7.9455 14.852 7.95257 14.8513 7.95957V8.84313H15.6016L15.6015 7.96379C15.6013 7.92382 15.5971 7.88393 15.5888 7.84494C15.5005 6.69078 14.5148 5.72623 13.4265 5.35028C13.7493 5.07186 13.9483 4.66388 13.9762 4.22383C14.0041 3.78387 13.8583 3.35128 13.5736 3.02963C13.2889 2.708 12.891 2.52606 12.4748 2.52735C12.0586 2.52863 11.6617 2.71305 11.3788 3.03649C11.0959 3.35994 10.9525 3.79335 10.9828 4.23318C11.0131 4.67307 11.2145 5.07977 11.5387 5.35624C10.5212 5.73816 9.68836 6.70512 9.61271 7.85089V7.85082C9.60533 7.888 9.60156 7.92586 9.60156 7.9638V8.84313H10.3509L10.355 7.95974ZM12.4823 3.32307C12.683 3.32217 12.8757 3.40595 13.018 3.55596C13.1602 3.70591 13.2402 3.90966 13.2404 4.12232C13.2407 4.33496 13.161 4.53887 13.019 4.6892C12.8771 4.83944 12.6845 4.92367 12.4839 4.92323C12.2833 4.92277 12.091 4.83772 11.9497 4.68679C11.8083 4.53587 11.7295 4.33157 11.7305 4.11893C11.7305 3.90735 11.8097 3.70432 11.9505 3.55438C12.0914 3.40444 12.2827 3.31976 12.4823 3.31885L12.4823 3.32307Z"\r\n        fill="#8DC1D6" />\r\n    <path d="M3 3.15625H8.7" stroke="#8DC1D6" stroke-linecap="round" />\r\n    <path d="M3 6H6.6" stroke="#8DC1D6" stroke-linecap="round" />\r\n</svg>',
              }}
            />
          </div>
          <div className="loginexisting-html-node3">
            <span
              dangerouslySetInnerHTML={{
                __html:
                  '<svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n    <path d="M11 2L3 10L11 18" stroke="#125873" stroke-width="3" stroke-linecap="round" />\r\n</svg>',
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginForm