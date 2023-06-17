import ikon_right from "../../../assets/img/ikon_right.svg"
import DataRecentTransaction from "./DataTransaction"
import income from "../../../assets/img/Income.svg"
import outcome from "../../../assets/img/Outcome.svg"

const RecentTransaction = () => {
    return (
        <div className="RecentTransaction" id="RecentTransaction">
            <div className="row mt-2">
                <div className="col-lg-8">
                    <p className="textRecent">Recent Transaction</p>
                </div>
                <div className="col-lg-3">
                    <div className="AllTransaction">
                        {/* navigate ke manage transaction */}
                        <span className="ViewAll">View all</span>
                        <img src={ikon_right} alt="View All" style={{paddingLeft:"10px"}}/>
                    </div>
                </div>
            </div>
            <div className="row">
                <DataRecentTransaction 
                    img={income}
                    costTransaction={"+Rp.150.000"}
                    costMember={"David Gunawan"}
                    costDate={"23 June"}
                    costTime={"08:00 AM"}
                />
                <DataRecentTransaction 
                    img={outcome}
                    costTransaction={"-Rp.150.000"}
                    costMember={"David Gunawan"}
                    costDate={"23 June"}
                    costTime={"08:00 AM"}
                />
            </div>
        </div>
    )
}

export default RecentTransaction