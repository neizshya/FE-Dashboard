import TextField from "../../elements/TextField/TextField"
import ButtonComponent from "../../elements/Buttons/ButtonComponent"
import './Form.css'
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Datepicker, Input } from '@mobiscroll/react';
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux'
import { addOnlineClass, updateOnlineClass } from "../../redux/Slice/OnlineClassSlice";
import { useLocation, useNavigate } from "react-router-dom";
import {v4 as uuidv4} from 'uuid'
import Textarea from '../../elements/TextField/Textarea' 
import add from '../../assets/icons/add.svg'
import { Row, Col } from "react-bootstrap";
import moment from 'moment';
import axios from "axios";
import useAxios from "../../api/UseAxios";
import { classApi } from "../../api/Api";
import { useParams } from 'react-router-dom';



const OfflineClass = ({onClick,classNameImg,style, className, btnModalText, btnModalImg}) => {
    const navigate = useNavigate()
    
    const {id} = useParams()
    
    const dispatch = useDispatch()
    // const onlineClass = useSelector((state) => state.onlineClass)
    const [onlineClass, setOnlineClass] = useState([])
    const [fetchClass, setFetchClass] = useState(false)
    const [modalOpen, setModalOpen] = useState(false);
    
    const [valueDate, setValueDate] = useState()
    const [time, setTime] = useState(null)

    const [data, setData] = useState({
        id:'',
        name:'',
        classDate:'',
        timeSession:'',
        referralCode:'',
        location:'',
        classCategory:'',
        dailyPrice:'',
        weeklyPrice:'',
        monthlyPrice:'',
        imageFile:'',
        description:''
    })
    

    
    const {response, isLoading} = useAxios({
        api: classApi,
        method: 'get',
        url:`/class/${id}`
    })

    useEffect(() => {
        if(id !== '' && id !== null && id !== undefined && response !== null){
            setData(response)
            setOnlineClass(response)
        }
    }, [response])

    const stylePickerDate ={ className: 'textfield-bg form-control borderInput', placeholder:'Mei 6th, 2023'}

    const stylePickerTime= {className: 'textfield-bg form-control borderInput', placeholder:'4 AM - 10 PM',name:'timeSession'}
    

    // useEffect(() => {
    //     if (onlineClass?.length !== 0 && state !== null) {
    //       const id = onlineClass.find((item) => item.id === location.state.data);
    //       console.log(id.id, ' state');
    //       if (id && id.id === state.data) {
    //         console.log(id, ' id edit');
    //         setData(id);
    //       }
    //     }
    //   }, [onlineClass, state]);

    const handleInput = (e) => {
        const { name, value } = e.target;
        // const dateFormat = moment(dateParts).format('MMMM Do YYYY')
        // new Date().toISOString().slice(0, 10)
      
        if (name === "imageFile") {
            const file = e.target.files[0];
           
          setData((prevData) => ({
            ...prevData,
            [name]: URL.createObjectURL(file)
          }));
          console.log(data.imageFile);
        } else {
          setData((prevData) => ({
            ...prevData,
            [name]: value,
            timeSession:time,
          }));
        }
            
      };


      const onChangePickedTime = (e) => {
        const timeParts = e.value
        const startTime = moment(timeParts[0]).format('h:mm a');
        const endTime = moment(timeParts[1]).format('h:mm a')
        console.log(startTime,' ', endTime);
        const timeFormat= `${startTime} - ${endTime}`
        setTime(timeFormat)
      }

      const onChangePickedDate= (e) => {
        const dateParts = e.value
        const dateFormat = moment(dateParts).format('MMMM Do YYYY')
        setValueDate(dateFormat)
      }

    const resetForm = () => {
        setData({
            id:'',
            name:'',
            classDate:'',
            timeSession:'',
            referralCode:'',
            location:'',
            classCategory:'',
            dailyPrice:'',
            weeklyPrice:'',
            monthlyPrice:'',
            imageFile:'',
            description:''
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if(window.confirm('Are you sure you want to submit?')){
            if (onlineClass?.id === data?.id){
                classApi.put(`/class/${id}`,{
                    name:data.name,
                    classDate:data.classDate,
                    timeSession:data.timeSession,
                    location:data.location,
                    classCategory:data.classCategory,
                    dailyPrice:data.dailyPrice,
                    weeklyPrice:data.weeklyPrice,
                    monthlyPrice:data.monthlyPrice,
                    imageFile:data.imageFile,
                    classId:data.id,
                    description:data.description
                })
                .then((res) => {
                    navigate('/')
                    alert('edited')
                    window.location.reload()
                })
                .catch((err) => {
                    navigate('/')
                    alert(err.message)
                    window.location.reload()
                })
            } else {
                classApi.post('/class',{
                    name:data.name,
                    classDate:data.classDate,
                    timeSession:data.timeSession,
                    location:data.location,
                    classCategory:data.classCategory,
                    dailyPrice:data.dailyPrice,
                    weeklyPrice:data.weeklyPrice,
                    monthlyPrice:data.monthlyPrice,
                    imageFile:data.imageFile,
                    classId:data.id,
                    description:data.description
                },
                )
                .then((res) => {
                    dispatch(addOnlineClass(data))
                    alert('Product added')
                    // window.location.reload()
                })
                .catch((err) => {
                    alert(err.message)
                })

                

                // const editClass = [...onlineClass];
                // const index = onlineClass.indexOf(dataIndex);
                // if (index !== -1) {
                //     editClass.splice(index, 1, data);
                //     console.log(data);
                //     dispatch(updateOnlineClass(editClass));
                // }
            }
            resetForm()
            setModalOpen(false);
            
        } 
    }
    
    return(
        <>
            <button 
                onClick={onClick}
                type="button" 
                className={className? className : "btn btn-save btn-add pe-4 ps-4 ms-3 fs-6" }
                width='fit-content'
                style={style}  
                data-bs-toggle="modal" 
                data-bs-target="#onlineClass"
            >
                {btnModalText}
                <img src={btnModalImg} 
                className={classNameImg?classNameImg:"ms-4"} 
                alt="" />

            </button>
            <div 
                className="modal fade" 
                id="onlineClass" 
                tabIndex="-1" 
                aria-labelledby="exampleModalLabel" 
                aria-hidden="true"
            >
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                <div className="modal-header mb-0">
                    <h1 className="modal-title fs-3  label-title" id="exampleModalLabel">Add Class</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <form onSubmit={handleSubmit}>
                    <TextField
                        classNameInput={'textfield-bg'}
                        placeholder={'Abs'}
                        label={'Class Name'}
                        name={'name'}
                        id={'name'}
                        type={'text'}
                        onChange={handleInput}
                        value={data?.name}
                        classNameLabel={'mt-3  label-color  fs-lg-6'}
                    />
                    {
                        !data.name && 
                        <small className="text-danger">must be filled in</small>
                    }
                    <Row>
                        <Col mb={6}>       
                            <TextField
                                classNameInput={'textfield-bg'}
                                placeholder={'Mei 6th, 2023'}
                                label={'Date'}
                                name={'classDate'}
                                id={'classDate'}
                                type={'date'}
                                onChange={handleInput}
                                value={data?.classDate}
                                classNameLabel={'mt-3  label-color  fs-lg-6'}
                            />
                            {
                                !data.classDate && 
                                <small className="text-danger">must be filled in</small>
                            }
                            
                             {/* <label htmlFor="timeSession" className="mt-3   label-color">Date
                            </label>
                            <Datepicker
                                value={valueDate}
                                onChange={onChangePickedDate}
                                inputComponent="input"
                                inputProps={stylePickerDate}
                                dateFormat="MMMM D'th',YYYY"
                                controls={['date']}
                                touchUi={false}
                            /> */}

                        </Col>
                        <Col mb={6}>
                            <label htmlFor="timeSession" className="mt-3   label-color">Time
                            </label>
                                <Datepicker
                                value={time}
                                onChange={onChangePickedTime}
                                inputComponent="input"
                                inputProps={stylePickerTime}
                                    controls={['time']}
                                    select="range"
                                    touchUi={false}
                                />
                                {
                                    !data.timeSession && 
                                    <small className="text-danger">must be filled in</small>
                                }
                        </Col>
                    </Row>
                    <TextField
                        classNameInput={'textfield-bg'}
                        placeholder={'Depok, Jawa Barat'}
                        label={'Location'}
                        name={'location'}
                        id={'location'}
                        type={'text'}
                        onChange={handleInput}
                        value={data?.location}
                        classNameLabel={'mt-3   label-color'}
                    />
                    {
                        !data.location && 
                        <small className="text-danger">must be filled in</small>
                    }
                    <div>
                        <label className='mt-3   label-color'>Class</label><br />
                        <div className="form-check form-check-inline">
                            <input className="form-check-input textfield-bg" 
                            type="radio" 
                            name="classCategory" 
                            id="online" 
                            value="online"
                            onChange={handleInput}
                            />
                            <label className="form-check-label" htmlFor="online">Online</label>
                            </div>
                            <div className="form-check form-check-inline">
                            <input className="form-check-input textfield-bg" 
                            type="radio" 
                            onChange={handleInput}
                            name="classCategory"
                            id="offline" 
                            value="offline"/>
                            <label className="form-check-label" htmlFor="offline">Offline</label>
                        </div>
                    </div>
                    {
                        !data.classCategory && 
                        <small className="text-danger">must be filled in</small>
                    }
                    <Row className="d-flex justify-content-between">
                        <Col md={4}>
                            <TextField
                                classNameInput={'textfield-bg'}
                                placeholder={'Rp. 150.000'}
                                label={'Daily Price'}
                                name={'dailyPrice'}
                                id={'dailyPrice'}
                                type={'text'}
                                onChange={handleInput}
                                value={data?.dailyPrice}
                                classNameLabel={'mt-3   label-color'}
                            />
                            {
                                !data.dailyPrice && 
                                <small className="text-danger">must be filled in</small>
                            }
                        </Col>
                        <Col md={4}>
                            <TextField
                                classNameInput={'textfield-bg'}
                                placeholder={'Rp. 650.000'}
                                label={'Weekly Price'}
                                name={'weeklyPrice'}
                                id={'weeklyPrice'}
                                type={'text'}
                                onChange={handleInput}
                                value={data?.weeklyPrice}
                                classNameLabel={'mt-3   label-color'}
                            />
                            {
                                !data.weeklyPrice && 
                                <small className="text-danger">must be filled in</small>
                            }
                        </Col>
                        <Col md={4}>
                            <TextField
                                classNameInput={'textfield-bg'}
                                placeholder={'Rp. 1.800.000'}
                                label={'Monthly Price'}
                                name={'monthlyPrice'}
                                id={'monthlyPrice'}
                                type={'text'}
                                onChange={handleInput}
                                value={data?.monthlyPrice}
                                classNameLabel={'mt-3   label-color'}
                            />
                            {
                                !data.monthlyPrice && 
                                <small className="text-danger">must be filled in</small>
                            }
                        </Col>
                    </Row>
                    {/* <TextField
                        name={'imageFile'}
                        id={'imageFile'}
                        type={'file'}
                        onChange={handleInput}
                        value={data.imageFile || ''}
                        label={'Upload'}
                        placeholder={'Upload class photo'}
                        classNameLabel={'mt-3 d-none label-color'}
                        // classNameInput={'textfield-bg'}
                    /> */}
                    <div>
                        <label 
                        className='mt-3 label-color'
                        htmlFor="imageFile">Upload</label>
                        <label
                        className="d-flex textfield-bg borderInput form-control justify-content-between flex-row"
                        >                  
                            <input 
                            style={{width:'100%', display:'none'}}
                                name={'imageFile'}
                                id={'imageFile'}
                                type='file'
                                onChange={handleInput}
                                // value={data.imageFile}
                            />
                            {data?.imageFile ? data.imageFile : 'Upload class photo'}
                            <div style={{width:'12px'}}>
                                <img src={add} style={{width:'100%'}} alt="" />
                            </div>
                        </label>
                    </div>
                    {
                        !data.imageFile && 
                        <small className="text-danger">must be filled in</small>
                    }
                    <div style={{width:'100%'}} className="styleTextarea">
                        <Textarea
                            classNameLabel={'mt-3   label-color'}
                            name={'description'}
                            id={'description'}
                            onChange={handleInput}
                            value={data?.description}
                            placeholder={'Maximum 1.000.000 Words'}
                            label={'Class Description'}
                            classNameTextarea={'form-control textfield-bg  borderInput textarea'}
                        />   
                        {
                            !data.description && 
                            <small className="text-danger">must be filled in</small>
                        }
                    </div>     
                        <button 
                            data-bs-dismiss="modal" 
                            onClick={onclick} 
                            type={"submit"}
                            className={" btn btn-modal-save w-100 mt-4"}
                            disabled={
                                !data.name ||
                                !data.classDate ||
                                !data.timeSession ||
                                !data.location ||
                                !data.classCategory ||
                                !data.dailyPrice ||
                                !data.weeklyPrice ||
                                !data.monthlyPrice ||
                                !data.imageFile ||
                                !data.description
                            }
                        >
                            save
                        </button> 
                </form>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default OfflineClass