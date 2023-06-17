import "../Dashboard/Dashboard.css"
import CardDashboard from "../../elements/Card/CardDashboard"
import img from "../../assets/img/arrows_more_up.svg"
import dashboard1 from "../../assets/img/db1.svg"
import dashboard2 from "../../assets/img/db2.svg"
import dashboard3 from "../../assets/img/db1.svg"
import dashboard4 from "../../assets/img/dashboard4.svg"
import OrderChart from "../../components/chartDashboard/OrderChart/OrderOfflineOnline"
import SpendingCost from "../../components/chartDashboard/SpendingCost/SpendingCost"
import RecentTransaction from "../../components/chartDashboard/RecentTransaction/RecentTransaction"
import Income from "../../components/chartDashboard/IncomeOutcome/Income"
import Outcome from "../../components/chartDashboard/IncomeOutcome/Outcome"
import WalletBalance from "../../components/chartDashboard/WalletBalance/WalletBalance"

const Dashboard = () => {
    const radialBarChart = [
        {
            level: 'Beginner',
            series: [95],
            colorBackground: '#FFEFCC',
            colorText: '#FF7F00'
        },
        {
            level: 'Intermediate',
            series: [70],
            colorBackground: '#CCCCFF',
            colorText: '#3F3FFF'
        },
        {
            level: 'Advanced',
            series: [73],
            colorBackground: '#98F2FE',
            colorText: '#00ACFC'
        },
    ];
    return (
        <>
            <div className="container dashboard" id="dashboard">
                <div className="row gy-2 gx-2">
                    <div className="col-lg-3">
                        <CardDashboard
                            text1={"Net Profit"}
                            text3={"Rp. 300.000.000"}
                            img1={img}
                            text6={" + Rp. 500.000.000"}
                            text7={" Since last month"}
                            img2={dashboard1}
                        />
                    </div>
                    <div className="col-lg-3">
                        <CardDashboard
                            text1={"We already have"}
                            text2={"up to "}
                            text3={"20 coach"}
                            text7={" (In all area)"}
                            img2={dashboard2}
                        />
                    </div>
                    <div className="col-lg-3">
                        <CardDashboard
                            text1={"Total Partners"}
                            text3={"30"}
                            text4={" Gym Places"}
                            img1={img}
                            text6={" +10"}
                            text7={" Since last month (In Java Island)"}
                            img2={dashboard3}
                        />
                    </div>
                    <div className="col-lg-3">
                        <CardDashboard
                            text1={"Total membership"}
                            text3={"1500"}
                            text5={" (Members)"}
                            img1={img}
                            text6={"+ 150 Member"}
                            img2={dashboard4}
                        />
                    </div>
                </div>
                <div className="row mt-2 gx-2 gy-2">
                    <div className="col-lg-7 col-md-12 col-sm-12">
                        <WalletBalance />
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <OrderChart />
                    </div>
                </div>
                <div className="container">
                    <div className="row mt-3 gx-4 gy-2">
                        <div className="col-lg-4">
                            <div className="row">
                                <Income />
                            </div>
                            <div className="row">
                                <Outcome />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <SpendingCost />
                        </div>
                        <div className="col-lg-4">
                            <RecentTransaction />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Dashboard