import DetailSpending from "../SpendingCost/DetailSpending"
import RadialBarChart from "./RadialSpendingCost"
import img1 from "../../../assets/img/cost1.svg"
import img2 from "../../../assets/img/cost2.svg"
import img3 from "../../../assets/img/cost3.svg"
import img4 from "../../../assets/img/cost4.svg"

const SpendingCost = () => {
    const dataSpending = [
        {
            backgroundColor: "#3F3FFF",
            series: [60]
        },
        {
            backgroundColor: "#FCB12F",
            series: [20]
        },
        {
            backgroundColor: "#FF595C",
            series: [10]
        },
        {
            backgroundColor: "#00ACFC",
            series: [60]
        }
    ]

    return (
        <div className="spendingCost" id="spendingCost">
            <p className="textSpendingCost">Spending Cost</p>
            <div className="row mb-3">
                <div className="col-6">
                    <RadialBarChart 
                        series={60}
                        backgroundColor="#3F3FFF"
                    />
                </div>
                <div className="col-6">
                    <RadialBarChart 
                        series={20}
                        backgroundColor="#FCB12F"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <RadialBarChart 
                        series={10}
                        backgroundColor="#FF595C"
                    />
                </div>
                <div className="col-6">
                    <RadialBarChart 
                        series={10}
                        backgroundColor="#00ACFC"
                    />
                </div>
            </div>
            {/* <>
            {
                dataSpending?.map((data) => {
                    <div className="row">
                        <div className="col">
                            <RadialBarChart 
                                series={data.series[0]}
                                backgroundColor={data.backgroundColor}
                            />
                        </div>
                    </div>
                })
            }
            </> */}
            
            <div className="row mt-4">
                <div className="col-6">
                    <DetailSpending 
                        img={img1}
                        text1={"Coach & Gym places"}
                        text2={"Rp.600.000.000"}
                    />
                </div>
                <div className="col-6">
                    <DetailSpending 
                        img={img2}
                        text1={"Advertising"}
                        text2={"Rp.400.000.000"}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <DetailSpending 
                        img={img3}
                        text1={"Tax"}
                        text2={"Rp.20.000.000"}
                    />
                </div>
                <div className="col-6">
                    <DetailSpending 
                        img={img4}
                        text1={"Facility"}
                        text2={"Rp.400.000.000"}
                    />
                </div>
            </div>
        </div>
    )
}

export default SpendingCost