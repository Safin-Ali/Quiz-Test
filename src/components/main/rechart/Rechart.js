import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useLoaderData } from 'react-router-dom';


const Rechart = () => {
    const {data} = useLoaderData();
    return (
        <section className='flex flex-col justify-center items-center h-screen'>
         <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey='name' />XX
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" stackId="a" fill="#8884d8" />
        </BarChart>
        </section>
    );
};

export default Rechart;