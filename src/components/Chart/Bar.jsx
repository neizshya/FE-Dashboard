import React from "react";
import ReactApexChart from "react-apexcharts";
import './Chart.css'

const Bar = ({colorBar,colorBackgroundBar, name, data}) => {
  const dataChart = {
    series: [
      {
      name: name,
      data: [data],
    },
    // {
    //     name: 'Target',
    //     data: [64],
    //   }
    ],
    options: {
      colors:colorBar,
      chart: {
        height: 350,
        type: 'bar',
        stacked: true,
        stackType:'100',
        offsetX:-70,
        toolbar: {
          show: false
        },
      },
      grid: {
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          distributed:true,
          borderRadius:5,
          borderRadiusApplication: 'around',
          colors: {
              backgroundBarColors: [colorBackgroundBar],
              backgroundBarOpacity: 1,
              backgroundBarRadius: 5
            }
        },
      },
      yaxis:{
        labels:{
            show:true,
            offsetX:125,
            offsetY:-20,
            style : {
              fontFamily: 'Josefin Sans, sans-serif',
              fontWeight:600,
              fontSize:14
            },
          },
        },
        dataLabels: {
          enabled: true,
          offsetX: 300,
          offsetY: -20,
          style:{
            colors: [colorBar]
          },
      },
      xaxis: {
        categories: [name],
        labels:{
            show:false,
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        
      },
      legend: {
        position: 'top',
        show:false
      },
      fill: {
        opacity: 1,
      },
    },
  };

  return (
    <div className="">
      <ReactApexChart
        className=' barChart m-0'
        style={{width:''}}
        options={dataChart.options}
        series={dataChart.series}
        type="bar"
        height={60}
      />
    </div>
  );
}

export default Bar;