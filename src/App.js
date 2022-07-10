import './App.css';
import AddRoom from './components/smarthouse/AddRoom';
//import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import {Link,  Route, Routes } from 'react-router-dom';
import Home from './components/smarthouse/Home';
import Room from './components/smarthouse/Room';
import Sudoku from './components/sudoku/Sudoku'
import React, { useState } from 'react';


function App() {
  const [roomsData, setRoomsData] = useState([]);

  return (
    <>
      <nav className='navbar'>
        <Link to={`/smarthouse`}>Smart House</Link>
        <Link to={`/sudoku`} > Sudoku</Link>
        {/* <Link >Market Shop</Link> */}
      </nav>
      <Routes>
        <Route defoult exact path='/smarthouse' element={<Home roomsData={roomsData} />} />
        <Route exact path='/smarthouse/addRoom' element={<AddRoom roomsData={roomsData} setRoomsData={setRoomsData} />} />
        <Route exact path='/smarthouse/room' element={<Room roomsData={roomsData} setRoomsData={setRoomsData} />} >
          <Route exact path=':data' element={<Room />} />
        </Route>
        <Route exact path='/sudoku' element={<Sudoku />} />
        <Route path="*" element={<main style={{ padding: "1rem" }}><h3>How did you get here?<br /><br /> never mind</h3><h3>There's nothing here<br /><br /><Link to={`/smarthouse`} style={{ textShadow: `1px 1px 1px gray` }}> go home!</Link></h3></main>} />
      </Routes>
    </>
  );
}
export default App;
