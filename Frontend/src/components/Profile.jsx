import './style/profile.css'
import settings from "./assets/settings.svg";
import profile from "./assets/profile.png";
function Profile()
{
    return(<div className="profile">
    <div className="settings"><img className="settings__icon" src={settings} alt="this is an  img" /></div>
    {/* <div>
    <div className="profile__body">
    <img className="profile__img" src={profile} alt="this is an  img" /></div>
     <div><h1 className="profile__name">Kumar Swamy</h1></div>
     <p className="view__profile">View profile</p>
     
      <hr className="horizontal__line"></hr>
      <button className="button2">Connect with Doctor</button>
      </div> */}
    </div>);
}

export default Profile;