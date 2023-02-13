import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import BottomNav from '../nav/BottomNav';
import Example from '../../assets/background/backimg.png'

//  api주소
import { HOST } from "../login/OAuth"
import axios from 'axios';


function MainPlanto() {
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
const like = plant.liking

  return (
    <div>

            <div>
              <div className="PlantoCard">
            {/* 이미지 */}
                <div style={{
                width:'5rem',
                height:'5rem',
                borderRadius:'15rem',
                backgroundSize:'cover',
                backgroundPosition:'center',
                backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/planto-e2910.appspot.com/o/${plant.imagePath}?alt=media")`
                }}>
                </div>
                {/* 텍스트 */}
                <div>
                <div className='font-PreSB'> {plant.name}</div>
            <div className=' font-PreSB'> {plantdetail.name} </div>
                  <div> 
                    {like}%
                  </div>
                </div>
                {/* 버튼 */}
                <Link to={`/planto/${serialnumber}`}>
                  <div>    
                     디테일을 봐요
                  </div>
                </Link>
              </div>
              <button className="main_add_btn font-PreSB " onClick={() => {navigate("/enrollment");}}> + </button>
            </div>

            <BottomNav/>

        </div>
  )
}

export default MainPlanto