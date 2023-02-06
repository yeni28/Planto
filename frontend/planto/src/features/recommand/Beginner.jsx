import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import BottomNav from '../nav/BottomNav'
import "./Beginner.css"
// 이미지
import easyBig from '../../assets/icons/easybig.png'
function Beginner() {
  
  const [bplants, setBPlants] =  useState([]);

  useEffect(() => {
    axios({
        method: "get",
        url: "http://13.125.75.241/api/v1/dict/beginner",
    }).then(function (response) {
        setBPlants(response.data)
    });
    
}, [])

  return (
    <div>
      <div>
        <div className='beginnerBack'>
          <img src={easyBig} alt="Easy Plant" style={{width:'10rem',position:'absolute',left:'15.2rem',top:'1.4rem',overflow:'hidden'}}/>
          <p className=' font-PreSB recommandText'>초보 식물 집사가 <br/> 기르기 좋은 식물 추천</p>
        </div>
      
      </div>
      <div >{bplants.map(bplant=>(<BPlant bplant={bplant} key={bplant.plantDictId}/>))}</div>
      <BottomNav/>
    </div>
  )
}

function BPlant({bplant}){
  const arr = bplant.name.split("(")
  const bplantName = arr[0]
  const bplantNameSecond = arr[1] !== undefined ? arr[1].slice(0,-1):""
  
  
  return (
    <div >
      <Link to={`/dictionary/${bplant.bplantDictId}`} state={{bplant:bplant, bplantName:bplantName, bplantNameSecond:bplantNameSecond}}>
        <div className='plant_card' style={{marginBottom:'1.2rem',}}>
          <div className="plant_image"> 
            <div className="img_circle" style={{
            backgroundImage: `url("https://www.nongsaro.go.kr/cms_contents/301/${bplant.imagePath}")`
            }}>
            </div>
          </div>
          <div className='plant_text'>
            <p className='font-PreL plant_name_eng'>{bplant.plantEng}</p>
            <p className='font-PreM plant_name'>{bplantName}</p>  
            <p className='font-PreM text-stone-400 plant_name_second'>{bplantNameSecond}</p>
          </div>
        </div>
      </Link>
    </div>
  )



}

export default Beginner