import React from "react";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const GraphComponent = ({ data }) => {
  return (
    <ResponsiveContainer width="80%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="age" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default GraphComponent;
