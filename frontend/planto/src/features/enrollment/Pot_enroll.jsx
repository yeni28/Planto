import './pot_enroll.css';
import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import BottomNav from '../../features/nav/BottomNav';
import { AiFillLeftCircle } from "react-icons/ai";
import { BsArrowRightCircleFill } from "react-icons/bs";
import QrReaderImg from "../../assets/background/qr_scan_img.png"
import axios from 'axios'
import { HOST } from '../login/OAuth'
import { useNavigate } from 'react-router-dom';


function Pot_enroll() {
  const navigate = useNavigate();

  const [qrLoading, setQrLoading] = useState(false)
  const [serialNo, setSerialNo] = useState()

  const previewStyle = {
    height:825,
    width: 1100
  };

  function setPlant(){
    const backHost = `${HOST}/api/v1/pot`
    const token = window.localStorage.getItem('token');
    console.log(serialNo)
    axios({
      url: backHost,
      method: 'POST',
      data: {
        potId : serialNo
      },
      headers: {
        Authorization: token
      }
      }).then((res) => {
        navigate('/enrollment/plant', { state :{ serialNo : serialNo}})
        console.log(res)
    }).catch(e =>{
      console.log(e)
    })
  }


  return (
    <div id='Pot-enroll'>
      <div className='circle-frame' >
        <AiFillLeftCircle className='circle-btn'/>
      </div>
      <div className='fil-white'></div>

      <div>
        <img className='qr-reader-frame' src={QrReaderImg} alt="qr reader bg" />
      </div>

      {
        qrLoading &&
        <div className='info-frame'>
          <div className='info-wrapper'>
            <div className='info'>
              <span>
                <strong className='hTag'>나의 플랜토 정보 입력</strong>
                <br />
                <span className='pTag'>추가 정보를 입력해 플랜토를 시작합니다!</span>
              </span>
            </div>
            <div>
              <BsArrowRightCircleFill onClick={() => setPlant()} style={{marginLeft: "35%", width: "55px"}} className='circle-btn p-right'/>
            </div>
          </div>
        </div>
      }

      <div id='qr-reader'>
        <QrReader
          constraints={ {facingMode: 'environment'}}
          onResult={(result, error) => {
            if (!!result) {
              setSerialNo(result?.text)
              setQrLoading(true)
            }

            // if (!!error) {
            //   console.info(error);
            // }
          }}
          // videoStyle={previewStyle}
          videoContainerStyle={previewStyle}
          videoStyle={{ width: '100%' }}
        />
      </div>
      <BottomNav />
      
    </div>
  );
}

export default Pot_enroll