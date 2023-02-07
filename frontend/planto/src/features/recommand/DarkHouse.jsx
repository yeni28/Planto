import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import BottomNav from '../nav/BottomNav'
import MoveTopBtn from "../components/MoveTopBtn"
import "./DarkHouse.css"
// 이미지
import TopRecommand from './TopRecommand';

function Darkhouse() {
  const [dplants, setDPlants] =  useState([]);
  const reconame = 'DarkHouse'
  useEffect(() => {
    axios({
        method: "get",
        url: "http://13.125.75.241/api/v1/dict/dark",
    }).then(function (response) {
        setDPlants(response.data)
    });
    
}, [])

  return (
    <div>
      <TopRecommand reconame = {reconame}/>
      <div className="RecommandPlant">
      <div style={{marginTop:"1.2rem"}}>{dplants.map(dplant=>(<DPlant dplant={dplant} key={dplant.plantDictId}/>))}</div>
      </div>
      <div style={{height:'3rem'}}></div>
      <MoveTopBtn/>
      <BottomNav/>
    </div>
  )
}

function DPlant({dplant}){
  const arr = dplant.name.split("(")
  const dplantName = arr[0]
  const dplantNameSecond = arr[1] !== undefined ? arr[1].slice(0,-1):""
  


  return (
    <div>
      <Link to={`/dictionary/${dplant.plantDictId}`} state={{plant:dplant, plantName:dplantName, plantNameSecond:dplantNameSecond}}>
        <div className='plant_line' style={{marginBottom:'1.2rem',}}>
          <div className="plant_image"> 
            <div className="img_square" style={{
            backgroundImage: `url("https://www.nongsaro.go.kr/cms_contents/301/${dplant.imagePath}")`
            }}>
            </div>
          </div>
          <div className='plant_text' style={{marginLeft:'0.5rem',marginTop:'0.8rem'}}>
            <p className='font-PreL plant_name' style={{marginBottom:'-0.2rem'}}>{dplantName}</p>  
            <p className='font-PreM plant_name_second' style={{marginBottom:'-0.2rem',color:'#3BD476'}}>{dplantNameSecond}</p>
            <p className='font-PreL plant_name_eng'>{dplant.plantEng}</p>
          </div>
        </div>
      </Link>
    </div>
  )



}

export default Darkhouse