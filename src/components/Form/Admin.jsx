import TextField from "../../elements/TextField/TextField"
import './Form.css'
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Datepicker, Input } from '@mobiscroll/react';
import React, {useEffect, useState} from "react";
import {useDispatch} from 'react-redux'
import TextFieldPassword from "../../elements/TextField/TextFieldPassword";
import ButtonComponent from "../../elements/Buttons/ButtonComponent";
import { useFormik } from 'formik';
import { Row, Col } from "react-bootstrap";
import { addAdmin } from "../../redux/Slice/adminSlice";
import CardAdd from "../Recomended/CardAdd";

// const validate = values => {
//     const errors = {};

//     if (!values.password) {
//         errors.password = 'Required';
//     } else if (!/^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/i.test(values.password)){
//         errors.password = 'a password must be eight characters and alphanumeric characters'
//     }

//     if (!values.email) {
//         errors.email = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = 'Invalid email address';
//     }

//     if(!values.name) {
//         errors.name = 'Required';
//     }else if(!/^[a-zA-Z]+$/i.test(values.name)){
//             errors.name = 'only alphabetic characters';
//     }

//     if(!values.confirmPassword) {
//         errors.confirmPassword = 'Required';
//     }else if(values.confirmPassword !== values.password){
//             errors.confirmPassword = 'New password and confirm password does not match';
//     }

//     return errors;
// };

