import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './Homepage'
import Header from './Header'
import Country from './Country'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path="/countries/:name" element=
        {<Country />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
