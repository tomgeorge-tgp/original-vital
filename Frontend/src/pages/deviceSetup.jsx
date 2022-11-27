import React from 'react'

const DeviceSetup = (props) => {
  return (
    <>
      <div className="device-setup-container">
        <div className="device-setup-container1">
          <div className="device-setup-container2"></div>
          <div className="device-setup-container3"></div>
          <button className="device-setup-button button">Continue</button>
          <span className="device-setup-text">
            <span>Step3</span>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </span>
          <span className="device-setup-text06">
            <span>Step2</span>
            <br></br>
            <br></br>
            <br></br>
          </span>
          <span className="device-setup-text11">Step1</span>
          <div className="device-setup-html-node">
            <span
              dangerouslySetInnerHTML={{
                __html:
                  '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n    <circle cx="8" cy="8" r="7.5" fill="white" stroke="#57C984" />\r\n</svg>\r\n',
              }}
            />
          </div>
          <div className="device-setup-html-node1">
            <span
              dangerouslySetInnerHTML={{
                __html:
                  '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n    <circle cx="8" cy="8" r="7.5" fill="white" stroke="#57C984" />\r\n</svg>\r\n',
              }}
            />
          </div>
          <div className="device-setup-html-node2">
            <span
              dangerouslySetInnerHTML={{
                __html:
                  '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n    <circle cx="8" cy="8" r="7.5" fill="white" stroke="#57C984" />\r\n</svg>\r\n',
              }}
            />
          </div>
          <div className="device-setup-html-node3">
            <span
              dangerouslySetInnerHTML={{
                __html:
                  '<svg width="159" height="1" viewBox="0 0 159 1" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n    <line y1="0.5" x2="159" y2="0.5" stroke="#57C984" />\r\n</svg>',
              }}
            />
          </div>
          <div className="device-setup-html-node4">
            <span
              dangerouslySetInnerHTML={{
                __html:
                  '<svg width="159" height="1" viewBox="0 0 159 1" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n    <line y1="0.5" x2="159" y2="0.5" stroke="#57C984" />\r\n</svg>',
              }}
            />
          </div>
          <span className="device-setup-text12">
            <span>Setup for other members in the family</span>
            <br></br>
            <br></br>
          </span>
          <span className="device-setup-text16">
            <span>Biometric setup</span>
            <br></br>
            <br></br>
          </span>
          <span className="device-setup-text20">Passcode Setup</span>
          <span className="device-setup-text21">
            <span>
              Setup your device with a passcode and biometric for easy logins in
              the future.
            </span>
            <br></br>
          </span>
          <span className="device-setup-text24">Device setup</span>
          <div className="device-setup-html-node5">
            <span
              dangerouslySetInnerHTML={{
                __html:
                  '<svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n    <path d="M11 2L3 10L11 18" stroke="#125873" stroke-width="3" stroke-linecap="round" />\r\n</svg>',
              }}
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .device-setup-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .device-setup-container1 {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            width: 1024px;
            bottom: 0px;
            height: 600px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            border-color: rgba(158, 0, 0, 0);
            border-width: 1px;
            align-content: center;
            justify-content: center;
          }
          .device-setup-container2 {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 1024px;
            height: 32px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            background-color: #393939;
          }
          .device-setup-container3 {
            top: 298px;
            flex: 0 0 auto;
            left: 377px;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            position: absolute;
            flex-direction: column;
          }
          .device-setup-button {
            top: 473px;
            left: 389px;
            color: rgb(255, 255, 255);
            width: 245px;
            bottom: -96px;
            height: 50px;
            display: flex;
            position: absolute;
            box-shadow: 0px 10px 20px 0px #d4d4d4;
            align-items: center;
            padding-top: 15px;
            border-width: 0px;
            padding-left: 83px;
            align-content: center;
            border-radius: 10px;
            padding-right: 70px;
            padding-bottom: 15px;
            justify-content: flex-start;
            background-color: rgb(18, 88, 115);
          }
          .device-setup-text {
            top: 311px;
            left: 708px;
            width: 47px;
            bottom: 0px;
            height: 22px;
            position: absolute;
          }
          .device-setup-text06 {
            top: 311px;
            left: 465px;
            width: 47px;
            bottom: 0px;
            height: 22px;
            position: absolute;
          }
          .device-setup-text11 {
            top: 311px;
            left: 232px;
            right: 0px;
            width: 47px;
            bottom: 0px;
            height: 22px;
            position: absolute;
          }
          .device-setup-html-node {
            top: 314px;
            left: 684px;
            position: absolute;
          }
          .device-setup-html-node1 {
            top: 314px;
            left: 441px;
            position: absolute;
          }
          .device-setup-html-node2 {
            top: 314px;
            left: 208px;
            position: absolute;
          }
          .device-setup-html-node3 {
            top: 322px;
            left: 532px;
            width: 152px;
            position: absolute;
          }
          .device-setup-html-node4 {
            top: 323px;
            left: 291px;
            width: 152px;
            position: absolute;
          }
          .device-setup-text12 {
            top: 347px;
            left: 708px;
            color: #3e3e3e;
            width: 210px;
            bottom: 0px;
            height: 22px;
            position: absolute;
          }
          .device-setup-text16 {
            top: 347px;
            left: Space-HalfUnit;
            color: #3e3e3e;
            bottom: 0px;
            height: 22px;
            position: absolute;
          }
          .device-setup-text20 {
            top: 347px;
            left: 232px;
            color: #3e3e3e;
            bottom: 0px;
            height: 22px;
            position: absolute;
          }
          .device-setup-text21 {
            top: 137px;
            left: 328px;
            color: #939393;
            width: 373px;
            height: 44px;
            position: absolute;
            text-align: center;
          }
          .device-setup-text24 {
            top: 64px;
            left: 71px;
            color: rgb(18, 88, 115);
            width: 194px;
            height: 19px;
            position: absolute;
            font-size: 20px;
            font-family: Manrope;
            line-height: 19px;
          }
          .device-setup-html-node5 {
            top: 64px;
            left: 40px;
            position: absolute;
          }
        `}
      </style>
    </>
  )
}

export default DeviceSetup
