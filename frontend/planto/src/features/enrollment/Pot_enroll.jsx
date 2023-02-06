import './pot_enroll.css';
import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import BottomNav from '../../features/nav/BottomNav';

function Pot_enroll() {
  const [data, setData] = useState('No result');

  const previewStyle = {
    height:825,
    width: 1100
  };

  return (
    <div id='Pot_enroll'>
      <div>
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              setData(result?.text);
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
      
      <p>{data}</p>
        <BottomNav />
      
    </div>
  );
}

export default Pot_enroll