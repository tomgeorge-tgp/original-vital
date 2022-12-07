import React from 'react'
import "./style/profileCard.css"
import PropTypes from 'prop-types'

function ProfileCard(props){

    const user={
        name:props.data,
        img:"'https://play.teleporthq.io/static/svg/default-img.svg'",
        img_alt:"",
        
     };

  
  return (
    <>
      <div className={`profile-card-container ${props.rootClassName} `}>
        <div className="profile-card-container1">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="profile-card-image"
          />
          <span className="profile-card-text"></span>
          <span className="profile-card-text1">{user.name}</span>
          <div className="profile-card-container2"></div>
          <button type="button" className="profile-card-button button">
            {props.button}
          </button>
          <div className="profile-card-html-node">
            <span
              dangerouslySetInnerHTML={{
                __html:
                  '<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n    <path\r\n        d="M29.6893 21.5532L27.2637 20.1589C27.4601 19.0609 27.4601 17.937 27.2637 16.839L29.6893 15.4448C29.9419 15.2996 30.0591 14.9989 29.9709 14.7221C29.4175 12.9943 28.4952 11.4061 27.2673 10.0669C27.0705 9.8523 26.7504 9.80313 26.4978 9.94866L24.0742 11.3424C23.2183 10.6232 22.2414 10.0607 21.1885 9.68107V6.89379C21.1886 6.6029 20.9851 6.35122 20.6997 6.28938C18.9208 5.90354 17.0793 5.90354 15.3003 6.28938C15.0151 6.35155 14.8117 6.60325 14.8121 6.89398V9.68107C13.759 10.0607 12.7819 10.6232 11.9259 11.3424L9.50136 9.94866C9.24876 9.80313 8.92871 9.85229 8.73211 10.0669C7.5049 11.4065 6.58324 12.9946 6.0303 14.7221C5.9421 14.9991 6.05945 15.2996 6.31223 15.4448L8.73748 16.839C8.54051 17.937 8.54051 19.0609 8.73748 20.1589L6.31081 21.5532C6.05803 21.6984 5.94086 21.9992 6.02923 22.2761C6.58273 24.004 7.50493 25.5921 8.73283 26.9316C8.92962 27.1461 9.24965 27.1953 9.50226 27.0499L11.9259 25.656C12.7819 26.3752 13.7592 26.9375 14.8123 27.3171V30.1048C14.8121 30.3953 15.0154 30.6469 15.3003 30.709C17.0791 31.097 18.921 31.097 20.6997 30.709C20.9849 30.647 21.1881 30.3955 21.1879 30.1048V27.3171C22.2411 26.9375 23.2182 26.3752 24.0742 25.6558L26.4987 27.0499C26.7513 27.1953 27.0713 27.1461 27.2679 26.9316C28.4951 25.5921 29.4168 24.004 29.9697 22.2761C30.0583 21.9994 29.9417 21.6987 29.6893 21.5532ZM18.0002 23.8381C16.5778 23.8381 15.2135 23.2754 14.2078 22.2737C13.2019 21.2722 12.6369 19.9136 12.6371 18.4973C12.6373 17.0808 13.2026 15.7224 14.2085 14.721C15.2146 13.7197 16.579 13.1573 18.0014 13.1577C19.4239 13.1578 20.788 13.7209 21.7934 14.7227C22.7989 15.7248 23.3637 17.0834 23.3631 18.4997C23.3613 19.9154 22.7957 21.2726 21.7903 22.2737C20.7849 23.2746 19.4218 23.8367 18.0002 23.8381Z"\r\n        fill="#125873" />\r\n</svg>',
              }}
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`

        `}
      </style>
    </>
  )
}

ProfileCard.defaultProps = {
  button: 'Connect with Doctor',
  image_alt: 'image',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  rootClassName: '',
  text: 'Guest',
  text1: 'View profile',
}

// ProfileCard.propTypes = {
//   button: PropTypes.string,
//   image_alt: PropTypes.string,
//   image_src: PropTypes.string,
//   rootClassName: PropTypes.string,
//   text: PropTypes.string,
//   text1: PropTypes.string,
// }

export default ProfileCard