import React, { useEffect, useState } from 'react'
import BottomNav from '../nav/BottomNav'
import './Reward.css'
import { HOST } from '../login/OAuth'
import axios from 'axios'
import lock from '../../assets/icons/lock.png'
import { useRef } from 'react'

function Reward() {
  const [achievements, setAchievements] = useState()
  const [text, setText] = useState()
  const [countAchievement, setCountAchievement] = useState(20)
  let remainAchievements = useRef([]);

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
      remainAchievements.current = []
      setAchievements(response.data)
      setText(response.data.slice(0, 2))
      setCountAchievement(response.data.length)

      for (let i = 0; i < 20 - response.data.length; i++){
        remainAchievements.current.push(i)
      }
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
      <div>
        {
          text ?
          text.map((item) => <Descriptions description={item.achievement.description} key={item.user_achievement_id}/>):
          null
        }
      </div>
      <div>
        {countAchievement}/20
      </div>
      <div className='achievement-frame'>
        {/* 보유한 업적 */}
          {
            achievements ?
            achievements.map((item) => <Achievement achievement={item.achievement} key={item.user_achievement_id}/>):
            null
          }
        {/* 보유하지 않은 업적 */}
          {
            remainAchievements.current.map((item, key) => <RemainAchievement key={key}/>)
          }
      </div>
      <BottomNav/>
    </div>
  )
}


function Achievement({achievement}){
  return(
    <span className='achievement-frame'>
      <img className='imgTag' src={`/achievements/${achievement.imageName}.png`} alt={achievement.imageName} />
    </span>
  );
}

function RemainAchievement(){
  return(
    <span className='achievement-frame'>
      <img className='imgTag' src={lock} alt="lock" />
    </span>
  );
}

function Descriptions({description}){
  return(
    <span>
      <h1>
        {description}
      </h1>
    </span>
  );
}

export default Reward;