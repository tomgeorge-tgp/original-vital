import React from 'react'

const Authmode = (props) => {
  return (
    <>
      <div className="authmode-container">
        <div className="authmode-container1">
          <div className="authmode-container2"></div>
          <div className="authmode-container3"></div>
          <button className="authmode-button button">+</button>
          <button className="authmode-button01 button">7</button>
          <button className="authmode-button02 button">4</button>
          <button className="authmode-button03 button">1</button>
          <button className="authmode-button04 button">0</button>
          <button className="authmode-button05 button">8</button>
          <button className="authmode-button06 button">5</button>
          <button className="authmode-button07 button">2</button>
          <button className="authmode-button08 button">_</button>
          <button className="authmode-button09 button">9</button>
          <button className="authmode-button10 button">6</button>
          <button className="authmode-button11 button">3</button>
          <span className="authmode-text">+91   -   0000 000 000</span>
          <button className="authmode-button12 button">Continue</button>
          <span className="authmode-text1">
            Enter your phone number to proceed
          </span>
          <div className="authmode-html-node">
            <span
              dangerouslySetInnerHTML={{
                __html:
                  '<svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n    <path\r\n        d="M5.27411 13C5.06741 13 4.87445 12.9007 4.74438 12.7363L0.16095 6.97265C-0.0538986 6.70175 -0.0538986 6.29812 0.162445 6.02724H0.16095L4.74438 0.262124C4.87647 0.095151 5.07256 1.04233e-07 5.27411 1.04233e-07H17.3072C17.6855 1.04233e-07 18 0.333087 18 0.733823V12.2659C18 12.6666 17.6855 12.9997 17.3072 12.9997L5.27411 13ZM5.59767 11.5324H16.6163V1.46615H5.59767L1.59765 6.49907L5.59767 11.5324ZM8.42781 9.6615C8.25102 9.6615 8.07192 9.58838 7.93806 9.44645C7.67075 9.16331 7.67075 8.69162 7.93806 8.40847L9.73918 6.49907L7.93806 4.59126C7.67116 4.30855 7.67198 3.83842 7.93806 3.55501V3.55343C8.07409 3.40833 8.25183 3.33838 8.42781 3.33838C8.60461 3.33838 8.78332 3.41093 8.91757 3.55343L10.7187 5.46124L12.5198 3.55527C12.6558 3.40888 12.8345 3.33864 13.0115 3.33864C13.1911 3.33864 13.3686 3.41478 13.4997 3.55182L13.5012 3.5534C13.7685 3.83654 13.7685 4.30823 13.5012 4.59138L11.6986 6.4992L13.5012 8.40859C13.7685 8.69173 13.7685 9.16342 13.5012 9.44657C13.2339 9.72971 12.7886 9.72971 12.5213 9.44657L10.7187 7.53717L8.91757 9.44657C8.78358 9.5885 8.60433 9.66162 8.42781 9.66162L8.42781 9.6615Z"\r\n        fill="#125873" />\r\n</svg>',
              }}
            />
          </div>
          <span className="authmode-text2">Authentication mode</span>
          <div className="authmode-html-node1">
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
          .authmode-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .authmode-container1 {
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
          .authmode-container2 {
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
          .authmode-container3 {
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
          .authmode-button {
            top: 389px;
            left: 379px;
            color: rgb(18, 88, 115);
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
          .authmode-button01 {
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
          }
          .authmode-button02 {
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
          .authmode-button03 {
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
          .authmode-button04 {
            top: 389px;
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
          .authmode-button05 {
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
          .authmode-button06 {
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
          .authmode-button07 {
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
          .authmode-button08 {
            top: 389px;
            color: rgb(18, 88, 115);
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
          .authmode-button09 {
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
          }
          .authmode-button10 {
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
          .authmode-button11 {
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
          .authmode-text {
            top: 172px;
            left: 386px;
            color: rgb(18, 88, 115);
            width: 250px;
            height: 40px;
            margin: auto;
            display: flex;
            position: absolute;
            font-size: 16px;
            align-items: center;
            font-family: Manrope;
            line-height: 21.86px;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: 20px;
            justify-content: center;
          }
          .authmode-button12 {
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
          .authmode-text1 {
            top: 118px;
            left: 373px;
            color: #939393;
            position: absolute;
          }
          .authmode-html-node {
            top: 412px;
            left: 589px;
            position: absolute;
          }
          .authmode-text2 {
            top: 64px;
            left: 71px;
            color: rgb(18, 88, 115);
            width: 250px;
            height: 19px;
            position: absolute;
            font-size: 20px;
            font-family: Manrope;
            line-height: 19px;
          }
          .authmode-html-node1 {
            top: 64px;
            left: 40px;
            position: absolute;
          }
        `}
      </style>
    </>
  )
}

export default Authmode
