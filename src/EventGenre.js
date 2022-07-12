import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);
  const colors = ['#2d3a4c', '#4e6685', '#6583ab', '#be9c70', '#ac70be'];
  
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
        <ResponsiveContainer height={300} >
            <PieChart width={200} height={200} margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
                <Pie
                    data={data}
                    cx='50%'
                    cy='50%'
                    labelLine={false}
                    outerRadius={90}
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