import Cover from "../../elements/Card/Cover";
import imgCover from '../../assets/icons/Appreciation 1.svg'
import ColumnChart from "../../components/Chart/ColumnChart"
import './ManagesTraining.css'
import { useEffect, useState } from "react";
import add from '../../assets/icons/add.svg'
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useAxios from "../../api/UseAxios";
import { trainingApi } from "../../api/Api";
import VideoTraining from "../../components/Form/VideoTraining";

const WorkoutDetail = () => {
    const location = useLocation()
    const state = location.state
    const param = useParams()
    const navigate = useNavigate()

    
     const [workout, setWorkout] = useState([])
     const [fill, setFill] =useState(true)
    

    const dataColumnChart = [
        {
            name: 'Easy',
            data: [44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43],
          }, {
            name: 'Usual',
            data: [13, 23, 20, 8, 13, 27, 13, 23, 20, 8, 13, 27]
          }, {
            name: 'Exhausted',
            data: [11, 17, 15, 15, 21, 14, 11, 17, 15, 15, 21, 14]
          }
    ]

    const {response, isLoading} = useAxios({
        api: trainingApi,
        method: 'get',
        url:`/training/${param.id}/videoTraining?category=${param.level}`
    })
    

    
    const [data, setData] = useState([])
    const [error, setError] = useState('')
    const [maxData, setMaxData] = useState(0)
    const [isDivDisabled, setIsDivDisabled] = useState(false)
    useEffect(() => { 
        if(response !== null){
            setData(response)
            const maxData = response?.[0]?.category?.workout
            setMaxData(maxData)

            if (data?.length >= maxData){
                setIsDivDisabled(true)
                setError('the data has reached the limit')
            }
        }
    }, [response, data, isDivDisabled])
    
    const handleFill=() => {
        setFill(prevFill => !prevFill)
    }

    const BtnFill = ({ className, onClick }) => {
        return(
            <button 
                onClick={onClick}
                className={className}>
            </button>
        )
    }

    const handleEditVideo= (idWorkout) => {
        console.log(idWorkout,' id');
        navigate(`/levelDetail/${param.level}/${param.id}/workoutDetail/${idWorkout}`
        ,
        {state:{
            idWorkout:idWorkout,
            level:param.level
        }}
        )
    }

    const combinedArray = data.concat(workout);

    return(
        <div className="container-fluid">
            <Cover
                img={imgCover}
                text={'Training'}
                list1={'Home'}
                list2={param.level}
                list3={data[0]?.category.title}
            />
            <ColumnChart
                series={dataColumnChart}
            /> 
            <div className="workoutDetailData row d-flex justify-content-around">
                <div className="col-11 mt-5">
                    <div className="d-flex flex-row justify-content-between add">
                        <p className="fs-2 fw-bold">                                
                        <td>{data[0]?.category.title} {param.level}</td>
                        </p>
                        {error && <small className="text-danger mt-2">{error}</small>}
                        <div 
                        style={{pointerEvents : isDivDisabled ? 'none' : 'auto'}}
                        >
                            <VideoTraining
                                imgBtn={add}
                                className={'add'}
                            />
                        </div>
                    </div>
                    <table className="table">
                        <thead className="border-top border-bottom">
                            <tr>
                                <th><BtnFill
                                    className={fill? "notFillBox" : 'fillBox'}
                                    onClick={handleFill}
                                /></th>
                                <th>Name</th>
                                <th>Click</th>
                                <th>Previous</th>
                                <th>Next</th>
                                <th>Skip Rest</th>
                                <th>Video</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.length > 0 ? (
                                    data?.map((data, id) => {
                                        return(
                                            <tr key={id}>
                                                <td>
                                                    <BtnFill
                                                        className={fill? "notFillBox" : 'fillBox'}
                                                        disabled={true}
                                                        onClick={handleFill}
                                                    />
                                                </td>
                                                {/* <td><input type="checkbox"/></td> */}
                                                <td>{data.title}</td>
                                                <td>{data.click}</td>
                                                <td>{data.previous}</td>
                                                <td>{data.next}</td>
                                                <td>{data.skipRest}</td>
                                                <td><div onClick={()=>handleEditVideo(data.id)}>
                                                    <VideoTraining
                                                        text={'Edit'}
                                                        className={'link-underline'}
                                                    />
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                )
                                :
                                (
                                    <tr><td colSpan={7} className="text-center">No data available</td></tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>   
        </div>
    )
}

export default WorkoutDetail