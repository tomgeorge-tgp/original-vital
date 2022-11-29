import React from 'react'
import "./style/bpExisting.css"
import Header from '../components/HeaderBar'
import  { useEffect, useState } from 'react';
import Bp2_Pop from "../components/Bp2Pop";
import BpStartPopUp from "../components/BpStart";
import BloodPressureEnd from "../components/BloodPressureStop";
import {Link,Navigate,useNavigate,useParams,useLocation} from "react-router-dom"
import api from '../api';
import CandleStickGraph from "../components/graphs/CandleStickGraph";
import { readBpSensor,fetchSensorDataUrl } from '../url/url';
import io from 'socket.io-client';
const socket=io.connect("http://localhost:5000");


const BloodPressurepopup = (props) => {
  const [bpData,setBpData]=useState([]);
  const [popUpSequence, setPopupSequence] = useState("BP_START");
        if (popUpSequence === "BP_START") return(<BpStartPopUp setinitateTestPopUp={"wear device and press \"start\"."} onExitClick={props.onExitClick} onContinueClick={()=>{setPopupSequence("BP_END");SensorRead((data)=>{setBpData(data); console.log("bpData",bpData)});}} />);
        else if (popUpSequence === "BP_END") return (<BloodPressureEnd setinitateTestPopUp={"wear device and press \"start\"."} data={bpData} onExitClick={props.onExitClick} onContinueClick={props.onContinueClick}  />);
 }

 function  SensorRead(callback){
   socket.emit("send_message",{message:"Start"});
   
    socket.on("bp_data",(data)=>{
      console.log("data: " , data.data);
      callback(data.data);

      if(data.data==="end")
      {
        
      }
    })

  
 }






 

