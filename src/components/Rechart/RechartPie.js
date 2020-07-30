import React from 'react'
import {
  PieChart,
  Pie,
} from 'recharts'
import { data02, data03 } from '../../ChartData/ReachartData1';

const GraphLists = () => {
  return (
    <PieChart width={430} height={250}>
      <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
      <Pie data={data03} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
    </PieChart>
  )
}

export default GraphLists