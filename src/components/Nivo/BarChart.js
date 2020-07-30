import React from 'react'
// import { ResponsiveBar } from '@nivo/bar'
import { data01 } from '../../ChartData/Nivo';


import { Bar } from "@nivo/bar";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Bar
      width={600}
      height={400}
      margin={{ top: 60, right: 80, bottom: 60, left: 80 }}
      data={[
        { country: "AD", "hot dogs": 13 },
        { country: "AE", "hot dogs": 7 },
        { country: "AF", "hot dogs": 9 }
      ]}
      indexBy="country"
      keys={["hot dogs"]}
      labelTextColor="inherit:darker(1.4)"
      enableGridX={true}
      theme={{
        axis: {
          ticks: {
            line: {
              stroke: "green"
            },
            text: {
              fill: "red"
            }
          }
        },
        grid: {
          line: {
            stroke: "pink",
            strokeWidth: 2,
            strokeDasharray: "4 4"
          }
        }
      }}
    />
  </div>
);
export default App