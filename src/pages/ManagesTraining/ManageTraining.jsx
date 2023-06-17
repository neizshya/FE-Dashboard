import Cover from "../../elements/Card/Cover";
import imgCover from '../../assets/icons/Appreciation 1.svg'
import RadialBar from "../../components//Chart/RadialBar";
import Recomended from "../../components/Recomended/Recomended";
import { useNavigate } from "react-router-dom";
import Bar from "../../components/Chart/Bar";
import useAxios from "../../api/useAxios";
import { classApi, trainingApi } from "../../api/Api";
import { useEffect, useState } from "react";

const ManageTraining = () => {
    const navigate = useNavigate()
    const [data, setData] = useState()
    const [classData, setClassData] = useState()

    const { response, isLoading } = useAxios({
        api: trainingApi,
        method: 'get',
        url: `/training`,
    });

    const { response : res, isLoading : load} = useAxios({
        api: classApi,
        method: 'get',
        url: `/class`,
    });

    useEffect(() => {
        if(response !== null){
            setData(response)
        }
        if(res !== null){
            setClassData(res)
        }
    })

    const calculatePercentage = (category) => {
        const categoryData = data?.filter((item) => item.category === category);
        const dataTaken = categoryData?.length;
        const totalData = data?.length
        
        const percentage = (dataTaken / totalData) * 100;
        const roundedPercentage = Math.round(percentage);
  
        return roundedPercentage;
    };

    const getCategoryDataLength = (classCategory) => {
        const categoryData = classData?.filter((item) => item.classCategory === classCategory);
        return categoryData?.length;
      };
      
      const gym = getCategoryDataLength('Online');
      const home = getCategoryDataLength('Offline');
      
      const beginnerPercentage = calculatePercentage('Beginner');
      const advancedPercentage = calculatePercentage('Advanced');
      const intermediatePercentage = calculatePercentage('Intermediate');

    const barChart = [
        {
            data:[home],
            name:'Home Workout',
            colorBar:'#FFB200',
            colorBackgroundBar:'#FFF5CC',
        },
        {
            data:[gym],
            name:'Gym Workout',
            colorBackgroundBar:'#DAD7FE',
            colorBar:'#4339F2'
        },
        {
            data:[home],
            name:'Outside Workout',
            colorBackgroundBar:'#CCF8FE',
            colorBar:'#02A0FC'
        }
    ]

    const radialBarChart = [
        { 
            level: 'Beginner', 
            series: [beginnerPercentage], 
            colorBackground:'#FFEFCC',
            colorText:'#FF7F00'
        },
        { 
            level: 'Intermediate', 
            series: [intermediatePercentage],
            colorBackground:'#CCCCFF',
            colorText:'#3F3FFF'
        },
        { 
            level: 'Advanced', 
            series: [advancedPercentage],
            colorBackground:'#98F2FE',
            colorText:'#00ACFC'
        },
      ];


    return(
        <div className="container-fluid" style={{marginLeft:"60px"}}>
            <Cover
                img={imgCover}
                list1={'Home'}
                text={'Training'}
            />
            <div className="d-flex justify-content-around row mt-5 mb-5" style={{margin:'0 auto'}}>
            {/* key={id} 
                        onClick={() => navigate(`/levelDetail/${data.level}`
                        ,{state:{level: data.level }}
                        )} */}
                {radialBarChart?.map((data,id) =>{
                    return(
                        <RadialBar
                            key={id}
                            level={data.level}
                            colorBackground={data.colorBackground}
                            colorText={data.colorText}
                            series={data.series[0]}
                            text={data.level}
                        />
                    )
                    
                })}
            </div>
            <div className="row d-flex justify-content-around ms-md--5 me-md-4">
                <div className="col-lg-6 shadow mb-4 p-3">
                    <p className="fs-2 fw-bold">Best Training</p>
                    {
                        barChart?.map((data, id) => {
                            return(
                                <div key={id}>
                                    <Bar
                                        data={data.data[0]}
                                        name={data.name}
                                        colorBar={data.colorBar}
                                        colorBackgroundBar={data.colorBackgroundBar}
                                    />
                                </div>
                            )
                        })
                    }                    
                </div>
                <div className="col-lg-5 mb-4">
                    <Recomended/>
                </div>
            </div>
        </div>
    )
}

export default ManageTraining