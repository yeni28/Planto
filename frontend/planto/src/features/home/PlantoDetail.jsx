import React from 'react'
import BottomNav from '../nav/BottomNav';
// 이미지
import temp from '../../assets/icons/temp.png'
import humid from '../../assets/icons/humid.png'
import lux from '../../assets/icons/lux.png'

function PlantoDetail() {
  return (
    <div>
      <div>
        {/* 상단 */}
        <div>
          {/* 이미지 */}
          <div></div>
          <div> 식물 닉네임 </div>
          <div> 식물의 학명  </div>
        </div>
        {/* 호감도 표현 */}
        <div>

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
      <BottomNav/>
    </div>
  )
}

export default PlantoDetail