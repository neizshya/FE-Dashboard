import { Card } from "react-bootstrap";
import height_img from "../../assets/icons/height.svg";
import weight_img from "../../assets/icons/monitor_weight.svg";
import goal_weight_img from "../../assets/icons/workspace_premium.svg";
import training_level_img from "../../assets/icons/elevation.svg";
import "../CardCustomers/CardCustomer.css";

const CardCustomers = ({ image, name, height, weight, goal_weight, training_level, onClick }) => {
       
    return (
        <>
            <Card className="card-customers w-100" id="card-customer" onClick={onClick}>
                <div className="row">
                    <div className="col-lg-2 col-sm-2">
                        <img src={image} alt="Person" className="rounded-circle"/>
                    </div>
                    <div className="col-lg-10 col-sm-8 mt-2">
                        <div className="row">
                            <h4 className="name-customers">{name}</h4>
                        </div>
                        <div className="row grid-inner-row">
                            <div className="col-sm-3 tight-col">
                                <img src={height_img} alt="height" />
                                <span className="text-customer"> {height}cm</span>
                            </div>
                            <div className="col-sm-3 tight-col">
                                <img src={weight_img} alt="weight" />
                                <span className="text-customer"> {weight}kg</span>                          
                            </div>
                            <div className="col-sm-3 tight-col">
                                <img src={goal_weight_img} alt="goal_weight" />
                                <span className="text-customer"> {goal_weight}kg</span>
                            </div>
                            <div className="col-sm-5 col-lg-4 tight-col">
                                <img src={training_level_img} alt="training_level" />
                                <span className="text-customer"> {training_level}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </>
    )
}

export default CardCustomers