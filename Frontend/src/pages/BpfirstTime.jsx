import React from 'react'

import Header from '../components/HeaderBar'
import "./style/bpFirstTime.css";
function BpfirstTime(){
  return (
    <>
      <div className="bpfirst-time-container">
        <div className="bpfirst-time-container1">
          <span className="bpfirst-time-text">
            <span>&lt;</span>
            <br></br>
            <br></br>
          </span>
          <span className="bpfirst-time-text04">
            <span>instructions</span>
            <br></br>
            <br></br>
          </span>
          <span className="bpfirst-time-text08">
            Skip, and take me to diagnosis setup
          </span>
          <span className="bpfirst-time-text09">
            <span>Blood Pressure</span>
            <br></br>
            <br></br>
          </span>
          <button className="bpfirst-time-button button">
            <span className="bpfirst-time-text13">
              Get started with device setup
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </button>
          <Header rootClassName="header-root-class-name4"></Header>
          <div className="bpfirst-time-code-embed">
            <span
              dangerouslySetInnerHTML={{
                __html:
                  '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n    <path\r\n        d="M7.91076 9.02945C8.25037 9.02945 8.53206 9.31114 8.53206 9.65075C8.53206 9.99863 8.25037 10.272 7.91076 10.272H6.66817C6.32029 10.272 6.04688 9.99874 6.04688 9.65075C6.04688 9.31114 6.32018 9.02945 6.66817 9.02945V7.21525C6.32029 7.21525 6.04688 6.93356 6.04688 6.59395C6.04688 6.25434 6.32018 5.97266 6.66817 5.97266H7.28947C7.62908 5.97266 7.91076 6.25434 7.91076 6.59395V9.02945Z"\r\n        fill="#125873" />\r\n    <path\r\n        d="M7.80317 4.77044C7.80317 5.15984 7.48835 5.48286 7.09075 5.48286C6.70135 5.48286 6.38672 5.15987 6.38672 4.77044C6.38672 4.38101 6.70154 4.06641 7.09075 4.06641C7.48832 4.06641 7.80317 4.38112 7.80317 4.77044V4.77044Z"\r\n        fill="#125873" />\r\n    <path\r\n        d="M12.7574 7.16602C12.7574 5.61695 12.128 4.22523 11.1173 3.21478C10.1065 2.19592 8.70662 1.57462 7.16602 1.57462C5.61695 1.57462 4.22523 2.19592 3.20637 3.21478C2.19587 4.22529 1.57457 5.61693 1.57457 7.16602C1.57457 8.71511 2.19587 10.1068 3.20637 11.1173C4.22523 12.1361 5.61701 12.7574 7.16602 12.7574C8.7067 12.7574 10.1068 12.1361 11.1173 11.1173C12.128 10.1067 12.7574 8.71511 12.7574 7.16602ZM14 7.16602C14 10.9434 10.935 14 7.16602 14C3.38861 14 0.332031 10.9434 0.332031 7.16602C0.332031 3.38861 3.38861 0.332031 7.16602 0.332031C10.935 0.332031 14 3.38861 14 7.16602Z"\r\n        fill="#125873" />\r\n</svg>',
              }}
            />
          </div>
        </div>
      </div>

    </>
  )
}

export default BpfirstTime
