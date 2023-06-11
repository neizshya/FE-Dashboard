/* eslint-disable no-unused-vars */
// import React from 'react'
import CardHeaderBooking from '../../components/CardHeader/CardHeader'
import { Col, Row } from 'react-bootstrap'
import DetailBooking from '../../components/DetailBooking/DetailBooking'
import CardCustomerBooking from '../../components/CardCustomerBooking/CardCustomerBooking'
import { useState } from 'react'

const ManageBookingDetail = () => {
    const [customers, setCustomers] = useState([
        {
            id: 1,
            name: "Joko",
            date: "17 Agustus 1945",
            image: "https://source.unsplash.com/random/?profile",
            status: 'booked'
        },
        {
            id: 2,
            name: "Joko",
            date: "17 Agustus 1945",
            image: "https://source.unsplash.com/random/?profile",
            status: 'booking-canceled'
        },
        {
            id: 3,
            name: "Joko",
            date: "17 Agustus 1945",
            image: "https://source.unsplash.com/random/?profile",
            status: 'booked'
        },
        {
            id: 4,
            name: "Joko",
            date: "17 Agustus 1945",
            image: "https://source.unsplash.com/random/?profile",
            status: 'booking-canceled'
        },
        {
            id: 5,
            name: "Joko",
            date: "17 Agustus 1945",
            image: "https://source.unsplash.com/random/?profile",
            status: 'booked'
        },
    ])

    const [booking, setBooking] = useState({
        bookingType: 'Weekly', 
        periode: '30 April 2050', 
        session: '5AM - 12PM', 
        zoomCode: 'KSN-KNG-KSD', 
        classType: 'Online Class', 
        descClass: 'Private zoom with mentor', 
        status: 'booked'
    })
    return (
        <>
            <CardHeaderBooking
                detailPage={'Detail Customer'}
            />
            <div className="" style={{ padding: "42px" }}>
                <div className="title mb-4">
                    <h3 style={{ color: "var(--primary-900)" }}>Order Customer</h3>
                    <h5>Here Customer Data</h5>
                </div>
                <Row>
                    <Col md={6} className="px-2 py-3 shadow">
                        <DetailBooking 
                            bookingType={booking.bookingType}
                            periode={booking.periode}
                            session={booking.session}
                            zoomCode={booking.zoomCode}
                            classType={booking.classType}
                            descClass={booking.descClass}
                            status={booking.status}
                        />
                    </Col>
                    <Col md={6} className="px-5 py-3 shadow">
                        <h2 className='mb-3' style={{ color: "var(--Neutral-Black-100)" }}>Customer Data</h2>
                        {
                            customers.length > 0 ? (
                                customers.map((customer) => { 
                                    return (
                                        <CardCustomerBooking 
                                            key={customer.id}
                                            name={customer.name}
                                            date={customer.date}
                                            status={customer.status}
                                            image={customer.image}
                                        />
                                    )
                                })
                            ):
                            (
                                <p>Belum ada customer</p>
                            )
                        }
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default ManageBookingDetail