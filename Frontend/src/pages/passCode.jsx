import React from 'react'

const Passcode = (props) => {
  return (
    <>
      <div className="passcode-container">
        <div className="passcode-container1">
          <div className="passcode-container2"></div>
          <div className="passcode-container3"></div>
          <button className="passcode-button button">Continue</button>
          <div className="passcode-html-node">
            <span
              dangerouslySetInnerHTML={{
                __html:
                  '<svg width="159" height="1" viewBox="0 0 159 1" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n    <line y1="0.5" x2="159" y2="0.5" stroke="#57C984" />\r\n</svg>',
              }}
            />
          </div>
          <div className="passcode-html-node1">
            <span
              dangerouslySetInnerHTML={{
                __html:
                  '<svg width="159" height="1" viewBox="0 0 159 1" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n    <line y1="0.5" x2="159" y2="0.5" stroke="#57C984" />\r\n</svg>',
              }}
            />
          </div>
          <span className="passcode-text">
            <span>Family Setup</span>
            <br></br>
            <br></br>
          </span>
          <span className="passcode-text04">
            <span>Biometrics</span>
            <br></br>
            <br></br>
          </span>
          <span className="passcode-text08">Passcode Setup</span>
          <span className="passcode-text09">
            Setup passcode and biometrics for this device for easy logins.
          </span>
          <div>
            <span
              dangerouslySetInnerHTML={{
                __html:
                  '<svg width="96" height="1" viewBox="0 0 96 1" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n    <line y1="0.5" x2="96" y2="0.5" stroke="#D7D7D7" />\r\n</svg>',
              }}
            />
          </div>
          <span className="passcode-text10">1</span>
          <span className="passcode-text11">1</span>
          <span className="passcode-text12">1</span>
          <button className="passcode-button01 button">7</button>
          <button className="passcode-button02 button">4</button>
          <button className="passcode-button03 button">1</button>
          <button className="passcode-button04 button">8</button>
          <button className="passcode-button05 button">5</button>
          <button className="passcode-button06 button">2</button>
          <button className="passcode-button07 button">9</button>
          <button className="passcode-button08 button">0</button>
          <button className="passcode-button09 button">6</button>
          <button className="passcode-button10 button">3</button>
        </div>
      </div>
      <style jsx>
        {`
          .passcode-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .passcode-container1 {
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
            justify-content: flex-start;
          }
          .passcode-container2 {
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
          .passcode-container3 {
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
          .passcode-button {
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
          .passcode-html-node {
            top: 78px;
            left: 609px;
            width: 96px;
            position: absolute;
          }
          .passcode-html-node1 {
            top: 77px;
            left: 365px;
            width: 96px;
            position: absolute;
          }
          .passcode-text {
            top: 67px;
            left: 765px;
            color: rgb(62, 62, 62);
            width: 100px;
            height: 22px;
            position: absolute;
          }
          .passcode-text04 {
            top: 67px;
            left: 521px;
            color: rgb(62, 62, 62);
            height: 22px;
            position: absolute;
          }
          .passcode-text08 {
            top: 67px;
            left: 230px;
            color: #3e3e3e;
            height: 22px;
            position: absolute;
          }
          .passcode-text09 {
            top: 137px;
            left: 328px;
            color: rgb(147, 147, 147);
            width: 373px;
            height: 44px;
            position: absolute;
            text-align: center;
          }
          .passcode-text10 {
            top: 55px;
            left: 705px;
            width: 46px;
            height: 46px;
            display: flex;
            position: absolute;
            text-align: center;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: 50%;
            justify-content: center;
          }
          .passcode-text11 {
            top: 55px;
            left: 461px;
            width: 46px;
            height: 46px;
            display: flex;
            position: absolute;
            text-align: center;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: 50%;
            justify-content: center;
          }
          .passcode-text12 {
            top: 55px;
            left: 167px;
            color: #ffffff;
            width: 46px;
            height: 46px;
            display: flex;
            position: absolute;
            text-align: center;
            align-items: center;
            border-radius: 50%;
            justify-content: center;
            background-color: #ffb321;
          }
          .passcode-button01 {
            top: 335px;
            left: 379px;
            color: #125873;
            width: 90px;
            height: 55px;
            display: flex;
            position: absolute;
            align-items: center;
            border-color: #125873;
            border-radius: 0px;
            justify-content: center;
            background-color: Button;
            border-bottom-left-radius: 10px;
          }
          .passcode-button02 {
            top: 282px;
            left: 379px;
            color: #125873;
            width: 90px;
            height: 55px;
            display: flex;
            position: absolute;
            align-items: center;
            border-color: #125873;
            border-radius: 0px;
            justify-content: center;
            background-color: Button;
          }
          .passcode-button03 {
            top: 228px;
            left: 379px;
            color: #125873;
            width: 90px;
            height: 55px;
            display: flex;
            position: absolute;
            align-items: center;
            border-color: #125873;
            border-radius: 0px;
            justify-content: center;
            background-color: Button;
            border-top-left-radius: 10px;
          }
          .passcode-button04 {
            top: 335px;
            left: 467px;
            color: #125873;
            width: 90px;
            height: 55px;
            display: flex;
            position: absolute;
            align-items: center;
            border-color: #125873;
            border-radius: 0px;
            justify-content: center;
            background-color: Button;
          }
          .passcode-button05 {
            top: 282px;
            left: 467px;
            color: #125873;
            width: 90px;
            height: 55px;
            display: flex;
            position: absolute;
            align-items: center;
            border-color: #125873;
            border-radius: 0px;
            justify-content: center;
            background-color: Button;
          }
          .passcode-button06 {
            top: 228px;
            left: 467px;
            color: #125873;
            width: 90px;
            height: 55px;
            display: flex;
            position: absolute;
            align-items: center;
            border-color: #125873;
            border-radius: 0px;
            justify-content: center;
            background-color: Button;
          }
          .passcode-button07 {
            top: 335px;
            color: #125873;
            right: 377px;
            width: 90px;
            height: 55px;
            display: flex;
            position: absolute;
            align-items: center;
            border-color: #125873;
            border-radius: 0px;
            justify-content: center;
            background-color: Button;
            border-bottom-right-radius: 10px;
          }
          .passcode-button08 {
            top: 388px;
            left: 467px;
            color: #125873;
            width: 89px;
            height: 55px;
            display: flex;
            position: absolute;
            align-items: center;
            border-color: #125873;
            border-radius: 0px;
            justify-content: center;
            background-color: Button;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
          }
          .passcode-button09 {
            top: 282px;
            color: #125873;
            right: 377px;
            width: 90px;
            height: 55px;
            display: flex;
            position: absolute;
            align-items: center;
            border-color: #125873;
            border-radius: 0px;
            justify-content: center;
            background-color: Button;
          }
          .passcode-button10 {
            top: 228px;
            color: #125873;
            right: 377px;
            width: 90px;
            height: 55px;
            display: flex;
            position: absolute;
            align-items: center;
            border-color: #125873;
            border-radius: 0px;
            justify-content: center;
            background-color: Button;
            border-top-right-radius: 10px;
          }
        `}
      </style>
    </>
  )
}

export default Passcode
