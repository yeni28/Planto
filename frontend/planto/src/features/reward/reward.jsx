import React from 'react'
import BottomNav from '../nav/BottomNav'
import './reward.css'


function reward() {
  const user = {
    name:'황채연'
  }
  return (
    <div>
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
            <span> 업적을 달성해서 <br></br> 컬렉션을 완성해보세요!</span>
          </div>
        </div>

        <div className='reward_img'>
          
          <img src="https://i.pinimg.com/736x/a3/47/be/a347be2590c1e6266342f3bfbb2f9e06.jpg" alt=""
          className='profile_img' />
        </div>

      </div>
      <BottomNav/>
    </div>
  )
}

export default reward