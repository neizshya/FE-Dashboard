import React, {useEffect, useState} from "react";
import Form from "../Modal/Form";
import { trainingApi } from "../../api/Api";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import video from '../../assets/icons/videocam_gray.svg'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../Config/FirebaseConfig';
import Button from 'react-bootstrap/Button'
import {Modal} from 'react-bootstrap'
import TextField from "../../elements/TextField/TextField";
import Textarea from "../../elements/TextField/Textarea";
import useAxios from "../../api/useAxios";

export default function VideoTraining({className, imgBtn, text}) {

    const location = useLocation()
    const state = location.state
    const param = useParams()
    const navigate = useNavigate()

    const [show, setShow] = useState(false);
    const [uploadingVideo, setUploadingVideo] = useState(0)
    const handleShow = () => setShow(true);
    const handleClose = () => {
        navigate(`/levelDetail/${param.level}/${param.id}/workoutDetail`)
        setShow(false)
    };

    const [workout, setWorkout] = useState([])
    const [data, setData] = useState({
        video:null,
        title:'',
        description:''
    })

    const {response, isLoading} = useAxios({
        api: trainingApi,
        method: 'get',
        url:`/training/${param.id}/videoTraining/${param.idWorkout}`
    })

    useEffect(() => {
        if(param.idWorkout !== '' && param.idWorkout !== null && param.idWorkout !== undefined && response !== null){
            setData(response)
            setWorkout(response)
            console.log(data);
            console.log(data.video);
        }
    }, [response])

    const reset = () => {
        setData({
            video:null,
            title:'',
            description:''
        })
    }


    const handleChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        if(name === "video"){
            let videoFile = e.target.files[0];
            if(videoFile && videoFile.type.match('video/*')){
                const storageRef = ref(storage, `/files/${videoFile.name}`)
                const uploadImg = uploadBytesResumable(storageRef, videoFile)
                uploadImg.on(
                    'state_Changed',
                    (snapshot) => {
                        const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                        setUploadingVideo(percent)
                    },
                    (err) => {
                        console.log(err.message);
                    },
                    () => {
                        getDownloadURL(uploadImg.snapshot.ref)
                        .then(url =>{
                            setData({...data, video:url})
                            setUploadingVideo(0)
                        }) 
                        .catch(err => {
                            console.log(err.message);
                        })
                    }
                )
            } else {
                alert('please select an image file ( mp4, webm, m4v )')
                e.target.value = null
                videoFile = e.target.value
            }
        } else{
            setData({
                ...data, [name] : value
            })
        }
        console.log(data, ' data video training');
        console.log(data?.video)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(window.confirm('Are you sure you want to submit?')){
            if (param.idWorkout !== undefined &&  (workout?.id === data?.id)){
                trainingApi.put(`/training/${param.id}/videoTraining/${param.idWorkout}`,{
                    video:data.video,
                    title:data.title,
                    description:data.description
                })
                .then((res) => {
                    navigate(`/levelDetail/${param.level}/${param.id}/workoutDetail`)
                    alert('edited')
                    window.location.reload()
                })
                .catch((err) => {
                    alert(err.message)
                    // window.location.reload()
                })
            } else {
                trainingApi.post(`/training/${param.id}/videoTraining`,{
                    video:data.video,
                    title:data.title,
                    description:data.description
                })
                .then((res) => {
                    // dispatch(addTraining(data))
                    alert('Added')
                    // setShow(false)
                    //get data
                    console.log(data);
                    window.location.reload()
                })
                .catch((err) => {
                    alert(err.message)
                })
            }
            reset()
        }
    }

    return(
        <>
            <style type="text/css">
                {
                    `
                    .btn-closebtn{
                        color: var(--primary-500);
                        border: 1px solid var(--primary-500);
                        border-radius:8px;
                        padding-right:34px;
                        padding-left:34px
                      }
                      
                      .btn-createbtn{
                        background-color: var(--primary-500);
                        color: var(--primary-100);
                        border-radius:8px;
                        padding-right:34px;
                        padding-left:34px
                      }
                      `
                }
            </style>
            <Button 

                variant={className}
                onClick={handleShow}>
                <img src={imgBtn} alt="" />
                {text}
            </Button>
            <Modal
            onClick={()=> navigate(`/levelDetail/${param.level}/${param.id}/workoutDetail`)}
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Body>
                <form action="" onSubmit={handleSubmit}>    
                    <div className="mt-2 con mb-4 box">
                        <label  
                            style={{
                                cursor:'pointer',
                            }}>
                                <div 
                                    style={{marginBottom:'-10px'}}
                                >
                                    <img 
                                        src={video} 
                                        alt="" 
                                    />
                                    <p 
                                        className="mt-3" 
                                        style={{
                                            color:'var(--Neutral-White-800)'
                                        }}
                                    >
                                        {'Input Video'}
                                    </p>
                                </div>
                            <input 
                                type="file" 
                                accept="video/*"
                                onChange={handleChange} 
                                style={{
                                    width:'100%', 
                                    display:'none'
                                }} 
                                name={'video'}
                                id={'video'}
                            />
                            {
                                data?.video?.length > 0 && 
                            <video 
                                className='bg-black bg'
                                src={data.video}  
                                height={'190px'} 
                                controls
                                style={{width:'fit-content'}}
                            >
                            </video>
                            }
                            {/* <img 
                                // width={'100%'} 
                                className='bg-black bg'
                                src={data.video} 
                                height={'190px'}
                                style={{width:'fit-content'}} 
                                
                            alt="" /> */}
                        </label>
                    </div>
                    {
                        uploadingVideo > 0 &&
                        <span>Uploading Video : {uploadingVideo}%</span> 
                    }
                        <TextField
                            placeholder={'Arm Circles'}
                            type={'text'}
                            name={'title'}
                            id={'title'}
                            onChange={handleChange}
                            value={data.title}
                        />
                        <div className="styleTextarea">
                            <Textarea
                            name={'description'}
                            placeholder={'Detail Workout'}
                            id={'description'}
                            maxLength={200}
                            value={data.description}
                            onChange={handleChange}
                            classNameTextarea={'form-control rounded-3 borderInput'}/>
                        </div>
                </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button 
                        variant='closebtn' 
                        onClick={handleClose}
                    >
                        Close
                    </Button>
                    <Button 
                        variant='createbtn' 
                        onClick={handleSubmit}
                    >
                        Create
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}