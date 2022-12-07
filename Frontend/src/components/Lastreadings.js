import './style/Lastreadings.css';
import icon2 from './assets/icon2.png';

export default function Lastreadings(props) {
  
    return (
      <div className='last-readings-container' >
          <div className="last-readings">
       <div className='left-section'>
         <h4 className='YLR'>Your Last readings</h4>
         <div className='reading-values'>
            <div className='Blood-pressure'>
                <div className='headings'>{props.name1}</div>
                  <div className='values'>
                    <div className='value1'><div className='value-bp-1' style={{color:color(props.values[0])}}>{props.values[0]}</div><h5>mm Hg</h5></div>
                    <div className='value2'><div className='value-bp-2'  style={{color:color(props.values[1])}}>{props.values[1]}</div><h5>mm Hg</h5></div>
                  </div>                 
            </div>

              <div className='line'></div>
              
            <div className='Heart-rate'>
                <div className='headings'>{props.name2}</div>
                <div className='value3'><div className='value-hr' style={{color:color(props.values[2])}}>{props.values[2]}</div><h5>BPM</h5></div>
                </div>

               <div className='line'></div>

            <div className='SP02'><div className='headings'>{props.name3}</div>
              <div className='value4'><div className='value-sp' style={{color:color(props.values[3])}}>{props.values[3]}</div><h5>%</h5></div>
            </div>

               <div className='line'></div>

            <div className='Body-temperature'><div className='headings'>{props.name4}</div>
            <div className='value5'><div className='value-bt' style={{color:color(props.values[4])}}>{props.values[4]}</div><h5>F/C</h5></div>
            </div>

               <div className='line'></div>

            <div className='Blood-glucose'><div className='headings'>{props.name5}</div>
            <div className='value6'><div className='value-bg' style={{color:color(props.values[5])}}>{props.values[5]}</div><h5>Mg/DL</h5></div>
            </div>
         </div>
       </div>
        
    </div>
        <div className='previous-scans'>
            <img className = 'icon2' src={icon2}/>
             <h4>Previous <br/> scans</h4>
             <img className = 'icon2'src={icon2}/>
        </div>
      </div>
    );
  }

  const color = (value) =>{
    if(value>100)
     return "#DA3C3C";
    else
    return "#20945C";
  }
  
  