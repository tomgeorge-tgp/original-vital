import './style/instruction.css'
import vector1886 from "./assets/Vector 1886.svg";
function ReturnButton()
{
    return(<>
      <div className="return">
      <img className="return__icon" src={vector1886} alt="this is an  img" />
    
      </div>
    </>);
}

export default ReturnButton;