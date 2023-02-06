import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import BottomNav from '../nav/BottomNav'
import "./Beginner.css"
// 이미지
import TopRecommand from './TopRecommand';
function Beginner() {
  
  const [bplants, setBPlants] =  useState([]);
  const reconame = 'Beginner'
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
      <TopRecommand reconame = {reconame}/>
      <div className="RecommandPlant">
      <div style={{marginTop:"1.2rem"}}>{bplants.map(bplant=>(<BPlant bplant={bplant} key={bplant.plantDictId}/>))}</div>
      </div>
      <BottomNav/>
    </div>
  )
}

function BPlant({bplant}){
  const arr = bplant.name.split("(")
  const bplantName = arr[0]
  const bplantNameSecond = arr[1] !== undefined ? arr[1].slice(0,-1):""
  


  return (
    <div>
      <Link to={`/dictionary/${bplant.plantDictId}`} state={{plant:bplant, plantName:bplantName, plantNameSecond:bplantNameSecond}}>
        <div className='plant_line' style={{marginBottom:'1.2rem',}}>
          <div className="plant_image"> 
            <div className="img_square" style={{
            backgroundImage: `url("https://www.nongsaro.go.kr/cms_contents/301/${bplant.imagePath}")`
            }}>
            </div>
          </div>
          <div className='plant_text' style={{marginLeft:'0.5rem',marginTop:'0.8rem'}}>
            <p className='font-PreL plant_name' style={{marginBottom:'-0.2rem'}}>{bplantName}</p>  
            <p className='font-PreM plant_name_second' style={{marginBottom:'-0.2rem',color:'#3BD476'}}>{bplantNameSecond}</p>
            <p className='font-PreL plant_name_eng'>{bplant.plantEng}</p>
          </div>
        </div>
      </Link>
    </div>
  )



}

export default Beginner