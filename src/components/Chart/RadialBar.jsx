import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import './Chart.css'
import { useNavigate } from "react-router-dom";

const RadialBar = ({colorText, colorBackground, series, text, level}) => {
  const navigate = useNavigate()

  const [bg, setBg] = useState(false)
  const handleBg = () => {
    setBg(!bg);
    navigate(`/levelDetail/${level}`, { state: { level: level } });
  }
    const dataChart = {
      
        series: [series],
        options: {
          colors: [colorText],
          chart: {
            height: 350,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              rotate:180,
              startAngle: -40, 
              endAngle: 320,
              hollow: {
                size: '60%',
              },
              track:{
                background: colorBackground,
              },

              dataLabels:{
                name:{
                  color: colorText,
                  fontSize:'24px',
                  offsetY: 25,
                  fontWeight:'normal',
                },
                value:{
                  color:colorText,
                  fontSize:'32px',
                  offsetY: -20,
                  fontWeight:'bold',
                }
              }
            }
          },
          labels: ['Participant'],
          stroke:{
            lineCap:'round'
          },
        },
      
      
      };
    

      return (
        <div 
          onClick={handleBg}
          className={`radialBarCard mb-4 p-4 pe-5 ps-5 col-sm-6  col-lg-3`}
          style={{ backgroundColor: bg ? `${colorBackground}` : 'white' }}

        >
          <p className="fw-bold fs-1">{text}</p>
          <div id="chart">
            <ReactApexChart 
              className='ReactApexChart'
              options={dataChart.options} 
              series={dataChart.series} 
              type="radialBar" 
              height={350} />
          </div>
        </div>
        
      )
}

export default RadialBar