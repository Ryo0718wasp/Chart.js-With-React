import React from 'react'
import {
  BarChart,
  Legend,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { data04 } from '../../ChartData/ReachartData1';

const GraphLists = () => {
  return (
    <div style={{ display: 'flex ' }}>
      <BarChart width={430} height={250} data={data04}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
      <BarChart layout="vertical" width={430} height={250} data={data04}>
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis type="number" />
        <YAxis type="category" dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </div>
  )
}

export default GraphLists