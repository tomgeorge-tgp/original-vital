import { CircularProgressbar,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';

import AnimatedProgressProvide from "./AnimatedProgressProvide";
import ChangingProgressProvider from "./ChangingProgressProvide";

function CircularProgressBar(props)
{
    const percentage = 40;
    
    console.log("propvalue",props.data);
    let sdata = props.data;
    let values = [0];
    if(sdata.state === "continue")
    {
      values.push(sdata.dia);
       values.shift();
    }
  return(
    <>
     <ChangingProgressProvider  values={values}>
{percentage => (
  <CircularProgressbar
  
    value={percentage*100/200}
    text={`${percentage}`}
    styles={
        buildStyles({
    //   pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
    pathColor: `rgba(26, 181, 143, 1)`,
      pathTransitionDuration: .10
    })}
  />
)}
</ChangingProgressProvider>
    </>);
}
export default  CircularProgressBar;