/* eslint-disable no-unused-vars */
import React from 'react'
import IconBack from '../../assets/icons/arrow_back.svg'
import IconDownload from '../../assets/icons/download.svg'
import { Table } from 'react-bootstrap'

const DetailTransaction = () => {
    return (
        <div className='p-3' style={{backgroundColor: 'var(--Neutral-White-100)'}}>
            <div className='bg-white d-flex justify-content-start align-items-center gap-5 px-5 py-3 rounded-3 my-2'>
                <img src={IconBack} alt="back" />
                <div>
                    <h4>Transaction detail</h4>
                    <p style={{color: 'var(--info-800)'}}>/ Personal transactions details</p>
                </div>
            </div>
            <div className="bg-white px-5 py-3 rounded-3 my-2">
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <span style={{color: 'var(--Neutral-White-700)', fontSize: '13px'}}>ID payment</span>
                        <h4 style={{fontSize: '28px'}}>#12345</h4>
                    </div>
                    <button className='px-3 py-2 rounded-3 text-white border-light' style={{backgroundColor: 'var(--primary-500)'}}>
                        <span><img src={IconDownload} alt="" className='me-2'/></span>
                        Download Report
                    </button>
                </div>
                <Table className='my-3' borderless>
                    <thead>
                        <tr style={{color: 'var(--Neutral-White-700)', fontSize: '14px', fontWeight: 'normal'}}>
                            <td>Type order</td>
                            <td>Payment method</td>
                            <td>Invoice date</td>
                            <td>Date paid</td>
                            <td>Price</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{fontWeight: 'bold'}}>
                            <td>Daily - Open Gym</td>
                            <td>Gopay - Customer</td>
                            <td>May 23, 2023 at 08:00 AM</td>
                            <td>May 23, 2023 at 09:00 AM</td>
                            <td style={{color: 'var(--info-700)'}}>Rp 150.000 <span style={{fontSize: '10px'}}>(Paid)</span></td>
                        </tr>
                    </tbody>
                </Table>
                <h6>Customers</h6>
                <div className='d-flex justify-content-start align-items-center gap-3'>
                    <img src="https://source.unsplash.com/random/?avatar" alt="avatar" className="rounded-circle" style={{ width: '80px', height: '80px' }}/>
                    <div>
                        <span className="d-block" style={{fontSize: '20px', fontWeight: 'bold'}}>Chris Martin</span>
                        <span className="d-block" style={{color: 'var(--Neutral-White-900)',fontSize: '14px'}}>(+62) 812 9590 3189</span>
                        <span className="d-block" style={{color: 'var(--Neutral-White-900)',fontSize: '14px'}}>chrismartin@example.com</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailTransaction