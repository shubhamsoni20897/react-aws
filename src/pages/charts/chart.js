import React, { lazy, useEffect } from 'react'
import { getStyle, hexToRgba } from '@coreui/utils'
import { CChartLine } from '@coreui/react-chartjs'
/* eslint react/prop-types: 0 */

export const Chart = (props)=>{
return (
    <CChartLine
            style={{ height: '300px', marginTop: '40px' }}
            data={{
              labels:props.label,
              datasets: [
                {
                  label: 'My First dataset',
                  backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                  borderColor: getStyle('--cui-info'),
                  pointHoverBackgroundColor: getStyle('--cui-info'),
                  borderWidth: 2,
                  data: props.data,
                  fill: true,
                },
               
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
)
}