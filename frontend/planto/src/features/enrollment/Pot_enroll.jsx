import './pot_enroll.css';
import React from 'react';
import { QrReader } from 'react-qr-reader';
import { useNavigate } from "react-router-dom";
import BottomNav from '../../features/nav/BottomNav';

function Pot_enroll() {
  const navigate = useNavigate();

  const PARAMS = new URL(document.location).searchParams;
  const SECRET_KEY = PARAMS.get('serialNo');

  const previewStyle = {
    height:825,
    width: 1100
  };

  if (SECRET_KEY) {
    alert("화분을 등록하시겠습니까?")
    console.log(SECRET_KEY)
  }
  

  return (
    <div id='Pot_enroll'>
      <div>
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              navigate(result?.text)
            }

            if (!!error) {
              console.info(error);
            }
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