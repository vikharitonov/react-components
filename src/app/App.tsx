import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AlbumPage from '../pages/AlbumPage/AlbumPage';
import HomePage from '../pages/HomePage/HomePage';


import './App.css';

function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/album' element={<AlbumPage/>}/>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
