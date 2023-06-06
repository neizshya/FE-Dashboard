import Cover from "../../elements/Card/Cover";
import imgCover from '../../assets/icons/Appreciation 1.svg'
import ColumnChart from "../../components/Chart/ColumnChart"
import './ManagesTraining.css'
import Textarea from "../../elements/TextField/Textarea";
import { useState } from "react";
import AddLess from "../../components/AddLess/AddLess";
import check from '../../assets/icons/check_success.svg'
import trash from '../../assets/icons/delete_danger.svg'
import PopUp from "../../components/PopUp/AddVideoTraining";
import add from '../../assets/icons/add.svg'
import { useLocation } from "react-router-dom";

const WorkoutDetail = () => {
    const location = useLocation()
    const {level, workout} = location.state

    const dataColumnChart = [
        {
            name: 'Easy',
            data: [44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43]
          }, {
            name: 'Usual',
            data: [13, 23, 20, 8, 13, 27, 13, 23, 20, 8, 13, 27]
          }, {
            name: 'Exhausted',
            data: [11, 17, 15, 15, 21, 14, 11, 17, 15, 15, 21, 14]
          }
    ]

    const [textarea, setTextarea] = useState('')
    const handleTextarea = (e) => {
    setTextarea(e.target.value)
    }
    let textareaCount = textarea.length
    return(
        <div className="container-fluid">
            <Cover
                img={imgCover}
                text={'Training'}
                list1={'Home'}
                list2={level}
                list3={workout}
            />
            <ColumnChart
                series={dataColumnChart}
            /> 
            <div className="workoutDetailData row d-flex justify-content-around">
                <div className="col-11 mt-5">
                    <div className="d-flex flex-row justify-content-between add">
                        <p className="fs-2 fw-bold">                                
                        <td>{workout} {level}</td>
                        </p>
                        <PopUp 
                            className={'add'} 
                            imgBtn={add}
                        />
                        {/* <img src={add} width={'14px'} className="me-5" alt="" /> */}
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th><input type="checkbox"/></th>
                                <th>Name</th>
                                <th>Click</th>
                                <th>Previous</th>
                                <th>Next</th>
                                <th>Skip Rest</th>
                                <th>Video</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="checkbox"/></td>
                                <td>Arm Circles</td>
                                <td>1.002.34</td>
                                <td>123.002.34</td>
                                <td>13.002.34</td>
                                <td>52.000</td>
                                <td><PopUp className={'link-underline'} text={'Edit'}/></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox"/></td>
                                <td>Arm Circles</td>
                                <td>1.002.34</td>
                                <td>123.002.34</td>
                                <td>13.002.34</td>
                                <td>52.000</td>
                                <td><PopUp className={'link-underline'} text={'Edit'}/></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox"/></td>
                                <td>Arm Circles</td>
                                <td>1.002.34</td>
                                <td>123.002.34</td>
                                <td>13.002.34</td>
                                <td>52.000</td>
                                <td><PopUp className={'link-underline'} text={'Edit'}/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>   
        </div>
    )
}

export default WorkoutDetail