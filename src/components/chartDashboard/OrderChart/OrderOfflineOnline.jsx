import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const OrderChart = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const series = [65, 35];

    const options = {
        chart: {
            fontFamily: "Josefin Sans",
            type: "pie",
        },
        colors: [
            "#FF7F00",
            "#FFC166"
        ],
        dataLabels: {
            style: {
                fontWeight: 700
            },
            background: {
                foreColor: "#000000",
                borderRadius: 0,
                padding: 0
            }
        },
        labels: [
            "Offline class",
            "Online class"
        ],
        legend: {
            position: "bottom",
            fontSize: 16,
            fontWeight: 500,
            offsetY: 0,
            markers: {
                width: 16,
                height: 16,
                radius: 26
            },
        },
    };

    return (
        <>
            <div className="orderChart" id="orderChart">
                <div className="row">
                    <div className="col-lg-8 col-sm-12">
                        <p className="textOrderChart">Application Order Chart</p>
                    </div>
                    <div className="col-4">
                        <div>
                            <select className="dropdown" value={selectedOption} onChange={handleOptionChange} id="orderChart">
                                <option className="selectOrder" value="Weekly">Weekly</option>
                                <option className="selectOrder" value="Monthly">Monthly</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div id="chartOfflineOnline">
                        <ReactApexChart
                            options={options}
                            series={series}
                            type="pie"
                            width={"100%"}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderChart;
