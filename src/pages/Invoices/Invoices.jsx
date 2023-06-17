import Card from './Card'
import receipt from '../../assets/icons/receipt_long.svg'
import img from '../../assets/img/abs.svg'
import cancel from '../../assets/icons/cancel.svg'
import task from '../../assets/icons/task_alt.svg'
import { Col, Row, Table } from 'react-bootstrap'
import Status from './Status'


const Invoices = () => {
    const SortSvg = ({text}) => {
        return(
            <div className='d-flex justify-content-between'>
                {text}
                <div className='d-flex mt-2 flex-column'>
                   <svg
                        onClick={()=> alert('hai')}
                        width="8" 
                        height="7"
                        viewBox="0 0 8 7" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg" 
                        className='btn-sort'
                    >
                        <path d="M0.583275 6.33333C0.423553 6.33333 0.302025 6.26215 0.218691 6.11979C0.135358 5.97743 0.13883 5.83681 0.229108 5.69792L3.64578 0.229167C3.72911 0.0972222 3.84716 0.03125 3.99994 0.03125C4.15272 0.03125 4.27078 0.0972222 4.35411 0.229167L7.77078 5.69792C7.86105 5.83681 7.86453 5.97743 7.78119 6.11979C7.69786 6.26215 7.57633 6.33333 7.41661 6.33333H0.583275Z" fill="#C6C6C6"/>
                    </svg>
                    <svg 
                        onClick={()=>alert('whi')}
                        width="8" 
                        height="7" 
                        viewBox="0 0 8 7" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg" 
                        className='rotated-svg btn-sort'
                    >
                        <path d="M0.583275 6.33333C0.423553 6.33333 0.302025 6.26215 0.218691 6.11979C0.135358 5.97743 0.13883 5.83681 0.229108 5.69792L3.64578 0.229167C3.72911 0.0972222 3.84716 0.03125 3.99994 0.03125C4.15272 0.03125 4.27078 0.0972222 4.35411 0.229167L7.77078 5.69792C7.86105 5.83681 7.86453 5.97743 7.78119 6.11979C7.69786 6.26215 7.57633 6.33333 7.41661 6.33333H0.583275Z" fill="#C6C6C6"/>
                    </svg>
                </div>
            </div>
        )
    }
    return(
        <div style={{marginLeft:"80px"}}>
            <Row>
                <Col md={4} lg={3}>
                    <Card
                        number={'1023'}
                        text={'Total Invoices'}
                        img={receipt}
                    />
                </Col>
                
                <Col md={4} lg={3}>
                    <Card
                        number={'1023'}
                        text={'Total Invoices'}
                        img={cancel}
                    />
                </Col>
                
                <Col md={4} lg={3}>
                    <Card
                        number={'1023'}
                        text={'Total Invoices'}
                        img={task}
                    />
                </Col>
            </Row>
            <Table>
                <thead className='border-bottom border-1 border-dark'>
                    <tr >
                        <th ><SortSvg text={'ID Invoice'}/></th>
                        <th><SortSvg text={'Date'}/></th>
                        <th><SortSvg text={'Recipient'}/></th>
                        <th><SortSvg text={'Email'}/></th>
                        <th><SortSvg text={'Service Type'}/></th>
                        <th><SortSvg text={'Status'}/></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#0000001014</td>
                        <td>January 15, 2023 <br /> 09:30 AM</td>
                        <td>
                            <img 
                                width={'40px'}  
                                height={'40px'} 
                                src={img}   
                                className='rounded-circle me-lg-3 me-2' 
                                alt="" 
                            /> 
                            John Smith    
                        </td>
                        <td>johnsmith123@gmail.com</td>
                        <td>Online Class</td>
                        <td><Status status={'Completed'}/></td>
                    </tr>
                    <tr>
                        <td>#0000001014</td>
                        <td>January 15, 2023 <br /> 09:30 AM</td>
                        <td>
                            <img 
                                width={'40px'}  
                                height={'40px'} 
                                src={img}   
                                className='rounded-circle me-lg-3 me-2' 
                                alt="" 
                            /> 
                            John Smith    
                        </td>
                        <td>johnsmith123@gmail.com</td>
                        <td>Offline Class</td>
                        <td><Status status={'Pending'}/></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Invoices