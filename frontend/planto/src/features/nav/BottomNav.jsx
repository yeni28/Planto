import React from "react";
import './BottomNav.css';
import {Link} from 'react-router-dom';
import { NavLink } from "react-router-dom";

import planto from "../../assets/icons/leaf.png"
import sdict from "../../assets/icons/selected/book.png"
import dict from "../../assets/icons/book.png"
import mark from "../../assets/icons/mark.png"
import qr from "../../assets/icons/qr.png"
import qrsel from "../../assets/icons/selected/qr.png"
// 아이콘
import { RiLeafLine } from "react-icons/ri";


const BottomNav=()=>{


    return(

        <nav className="wrapper">
            <div className="navbox I1">
                <NavLink to="/main/none"  style={({isActive})=>({color: isActive ?'#5D9451':'#A4A4A4'})}>
                <img src={planto} className="navIcon" alt="planto">
                </img>
                <p className=" font-PreR">플랜토</p>
                </NavLink>
            </div>
            
            <div className="navbox">
                <NavLink to="/dictionary" style={({isActive})=>({color: isActive ?'#5D9451':'#A4A4A4'})}>
                <img src={dict}  className="navIcon"  alt="dictionary"></img>
                <p className=" font-PreR " >식물 사전</p>
                </NavLink>
            </div>
            
            <div className="navbox">
                <NavLink to="/reward" style={({isActive})=>({color: isActive ?'#5D9451':'#A4A4A4', })} >
                <img src={mark}  className="navIcon"  alt="reward"></img>
                <p className="font-PreR" >업적</p>
                </NavLink>
            </div>
            
            <div className="navbox" style={{marginLeft:'-0.5rem'}}>
                <NavLink to="/enrollment" style={({isActive})=>({color: isActive ?'#5D9451':'#A4A4A4'})}>
                <img src={qr}   className="navIcon"  alt="qrcode"></img>
                <p className="font-PreR text-gray-400" >등록</p>
                </NavLink>
            </div>


        </nav>
    )
}

export default BottomNav;
