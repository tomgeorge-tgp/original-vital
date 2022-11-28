import { CircularProgressbar,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';

import AnimatedProgressProvide from "./AnimatedProgressProvide";
import ChangingProgressProvider from "./ChangingProgressProvide";

function CircularProgressBar(props)
{
    const percentage = 40;
    
    
  return(
    <>
     <ChangingProgressProvider  values={[0,10,100]}>
{percentage => (
  <CircularProgressbar
  
    value={percentage}
    text={`${percentage}%`}
    styles={
        buildStyles({
    //   pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
    pathColor: `rgba(26, 181, 143, 1)`,
      pathTransitionDuration: 0.15
    })}
  />
)}
</ChangingProgressProvider>
    </>);
}
export default  CircularProgressBar;
