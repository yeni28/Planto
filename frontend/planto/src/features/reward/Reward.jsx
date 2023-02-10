import React, { useEffect } from 'react'
import BottomNav from '../nav/BottomNav'
import './Reward.css'
import { HOST } from '../login/OAuth'
import axios from 'axios'


function Reward() {
  useEffect(() => {
    const token = window.localStorage.getItem('token');

    axios({
        method: "get",
        url: `${HOST}/api/v1/achievement`,
        headers: {
          Authorization: token
        }
    }).then(function (response) {
        console.log(response)
    });
    
  }, [])

  const user = {
    name:window.localStorage.getItem('username'),
    profileImageUrl:window.localStorage.getItem('profileImageUrl')
  }
  return (
    <div style={{backgroundColor:'#FAF8F8', padding:'1.2rem'}}>
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
          
          <img src={user.profileImageUrl} alt="사용자 이미지" />
        </div>

      </div>
      <BottomNav/>
    </div>
  )
}

export default Reward
