// import React from 'react'
import IconMember from '../../assets/icons/membership.svg'
import IconElips from '../../assets/icons/elips.png'

// eslint-disable-next-line react/prop-types
const CardHeaderBooking = ({detailPage}) => {
    return (
        <>
            <div className="d-flex justify-content-between" style={{backgroundColor: 'var(--primary-200)', padding: '40px 42px', borderRadius: '10px'}}>
                <div className="">
                    <h1 style={{color: 'var(--primary-900)'}}>Booking Class</h1>
                    <div className="d-flex align-items-center">
                        <h3 style={{color: '#030303)', }}>Home</h3>
                        {
                            detailPage && (
                                <>
                                    <img 
                                        src={IconElips}
                                        alt=''
                                        height={10}
                                        className='px-2'
                                    />
                                    <h3>{detailPage}</h3>
                                </>
                            )
                        }
                    </div>
                </div>
                <div className="">
                    <img 
                        src={IconMember}
                        alt="Icon Member"
                        className="img-fluid"
                        style={{height: '134px'}}
                    />
                </div>
            </div>
        </>
    )
}

export default CardHeaderBooking