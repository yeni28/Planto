import React from 'react'
import { Navigate } from 'react-router-dom';
import backImg from "../../assets/background/backimg.png"


function MainNone() {
  return (
    <div>
    <div className="main_back_img">
    <img src={backImg}  alt="background"></img>
    </div>
    
    <button className="main_btn font-PreSB " onClick={() => {Navigate("/enrollment");}}> + 플랜토 등록하기! </button>
</div>
  )
}

export default MainNone