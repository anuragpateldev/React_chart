import React from 'react';
import { LineChart, Line, ResponsiveContainer , XAxis , YAxis} from 'recharts';
import './ALineChart.css';


const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 9000,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

const ALineChart = () => {
    console.log('data ==>',data);
    return (
        <>
        <h4 className='chart_heading'>Line Chart</h4>
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    >
                    <XAxis dataKey="name"/>
                    <YAxis dataKey="amt"/>
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="pv" stroke="#111" />
                </LineChart>
            </ResponsiveContainer>
        </>
    )
}

export default ALineChart;