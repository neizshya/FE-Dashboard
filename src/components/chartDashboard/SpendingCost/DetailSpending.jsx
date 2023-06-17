import '../ChartDashboard.css'

const DetailSpending = ({img, text1, text2}) => {
    return (
        <div className="DetailSpending" id="DetailSpending">
            <div className="row gx-1">
                <div className="col-1">
                    <img src={img} alt="" />
                </div>
                <div className="col-10">
                    <p className="textside mb-0">{text1}</p>
                    <p className="SpendingCostMoney">{text2}</p>
                </div>
            </div>
        </div>
    )
}

export default DetailSpending