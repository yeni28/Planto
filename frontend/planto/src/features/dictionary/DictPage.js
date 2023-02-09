import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import BottomNav from '../nav/BottomNav';
// import PlantData from '../../data/PlantData'
import "./DictPage.css"
import Dark from "../../assets/icons/darkhouse.png"
import LowWater from "../../assets/icons/water.png"
import Easy from "../../assets/icons/easy.png"
import Hard from "../../assets/icons/hard.png"
import { HOST } from '../login/OAuth'

function DictPage() {
  const navigate = useNavigate();
  const [plants, setPlants] = useState([]);

  useEffect(() => {
      axios({
          method: "get",
          url: `${HOST}/api/v1/dict`,
      }).then(function (response) {
          
          setPlants(response.data)
      });
      
  }, [])



  return (
    <div className='dictionary'>


        <div className='searchBar'
        style={{
          // position:'fixed'
        }}> 식물명 검색하기 </div>
        <div>
        {/* 식물 해시태그 */}
        <div className='plant_category'>
          <div className='category' onClick={() => {navigate("/dictionary/darkhouse");}}>
            <img src={Dark} alt="" className='dictIcon'></img>
            <p className='font-PreM text-stone-700 tag_text'> #어두운 집</p>
          </div>
          <div className='category' onClick={() => {navigate("/dictionary/lesswater");}}>
            <img src={LowWater} alt="" className='dictIcon'></img>
            <p className='font-PreM text-stone-700 tag_text'> #물 조금만</p>
          </div>
          <div className='category' onClick={() => {navigate("/dictionary/beginner");}}>
            <img src={Easy} alt="" className='dictIcon'></img>
            <p className='font-PreM text-stone-700 tag_text'> #기르기 쉬운</p>
          </div>
          <div className='category' onClick={() => {navigate("/dictionary/expert");}}>
            <img src={Hard} alt="" className='dictIcon'></img>
            <p className='font-PreM text-stone-700 tag_text'> #까다로운</p>
          </div>
          
        </div>


      </div>
      {/* 식물 찾기 */}
      <p className="font-PreM"
      style={{
        marginLeft:'0.4rem', marginBottom:'1rem',color:'#329e5d',
      }}> 식물 찾기</p>
      <div>{plants.map(plant=>(<Plant plant={plant} key={plant.plantDictId}/>))}
      </div>

      <div style={{height:'3rem'}}>

      </div>
      <BottomNav/>

    
  </div>
)
}

function Plant({plant}){
  
  const arr = plant.name.split("(")
  const plantName = arr[0]
  const plantNameSecond = arr[1] !== undefined ? arr[1].slice(0,-1):""
  


  return (
    <div>
      <Link to={`/dictionary/${plant.plantDictId}`} state={{plant:plant, plantName:plantName, plantNameSecond:plantNameSecond}}>
        <div className='plant_card' style={{marginBottom:'1.2rem',}}>
          <div className="plant_image"> 
            <div className="img_circle" style={{
            backgroundImage: `url("https://www.nongsaro.go.kr/cms_contents/301/${plant.imagePath}")`
            }}>
            </div>
          </div>
          <div className='plant_text'>
            <p className='font-PreL plant_name_eng'>{plant.plantEng}</p>
            <p className='font-PreM plant_name'>{plantName}</p>  
            <p className='font-PreM text-stone-400 plant_name_second'>{plantNameSecond}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}



export default DictPage