import './Invoices.css'

const Status = ({status}) => {
    return(
        <div className={`rounded-pill ps-3 pe-3 pt-2 pb-2 border border-2 status-${status}`} style={{width:'fit-content'}}>
            <span>{status}</span>
        </div>
    )
}

export default Status