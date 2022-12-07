import './style/cards.css'

export default function card(props) {
    return (
    <div className="card">
        {/* <button className="card_button"> */}
        <img className="card__img" src = {props.img}/> 
        {/* </button>   */}
        <div className='Name'>{props.name.split(' ')[0]}<br/>{props.name.split(' ')[1]}</div>
        
    </div>
    );
  }

 