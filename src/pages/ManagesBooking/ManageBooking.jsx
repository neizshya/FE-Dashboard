/* eslint-disable no-unused-vars */
import { useState } from "react";
import CardHeaderBooking from "../../components/CardHeader/CardHeader";
import ButtonComponent from "../../elements/Buttons/ButtonComponent";

const ManageBooking = () => {
    const [customers, setCustomers] = useState([
        {
            id: 1,
            name: "John Doe",
            class: "Via Zoom",
            date: "April 30th, 5AM - 12PM",
            price: "300.000/Weekly",
            location: "Depok, Jawa Barat, 2.0 km",
        },
        {
            id: 2,
            name: "John Doe",
            class: "Via Zoom",
            date: "April 30th, 5AM - 12PM",
            price: "300.000/Weekly",
            location: "Depok, Jawa Barat, 2.0 km",
        },
        {
            id: 3,
            name: "John Doe",
            class: "Via Zoom",
            date: "April 30th, 5AM - 12PM",
            price: "300.000/Weekly",
            location: "Depok, Jawa Barat, 2.0 km",
        },
        {
            id: 4,
            name: "John Doe",
            class: "Via Zoom",
            date: "April 30th, 5AM - 12PM",
            price: "300.000/Weekly",
            location: "Depok, Jawa Barat, 2.0 km",
        },
    ]);

    const [viewDetail, setViewDetail] = useState({});

    const handleClick = (id) => {
        setViewDetail((prevState) => ({
        ...prevState,
        [id]: !prevState[id],
        }));
    };

    const handleViewDetail = () => {
        //Navigate to detail
    }

    return (
        <>
        <CardHeaderBooking />
        <div className="" style={{ padding: "42px" }}>
            <div className="title mb-4">
            <h3 style={{ color: "var(--primary-900)" }}>General Customer</h3>
            <h5>Here General Customer List Data</h5>
            </div>
            <table className="table table-borderless">
            <thead
                style={{
                borderTop: "2px solid var(--Neutral-White-900)",
                borderBottom: "2px solid var(--Neutral-White-900)",
                color: "var(--Neutral-White-900)",
                }}
            >
                <tr style={{ color: "var(--Neutral-White-900)" }}>
                <th
                    scope="col"
                    className="rounded-5"
                    style={{ backgroundColor: "var(--primary-100)" }}
                ></th>
                <th scope="col">Name</th>
                <th scope="col">Class</th>
                <th scope="col">Date Session</th>
                <th scope="col">Price</th>
                <th scope="col">Location</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {customers.length > 0 ? (
                customers.map((customer) => {
                    return (
                    <tr key={customer.id}>
                        <td
                        className="rounded-5"
                        style={{ backgroundColor: "var(--primary-100)" }}
                        ></td>
                        <th>{customer.name}</th>
                        <td>{customer.class}</td>
                        <td>{customer.date}</td>
                        <td>{customer.price}</td>
                        <td>{customer.location}</td>
                        <td className="d-flex">
                            <ButtonComponent
                                onClick={() => handleClick(customer.id)}
                                className={"border-0 bg-transparent text-bold"}
                                buttonName={'...'}
                            />
                            {viewDetail[customer.id] && (
                                <button
                                    style={{color: "var(--info-600)", backgroundColor: "white"}}
                                    onClick={() => handleViewDetail}
                                    className="shadow border-0 rounded-3"
                                    >
                                    View Detail
                                </button>
                            )}
                        </td>
                    </tr>
                    );
                })
                ) : (
                    <p>Tidak ada customer</p>
                )}
            </tbody>
            </table>
        </div>
        </>
    );
};

export default ManageBooking;
