import React from 'react'
import "./style/stepCard.css";
import PropTypes from 'prop-types'

function Stepcard(props){
  return (
    <>
      <div className="stepcard-container">
        <div className="stepcard-container1">
          <span className="stepcard-text">{props.step_number}</span>
          <span className="stepcard-text1">{props.instruction}</span>
          <img
            alt={props.image_alt}
            src={props.i_image}
            className="stepcard-image"
          />
          <div className="stepcard-html-node">
            <span
              dangerouslySetInnerHTML={{
                __html:
                  '<svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n    <path d="M1 9L5 5L1 1" stroke="white" stroke-width="2" stroke-linecap="round" />\r\n</svg>',
              }}
            />
          </div>
          <button className="stepcard-button button">
            {props.next_button}
          </button>
          <button className="stepcard-button1 button">
            {props.back_button1}
          </button>
          <div className="stepcard-html-node1">
            <span
              dangerouslySetInnerHTML={{
                __html:
                  '<svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n    <path d="M5.86719 1.39844L1.86719 5.39844L5.86719 9.39844" stroke="#125873" stroke-width="2"\r\n        stroke-linecap="round" />\r\n</svg>',
              }}
            />
          </div>
          <div className="stepcard-html-node2">
            <span
              dangerouslySetInnerHTML={{
                __html:
                  '<svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n    <path d="M1 9L5 5L1 1" stroke="white" stroke-width="2" stroke-linecap="round" />\r\n</svg>',
              }}
            />
          </div>
        </div>
      </div>
      
    </>
  )
}

Stepcard.defaultProps = {
  instruction: 'Please sit down near your BP Monitor and relax.',
  step_number: 'Step 1 / 5',
  next_button: 'Next',
  back_button1: 'Back',
  i_image: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt: 'image',
}

Stepcard.propTypes = {
  instruction: PropTypes.string,
  step_number: PropTypes.string,
  next_button: PropTypes.string,
  back_button1: PropTypes.string,
  i_image: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Stepcard
