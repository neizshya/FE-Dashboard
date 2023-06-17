import Cover from "../../elements/Card/Cover"
import imgCover from '../../assets/icons/Appreciation 1.svg'
import './OnlineClass.css'
import { useNavigate } from "react-router-dom"
import InputSearch from "../../elements/InputSearch/InputSearch"
import DetailProduct from "../../components/DetailProduct.jsx/DetailProduct"
import { Col,  Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import AddOnlineClass from "../../components/Form/OnlineClass"
import { classApi } from "../../api/Api"
import { useEffect, useState } from "react"
import useAxios from "../../api/UseAxios"
import axios from "axios"
import addSmall from '../../assets/icons/add_small.svg'

const OnlineClass = () => {
    const navigate = useNavigate()

    const [data, setData]= useState([])
    const [inputSearch, setInputSearch] = useState("");
    const onlineClasses = useSelector((state) => state.onlineClass)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isDivHidden, setIsDivHidden] = useState(false);

    
    const {response, isLoading} = useAxios({
        api: classApi,
        method: 'get',
        url:`/class?name=${inputSearch}`
    })
    
    useEffect(() => {
        if(response !== null){
            setData(response)
        }
        if (onlineClasses.length > 0 && onlineClasses !== null){
            setIsSubmitted(true)
            fetchData()
            setIsDivHidden(true)
            console.log(data, ' submit');
        }

    }, [response, onlineClasses, isSubmitted])

    const fetchData = () => {
        axios.get('https://642feb34c26d69edc886a350.mockapi.io/class')
          .then((res) => {
            setData(res.data)
            console.log(res.data);
          })
          .catch((err) => {
            alert(err.message);
          });
      };
  

    const handleDelete = async (id) => {
        try {
          if (window.confirm('Are you sure you want to delete?')) {
            await axios.delete(`https://642feb34c26d69edc886a350.mockapi.io/class/${id}`);
            setData((prevClasses) =>
              prevClasses.filter((onlineClass) => onlineClass.id !== id)
            );
            console.log('Data deleted successfully');
          }
        } catch (error) {
          console.log(error);
        }

   
      };

    const handleEdit= (id) => {
        console.log(id,' id');
        navigate(`/${id}`
        ,
        {state:{data:id}}
        )
    }
    const combinedArray = data.concat(onlineClasses);
    
    return(
        <>
            <Cover
                text={'Manage Online Class'}
                list1={'Class Data'}
                img={imgCover}
            />
            
            <Row className=' mt-5 mb-5'>
                <Col md={12} className=" d-flex flex-row justify-content-between">
                    <p style={{color:'var(--Neutral-Black-100)', fontSize:'28px', fontWeight:'700'}} className="p-0 m-0">Class Data</p>
                    <div className="d-flex flex-row mb-3">
                        <div style={{ 
                            // pointerEvents: isDivDisabled ? 'none' : 'auto'
                            display: isDivHidden ? 'none' : 'block' 
                            }}>
                            <InputSearch
                                placeholder={'Search Class'}
                                type={'text'}
                                name={'searchClass'}
                                id={'searchClass'}
                                onChange={(e) =>{
                                    setInputSearch(e.target.value.trim())
                                }}
                                value={inputSearch.replace('?name=', '')}
                                height={45}
                                disabled
                            />
                        </div>
                        <AddOnlineClass
                            btnModalImg={addSmall}
                            btnModalText={'Add Class '}
                            className={'btn-google m-0 border-0 border rounded ms-2'}
                        />
                    </div>
                </Col>
                <Row>
                <Col>
                    {
                        data.length > 0 ? (
                            data?.map((onlineClass, id) =>{
                                return(
                                    <div 
                                    key={id}
                                    className="mb-3">
                                        <DetailProduct
                                            img={onlineClass.imageFile}
                                            key={id}
                                            text={onlineClass.name}
                                            date={onlineClass.classDate}
                                            timeSession={onlineClass.timeSession}
                                            category={onlineClass.classCategory}
                                            onClickDelete={()=>handleDelete(onlineClass.id)}
                                            onClickEdit={() => handleEdit(onlineClass.id)}
                                        />
                                    </div>
                                )
                            }))
                            :
                            (
                                <p className="text-center mt-5">No data available</p>
                            )
                    }
                    </Col>
                </Row>
            </Row>
        </>
    )
}

export default OnlineClass