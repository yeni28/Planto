import React from 'react'
import './TopRecommand.css'
import easyBig from '../../assets/icons/easybig.png'
import hardBig from '../../assets/icons/hardbig.png'


function TopRecommand({reconame}) {
    const now = reconame
  return (


    <div>
    {
    {
        Beginner :  <div className="toprecommand">
        <div className='beginnerBack'>
            <img src={easyBig} alt="Easy Plant" style={{width:'10rem',position:'absolute',left:'15.2rem',top:'1.4rem', overflow:'hidden',opacity:'0.5'}}/>
            <p className=' font-PreSB recommandText'>초보 식물 집사가 <br/> 기르기 좋은 식물 추천</p>
        </div>
    </div> ,
        Expert: <div className="toprecommand">
        <div className='ExpertBack'>
            <img src={hardBig} alt="Hard Plant" style={{width:'10rem',position:'absolute',left:'15.7rem', overflow:'hidden', opacity:'0.5'}}/>
            <p className=' font-PreSB recommandText'>경험 있는 식물 집사가 <br/> 기르기 좋은 식물 추천</p>
        </div>
    </div>,
        
    }[reconame]
    }
  
    </div>

  )
}

export default TopRecommand