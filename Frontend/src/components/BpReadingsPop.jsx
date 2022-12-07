import React from 'react'
import "./style/bpReadingPop.css";
//import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'

function BpReadingsPop(props){
    console.log("props",props)
  return (
    <>
      <div className="h-f-readingsscreen-container">
        <div className="h-f-readingsscreen-container1">
          <button className="h-f-readingsscreen-button button">
          Continue
          </button>
          <button className="h-f-readingsscreen-button1 button">
          Not Continue
          </button>
          <div className="h-f-readingsscreen-audio-button button">
            <div>
            {/* <span
              dangerouslySetInnerHTML={{
                __html:'<svg width="19" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.9788 12.4641C13.6263 12.4641 13.3007 12.6521 13.1243 12.9575C12.9481 13.2627 12.9481 13.6388 13.1243 13.944C13.3007 14.2492 13.6263 14.4372 13.9788 14.4372C15.5711 14.4372 17.0424 13.5879 17.8385 12.2089C18.6347 10.8298 18.6347 9.13105 17.8385 7.75175C17.0424 6.37281 15.5711 5.52344 13.9788 5.52344C13.6263 5.52344 13.3007 5.71148 13.1243 6.01668C12.9481 6.32188 12.9481 6.69798 13.1243 7.00315C13.3007 7.30853 13.6263 7.49657 13.9788 7.49657C14.8661 7.49657 15.686 7.96986 16.1297 8.73836C16.5734 9.5067 16.5734 10.4536 16.1297 11.222C15.686 11.9905 14.8661 12.4638 13.9788 12.4638V12.4641Z" fill="#125873"/>
<path d="M4.74382 14.6902L11.1217 19.1742C11.3199 19.3134 11.5625 19.375 11.803 19.3469C12.0437 19.3189 12.2656 19.2034 12.4265 19.0223C12.5873 18.8413 12.6761 18.6073 12.6756 18.3651V1.59345C12.6754 1.35138 12.5865 1.11791 12.4254 0.937423C12.2644 0.756776 12.0426 0.641683 11.8023 0.61398C11.562 0.586109 11.3197 0.6477 11.1217 0.786884L4.74384 5.26827H1.53746C1.27578 5.26827 1.02475 5.37219 0.839814 5.5573C0.654697 5.74225 0.550781 5.99326 0.550781 6.25495V13.7035C0.550781 13.9652 0.654697 14.2162 0.839814 14.4012C1.02476 14.5863 1.27577 14.6902 1.53746 14.6902L4.74382 14.6902ZM2.52413 7.24159H5.08912C5.36129 7.24073 5.62089 7.12735 5.80671 6.92829L10.7025 3.4902V16.4684L5.81156 13.0303C5.62575 12.8312 5.36597 12.7179 5.09379 12.717H2.53118L2.52413 7.24159Z" fill="#125873"/>
</svg>`}'
              }}
            /> */}
            
            </div>
          </div>
          <div className="h-f-readingsscreen-container2">
            {/* <div className="h-f-readingsscreen-oxygen-saturation">
              <span className="h-f-readingsscreen-sp-o2">SpO2</span>
              <span className="h-f-readingsscreen-sp-o2-value">
              96
              </span>
              <span className="h-f-readingsscreen-sp-o2-unit">
              96
              </span>
            </div> */}
            {/* <div className="h-f-readingsscreen-heart-rate">
              <span className="h-f-readingsscreen-h-r">Heart Rate</span>
              <span className="h-f-readingsscreen-h-r-value">
              96
              </span>
              <span className="h-f-readingsscreen-h-r-unit">
              BPM
              </span>
            </div> */}
            <div className="h-f-readingsscreen-b-p-systolic">
              <span className="h-f-readingsscreen-b-p">Bp- Systolic</span>
              <span className="h-f-readingsscreen-b-p-value">
              {props.data.sis}
              </span>
              <span className="h-f-readingsscreen-b-p-unit">
              mmHg
              </span>
            </div>
            <div className="h-f-readingsscreen-b-p-diastolic">
              <span className="h-f-readingsscreen-b-p1">Bp-Diastolic</span>
              <span className="h-f-readingsscreen-b-p-value1">
              {props.data.dia}
              </span>
              <span className="h-f-readingsscreen-b-p-unit1">
              mmHg
              </span>
            </div>
            {/* <div className="h-f-readingsscreen-body-temperature">
              <span className="h-f-readingsscreen-b-t">Body Temperature</span>
              <span className="h-f-readingsscreen-b-t-value">
              98
              </span>
              <span className="h-f-readingsscreen-b-t-unit">
              ˚F
              </span>
            </div> */}
            <div className="h-f-readingsscreen-share-button button">
              <div className="h-f-readingsscreen-div1">
                {/* <DangerousHTML
                  html={`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.0946 0C11.5007 0 10.1915 1.31125 10.1915 2.90764C10.1915 3.19423 10.2351 3.47134 10.3136 3.73374L5.06594 6.07108C4.53219 5.47309 3.75953 5.09207 2.9031 5.09207C1.3092 5.09207 0 6.40333 0 7.99972C0 9.5961 1.30909 10.9079 2.9031 10.9079C3.75945 10.9079 4.53219 10.5271 5.06594 9.92927L10.3133 12.2663C10.2347 12.5286 10.1911 12.8057 10.1911 13.0924C10.1911 14.6887 11.5003 16 13.0942 16C14.6881 16 15.9998 14.6887 15.9998 13.0924C15.9998 11.496 14.688 10.1847 13.0942 10.1847C12.1249 10.1847 11.2635 10.6711 10.7352 11.41L5.5834 9.11546C5.72815 8.77138 5.80882 8.39439 5.80882 7.99986C5.80882 7.60544 5.72815 7.22891 5.5834 6.88471L10.7352 4.59014C11.2635 5.32918 12.1254 5.81546 13.0946 5.81546C14.6885 5.81546 16 4.50432 16 2.90781C16 1.31131 14.6886 0.000171424 13.0946 0.000171424L13.0946 0Z" fill="#125873"/>
</svg>

`}
                ></DangerousHTML> */}
              </div>
            </div>
          </div>
          <span className="h-f-readingsscreen-text">{props.H1}</span>
        </div>
      </div>
      <style jsx>
        {`
          
        `}
      </style>
    </>
  )
}



export default BpReadingsPop
