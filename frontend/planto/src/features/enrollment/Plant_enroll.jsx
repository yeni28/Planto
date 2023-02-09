import React,{useEffect, useState} from 'react'
import { useNavigate , useLocation} from 'react-router-dom'
// 달력
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from 'date-fns/esm/locale';


// import
import BottomNav from '../nav/BottomNav'
import './Plant_enroll.css'
// 이미지
import AddPic from '../../assets/icons/addpic.png'
import BackG from '../../assets/icons/back_g.png'

const Example = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
    // 한국어 변환 
    locale={ko}
    dateFormat="yyyy년 MM월 dd일"
    selected={startDate} onChange={date => setStartDate(date)} />
  );
};

function Plant_enroll() {
  const [plantnickname, setPlantNickName] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const plantname = location.state !== null ? location.state.plantName : "";

  const [isplantname, setIsPlantName] = useState('');

  useEffect(() => {
    setIsPlantName(plantname)
  }, [plantname]) 
  
  // 검색 창으로 이동
  const goToSearch = () =>{
    navigate("/enrollment/plant/search")
  }
  console.log({plantnickname})
  // 인풋 값 전달
  
  



  return (
    <div style={{padding:'1rem' }}>
      {/* 뒤로가기 */}
      <div>
        <button onClick={()=>navigate(-1)}style={{position:'fixed',top:'0.3%'}}>
          <img src={BackG} alt="back_green" style={{width:"4rem"}} />
        </button>
      </div>
      <div className='EnrolltitleBox'>
        <span className='font-PreSB enrollTitle'> 나의 식물 등록 </span>
      </div>
      {/* 사진등록 */}
      <div>
        <img src={AddPic} alt="add Picture" style={{width:'15rem', margin:'auto'}}></img>
      </div>
      {/* 인풋 */}
      <div>

        <div onClick={() => goToSearch()}>
          <p className='font-PreL plantInputTitle'>식물 종류</p>
          <div className="plantInputLine">
            <div className='font-PreM' style={{ marginLeft:'1rem',fontSize:'1rem' ,marginTop:'0.5rem'}}>
            <div> { plantname !== "" ?plantname : <div className='font-PreL text-stone-700'> 🔍 내 식물 찾기 </div> } </div>
            </div>
          </div>
        </div>

        <div className='inputbox'>
          <p className='font-PreL plantInputTitle'> 이름 </p>
          <div className="plantInputLine">
            <input className="plantInput" type="text"  maxLength='10' value={plantnickname} 
            onChange={(e)=>{
              setPlantNickName(e.target.value)
            }} />
          </div>
        </div>

        <div className='inputbox'> 
          <div>
          <p className='font-PreL plantInputTitle'> 첫 만남 </p>
          <div className="plantInputLine" style={{marginTop:'0.5rem', paddingTop:'0.2rem'}}>
            <Example /> 
          </div>
          </div>

        </div>
        {/* 등록버튼 */}
        {/* 등록하기 클릭하면! 백으로 데이터 보내주기 => DB저장 */}
        <button className='font-PreM enrollBtn'> 등록하기 </button>
      </div>

      <BottomNav/>
    </div>
  )
}

export default Plant_enroll