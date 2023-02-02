import React from 'react'
import BottomNav from '../nav/BottomNav'
import './reward.css'


function reward() {
  const user = {
    name:'황채연'
  }
  return (
    <div>
      {/* 업적 상단 블록 */}
      {/* 상위 정보 */}
      <div className='reward_top_wrapped'>
        <div className='reward_text'>
          <div className="Myplanto_title">
              <span className="font-PreR"> My</span>
              <span className="font-PreEB"> 업적 </span>
          </div>
          <div className="Myplanto_name">
              <span className="font-PreR"> 반가워요,</span> 
              <span className="font-PreEB"> {user.name}</span><span className="font-PreR">님!</span>
          </div>
          <div>
            <p className='font-PreR reward_message'> 업적을 달성해서 
            <br></br>컬렉션을 완성해보세요!</p>
          </div>

        </div>

        <div className='reward_img'>
          
          <img src="https://i.pinimg.com/564x/93/ff/82/93ff82add0a65ce3b24f2aa0b639cb50.jpg" alt=""
         />
        </div>
      {/* 업적 로그 */}
      <div>
        
      </div>
      {/* 업적 하단 블록 */}

      </div>
      <BottomNav/>
    </div>
  )
}

export default reward