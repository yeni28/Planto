import './main.css';
import backImg from "../../assets/background/backimg.png"
import BottomNav from '../nav/BottomNav';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import {HOST} from "../login/OAuth";
// import { atom } from 'recoil';
// import { recoilPersist } from 'recoil-persist';



function Main(){
    const navigate = useNavigate();

    const [userdata, setUserdata] = useState();

    //  username 받아오기 구현
    
    useEffect(() => {
        const token = window.localStorage.getItem('token');
        
        try {
          axios.get(`${HOST}/api/v1/user/oauth/username`, {
            headers: {
              Authorization: token,
            
            },
          }
          ).then((res) => {
            setUserdata(res.data)
            window.localStorage.setItem("username",res.data.name)
            window.localStorage.setItem("profileImageUrl",res.data.profileImageUrl)
          });
          
        } 
        catch (e) {
          console.error(e);
        }
        }, [])



    return(
        <div>
            <div className="Myplanto_title">
                <span className="font-PreR"> My</span>
                <span className="font-PreEB"> Planto </span>
            </div>
            <div className="Myplanto_name">
                <span className="font-PreR"> 반가워요,</span> 
                <span className="font-PreEB">{userdata ? userdata.name : null}</span><span className="font-PreR">님!</span>
            </div>
            <div>
                <div className="main_back_img">
                <img src={backImg}  alt="background"></img>
                </div>
                
                <button className="main_btn font-PreSB " onClick={() => {navigate("/enrollment");}}> + 플랜토 등록하기! </button>
            </div>

            <BottomNav/>

        </div>
    );

}

export default Main;