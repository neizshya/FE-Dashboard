const Card = ({img, text, number}) => {
    return(
        <div id="cardInvoices" className='shadow d-flex justify-content-between flex-row p-5 ps-3 pe-3 mb-4 mt-2'>
            <div>
                <p className='m-0 fw-bold' style={{fontSize:'24px'}}>{number}</p>
                <p className='m-0' style={{color:'var(--Neutral-White-800)', fontSize:'20px'}}>{text}</p>
            </div>
            <div className='p-3 rounded-circle border-3 border'>
                <img src={img} alt="" />
            </div>
        </div>
    )
}

export default Card