import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Flights from './components/Flights';
import Contact from './components/Contact';
function App() {
  return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/flights' element={<Flights/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
  )
}

export default App