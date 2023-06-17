import React from 'react';
import ReactApexChart from 'react-apexcharts';

const RadialBarChart = ({ backgroundColor, series }) => {
  const dataSpending = {
    series: [series],

    options: {
      chart: {
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '40%',
            background: 'transparent',
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              fontFamily: "Josefin Sans",
              fontSize: '14px',
              color: '#FFFFFF',
              offsetY: 0,
            },
          },
        },
      },
      fill: {
        colors: ['#FFFFFF'],
      },
      stroke: {
        lineCap: 'round',
      },
    }
  }


  const wrapperStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <div className='radialBarCardDashboard' id='radialBarCardDashboard' style={wrapperStyle}>
      <ReactApexChart options={dataSpending.options} series={dataSpending.series} type="radialBar" height={160} />
    </div>
  );
};

export default RadialBarChart;
