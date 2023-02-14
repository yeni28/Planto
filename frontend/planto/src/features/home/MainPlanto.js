import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import BottomNav from '../nav/BottomNav';
import Example from '../../assets/background/backimg.png'

//  api주소
import { HOST } from "../login/OAuth"
import axios from 'axios';

import godetail from '../../assets/icons/godetail.png'



function MainPlanto({plantos}) {
  const  userName = window.localStorage.getItem('username')
  const  serialnumber = window.localStorage.getItem('potSerial')
  const navigate = useNavigate();

  
  // plant 받아오기
  const [plant, setPlant] = useState([]);
  const [character, setCharacter] = useState("");
  const [plantoAd, setPlantoAd] = useState("");
  const [tips ,setTips] = useState('');
  const [plantDict, setPlantDict] = useState("");
  // 식물 데이터 받아오기!
  const [plantdetail, setPlantDetail] = useState([]);
  
  const token = window.localStorage.getItem('token');

  // DB에 저장된 데이터 받아오기
  useEffect(() => {
    // 실시간 데이터 받아오기
    function getPlantData(){
      
      axios({
          method: "get",
          //
          url: `${HOST}/api/v1/plant/2`,
          headers: {
            Authorization: token,
          },
      }).then((response) => {
          setPlant(response.data)
          setPlantDict(response.data.plant_dict_plant_dict_id)
          
          
      }).catch((e) =>{
        console.log(e)
      });
    }

  
    getPlantData();
}, [token])

useEffect(() => {
  axios({
    method: "get",
    url: `${HOST}/api/v1/dict/detail/${plantDict}`,
    headers: {
      Authorization: token,
    },
}).then(function (response) {
    setPlantDetail(response.data)
});

}, [plantDict, token])

// 호감도
const like = plant?.liking

const plantoList = plantos.map((planto)=>{
  return(
    <div key={planto?.potId}>
    
    <div className="PlantoCard">
      {/* 이미지 */}
      <div style={{
      width:'5rem',
      height:'5rem',
      borderRadius:'15rem',
      backgroundSize:'cover',
      backgroundPosition:'center',
      backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/planto-e2910.appspot.com/o/${planto.plant?.imagePath}?alt=media")`
      }}>
      </div>
      {/* 텍스트 */}
      <div style={{width:'10rem',marginLeft:'.3rem'}}>
        <div className='font-PreSB'> {planto.plant?.name}</div>
        <div className=' font-PreSB'> {planto.plant.plantDict?.name} </div>
        <div> 
          {planto.plant?.liking}%
        </div>
      </div>
      {/* 버튼 */}
      <Link to={`/main/planto/${planto?.potId}`} state={{plantId:planto.plant?.plantId}}>
        <div>    
           <img src={godetail} style={{width:'7rem'}}></img>
        </div>
      </Link>
    </div>
  </div>

  )
})

  return (
    <div>
      {plantoList}
      <button className="main_add_btn font-PreSB " onClick={() => {navigate("/enrollment");}}> + </button>   
    </div>
  )
}

export default MainPlanto
