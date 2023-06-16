import { Card } from "react-bootstrap";
import height_img from "../../assets/icons/height.svg";
import weight_img from "../../assets/icons/monitor_weight.svg";
import goal_weight_img from "../../assets/icons/workspace_premium.svg";
import training_level_img from "../../assets/icons/elevation.svg";
import block from "../../assets/img/block.svg";
import edit from "../../assets/img/edit_square.svg";
import warning from "../../assets/img/warning.svg";
import "../CardCustomers/CardCustomer.css";
import TextFieldPassword from "../TextField/TextFieldPassword";
import TextField from "../TextField/TextField";
import ButtonComponent from "../Buttons/ButtonComponent";
import { useState } from "react";

const CardDetailCustomers = ({ customer, onClickBlockCustomer, onClickEditCustomer }) => {
    console.log(customer);
    const [hovered, setHovered] = useState(false);
    return (

        <>
            {customer && (
                <Card
                    className={`card-detailCustomers w-100 ${hovered ? "hovered" : ""}`}
                    id="card-customer"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <div className="row">
                        <div className="col-lg-1 mt-2">
                            <img src={customer.image} alt="Person" className="rounded-circle" />
                        </div>
                        <div className="col-lg-8 mt-3">
                            <div className="row">
                                <h4 className="name-customers">{customer.name}</h4>
                            </div>
                            <div className="row grid-inner-row">
                                <div className="col-3 tight-col">
                                    <img src={height_img} alt="height" />
                                    <span className="text-customer"> {customer.height}cm</span>
                                </div>
                                <div className="col-3 tight-col">
                                    <img src={weight_img} alt="weight" />
                                    <span className="text-customer"> {customer.weight}kg</span>
                                </div>
                                <div className="col-3 tight-col">
                                    <img src={goal_weight_img} alt="goal_weight" />
                                    <span className="text-customer"> {customer.goal_weight}kg</span>
                                </div>
                                <div className="col-4 tight-col">
                                    <img src={training_level_img} alt="training_level" />
                                    <span className="text-customer"> {customer.training_level}</span>
                                </div>
                            </div>
                        </div>
                        <div className={`col-lg-3 block-edit`}>
                            {hovered && (
                                <div className="block-edit-content">
                                    <div className="block-edit-inner">
                                        <div className="blockCustomer">
                                            <img src={block} onClick={onClickBlockCustomer} alt="block" />
                                        </div>
                                        <div className="editCustomer">
                                            <img
                                                src={edit}
                                                onClick={onClickEditCustomer}
                                                alt="edit"
                                                data-bs-toggle="modal"
                                                data-bs-target="#ModalEditCustomer"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </Card>
            )}

            {/* Form Edit Customers */}
            <div
                className="modal fade"
                id="ModalEditCustomer"
                tabIndex={-1}
                aria-hidden="true"
            >
                <div className="modal-dialog form-edit-customer">
                    <h5 className="textChangeProfile">
                        Change Profile
                    </h5>
                    <div className="modal-content">
                        <div className="modal-body">
                            <form>
                                <p style={{ textAlign: "center", fontWeight: "600", fontSize: "16px" }}>Change your profile picture from here</p>
                                <div className="row" style={{ justifyContent: "right" }}>
                                    <div className="col-2">
                                        <img src={customer.image} alt="Person" className="rounded-circle" />
                                    </div>
                                    <div className="col-8">
                                        <div style={{ display: "flex" }}>
                                            <ButtonComponent
                                                type={"button"}
                                                className={"btnUploadCustomer"}
                                                buttonName={"Upload"}
                                            />
                                            <ButtonComponent
                                                type={"button"}
                                                className={"btnResetImgCustomer"}
                                                buttonName={"Reset"}
                                            />
                                        </div>
                                        <p style={{ fontSize: "10px", fontWeight: "400", color: "#6D6D6D", paddingTop: "3%" }}>Allowed JPG, GIF or PNG. Max size of 800K</p>
                                    </div>
                                </div>
                                <p style={{ fontSize: "16px", fontWeight: "400", color: "#030303", paddingTop: "10px" }}>To change your password please confirm here</p>
                                <TextFieldPassword
                                    label='Current Password'
                                    placeholder='******'
                                    name='password'
                                    id='password'
                                    classNameLabel={'label-customer'}
                                // value={passwordInput}
                                // onChange={handlePasswordChange}
                                />
                                <p
                                    data-bs-toggle="modal"
                                    data-bs-target="#resetPwCustomer"
                                    style={{ fontWeight: "400", fontSize: "14px", textAlign: "right", color: "#DB4151" }}
                                >
                                    Set to default password
                                </p>
                                <p style={{ fontSize: "16px", fontWeight: "400", color: "#030303" }}>To change your personal detail , edit and save from here</p>
                                <div className="row">
                                    <div className="col-6">
                                        <TextField
                                            classNameInput={'TextFieldInput'}
                                            placeholder={'John_'}
                                            label={'Username'}
                                            name={'username'}
                                            id={'username'}
                                            type={'text'}
                                            // onChange={handleInput}
                                            // value={data?.name}
                                            classNameLabel={'label-customer'}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <TextField
                                            classNameInput={'TextFieldInput'}
                                            placeholder={'John@gm***'}
                                            label={'Email'}
                                            name={'email'}
                                            id={'email'}
                                            type={'text'}
                                            // onChange={handleInput}
                                            // value={data?.name}
                                            classNameLabel={'label-customer'}
                                        />
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-6">
                                        <TextField
                                            classNameInput={'TextFieldInput'}
                                            placeholder={'Female'}
                                            label={'Gender'}
                                            name={'gender'}
                                            id={'gender'}
                                            type={'text'}
                                            // onChange={handleInput}
                                            // value={data?.name}
                                            classNameLabel={'label-customer'}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <TextField
                                            classNameInput={'TextFieldInput'}
                                            placeholder={'173 cm'}
                                            label={'Height'}
                                            name={'height'}
                                            id={'height'}
                                            type={'text'}
                                            // onChange={handleInput}
                                            // value={data?.name}
                                            classNameLabel={'label-customer'}
                                        />
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-6">
                                        <TextField
                                            classNameInput={'TextFieldInput'}
                                            placeholder={'73 kg'}
                                            label={'Weight'}
                                            name={'weight'}
                                            id={'weight'}
                                            type={'text'}
                                            // onChange={handleInput}
                                            // value={data?.name}
                                            classNameLabel={'label-customer'}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <TextField
                                            classNameInput={'TextFieldInput'}
                                            placeholder={'65 kg'}
                                            label={'Goal weight'}
                                            name={'goal_weight'}
                                            id={'goal_weight'}
                                            type={'text'}
                                            // onChange={handleInput}
                                            // value={data?.name}
                                            classNameLabel={'label-customer'}
                                        />
                                    </div>
                                </div>
                                {/* <div className="row mt-2">
                                    <div className="col-6">
                                    </div>
                                    <div className="col-6">
                                    </div>
                                </div> */}
                                <TextField
                                    classNameInput={'TextFieldInput'}
                                    placeholder={'Beginner'}
                                    label={'Training Level'}
                                    name={'training_level'}
                                    id={'training_level'}
                                    type={'text'}
                                    // onChange={handleInput}
                                    // value={data?.name}
                                    classNameLabel={'label-customer mt-3'}
                                />
                            </form>
                        </div>
                        <div style={{ display: "flex", marginTop: "13%" }}>
                            <div style={{ marginLeft: "52%", marginRight: "5%" }}>
                                <ButtonComponent
                                    type={"button"}
                                    className={"btnSaveCustomer"}
                                    buttonName={"Save"}
                                />
                            </div>
                            <ButtonComponent
                                type={"button"}
                                className={"btnCancelCustomer"}
                                buttonName={"Cancel"}
                                dataBsDismiss={"modal"}
                            />
                        </div>
                    </div>


                </div>
            </div>

            {/* Modal reset password */}
            <>
                {/* Modal */}
                <div
                    className="modal fade"
                    id="resetPwCustomer"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog reset-password">
                        <div className="modal-content">
                            <div className="content-reset">
                                <img src={warning} alt="Warning" />
                                <p style={{ fontWeight: "400", fontSize: "16px", color: "#000000", paddingTop: "4%" }}>Are you sure you want to reset password?</p>
                            </div>

                            <div style={{ display: "flex", marginBottom: "7%", marginLeft: "13%" }}>
                                <div style={{ marginRight: "7%" }}>
                                    <ButtonComponent
                                        type={"button"}
                                        className={"btnNoReset"}
                                        buttonName={"No"}
                                        dataBsDismiss={"modal"}
                                    />

                                </div>
                                <ButtonComponent
                                    data-bs-dismiss="modal"
                                    type={"button"}
                                    className={"btnYesReset"}
                                    buttonName={"Yes"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </>
    )
}

export default CardDetailCustomers