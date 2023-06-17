import './CardDashboard.css'

const CardDashboard = ({text1, text2, text3, text4, text5, text6, text7, img1, img2}) => {
    return (
        <div className="cardDashboard">
            <div className="row rowContent">
                <div className="col-10">
                    <p className='text1'>{text1}</p>

                    <span className='text24'>{text2}</span>
                    <span className='text3'>{text3}</span>
                    <span className='text24'>{text4}</span>
                    <span className='text5'>{text5}</span>

                    <p></p>
                    <img src={img1} alt="" />
                    <span className='text6'>{text6}</span>
                    <span className='text7'>{text7}</span>
                </div>
                <div className="col-2" style={{alignItems:"end"}}>
                    <img src={img2} alt="ikon"/>
                </div>
            </div>
        </div>
    )
}

export default CardDashboard