function Bpexisting(){

  const [initateTestPopUp,setinitateTestPopUp]=useState(false);
  const navigate = useNavigate();
  const location=useLocation();
   console.log(location);

   const data={
    name:location.state.name,
    email:location.state.email,
    password:location.state.password,
    phoneNumber:location.state.phoneNumber,
    gender:location.state.gender,
    dob:location.state.dob,

}


  return (
    <>
     {/* <Bp_Start_Pop_Up/> */}
      <div className="bpexisting-container">
        <div className="bpexisting-container1">
     {initateTestPopUp && <BloodPressurepopup onExitClick={()=>setinitateTestPopUp(false)} />}
           {/* {initateTestPopUp && <div className="initate__test__pop__up"><BpStartPopUp setinitateTestPopUp={"wear device and press \"start\"."} onExitClick={()=>setinitateTestPopUp(false)} onContinueClick={()=>setinitateTestPopUp(false)}  /></div>}  */}
          <span className="bpexisting-text" onClick={(e)=>{
                navigate("/dashboard",{state:data});  }}>
            <span>&lt;</span>
            <br></br>
            <br></br>
          </span>
          <span className="bpexisting-text04">
            <span>instructions</span>
            <br></br>
            <br></br>
          </span>
          <span className="bpexisting-text08">
            <span>Blood Pressure</span>
            <br></br>
            <br></br>
          </span>
          <div className="bpexisting-container2" onClick={(e)=>{
                console.log("click");
                setinitateTestPopUp(true)}}
          >
            <span className="bpexisting-text12">
              <span>
                Initiate
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>Test</span>
              <br></br>
              <br></br>
            </span>
            <div className="bpexisting-html-node">
              <span
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n    <path\r\n        d="M33.6217 7H7.24035C6.00488 7 5 8.00488 5 9.24079V30.9003C5 32.1362 6.00488 33.1406 7.24035 33.1406H33.6217C34.8576 33.1406 35.862 32.1357 35.862 30.9003V9.24079C35.862 8.00488 34.8572 7 33.6217 7ZM34.4154 30.9003C34.4154 31.3381 34.0595 31.694 33.6217 31.694H7.24035C6.80248 31.694 6.44665 31.3381 6.44665 30.9003V9.24079C6.44665 8.80292 6.8025 8.44709 7.24035 8.44709H33.6217C34.0596 8.44666 34.4154 8.80294 34.4154 9.24079V30.9003Z"\r\n        fill="#A0F1DD" />\r\n    <path\r\n        d="M32.567 9.44141H8.29364C7.89387 9.44141 7.57031 9.76496 7.57031 10.1647V27.2738C7.57031 27.6731 7.89387 27.9971 8.29364 27.9971H32.567C32.9663 27.9971 33.2903 27.6731 33.2903 27.2738V10.1647C33.2903 9.76539 32.9661 9.44141 32.567 9.44141ZM31.8437 10.8881V17.9962H30.7202L28.74 12.3286C28.7353 12.3151 28.728 12.3041 28.7226 12.291C28.7125 12.2664 28.7019 12.2419 28.6888 12.2186C28.6783 12.1984 28.6656 12.1801 28.6531 12.1618C28.6395 12.142 28.6255 12.1222 28.6102 12.1039C28.5947 12.0856 28.5779 12.0686 28.5605 12.0518C28.5441 12.0363 28.5282 12.021 28.5103 12.0064C28.4901 11.99 28.4688 11.976 28.4466 11.962C28.4346 11.9538 28.424 11.9442 28.4109 11.9371C28.4042 11.9336 28.398 11.9317 28.3911 11.9284C28.3685 11.9168 28.3448 11.9078 28.3211 11.8981C28.2998 11.8895 28.2791 11.8807 28.2574 11.8744C28.2357 11.8682 28.2135 11.8647 28.1913 11.8604C28.1668 11.8557 28.1427 11.8503 28.1185 11.8484C28.0983 11.8469 28.077 11.8479 28.0563 11.8479C28.0299 11.8479 28.0038 11.8479 27.9778 11.8503C27.9579 11.8522 27.9388 11.857 27.919 11.8608C27.8914 11.8662 27.865 11.8714 27.8385 11.8802C27.8318 11.8826 27.8249 11.8826 27.8182 11.885C27.8047 11.8897 27.7933 11.8974 27.7801 11.9028C27.7556 11.9129 27.7315 11.9231 27.7082 11.9362C27.6889 11.9467 27.6706 11.9594 27.6523 11.9719C27.632 11.9855 27.6122 11.9999 27.5935 12.0154C27.5752 12.0309 27.5588 12.0468 27.5425 12.0641C27.5265 12.0804 27.511 12.0968 27.4958 12.1151C27.4798 12.1353 27.4654 12.1566 27.4514 12.1782C27.4437 12.1906 27.434 12.2014 27.4264 12.2143L21.9378 22.0091L16.7346 14.1487C16.7245 14.1338 16.7124 14.1222 16.7019 14.1082C16.687 14.0889 16.6724 14.0697 16.6556 14.0518C16.6358 14.0312 16.614 14.0129 16.5925 13.9944C16.5813 13.9847 16.5727 13.9741 16.5611 13.9655C16.5572 13.9627 16.5525 13.9612 16.5486 13.9582C16.5236 13.9403 16.4976 13.9259 16.4704 13.9119C16.4545 13.9033 16.4397 13.894 16.4231 13.8869C16.3975 13.8757 16.3714 13.8676 16.3449 13.8594C16.3262 13.8536 16.3079 13.8469 16.2885 13.8426C16.2629 13.8368 16.2375 13.8348 16.2115 13.832C16.1912 13.8301 16.1714 13.8262 16.1508 13.8258C16.1251 13.8254 16.0997 13.8277 16.0737 13.8301C16.0535 13.8316 16.0328 13.832 16.013 13.8355C15.9889 13.8394 15.9656 13.8467 15.9422 13.8533C15.92 13.8592 15.8978 13.8645 15.8761 13.8727C15.8563 13.8805 15.8375 13.8906 15.8186 13.8996C15.794 13.9113 15.7699 13.9229 15.7467 13.9377C15.7419 13.9405 15.737 13.942 15.7323 13.9455C15.7187 13.9547 15.7077 13.9662 15.6952 13.9758C15.6746 13.9913 15.6537 14.0066 15.6349 14.0256C15.6151 14.0443 15.5984 14.0645 15.5809 14.0854C15.5708 14.097 15.5596 14.1067 15.5501 14.1196L12.6906 17.9972L9.01696 17.9967V10.8886H31.8437V10.8881ZM9.01696 26.5504V19.4423H13.0555C13.1095 19.4423 13.1616 19.4356 13.2122 19.424C13.2258 19.4212 13.2383 19.4154 13.2518 19.4119C13.2889 19.4018 13.3246 19.3898 13.3595 19.3734C13.3758 19.3657 13.3909 19.3566 13.4068 19.3478C13.4372 19.331 13.4663 19.3125 13.4936 19.2914C13.5084 19.2798 13.5231 19.2681 13.5371 19.2556C13.5659 19.2296 13.592 19.2012 13.6167 19.1713C13.6234 19.1627 13.6322 19.1568 13.6385 19.148L16.1006 15.8091L21.3871 23.7962C21.3914 23.8025 21.3972 23.8064 21.4011 23.8122C21.4276 23.8503 21.4579 23.8849 21.4917 23.9179C21.4984 23.9245 21.5042 23.9323 21.5111 23.9385C21.5492 23.9719 21.5908 24.0023 21.6364 24.0283C21.6392 24.0298 21.6422 24.0302 21.645 24.0318C21.682 24.052 21.7221 24.0656 21.7621 24.0791C21.7795 24.0854 21.7963 24.0946 21.8138 24.0989C21.8635 24.111 21.9141 24.1164 21.9647 24.1177C21.9729 24.1181 21.981 24.1211 21.9892 24.1211H21.9901C21.9935 24.1211 21.9968 24.1196 22.0002 24.1196C22.0628 24.1187 22.1246 24.1095 22.1845 24.0931C22.2062 24.0869 22.2265 24.0752 22.2482 24.0666C22.2902 24.0507 22.3311 24.0339 22.3692 24.0102C22.3759 24.0059 22.3832 24.0048 22.3894 24.0005C22.4831 23.9383 22.5558 23.8567 22.6092 23.7668C22.6127 23.7609 22.6178 23.7566 22.6208 23.7513L27.9046 14.3213L29.5243 18.9584C29.5262 18.9631 29.5297 18.967 29.5316 18.9713C29.5553 19.0339 29.5865 19.0923 29.6257 19.1459C29.6339 19.1571 29.6431 19.1672 29.6522 19.1777C29.6903 19.224 29.7331 19.266 29.782 19.3017C29.7874 19.3056 29.7921 19.311 29.7975 19.3146C29.85 19.3512 29.9083 19.3784 29.9697 19.3995C29.9837 19.4042 29.9981 19.4087 30.0125 19.4124C30.0733 19.4298 30.1365 19.4419 30.2035 19.4423C30.205 19.4423 30.2063 19.4427 30.2078 19.4427H30.2093H31.845V26.5509L9.01696 26.5504Z"\r\n        fill="#A0F1DD" />\r\n    <path\r\n        d="M10.5267 29.1211H8.29364C7.89387 29.1211 7.57031 29.4451 7.57031 29.8444C7.57031 30.2438 7.89387 30.5677 8.29364 30.5677H10.5273C10.9271 30.5677 11.2506 30.2438 11.2506 29.8444C11.2504 29.4451 10.9264 29.1211 10.5267 29.1211H10.5267Z"\r\n        fill="#A0F1DD" />\r\n    <path\r\n        d="M15.5824 29.1211H13.3483C12.9486 29.1211 12.625 29.4451 12.625 29.8444C12.625 30.2438 12.9486 30.5677 13.3483 30.5677H15.5824C15.9822 30.5677 16.3058 30.2438 16.3058 29.8444C16.3058 29.4451 15.9822 29.1211 15.5824 29.1211Z"\r\n        fill="#A0F1DD" />\r\n</svg>',
                }}
              />
            </div>
          </div>
          <div className="bpexisting-container3">
            <span className="bpexisting-text19">
              <span>BPM</span>
              <br></br>
            </span>
            <span className="bpexisting-text22">
              <span>00</span>
              <br></br>
            </span>
            <span className="bpexisting-text25">
              <span>Pulse</span>
              <br></br>
              <br></br>
            </span>
          </div>
          <div className="bpexisting-graph">
            <span className="bpexisting-text29">
              <span>Your previous Blood Pressure &amp; Pulse readings</span>
              <br></br>
            </span>
            <div
              data-thq="thq-dropdown"
              className="bpexisting-thq-dropdown list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="bpexisting-dropdown-toggle"
              >
                <span className="bpexisting-text32">Last 10 readings</span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="bpexisting-dropdown-arrow"
                >
                  <svg viewBox="0 0 1024 1024" className="bpexisting-icon">
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="bpexisting-dropdown-list"
              >
                <li
                  data-thq="thq-dropdown"
                  className="bpexisting-dropdown list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="bpexisting-dropdown-toggle1"
                  >
                    <span className="bpexisting-text33">Sub-menu Item</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="bpexisting-dropdown1 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="bpexisting-dropdown-toggle2"
                  >
                    <span className="bpexisting-text34">Sub-menu Item</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="bpexisting-dropdown2 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="bpexisting-dropdown-toggle3"
                  >
                    <span className="bpexisting-text35">Sub-menu Item</span>
                  </div>
                </li>
              </ul>
            </div>
            <button className="bpexisting-button button">Full reading</button>
            <button className="bpexisting-button1 button">
              Systolic readings
            </button>
            <button className="bpexisting-button2 button">
              Mean Arterial Pressure
            </button>
            {/* <div>
              <span
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg width="906" height="2" viewBox="0 0 906 2" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n    <line opacity="0.2" x1="0.000551877" y1="0.5" x2="906" y2="1.5" stroke="#DEDEDE" />\r\n</svg>',
                }}
              />
            </div> */}
            {/* <div className="bpexisting-code-embed">
              <span
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg width="906" height="2" viewBox="0 0 906 2" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n    <line opacity="0.2" x1="0.000551877" y1="0.5" x2="906" y2="1.5" stroke="#DEDEDE" />\r\n</svg>',
                }}
              />
            </div> */}

            <div className="bp__graph"><CandleStickGraph/></div>
           
          </div>
          <div className="bpexisting-container4">
            <span className="bpexisting-text36">
              <span>mm Hg</span>
              <br></br>
            </span>
            <span className="bpexisting-text39">
              <span>mm Hg</span>
              <br></br>
            </span>
            <span className="bpexisting-text42">
              <span>00</span>
              <br></br>
            </span>
            <span className="bpexisting-text45">
              <span>00</span>
              <br></br>
            </span>
            <span className="bpexisting-text48">
              <span>Diastolic</span>
              <br></br>
              <br></br>
            </span>
            <span className="bpexisting-text52">
              <span>Systolic</span>
              <br></br>
              <br></br>
            </span>
          </div>
         
          <Header rootClassName="header-root-class-name4"></Header>
          <div className="bpexisting-code-embed1">
            <span
              dangerouslySetInnerHTML={{
                __html:
                  '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n    <path\r\n        d="M7.91076 9.02945C8.25037 9.02945 8.53206 9.31114 8.53206 9.65075C8.53206 9.99863 8.25037 10.272 7.91076 10.272H6.66817C6.32029 10.272 6.04688 9.99874 6.04688 9.65075C6.04688 9.31114 6.32018 9.02945 6.66817 9.02945V7.21525C6.32029 7.21525 6.04688 6.93356 6.04688 6.59395C6.04688 6.25434 6.32018 5.97266 6.66817 5.97266H7.28947C7.62908 5.97266 7.91076 6.25434 7.91076 6.59395V9.02945Z"\r\n        fill="#125873" />\r\n    <path\r\n        d="M7.80317 4.77044C7.80317 5.15984 7.48835 5.48286 7.09075 5.48286C6.70135 5.48286 6.38672 5.15987 6.38672 4.77044C6.38672 4.38101 6.70154 4.06641 7.09075 4.06641C7.48832 4.06641 7.80317 4.38112 7.80317 4.77044V4.77044Z"\r\n        fill="#125873" />\r\n    <path\r\n        d="M12.7574 7.16602C12.7574 5.61695 12.128 4.22523 11.1173 3.21478C10.1065 2.19592 8.70662 1.57462 7.16602 1.57462C5.61695 1.57462 4.22523 2.19592 3.20637 3.21478C2.19587 4.22529 1.57457 5.61693 1.57457 7.16602C1.57457 8.71511 2.19587 10.1068 3.20637 11.1173C4.22523 12.1361 5.61701 12.7574 7.16602 12.7574C8.7067 12.7574 10.1068 12.1361 11.1173 11.1173C12.128 10.1067 12.7574 8.71511 12.7574 7.16602ZM14 7.16602C14 10.9434 10.935 14 7.16602 14C3.38861 14 0.332031 10.9434 0.332031 7.16602C0.332031 3.38861 3.38861 0.332031 7.16602 0.332031C10.935 0.332031 14 3.38861 14 7.16602Z"\r\n        fill="#125873" />\r\n</svg>',
              }}
            />
          </div>
          <div className="bpexisting-html-node2">
            <span
              dangerouslySetInnerHTML={{
                __html:
                  '<svg width="78" height="21" viewBox="0 0 78 21" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n    <path d="M1 10.5H77" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />\r\n    <path d="M65 1L77 10.5L65 20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />\r\n</svg>',
              }}
            />
          </div>
        </div>
       
       
      </div>
     
    </>
  )
}

export default Bpexisting