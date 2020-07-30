import moment from 'moment'
import React from 'react'
import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'


const SimpleAreaChart = (props) => {
  const { data, children } = props
  console.log(props, 'aaaaaa')
  return (
    <ResponsiveContainer>
      <AreaChart width={500} height={300} margin={{ right: 30 }} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="date"
          interval={0}
          tickFormatter={(tickItem) => moment(tickItem).format('MM/DD')}
        />
        <YAxis />
        <Tooltip />
        {children}
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default SimpleAreaChart
