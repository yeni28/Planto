import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import BottomNav from '../nav/BottomNav';
import Example from '../../assets/background/backimg.png'
function MainPlanto() {
  const  userName = window.localStorage.getItem('username')
  const  serialnumber = window.localStorage.getItem('potSerial')
  const navigate = useNavigate();



  return (
    <div>
            <div className="Myplanto_title">
                <span className="font-PreR"> My</span>
                <span className="font-PreEB"> Planto </span>
            </div>
            <div className="Myplanto_name">
                <span className="font-PreR"> 반가워요,</span> 
                <span className="font-PreEB">{userName ? userName: null}</span><span className="font-PreR">님!</span>
            </div>
            <div>
              <div className="PlantoCard">
                {/* 이미지 */}
                <div className="img_circle" style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1528476625962-40d0763c921f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80")`
            }}>
                </div>
                {/* 텍스트 */}
                <div>
                  <p>산세베리아</p>
                  <p>동글 뾰족이</p>
                  <div> 
                    20% 
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