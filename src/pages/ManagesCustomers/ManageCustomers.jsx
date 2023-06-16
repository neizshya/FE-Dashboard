import Cover from "../../elements/Card/Cover"
import imgCover from '../../assets/icons/Appreciation 1.svg'
import InputSearch from "../../elements/InputSearch/InputSearch"
import "../ManagesCustomers/ManageCustomers.css"
import { useState } from "react"
import CardCustomers from "../../elements/CardCustomers/CardCustomers"
import CardDetailCustomers from "../../elements/CardCustomers/CardDetailCustomer"
//import PopUP from "./PopUpDetailClass"

//Belum Selesai
const ManageCustomers = () => {

    const [isVisible, setIsVisible] = useState(false)

    const [customers, setCustomers] = useState([
        {
            id: 1,
            image: "https://source.unsplash.com/random/?profile",
            name: "Mr. Jack",
            height: 170,
            weight: 70,
            goal_weight: 65,
            training_level: "Beginner"
        },
        {
            id: 2,
            image: "https://source.unsplash.com/random/?profile",
            name: "Mr. Johns",
            height: 170,
            weight: 70,
            goal_weight: 65,
            training_level: "Intermediate"
        },
        {
            id: 3,
            image: "https://source.unsplash.com/random/?profile",
            name: "Mrs. Anna",
            height: 160,
            weight: 60,
            goal_weight: 50,
            training_level: "Intermediate"
        },

    ])

    const [selectedCustomerId, setSelectedCustomerId] = useState(null);

    const getSelectedCustomer = () => {
        return customers.find(customer => customer.id === selectedCustomerId);
    };

    const [booking, setBooking] = useState([
        {
            id: 1,
            bookingType: 'Weekly',
            periode: '30 April 2050',
            session: '5AM - 12PM',
            zoomCode: 'KSN-KNG-KSD',
            classType: 'Online Class',
            descClass: 'Private zoom with mentor',
            status: 'booked'
        },
        {
            id: 2,
            bookingType: 'Weekly',
            periode: '30 April 2050',
            session: '5AM - 12PM',
            zoomCode: 'KSN-KNG-KSD',
            classType: 'Offline Class',
            descClass: 'Private zoom with mentor',
            status: 'booked-canceled'
        },
    ])

    
    return (
        <>
            <div className="container manage-customer">
                <Cover
                    text={'Manage Customers'}
                    list1={'Home'}
                    img={imgCover}
                />

                <div className="row p-3 all-customers">
                    <div className={isVisible ? "col-4" : "col-12"}>
                        <div className="col-12">
                            <h2 className='text-customers'>Customers</h2>
                        </div>
                        <div className="col-12 py-3">
                            <InputSearch
                                id="search-customers"
                                placeholder="Search customers"
                            />
                        </div>

                        <div className="col-12">
                            {
                                customers.length > 0 ? (
                                    customers.map((customer) => {
                                        return (
                                            <CardCustomers
                                                onClick={(e) => { setSelectedCustomerId(customer.id); setIsVisible(true); }}
                                                key={customer.id}
                                                image={customer.image}
                                                name={customer.name}
                                                height={customer.height}
                                                weight={customer.weight}
                                                goal_weight={customer.goal_weight}
                                                training_level={customer.training_level}
                                            />
                                        )
                                    })
                                ) :
                                    (
                                        <div>Data Kosong</div>
                                    )
                            }
                        </div>
                    </div>

                    {isVisible ? <>
                        <div className="col-lg-8">
                            <h2 className='text-customers'>Details</h2>
                            <CardDetailCustomers
                                customer={getSelectedCustomer()}
                            />
                            <h3 className="mt-2" style={{fontWeight:"600", fontSize:"24px", color:"#606060"}}>Activities</h3>
                            {/* {
                                booking.map((booking) => {
                                    return (
                                        <CardCustomerBooking
                                            image={'https://source.unsplash.com/random/?profile'}
                                            name={booking.classType}
                                            date={booking.descClass}
                                            status={booking.status}
                                            key={booking.id}
                                            data-bs-toggle="modal"
                                            data-bs-target="#detailClass"
                                        />
                                    )
                                })
                            } */}
                        </div>
                    </> : <>  </>
                    }

                </div>
            </div>
            {/* <div
                className="modal fade"
                id="detailClass"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog detail-class">
                    <div className="content-detailclass">

                        <p style={{ fontWeight: "400", fontSize: "16px", color: "#000000", paddingTop: "4%" }}>
                        </p>
                    </div>

                </div>
            </div> */}
            {/* <PopUP /> */}
        </>
    )
}

export default ManageCustomers