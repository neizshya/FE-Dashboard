import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import './Chart.css'

const ColumnChart = ({series}) => {
  const dataChart = {
        series: series,
        options: {
          chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: {
              show: true
            },
            zoom: {
              enabled: true
            },
          },
          responsive: [{
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
              }
            }
          }],
          plotOptions: {
            bar: {
              columnWidth: '20%',
              horizontal: false,
              // borderRadius: [10, 20, 15, 25, 5, 30, 0, 35, 40, 45, 50, 55],
              borderRadius: 10,
              // borderRadiusApplication: 'around',
              borderRadiusWhenStacked:'last',
              dataLabels: {
                total: {
                  enabled: false,
                }
              }
            },
          },
          grid: {
            xaxis: {
              lines: {
                show: false
              }
            },
            yaxis:{
                lines:{
                    show:false
                }
            }
          },
          dataLabels: {
            enabled: false,
          },
          xaxis: {
            categories: ['01', '02', '03', '04',
              '05', '06', '07', '08', '09','10','11','12'
            ],
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
          },
          legend: {
            position: 'top',
            offsetY: 20,
            offsetX: '10px',
            
          },
          fill: {
            opacity: 1
          },
        },
      
      
      };
    
  return (
    <div className="columnChart mb-5 mt-5">
        <p className="ps-3 pt-3 p-0 m-0 fs-3 fw-semibold">Satisfaction Level</p>
        <div id="chart">
        <ReactApexChart 
          options={dataChart.options} 
          series={dataChart.series} 
          type="bar" 
          height={350} 
        />
        </div>
    </div>
  );
}

export default ColumnChart