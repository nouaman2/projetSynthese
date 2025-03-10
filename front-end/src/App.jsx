import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Reservation from './components/Reservation';
function App() {
  return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/flights' element={<Reservation/>}/>
        </Routes>
      </Router>
  )
}

export default App