const Admin = ({onClick,classNameImg,style, className, btnModalText, btnModalImg}) => {
    const [error, setError] = useState({
        name :'',
        email:'',
        password:''
    })
    const [uploadingImage, setUploadingImage] = useState(0)
    const dispatch = useDispatch()
    const [data, setData] = useState({
        imgFile : '',
        name : '',
        email : '',
        role:'',
        password:'',
        confirmPassword:''
    })

    const roleList = [
        {value:'----', text:'Choose Your Role'},
        {value:"Admin", text: "Admin"},
        {value:"Super Admin", text: "Super Admin"},
    ];

    const [regex, setRegex] = useState({
        name :/^[a-zA-Z]+$/,
        email:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/,
        password:/^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/
    })

    // const formik = useFormik({
    //     initialValues: {
    //     email: '',
    //     password: '',
    //     name :'',
    //     confirmPassword:'',
    //     role:'',
    //     imgFile:data.imgFile
    //     },
        
    //     validate,
    //     onSubmit: values => {
    //         if(values.name !== "" && values.email !== ""){
    //             dispatch(addAdmin(values))
    //             console.log(values);
    //         }
    //     },
    // });

    // const handleInput = (e) => {
    //     e.preventDefault()
    //     const { name, value } = e.target;
    //     let testRegex = true
    //     if(name === "imgFile"){
    //         const image = e.target.files[0];
    //         if(image && image.type.match('image/*')){
    //             const storageRef = ref(storage, `/files/${image.name}`)
    //             const uploadImg = uploadBytesResumable(storageRef, image)
    //             uploadImg.on(
    //                 'state_Changed',
    //                 (snapshot) => {
    //                     const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
    //                     setUploadingImage(percent)
    //                 },
    //                 (err) => {
    //                     console.log(err.message);
    //                 },
    //                 () => {
    //                     getDownloadURL(uploadImg.snapshot.ref)
    //                     .then(url =>{
    //                         setData({...data, imgFile:url})
    //                         setUploadingImage(0)
    //                     }) 
    //                     .catch(err => {
    //                         console.log(err.message);
    //                     })
    //                 }
    //             )
    //         } else {
    //             alert('please select an image file ( jpg, gif, png )')
    //             e.target.value = null
    //             image = e.target.value
    //         }
    //     }
    //         setData({
    //             ...data,
    //             [name] : value
    //         })
        
            
    //   };

    const handleInput = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        if (name === "imgFile") {
            const file = e.target.files[0];
          setData((prevData) => ({
            ...prevData,
            [name]: URL.createObjectURL(file)
          }));
        } else if(name === 'email'){
            if(!regex.email.test(value)){
                setError('Invalid email address')
            } else {
                setData({
                    ...data,
                    email :value
                })
            }
        } else if(name === 'name'){
            if(!regex.name.test(value)){
                setError('only alphabetic characters')
            } else {
                setData({
                    ...data,
                    name  :value
                })
            }
        }else if(name === 'password'){
            if(!regex.password.test(value)){
                setError('a password must be eight characters and alphanumeric')
            } else {
                setData({
                    ...data,
                    password :value
                })
            }
        }else{
            setData({
                ...data,
                [name] :value
            })
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
                data-bs-target="#admin"
            >
                {btnModalText}
                <img src={btnModalImg} 
                className={classNameImg?classNameImg:"ms-4"} 
                alt="" />

            </button>
            <div 
                className="modal fade" 
                id="admin" 
                tabIndex="-1" 
                aria-labelledby="exampleModalLabel" 
                aria-hidden="true"
            >
            <div  className="modal-dialog modal-lg">
                <div 
                style={{width:'fit-content'}} className="modal-content">
                <div className="modal-body">
                    <p className="fs-3 fw-semibold">Add Admin</p>
                    
                    {/* <form onSubmit={formik.handleSubmit}> */}
                    <div className="shadow p-3" style={{width:'606px'}}>
                        <div className="row">
                            <div className="col-12">Change your profile picture from here</div>
                            <div className="col-12 d-flex flex-row">
                                <div 
                                className="me-4"
                                style={{width:"83px", height:"83px"}}>
                                {data?.imgFile?.length > 0 &&
                                
                                    <img 
                                    style={{width:'100%'}}
                                        className="rounded-pill"
                                        src={data.imgFile} 
                                        alt="" />
                                }
                                </div>
                                <div>
                                    <div className="d-flex mt-2 flex-row">
                                        <label className="btn-save btn ps-3 me-3 pe-3 p-1 rounded pt-2">
                                            <input 
                                                accept='image/*'
                                                type="file" 
                                                onChange={handleInput}      
                                                id="imgFile"
                                                name="imgFile"
                                            />
                                            Upload
                                        </label>
                                        
                                        <ButtonComponent
                                            className={"btn-cancel"}
                                            id={"submitEmail"}
                                            // onClick={onSubmitHandle}
                                            buttonName={"Cancel"}
                                        />
                                    </div>
                                    <p style={{fontSize:'10px'}} className="text-secondary mt-2">Allowed JPG, GIF or PNG. Max size of 800K</p>
                                </div>
                            </div>
                            {
                        uploadingImage > 0 &&
                        <span>Uploading Image : {uploadingImage}%</span> 
                    }
                        </div>
                        <div>
                            <TextField
                                placeholder={'Input your name'}
                                label={'Name'}
                                name={'name'}
                                id={'name'}
                                type={'text'}
                                // onChange={formik.handleChange}
                                // value={formik.values.name}
                                onChange={handleInput}
                                value={data.name}
                                classNameLabel={'mt-2   text-secondary'}
                            />
                            <small className="text-danger text-center">{error.name}</small>
                            {/* {formik.errors.name ? <div className='text-danger fw-light'>{formik.errors.name}</div> : null} */}
                            <Row>
                                <Col>
                                    <TextField
                                        placeholder={'anonimous@gmail.com'}
                                        label={'Email'}
                                        name={'email'}
                                        id={'email'}
                                        type={'email'}
                                        onChange={handleInput}
                                        value={data.email}
                                        classNameLabel={'mt-2   text-secondary'}
                                    />
                                    {<small className="text-danger text-center">{error.email}</small>}
                                </Col>
                                <Col>
                                <label className="mt-2   text-secondary" htmlFor="role">Select Role</label>
                                <select 
                                    id={'role'}  
                                    // disabled={value.length === 1}
                                    className={'text-secondary form-control borderInput col-12'}
                                    name={'role'} 
                                    onChange={handleInput}
                                >
                                    {
                                        roleList?.map(option => (
                                            <option 
                                                key={option.value}
                                                value={option.value}
                                                >
                                                    {option.text}
                                                </option>
                                        ))
                                    }
                                </select>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <TextField
                                        placeholder={'8karakter'}
                                        label={'Password'}
                                        name={'password'}
                                        id={'password'}
                                        type={'password'}
                                        onChange={handleInput}
                                        value={data.password}
                                        classNameLabel={'mt-2   text-secondary'}
                                    />
                                    {<small className="text-danger text-center">{error.password}</small>}
                                </Col>
                                <Col>
                                    <TextField
                                        placeholder={'8karakter'}
                                        label={'Confrim Password'}
                                        name={'confirmPassword'}
                                        id={'confirmPassword'}
                                        type={'password'}
                                        onChange={handleInput}
                                        value={data.confirmPassword}
                                        classNameLabel={'mt-2   text-secondary'}
                                    />
                                    {data.confirmPassword && (data.password !== data.confirmPassword) ? (
                                        <span className=" text-danger">
                                        New password and confirm password does not match
                                        </span>
                                    ) : (
                                        <></>
                                    )}
                                </Col>
                            </Row>
                        </div>
                        <div className="d-flex justify-content-end">
                        <button 
                            data-bs-dismiss="modal" 
                            // onClick={handleSubmit} 
                            type={"submit"}
                            className={" btn btn-save mt-4 me-4 pe-4 ps-4"}
                            // disabled={
                            //     !formik.values.password ||
                            //     !formik.values.confirmPassword
                            //      ||
                            //     !formik.values.name ||
                            //     !formik.values.email ||
                            //     !formik.values.role
                            //      ||
                            //     !formik.values.imgFile
                            // }
                        >
                            save
                        </button>
                        <button 
                            data-bs-dismiss="modal" 
                            onClick={onclick} 
                            type={"submit"}
                            className={" btn btn-cancel mt-4 ps-4 pe-4"}
                        >
                            Cancel
                        </button> 
                    </div>
                        
                    </div>
                {/* </form> */}
                    
                </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default Admin