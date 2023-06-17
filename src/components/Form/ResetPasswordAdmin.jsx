import React, {useState} from "react";
import TextFieldPassword from "../../elements/TextField/TextFieldPassword";



const ResetPasswordAdmin = ({onClick,classNameImg,style, className, btnModalText, btnModalImg}) => {
    const [error, setError] = useState('')

    const [data, setData] = useState({
        currentPass:'',
        newPass:'',
        confirmPass:''
    })
    console.log(data);

    const handleInput = (e) => {
        e.preventDefault()
        // const { name, value } = e.target;
        
        const passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/
   
        
        if (e.target.name === 'newPass'){
            if(!passwordRegex.test(e.target.value)){
                setError("a password must be eight characters and alphanumeric")
                testRegex = false
            } else{
                setError('')
            }
        } else {
            setData({
                ...data,
                [e.target.name] : e.target.value
            })
        }
            
      };
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    
    return(
        <>
            <button 
                onClick={onClick}
                type="button" 
                className={className? className : "btn btn-link text-decoration-none text-secondary fs-6" }
                width='fit-content'
                style={style}  
                data-bs-toggle="modal" 
                data-bs-target="#resetPasswordAdmin"
            >
                <img src={btnModalImg} 
                className={classNameImg?classNameImg:"ms-4"} 
                alt="" />
                {btnModalText}

            </button>
            <div 
                className="modal fade" 
                id="resetPasswordAdmin" 
                tabIndex="-1" 
                aria-labelledby="exampleModalLabel" 
                aria-hidden="true"
            >
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                <div className="modal-body">
                    <h1 style={{fontSize:'36px'}}>Reset Your Password</h1>
                    <p>To reset your password please confirm here</p>
                {/* <form onSubmit={handleSubmit}> */}
                    <TextFieldPassword
                        placeholder={"******"}
                        label="Current Password"
                        id={"currentPass"}
                        name={"currentPass"}
                        value={data.currentPass}
                        onChange={handleInput}
                        classNameLabel={"mb-2 text-secondary"}
                    />
                    <TextFieldPassword
                        placeholder={"******"}
                        label="New Password"
                        id={"newPass"}
                        name={"newPass"}
                        value={data?.newPass}
                        onChange={handleInput}
                        // onChange={(e) => {setData({...data, newPass : e.target.value})}}
                        classNameLabel={"mb-2 mt-2 text-secondary"}
                    />
                    <p className="text-danger m-0">{error}</p>
                    <TextFieldPassword
                        placeholder={"******"}
                        label="Confirm Password"
                        id={"confirmPass"}
                        name={"confirmPass"}
                        value={data?.confirmPass}
                        onChange={handleInput}
                        classNameLabel={"mb-2 mt-2 text-secondary"}
                    />
                    {data.confirmPass && (data.newPass !== data.confirmPass) ? (
                        <span className="mt-3 text-danger">
                        New password and confirm password does not match
                        </span>
                    ) : (
                        <></>
                    )}
                    <div className="d-flex justify-content-end">
                        <button 
                            data-bs-dismiss="modal" 
                            onClick={handleSubmit} 
                            type={"submit"}
                            className={" btn btn-save mt-4 me-4 pe-4 ps-4"}
                            disabled={
                                !data.newPass ||
                                !data.confirmPass
                                 ||
                                !data.currentPass
                            }
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
                {/* </form> */}
                </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default ResetPasswordAdmin