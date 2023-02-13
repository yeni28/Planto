import React, { useEffect, useState } from 'react'
import BottomNav from '../nav/BottomNav';
// 이미지
import back from '../../assets/background/detailback.png'
import temp from '../../assets/icons/temp.png'
import humid from '../../assets/icons/humid.png'
import lux from '../../assets/icons/lux.png'
// 이미지2
import nowtem from '../../assets/icons/nowtem.png'
import nowhum from '../../assets/icons/nowhum.png'
import nowsun from '../../assets/icons/nowsun.png'

//  api주소
import { HOST } from "../login/OAuth"
import axios from 'axios';

import './PlantoDetail.css'
import ProgressContainer from '../components/Progressbar';

function PlantoDetail() {
  
  // palnt ID 받아오기


  // plant 받아오기
    const [plant, setPlant] = useState([]);
    const token = window.localStorage.getItem('token');

    // DB에 저장된 데이터 받아오기
    useEffect(() => {
      axios({
          method: "get",
          //
          url: `${HOST}/api/v1/plant/1`,
          headers: {
            Authorization: token,
          },
      }).then((response) => {
          setPlant(response.data)
          console.log(response.data.plant_dict_plant_dict_id)
          axios({
            method: "get",
            url: `${HOST}/api/v1/dict/detail/${response.data.plant_dict_plant_dict_id}`,
            headers: {
              Authorization: token,
            },
        }).then(function (response) {
            setPlantDetail(response.data)
            console.log(response.data)
         
        });
      }).catch((e) =>{
        console.log(e)
      });
      
  }, [])
    // 식물 데이터 받아오기!
    const [plantdetail, setPlantDetail] = useState([]);

  // 호감도
  const like = plant.liking
    
  
  // 날짜 계산
  const dday = new Date(`${plant.createDate}`)
  const [days, setDays] = useState(0);

  useEffect(()=>{
    const today =  new Date();
    const gapNum = (dday - today)*-1;
    setDays(Math.ceil(gapNum/(1000*60*60*24)))
    
  },[dday])
  


  return (
    <div className="plantodetaildiv" >
      <div className="detailback"style={{width:'100vw',height:'100vh',
padding:'1rem', backgroundImage:`url("${back}")`,backgroundSize:'cover',
}}>
        <div>
          {/* 상단 */}
          <div>
            {/* 이미지 */}
            <div style={{
            width:'10rem',
            height:'10rem',
            marginLeft:'7rem',
            borderRadius:'15rem',
            backgroundSize:'cover',
            backgroundPosition:'center',
            backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/planto-e2910.appspot.com/o/${plant.imagePath}?alt=media")`
            }}>
            </div>
            {/* <img src={`https://firebasestorage.googleapis.com/v0/b/planto-e2910.appspot.com/o/${plant.imagePath}?alt=media`}/> */}
            <div className='plantoDetailName font-PreSB'> {plant.name}</div>
            <div className='plantoDetailName2 font-PreSB'> {plantdetail.name} </div>
          </div>
          {/* 호감도 표현 */}
          <div className='likeboxwrap' style={{marginBottom:'1rem'}}>
              <div className='likebox'>
                <div className='font-PreM'
                style={{color:'white', textAlign:'center'}}
                > 🤍 우리 함께한지 {days}일 🤍</div>
              </div>
              <div>
                {/* 라인 */}
                
                <div className='font-PreM plantodetailsubtitle'>  
                플랜토와 얼마나 친해졌나요? </div>
                <div style={{position:'absolute', top:'4.2rem',left:'3rem'}}>
                  <ProgressContainer 
                  like ={like}
                  />
                </div>
                <div style={{position:'absolute', top:'5rem', left:'16rem'}}>
                <button className="font-PreM likecheckbtn"> 더 보기 </button>
                </div>
              </div>
              
          </div>
          {/*  현재 상태 */}
          <div>
                <p className='font-PreR infonowtitle '> 현재 식물의 상태를 확인하세요! </p>
                <div className="infobox2">
                    <div className='infonowcondition'>
                        {/* <p className='font-PreL ' style={{marginTop:'0.15rem'}}>온도</p> */}
                        <img src={nowtem} alt="temp" className='infoIcon2'></img>
                        <p className='font-PreSB text-green-700 infotext2' style={{marginTop:'0.15rem'}}>{plant.temperature}°C</p>
                    </div>
                    <div className='infonowcondition'>
                        {/* <p className='font-PreSB text-green-700 ' style={{marginTop:'0.15rem'}}>습도</p> */}
                        <img src={nowhum} alt="humid" className='infoIcon2'></img>
                        <p className='font-PreSB text-green-700 infotext2 ' style={{marginTop:'0.15rem'}}>{plant.soilMoisture}%</p>
                    </div>
                    <div className='infonowcondition'>
                        {/* <p className='font-PreSB text-green-700 ' style={{marginTop:'0.15rem'}}>조도</p> */}
                        <img src={nowsun} alt="lux" className='infoIcon2'></img>
                        <p className='font-PreSB text-green-700 infotext2' style={{marginTop:'0.15rem'}}>{plant.sun}(lux)</p>
                    </div>
                </div>
            </div>

          {/* 선호 환경 */}
        
          <div>
            {/* 저장된 식물 ID를 토대로 디테일 구현 */}
            <div>
                <p className='font-PreR infonowtitle'>식물이 원하는 환경이에요</p>
                <div className="infobox">
                    <div className='infocondition'>
                        <img src={temp} alt="temp" className='infoIcon'></img>
                        <p className='font-PreM infotext' style={{marginLeft:'0.4rem',marginTop:'0.15rem'}}>온도</p>
                        <p className='font-PreM infotext' style={{marginLeft:'5rem',marginTop:'0.15rem'}}>{plantdetail.temperatureMin}°C~{plantdetail.temperatureMax}°C</p>
                    </div>
                    <div className='infocondition'>
                        <img src={humid} alt="humid" className='infoIcon'></img>
                        <p className='font-PreM infotext' style={{marginLeft:'0.4rem',marginTop:'0.15rem'}}>습도</p>
                        <p className='font-PreM infotext' style={{marginLeft:'5rem',marginTop:'0.15rem'}}>{plantdetail.humidityMin}%~{plantdetail.humidityMax}%</p>
                    </div>
                    <div className='infocondition'>
                        <img src={lux} alt="lux" className='infoIcon'></img>
                        <p className='font-PreM infotext' style={{marginLeft:'0.4rem',marginTop:'0.15rem'}}>조도</p>
                        <p className='font-PreM infotext' style={{marginLeft:'4.5rem',marginTop:'0.15rem'}}>{plantdetail.lightMin}~{plantdetail.lightMax}(lux)</p>
                    </div>
                </div>
            </div>

          </div>
          {/* 기능성 정보 */}
          <div>

          </div>
        </div>
      </div>
      <BottomNav/>
    </div>
  )
}

export default PlantoDetail