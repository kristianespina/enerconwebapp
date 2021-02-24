import React from 'react'
import { ResponsiveBar } from '@nivo/bar';


const StatisticsChart = ({ data }) => {
  const chartData = data && data.financialData.map(el => {
    const monthlyBill = el.monthlyBill.value
    return {
      name: el.name,
      "Monthly Bill": !isNaN(monthlyBill) ? monthlyBill : 0
    }
  })

  return (
    <div className="h-80 w-full">
      <p className="text-center text-lg font-semibold text-gray-700 mb-4">Estimated Monthly Bill</p>
      <ResponsiveBar
        data={chartData}
        keys={['Monthly Bill']}
        indexBy="name"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.5}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'category10' }}
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: 32
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'PHP',
          legendPosition: 'middle',
          legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}

      />
    </div>
  )
}

export default StatisticsChart
