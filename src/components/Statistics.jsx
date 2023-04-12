import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data = [
    { x: 1, y: 57 },
    { x: 2, y: 55 },
    { x: 3, y: 56 },
    { x: 4, y: 59 },
    { x: 5, y: 53 },
    { x: 6, y: 54 },
    { x: 7, y: 58 },
    { x: 8, y: 60 },
  ];

  return (
    <div>
    
    <div className='static'>
      <h1 className='text-blue-600 font-bold text-center text-3xl bg-slate-100 p-20'>Assignment Marks</h1>
        <div className='absolute top-0 right-0'>
          
        <img src="https://i.ibb.co/T19wvzn/Vector-1.png" alt="" />
        </div>
        
        <div className='relative'>

        <div className='absolute bottom-0 left-0'>
          <img src="https://i.ibb.co/ssQWSkK/Vector.png" alt="" />
        </div>
        </div>

      </div>

      
      <div className=" m-20">
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="Assignment No" unit="" />
          <YAxis type="number" dataKey="y" name="Mark" unit="Mark" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter name="Assignment" data={data} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
      </div>
      
    </div>
  );
};

export default Statistics;
