import React,{Component, useState}from 'react'
import {useLocation} from "react-router-dom"
// carousel 라이브러리
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// 이미지
import NotReady from "../../assets/icons/notready.png"

import './PlantCarousel.css'


const PlantCarousel= ()=> {
    // 식물 정보 불러오기
    const location = useLocation();
    const plant = location.state.plant;
    // carousel setting
    const settings = {
        adaptiveHeight: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true

      };

    // 더보기 버튼
    const [isMoreView, setIsMoreView] = useState(false);
    const onClickMoreViewBtn = () =>{
        setIsMoreView(!isMoreView);
    }; //클릭 시 상태 반전


  return (
    <div>
        <Slider {...settings}>
        <div>
           { plant.manageInfo !=="" 
            ?<div className='infobox2'>
                <div className='font-PreM'> 관리 방법 </div>
                <div className='infoDetail font-PreL'>{plant.manageInfo}</div>    
            </div>
            :
            <div className='infobox2'>
                <img src={NotReady} alt="Not Ready" style={{width:'3rem', margin:'auto',}} />
                <p className='font-PreL text-stone-700' style={{margin:'auto',textAlign:'center',marginTop:'0.5rem'}}> 관리 정보가 준비중 입니다. </p>
            </div>
            }
        </div>
        <div>
            { plant.functionInfo !== ""
            ?<div className='infobox2 '>
                <div className='font-PreM'> 기능 </div>
                <div isMoreView={isMoreView}>
                    <div className='infoDetail font-PreL'>{plant.functionInfo}</div>
                </div> 
                <div isMoreView={isMoreView}>
                    <p onClick={onClickMoreViewBtn}>{isMoreView ? "접기" : "더보기"}</p>
                </div>
            </div>
            :<div className='infobox2'>
                <img src={NotReady} alt="Not Ready" style={{width:'3rem', margin:'auto',}} />
                <p className='font-PreL text-stone-700' style={{margin:'auto',textAlign:'center',marginTop:'0.5rem'}}> 기능 정보가 준비중 입니다. </p>
             </div>
            }       
        </div>

        <div>
            { plant.adviceInfo !=="" 
            ?<div className='infobox2 '>
                <div className='font-PreM'> 조언 </div>
                <div className='infoDetail font-PreL'>{plant.adviceInfo}</div>    
            </div>
            :<div className='infobox2'>
                <img src={NotReady} alt="Not Ready" style={{width:'3rem', margin:'auto',}} />
                <p className='font-PreL text-stone-700' style={{margin:'auto',textAlign:'center',marginTop:'0.5rem'}}> 조언 정보가 준비중 입니다. </p>
            </div>
            }
        </div>
        </Slider>
    </div>
  )
}

export default PlantCarousel