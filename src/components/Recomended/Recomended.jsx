import ListRecomended from "../../elements/Card/ListRecomended"
import img from '../../assets/img/close-up-treadmill-console-with-settings 1.svg'
import add from '../../assets/icons/add.svg'
import './Recomended.css'
import CardAdd from "./CardAdd"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addRecomended, deleteRecomended } from "../../redux/Slice/recomendedSlice"
import { v4 as uuidv4 } from 'uuid';
import useAxios from "../../api/UseAxios"
import { trainingApi } from "../../api/Api"

const Recomended = ({}) => {

    const dispatch = useDispatch()
    const dataCard = useSelector((state) => state.recomended)

    const [show, setShow] =useState(false)
    const handleShow=() => {
        setShow(prevShow => !prevShow)
    }

    const [data, setData] = useState({
        id:uuidv4(),
        level:'',
        workout:''
    })

    const [workout, setWorkout] = useState({
        workout:[]
    })


    const {response, isLoading} = useAxios({
        api: trainingApi,
        method: 'get',
        url:`/training`
    })
    

    useEffect(() => {
        if(response!==null){
            const titles = response.map((item) => item.title);
            const uniqueTitles = titles.filter((value, index, self) => self.indexOf(value) === index);
            setWorkout(uniqueTitles)
        }
    }, [response])

    const levelList = [
        {value:'----', text:'Choose Level'},
        {value:"Beginner", text: "Beginner"},
        {value:"Intermediate", text: "Intermediate"},
        {value:"Advanced", text: "Advanced"},   
    ];

    const workoutList = [
        {value:'----', text:'Choose Work Out'},
        ...Object.keys(workout)?.map((key) => ({
            value: workout[key],
            text: workout[key],
          })) 
    ];


    const reset = () => {
        setData({
            recomended:uuidv4(),
            level:'',
            workout:''
        })
    }

    const handleChange=(e)=>{
        e.preventDefault()
        const {name, value} = e.target
        setData({
            ...data,
            [name] : value,
        })
        console.log(data);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(window.confirm('Are you sure you want to submit?')){
            dispatch(addRecomended(data))
            alert('added')
        }
        setShow(false)
        reset()

    }

    const handleDelete= (recomended) => {
        if(window.confirm('Are you sure you want to delete?'))
        console.log(recomended);
        dispatch(deleteRecomended(recomended))
        console.log('Data deleted successfully');
    }



    return(
        <div className="shadow p-4">
            <div className="d-flex flex-row justify-content-between">
                <p className="fs-2 fw-bold">Recomended</p>
                <button 
                    onClick={handleShow}
                    className="btnHover border-0 me-2"
                >
                    <img src={add} width={'15vw'} className="" alt="" />
                </button>
            </div>
                {show? 
                    <div className="z-0 position-absolute" style={{right:'10vw'}}
                    >
                        <CardAdd
                            valueLevel={data.level}
                            levelList={levelList}
                            workoutList={workoutList}
                            valueWorkout={data.workout}
                            handleChange={handleChange}
                            nameLevel={'level'}
                            nameWorkout={'workout'}
                            handleSubmit={handleSubmit}
                        /> 
                    </div>
                : ''}
                
            {
                dataCard.length > 0 ? (
                    dataCard?.map((data, id) => {
                        return(
                            <ListRecomended
                                key={id}
                                onDelete={() => handleDelete(data.recomended)}
                                textTag={data.level}
                                img={img}
                                text={data.workout}
                            />
                        )
                    })
                ) : (
                    <p className="text-center">No Data</p>
                )
            }
        </div>
    )
}
export default Recomended