/* eslint-disable no-unused-vars */
// import React from 'react'
import { useEffect, useState } from 'react';
import TableTransaction from '../../components/TabelTransaction/TableTransaction';
import axios from 'axios';

const ManageTransaction = () => {
    const [invoices, setInvoices] = useState([
        {
            id: 1,
            date: '2023-06-01',
            recipient: 'John Doe',
            amount: 1000,
            type: 'Income',
            location: 'New York',
            status: 'completed'
        },
        {
            id: 2,
            date: '2023-06-02',
            recipient: 'Jane Smith',
            amount: 1500,
            type: 'Income',
            location: 'London',
            status: 'pending'
        },
        {
            id: 3,
            date: '2023-06-03',
            recipient: 'Bob Johnson',
            amount: 800,
            type: 'Outcome',
            location: 'San Francisco',
            status: 'canceled'
        },
        {
            id: 4,
            date: '2023-06-01',
            recipient: 'John Doe',
            amount: 1000,
            type: 'Outcome',
            location: 'New York',
            status: 'completed'
        },
        {
            id: 5,
            date: '2023-06-02',
            recipient: 'Jane Smith',
            amount: 1500,
            type: 'Income',
            location: 'London',
            status: 'pending'
        },
        {
            id: 6,
            date: '2023-06-03',
            recipient: 'Bob Johnson',
            amount: 800,
            type: 'Income',
            location: 'San Francisco',
            status: 'canceled'
        },
        {
            id: 7,
            date: '2023-06-01',
            recipient: 'John Doe',
            amount: 1000,
            type: 'Outcome',
            location: 'New York',
            status: 'completed'
        },
        {
            id: 8,
            date: '2023-06-02',
            recipient: 'Jane Smith',
            amount: 1500,
            type: 'Outcome',
            location: 'London',
            status: 'pending'
        },
        {
            id: 9,
            date: '2023-06-03',
            recipient: 'Bob Johnson',
            amount: 800,
            type: 'Income',
            location: 'San Francisco',
            status: 'canceled'
        },
        {
            id: 10,
            date: '2023-06-01',
            recipient: 'John Doe',
            amount: 1000,
            type: 'Income',
            location: 'New York',
            status: 'completed'
        },
        {
            id: 11,
            date: '2023-06-02',
            recipient: 'Jane Smith',
            amount: 1500,
            type: 'Outcome',
            location: 'London',
            status: 'pending'
        },
        {
            id: 12,
            date: '2023-06-03',
            recipient: 'Bob Johnson',
            amount: 800,
            type: 'Outcome',
            location: 'San Francisco',
            status: 'canceled'
        },
        {
            id: 13,
            date: '2023-06-01',
            recipient: 'John Doe',
            amount: 1000,
            type: 'Income',
            location: 'New York',
            status: 'completed'
        },
        {
            id: 14,
            date: '2023-06-02',
            recipient: 'Jane Smith',
            amount: 1500,
            type: 'Income',
            location: 'London',
            status: 'pending'
        },
        {
            id: 15,
            date: '2023-06-03',
            recipient: 'Bob Johnson',
            amount: 800,
            type: 'Outcome',
            location: 'San Francisco',
            status: 'canceled'
        },
    ]);

    // useEffect(() => {
    //     axios.get('API/transaction')
    //     .then((response) => {
    //         console.log(response);
    //         setInvoices(response.data)
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
    // })

    return (
        <div className='p-5' style={{backgroundColor: 'var(--Neutral-White-100)'}}>
            <h2 className="mb-3">Transactions History</h2>
            <TableTransaction 
                invoices={invoices}
            />
        </div>
    )
}

export default ManageTransaction