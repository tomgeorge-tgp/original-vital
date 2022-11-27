import data from "./dataset";
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'; 

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


  function LineGraph() {
    
      return (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 4,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 0" vertical={false}/>
            <XAxis dataKey="name" />
            <YAxis axisLine={false} tickMargin={10} tickLine={false}  gridLines={false}/>
            {/* <Tooltip />
            <Legend /> */}
            {/* <Line type="monotone" dataKey="pv" stroke="#8884d8"  /> */}
            <Line  dataKey="BPM" stroke="#E5ECEE"  dot={<CustomizedDot />} activeDot={{ r: 8 }}/>
          </LineChart>
        </ResponsiveContainer>
      );
    
  }
        export  default LineGraph;