import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './features/home/App';
import Main from './features/home/Main';
import Dict from './features/dictionary/dict_main';
import Enroll from './features/enrollment/Pot_enroll';
import Reward from './features/reward/reward';



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
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);
