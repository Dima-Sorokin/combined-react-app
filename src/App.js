import './App.css';
import AddRoom from './components/AddRoom'
import { BrowserRouter as Router,Link,  Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Room from './components/Room';
import React, { useState } from 'react';


function App() {
  const [roomsData, setRoomsData] = useState([]);

  return (
    <>
    <h1>Smart House</h1>
        <Routes>
          <Route defoult exact path='/' element={<Home roomsData={roomsData}/>} />
          <Route exact path='addRoom' element={<AddRoom roomsData={roomsData} setRoomsData={setRoomsData}/>} />
          <Route exact path='room' element={<Room roomsData={roomsData} setRoomsData={setRoomsData}/>} >
            <Route exact path=':data' element={<Room />} />
          </Route>
          <Route path="*" element={<main style={{ padding: "1rem" }}><h3>How did you get here?<br /><br /> never mind</h3><h3>There's nothing here<br /><br /><Link to={`/`} style={{textShadow:`1px 1px 1px gray`}}> go home!</Link></h3></main>} />
        </Routes>
    </>
  );
}
export default App;
