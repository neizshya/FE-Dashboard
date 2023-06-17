
const DataRecentTransaction = ({img, costTransaction, costMember, costDate, costTime}) => {
    return (
        <div className="DataTransaction mt-1" id="DataTransaction">
            <div className="row">
                <div className="col-auto">
                    <img src={img} alt="" />
                </div>
                <div className="col">
                     <span className="CostTransaction">{costTransaction}</span>
                     <p className="CostMember">{costMember}</p>
                </div>
                <div className="col" style={{paddingLeft:"20%"}}>
                    <span className="CostDate">{costDate}</span>
                    <p className="CostDate">{costTime}</p>
                </div>
            </div>
        </div>
    )
}

export default DataRecentTransaction