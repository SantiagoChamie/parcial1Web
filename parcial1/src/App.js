import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/home';
import Profile from './components/profile';

function App() {
  return (
    <div className={"App"} style={{ overflowX: 'hidden' }}>

      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
              <h1>Not Found</h1>
            </div>
          } />

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
