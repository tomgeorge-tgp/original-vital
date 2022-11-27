import React from 'react'
import { Link } from 'react-router-dom'
import "./style/welcomeBack.css";
import Header from './header'

function Welcomeback(props){


  
  return (
    <>
      <div className="welcomeback-container">
        <div className="welcomeback-container1">
          <Header rootClassName="header-root-class-name4"></Header>
          <div className="welcomeback-container2">
            <div className="welcomeback-html-node">
              <span
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg width="66" height="66" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n    <circle cx="22" cy="22" r="22" fill="#E6F3F9" />\r\n    <path\r\n        d="M13.8159 29.113C13.8144 29.0874 13.8144 29.0616 13.8159 29.036C13.9757 25.488 17.5923 22.6341 21.2806 22.6341C24.9689 22.6341 29.2358 25.4878 29.3843 29.0436C29.3868 29.0665 29.3868 29.0896 29.3843 29.1125V31.9994H31.982L31.9818 29.1262C31.9813 28.9957 31.9665 28.8653 31.9377 28.7379C31.632 24.9668 28.2191 21.8153 24.451 20.5869C25.5686 19.6772 26.2577 18.3442 26.3543 16.9064C26.4507 15.4688 25.9458 14.0554 24.96 13.0045C23.9743 11.9536 22.5965 11.3591 21.1555 11.3633C19.7145 11.3675 18.3402 11.97 17.3607 13.0269C16.3811 14.0837 15.8845 15.4998 15.9895 16.9369C16.0946 18.3742 16.7918 19.7031 17.9145 20.6064C14.3914 21.8543 11.5076 25.0137 11.2456 28.7574V28.7571C11.2201 28.8786 11.207 29.0023 11.207 29.1263V31.9994H13.8017L13.8159 29.113ZM21.1817 13.9632C21.8765 13.9603 22.5438 14.234 23.0364 14.7242C23.5288 15.2141 23.806 15.8798 23.8067 16.5747C23.8074 17.2695 23.5317 17.9357 23.04 18.4269C22.5486 18.9178 21.8819 19.193 21.1871 19.1915C20.4926 19.1901 19.8268 18.9122 19.3373 18.419C18.8479 17.9259 18.5749 17.2584 18.5786 16.5636C18.5786 15.8723 18.8526 15.2089 19.3403 14.719C19.8282 14.2291 20.4903 13.9524 21.1817 13.9494L21.1817 13.9632Z"\r\n        fill="#8DC1D6" />\r\n</svg>',
                }}
              />
            </div>
            <span className="welcomeback-text">Ben Stiller</span>
            <div className="welcomeback-html-node1">
              <span
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n    <path d="M1 6.15619L5.58328 10.7395L15.3227 1" stroke="#4DCC97" stroke-width="2" stroke-linecap="round"\r\n        stroke-linejoin="round" />\r\n</svg>',
                }}
              />
            </div>
          </div>
          <span className="welcomeback-text1">Hi , welcome back Ben!</span>
          <Link to="/dashboard" className="welcomeback-navlink button">
            Continue
          </Link>
        </div>
      </div>
    </>
  )
}

export default Welcomeback
