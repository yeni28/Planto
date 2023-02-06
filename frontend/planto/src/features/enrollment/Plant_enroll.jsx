import React,{useState} from 'react'
import BottomNav from '../nav/BottomNav'
import './Plant_enroll.css'
import AddPic from '../../assets/icons/addpic.png'

function Plant_enroll() {
  const [plantnickname, setPlantNickName] = useState('');

  return (
    <div>
      <div>
        <span> 나의 식물 등록 </span>
      </div>
      {/* 사진등록 */}
      <div>
        <img src={AddPic} alt="add Picture" style={{width:'20rem', margin:'auto'}}></img>
      </div>
      {/* 인풋 */}
      <div>

        <div>
          <input placeholder="식물명"className="plantInput" type="text" value={plantnickname} onChange={(e)=>{
            setPlantNickName(e.target.value)
          }} />
        </div>
        <div>
          <input placeholder="이름"className="plantInput" type="text" value={plantnickname} onChange={(e)=>{
            setPlantNickName(e.target.value)
          }} />
        </div>
        <div>
          <input placeholder="첫 만남"className="plantInput" type="text" value={plantnickname} onChange={(e)=>{
            setPlantNickName(e.target.value)
          }} />
        </div>

      </div>
      <BottomNav/>
    </div>
  )
}

export default Plant_enroll