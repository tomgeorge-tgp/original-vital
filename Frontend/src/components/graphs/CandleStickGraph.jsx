import {BarChart,Line, Bar,ScatterChart,Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ErrorBar, LineChart,ResponsiveContainer} from "recharts";
import "./candle__stick__graph.css"


// const data = [
//   {name: 'Week 1', max: 400, min: 350, error: [200, 1000]},
//   {name: 'Week 2', max: 4000, min: 3400, errorNegative: [1000, 200]},
//   {name: 'Week 3', max: 3200, min: 2400, errorNegative: [1000, 200]},
//   {name: 'Week 4', max: 1000, min: 400, error: [200, 1000]},
//   {name: 'Week 5', max: 2000, min: 1100, error: [200, 1000]},
//   {name: 'Week 6', max: 3000, min: 400, error: [-200, 2000]},
//  {name: 'Week 7', max: 500, min: -1000, error: [200, 2000]},
// ];

const CustomizedDot = (props) => {
  const { cx, cy, stroke, payload, value } = props;
  
  const color = value <= 115 ? '#6ACA79': '#FF1929';

  console.log(value);
  return(
    <>
    <svg x={cx-5} y={cy-5} width="10" height="10" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
     <circle cx="3" cy="3" r="3" fill={color} />
    </svg>
    </>);
};


const data = [
  { x: 45, y: 100, z: 50, errorY: [200, 1000],  },
  { x: 100, y: 200, z: 200, errorY: [1000,200],  },
  { x: 120, y: 100, z: 260, errorY: [1000,200]  },
  { x: 170, y: 300, z: 400, errorY: [200, 1000],  },
  { x: 140, y: 250, z: 280, errorY: [300 ,400]  },
  { x: 150, y: 400, z: 500, errorY: [400, 700],  },
  { x: 110, y: 280, z: 200, errorY: [150,750]  },
];

function CandleStickGraph(){
  return(<>
<ScatterChart 
  width={730} 
  height={250}
  margin={{ top: 20, right: 20, bottom: 0, left: 20 }}
>
  <CartesianGrid strokeDasharray="3 0" vertical={false} />
  <XAxis dataKey="x"  name="stature" />
  <YAxis axisLine={false} dataKey="y" name="weight" tickLine={false}  />
  {/* <Tooltip /> */}
  <Scatter name="" data={data} fill={<CustomizedDot/>}>
    <ErrorBar dataKey="errorY" width={4} strokeWidth={2} stroke="green" direction="y" />
    {/* <ErrorBar dataKey="errorX" width={0} strokeWidth={1} stroke="blue" opacity={0.8} direction="x" /> */}
  </Scatter>
  <Legend/>
</ScatterChart>
</> );
  }
export default CandleStickGraph;





// function Bubble()
// {

//   return(<>
//     <div style={{backgroundColor: "lightblue",width:"6px",height:"6px",borderRadius:"3px"}}></div>
//   </>)
// }



// function CandleStickGraph(){
 

//   	return (
//     	// <BarChart width={600} height={300} data={data}
//       //       margin={{top: 5, right: 30, left: 20, bottom: 5}}>
//       //  <XAxis xAxisId={0} dataKey="name" hide/>
//       //  <XAxis xAxisId={1} dataKey="name"/>
//       //  <YAxis/>
//       //  <Tooltip cursor={{fill: 'transparent'}}/>
//       //  {/* <Bar barSize={30} xAxisId={0}  dataKey="max" fill="red" /> */}
//       //  {/* <Bubble/> */}
//       //  <Bar barSize={5} xAxisId={1} dataKey='min' fill="transparent">
//       //   <Line  dataKey="" stroke="#E5ECEE"  dot={"red"} activeDot={{ r: 8 }}/>
//       //    <ErrorBar  dataKey="error" width={4} strokeWidth={2} stroke="#125873" />
         
//       //    <ErrorBar dataKey="errorNegative" width={4} strokeWidth={2} stroke="#860707" />
//       //  </Bar>
//       // </BarChart>
//       <>
//       <div className="candle__graph"></div>
//       <div className="candle__stick">
//       <BarChart width={600} height={300} data={data}
//             margin={{top: 5, right: 30, left: 20, bottom: 5}}>
//        <XAxis xAxisId={0} dataKey="name" hide/>
//        <XAxis xAxisId={1} dataKey="name"/>
//        <YAxis/>
//        <Tooltip cursor={{fill: 'transparent'}}/>
//        {/* <Bar barSize={30} xAxisId={0}  dataKey="max" fill="red" /> */}
//        {/* <Bubble/> */}
//        <Bar barSize={5} xAxisId={1} dataKey='min' fill="transparent">
       

//          <ErrorBar  dataKey="error" width={4} strokeWidth={2} stroke="#125873" />
         
//          <ErrorBar dataKey="errorNegative" width={4} strokeWidth={2} stroke="#860707" />
//        </Bar>
//       </BarChart>
//       </div>


// </>


//     );
//   }
// export default CandleStickGraph */}

