import React from 'react'

import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <>
      <div className={`header-container ${props.rootClassName} `}>
        <div className="header-container1"></div>
      </div>
      <style jsx>
        {`
          .header-container {
            width: 1024px;
            height: 32px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-container1 {
            top: 0px;
            flex: 0 0 auto;
            right: 0px;
            width: 1024px;
            height: 32px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            background-color: #393939;
          }
        `}
      </style>
    </>
  )
}

Header.defaultProps = {
  rootClassName: '',
}

Header.propTypes = {
  rootClassName: PropTypes.string,
}

export default Header
