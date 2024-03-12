import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './components/login';
import Pag1 from './components/pagina1';
import Pag2 from './components/pagina2';
function App() {
  return (
    <div className={"App"} style={{ overflowX: 'hidden' }}>

      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Pag1 />} />
          <Route path="/profile" element={<Pag2 />} />
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
