import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);
  const colors = ['#204051', '#84A9AC', '#FABB51', '#3B6978', '#C74B50'];
  
    useEffect(() => {
      const getData = () => {
        const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
        const data = genres.map((genre) => {
          const value = events.filter(({ summary }) =>
            summary.includes(genre)
          ).length;
          return { name: genre, value };
        });
        console.log(data);
        return data;
      };
  
      setData(() => getData());
    }, [events]);
    return (
        <ResponsiveContainer height={400} >
            <PieChart width={300} height={300} >
                <Pie
                    data={data}
                    cx='50%'
                    cy='50%'
                    labelLine={false}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} - ${(percent * 100).toFixed(0)}%`} >
                    {data.map((entry, index) => 
                    <Cell key={`cell-${index}`} fill={colors[index]} name={entry.name}/>)}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}

export default EventGenre;