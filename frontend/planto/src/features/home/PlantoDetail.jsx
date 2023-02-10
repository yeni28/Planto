import React, { useEffect, useState } from 'react'
import BottomNav from '../nav/BottomNav';
// 이미지
import temp from '../../assets/icons/temp.png'
import humid from '../../assets/icons/humid.png'
import lux from '../../assets/icons/lux.png'
import back from '../../assets/background/detailback.png'

//  api주소
import { HOST } from "../login/OAuth"
import axios from 'axios';

import './PlantoDetail.css'

function PlantoDetail() {
  
  // palnt ID 받아오기


  // plant 받아오기
    const [plant, setPlant] = useState([]);
    const token = window.localStorage.getItem('token');


    useEffect(() => {
      axios({
          method: "get",
          url: `${HOST}/api/v1/plant/3`,
          headers: {
            Authorization: token,
          },
      }).then((response) => {
          setPlant(response.data)
          console.log(response)
      }).catch((e) =>{
        console.log(e)
      });
      
  }, [])
  
  // 날짜 계산
  const dday = new Date(`${plant.createDate}`)
  const [days, setDays] = useState(0);

  useEffect(()=>{
    const today =  new Date();
    const gapNum = (dday - today)*-1;
    setDays(Math.ceil(gapNum/(1000*60*60*24)))
    
  },[dday])
  
  // setInterval(function(){

  //   const today = new Date().getTime();
  //   const gap = dday - today
  //   const day = Math.ceil(gap/(1000*60*60*24))
  //   document.
  // },1000)

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
            <div> {plant.plant} </div>
          </div>
          {/* 호감도 표현 */}
          <div className='likeboxwrap'>
              <div className='likebox'>
                <div className='font-PreM'
                style={{color:'white', textAlign:'center'}}
                > 🤍 우리 함께한지 {days}일 🤍</div>
              </div>
              <div>
                {/* 라인 */}
                
                <div className='font-PreM plantodetailsubtitle'>  
                플랜토와 얼마나 친해졌나요? </div>
                <div style={{position:'absolute', top:'5rem', left:'15rem'}}>
                <button className="likecheckbtn">+More</button>
                </div>
              </div>
              
          </div>
          {/*  현재 상태 */}
          <div>

          </div>
          {/* 선호 환경 */}
          <div>
            {/* 저장된 식물 ID를 토대로 디테일 구현 */}
            {/* <div>
                <p className='font-PreSB infoTitle'>최적 환경</p>
                <div className="infobox">
                    <div className='infocondition'>
                        <img src={temp} alt="temp" className='infoIcon'></img>
                        <p className='font-PreM infotext' style={{marginLeft:'0.4rem',marginTop:'0.15rem'}}>온도</p>
                        <p className='font-PreM infotext' style={{marginLeft:'5rem',marginTop:'0.15rem'}}>{plant.temperatureMin}°C~{plant.temperatureMax}°C</p>
                    </div>
                    <div className='infocondition'>
                        <img src={humid} alt="humid" className='infoIcon'></img>
                        <p className='font-PreM infotext' style={{marginLeft:'0.4rem',marginTop:'0.15rem'}}>습도</p>
                        <p className='font-PreM infotext' style={{marginLeft:'5rem',marginTop:'0.15rem'}}>{plant.humidityMin}%~{plant.humidityMax}%</p>
                    </div>
                    <div className='infocondition'>
                        <img src={lux} alt="lux" className='infoIcon'></img>
                        <p className='font-PreM infotext' style={{marginLeft:'0.4rem',marginTop:'0.15rem'}}>조도</p>
                        <p className='font-PreM infotext' style={{marginLeft:'4.5rem',marginTop:'0.15rem'}}>{plant.lightMin}~{plant.lightMax}(lux)</p>
                    </div>
                </div>
            </div> */}

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