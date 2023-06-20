import './Form.css'
import React, {useEffect, useRef, useState} from "react";
import Button from 'react-bootstrap/Button'
import {Modal} from 'react-bootstrap'
import TextField from "../../elements/TextField/TextField";
import brokenImage from '../../assets/icons/broken_image_gray.svg'
import Textarea from "../../elements/TextField/Textarea";
import AddLess from "../AddLess/AddLess";
import { useDispatch } from "react-redux";
import { addTraining } from "../../redux/Slice/trainingSlice";
import { trainingApi } from '../../api/Api';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../Config/FirebaseConfig';
import useAxios from '../../api/useAxios';

export default function Training({title, text, imgBtn, className }) {
    const [show, setShow] = useState(false);
    const [training, setTraining] = useState([])
    const [uploadingImg, setUploadingImg] = useState(0)

    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {id, level} = useParams()
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {response, isLoading} = useAxios({
        api: trainingApi,
        method: 'get',
        url:`/training/${id}`
    })
    console.log(level, ' level');

    useEffect(() => {
        if(id !== '' && id !== null && id !== undefined && response !== null){
            setData(response)
            setTraining(response)
        }
    }, [response])
    
    const [data, setData] = useState({
        title : '',
        introduction:'',
        imgFile : null,
        workout:0,
        duration:0,
        category:level
    })
    let countText = data.introduction.length


    const increment = (e, type) => {
        e.preventDefault()    
        const updatedData = ({...data, [type] : data[type]+1})
        console.log(updatedData);
        setData(updatedData)
      };
    
      const decrement = (e, type) => {
        e.preventDefault();
        if (data[type] > 0) {
          const updatedData = { ...data, [type]: data[type] - 1 };
          console.log(updatedData);
          setData(updatedData);
        }
      }
    
      const reset = () => {
        setData({
            title : '',
            introduction:'',
            imgFile : null,
            workout:0,
            duration:0,
            category:''
        })
      }
      
    const handleInput = (e) => {
        const {name, value} = e.target
        if(name === 'introduction'){
            setData({...data, [name] : value})
        }

        setData({...data, [name] : value})
        console.log(data, ' Data Training');
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(id, ' id');
        console.log(training, ' tr');
        console.log(data, ' data');
        if(window.confirm('Are you sure you want to submit?')){
            if (id !== undefined && (training?.id === data?.id)){
                trainingApi.put(`/training/${id}`,{
                    title : data.title,
                    introduction:data.introduction,
                    imgFile : data.imgFile,
                    workout:data.workout,
                    duration: data.duration,
                    category:level
                })
                .then( (res) => {
                    setData(res.data)
                    navigate(`/levelDetail/${level}`)
                    alert('edited')
                    window.location.reload()
                    
                })
                .catch((err) => {
                    alert(err.message)
                })
            } else {
                trainingApi.post('/training',{
                    title : data.title,
                    introduction:data.introduction,
                    imgFile : data.imgFile,
                    workout:data.workout,
                    duration: data.duration,
                    category:level
                })
                .then(async (res) => {
                    await axios.get(`https://647612b1e607ba4797dd420e.mockapi.io/training`)
                    setData(res.data)
                    console.log(data, ' resp');
                    dispatch(addTraining(data))
                    alert('Added')
                    setShow(false)
                    //get data
                    console.log(data);
                    // window.location.reload()
                })
                .catch((err) => {
                    alert(err.message)
                })
            }
        }
        reset()

    }

    const handleImg = (e) => {
        e.preventDefault()
        let image = e.target.files[0];
        if(image && image.type.match('image.*')){
            const storageRef = ref(storage, `/files/${image.name}`)
            const uploadImg = uploadBytesResumable(storageRef, image)
            uploadImg.on(
                'state_Changed',
                (snapshot) => {
                    const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                    setUploadingImg(percent)
                },
                (err) => {
                    console.log(err.message);
                },
                () => {
                    getDownloadURL(uploadImg.snapshot.ref)
                    .then(url =>{
                        setData({...data, imgFile:url})
                        setUploadingImg(0)
                    }) 
                    .catch(err => {
                        console.log(err.message);
                    })
                }
            )
        } else {
            alert('please select an image file ( jpg, png, gif )')
            e.target.value = null
            image = e.target.value
        }
        
        // setData((prevState) => ({
        //     ...prevState,
        //     imgFile: URL.createObjectURL(value)
        // }));
        console.log(data.imgFile);
    }
    
    return(
        <>
            <Button 
                variant={className}
                onClick={handleShow}>
                <img src={imgBtn} alt="" />
                {text}
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalBody">
                {/* {body} */}
                <form onSubmit={handleSubmit}>
                    <div className=" mb-4 box" style={{borderRadius:'20px'}}>
                        <label  
                            style={{
                                borderRadius:'20px',
                                cursor:'pointer',
                                backgroundImage:`url(${brokenImage})`,
                                backgroundRepeat:'no-repeat',
                                height:'fit-content',
                                width:'100%',
                                backgroundPosition:'center'
                            }}>
                            <input 
                                accept='image/*'
                                type="file" 
                                onChange={handleImg}         
                                name="image"
                            />
                            <img 
                                // width={'100%'} 
                                src={data.imgFile} 
                                height={'200px'}
                                style={{width:'fit-content'}} 
                                
                            alt="" />
                        </label>
                    </div>
                    {
                        uploadingImg > 0 &&
                        <span>Uploading Image : {uploadingImg}%</span> 
                    }
                       

                        <TextField
                            placeholder={'Input title'}
                            type={'text'}
                            name={'title'}
                            id={'title'}
                            onChange={handleInput}
                            value={data.title}
                        />
                        <div>
                    
                        </div>
                        <div className="styleTextarea col-12 mt-4 m-0">
                            <Textarea
                                classNameLabel={'fw-semibold mb-3'}
                                label={'Introduction'}
                                name={'introduction'}
                                id={'introduction'}
                                classNameTextarea={'form-control rounded-3 borderInput'}
                                maxLength={200}
                                value={data.introduction}
                                onChange={handleInput}
                                count={`${countText} / 200 word`}
                                // count={`${count} / 200 word`}
                            />
                        </div>
                        <div>
                        <p className="fw-semibold">Info</p>
                        <div className="row">
                            <div className="col-7">
                                <p>How long will it take?</p>
                                <div className="d-flex flex-row">
                                    <AddLess
                                        decrement={(e) => decrement(e, 'duration')}
                                        increment={(e) => increment(e, 'duration')}
                                        qty={data.duration}
                                    />
                                    <select className="form-select selectTextarea" aria-label="Default select example">
                                    <option selected value={'Minutes'}>Minutes</option>
                                    <option value="Hours">Hours</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-5">
                                <p>How much workouts?</p>
                                <AddLess
                                    decrement={(e) => decrement(e, 'workout')}
                                    increment={(e) => increment(e, 'workout')}
                                    qty={data.workout}   
                                />
                            </div>
                        </div>
                    </div>
                </form>
                </Modal.Body>
                <Modal.Footer>
                <Button 
                    variant={'btn me-4 fw-semibold'} 
                    onClick={handleClose}
                >
                    Close
                </Button>
                <Button 
                    variant={'btn fw-semibold'} 
                    onClick={handleSubmit}
                    type={"submit"}
                >
                    Create
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}