import React, {useState} from "react";
import Button from 'react-bootstrap/Button'
import {Modal} from 'react-bootstrap'
import TextField from "../../elements/TextField/TextField";
import Textarea from "../../elements/TextField/Textarea";

export default function Form({nameInput, text, idInput, onChange, valueInput, imgBtn, className, idImg, nameImg, inputImg, textImg, valueImg, labelTextarea, labelInput, idTextarea, nameTextarea, maxLength, count,  placeholderInput, placeholderTextarea, valueTextarea, onSubmit}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                <Modal.Title>New parts</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form action="" onSubmit={onSubmit}>    
                    <div className="con mb-4 box">
                        <label  
                            style={{
                                cursor:'pointer',
                            }}>
                                <div 
                                    style={{marginBottom:'-10px'}}
                                >
                                    <img 
                                        src={inputImg} 
                                        alt="" 
                                    />
                                    <p 
                                        className="mt-3" 
                                        style={{
                                            color:'var(--Neutral-White-800)'
                                        }}
                                    >
                                        {textImg}
                                    </p>
                                </div>
                            <input 
                                type="file" 
                                onChange={onChange} 
                                style={{
                                    width:'100%', 
                                    display:'none'
                                }} 
                                name={nameImg}
                                id={idImg}
                            />
                            <img 
                                // width={'100%'} 
                                className='bg-black bg'
                                src={valueImg} 
                                height={'190px'}
                                style={{width:'fit-content'}} 
                                
                            alt="" />
                        </label>
                    </div>
                        <TextField
                            placeholder={placeholderInput}
                            type={'text'}
                            label={labelInput}
                            name={nameInput}
                            id={idInput}
                            onChange={onChange}
                            value={valueInput}
                        />
                        <div className="styleTextarea">
                            <Textarea
                            label={labelTextarea}
                            name={nameTextarea}
                            placeholder={placeholderTextarea}
                            id={idTextarea}
                            maxLength={maxLength}
                            count={count}
                            value={valueTextarea}
                            onChange={onChange}
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
                        onClick={onSubmit}
                    >
                        Create
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}