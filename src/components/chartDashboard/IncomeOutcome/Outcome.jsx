import '../ChartDashboard.css'
import React from 'react';
import Chart from 'react-apexcharts';
import outcome from "../../../assets/img/ikon_outcome.svg"

const Outcome = () => {
    const options = {
        chart: {
            id: 'area-chart',
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            },
            selection: {
                enabled: false
            },
            pan: {
                enabled: false
            },
            resetZoom: {
                enabled: false
            }
        },
        xaxis: {
            categories: ['1/2', '3/4', '5/6', '7/8', '9/10', '11/12'],
            axisBorder: {
                show: false
            },
            labels: {
                style: {
                    fontSize: '10px'
                }
            },
            axisTicks: {
                show: false,
                showAlways: false
            }
        },
        yaxis: {
            labels: {
                style: {
                    fontSize: '10px'
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            colors: ['#620002']
        },

    };

    const series = [
        {
            name: 'Series 1',
            data: [2000, 800, 1500, 1300, 500, 900],
            strokeColor: '#7A1137'
        }
    ];

    return (
        <div className="OutcomeDashboard" id="OutcomeDashboard">
            <div style={{ display: "flex" }} className="mt-3">
                <span style={{ fontWeight: "600", fontSize: "14px" }}>Outcome</span>
                <div className="detailOutcome" style={{ marginLeft: "45%" }}>
                    <img src={outcome} alt="outcome" />
                    <span style={{ fontWeight: "500", fontSize: "10px" }}>-Rp 10.000.000</span>
                </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ fontWeight: "600", fontSize: "12px" }}>Rp.</span>
                <span style={{ marginLeft: "5px", fontWeight: "600", fontSize: "20px" }}>200.000.000</span>
            </div>

            <Chart
                options={options}
                series={series}
                type="area"
                height={"100%"}
                width={"100%"}
                className="area-chart-outcome"
                style={{ marginTop: "-20px" }}
            />
        </div>
    );
}

export default Outcome

