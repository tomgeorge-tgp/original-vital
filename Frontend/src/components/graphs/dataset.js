import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '22 Mar',
    BPM: 85,
    Color:"green"
    // pv: 2400,
    // amt: 2400,
  },
  {
    name: '23 Mar',
    BPM: 115,
    Color:"red"
    // pv: 1398,
    // amt: 2210,
  },
  {
    name: '24 Mar',
    BPM: 94,
    // pv: 9800,
    // amt: 2290,
  },
  {
    name: '25 Mar',
    BPM: 98,
    // pv: 3908,
    // amt: 2000,
  },
  {
    name: '26 Mar',
    BPM: 129,
    // pv: 4800,
    // amt: 2181,
  },
  {
    name: '27 Mar',
    BPM: 122,
    // pv: 3800,
    // amt: 2500,
  },
  {
    name: '28 Mar',
    BPM: 98,
    // pv: 4300,
    // amt: 2100,
  },
  {
    name: '29 Mar',
    BPM: 105,
    // pv: 4300,
    // amt: 2100,
  },
  {
    name: '30 Mar',
    BPM: 95,
    // pv: 4300,
    // amt: 2100,
  },
  {
    name: '31 Mar',
    BPM: 102,
    // pv: 4300,
    // amt: 2100,
  },
];

export default data;