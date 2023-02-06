import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './features/home/App';
import Main from './features/home/Main';
import Dict from './features/dictionary/DictPage';
import DarkHouse from './features/recommand/DarkHouse';
import LessWater from './features/recommand/LessWater';
import Beginner from './features/recommand/Beginner';
import Expert from './features/recommand/Expert';
import Enroll from './features/enrollment/Pot_enroll';
import Reward from './features/reward/reward';
import PlantData from './data/PlantData';
import PlantDetail from './features/dictionary/PlantDetail';
import KakaoLogin from './features/login/KakaoLogin';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}></Route>
        <Route path="/main/none" element={<Main/>}></Route>
        <Route path="/dictionary" element={<Dict/>}></Route>
        <Route path="/enrollment" element={<Enroll/>}></Route>
        <Route path="/reward" element={<Reward/>}></Route>
        <Route path="/plantdata" element={<PlantData/>}></Route>
        <Route path="/dictionary/:plantId" element={<PlantDetail/>}></Route>
        <Route path="/dictionary/darkhouse" element={<DarkHouse/>}></Route>
        <Route path="/dictionary/lesswater" element={<LessWater/>}></Route>
        <Route path="/dictionary/beginner" element={<Beginner/>}></Route>
        <Route path="/dictionary/expert" element={<Expert/>}></Route>
        <Route path="/kakaoLogin" element={<KakaoLogin/>}></Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);
