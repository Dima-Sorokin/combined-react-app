import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AddRoom(props) {
  const [roomType, setRoomType] = useState();
  const [roomName, setRoomName] = useState();
  const [roomColor, setRoomColor] = useState();
  const addRoom = () => {
    let newRoom = { roomName: roomName, roomType: roomType, roomColor: roomColor, appliance: [] };
    if (newRoom.roomColor && newRoom.roomType && newRoom.roomName.length < 5) {
      if (props.roomsData) {
        props.setRoomsData([...props.roomsData, newRoom]);
      }
      else {
        props.setRoomsData([newRoom]);
      }
    } else {
      alert('Wrong input.');

    }
  }

  return (
    <>
      <h1>Smart House</h1>
      <div className='newRoomForm'>
        <h1 style={{ textAlign: 'center' }}>New Room</h1>
        <input onInput={(x) => { setRoomName(x.target.value) }} type={'text'} name={'roomName'} minLength={2} maxLength={6} placeholder='Room Name' autoFocus autoComplete='on' required></input><br />
        <br />
        <label>Room Type:</label>
        <br />
        <input onInput={(x) => { setRoomType(x.target.value) }} type={'radio'} id={'bedroom1'} name={'roomType'} value={'Bedroom'} />
        <label>Bedroom</label>
        <br />
        <input onInput={(x) => { setRoomType(x.target.value) }} type={'radio'} id={'bathroom1'} name={'roomType'} value={'Bathroom'} />
        <label>Bathroom</label>
        <br />
        <input onInput={(x) => { setRoomType(x.target.value) }} type={'radio'} id={'Kitchen1'} name={'roomType'} value={'Kitchen'} />
        <label>Kitchen</label>
        <br />
        <br />
        <label>Room Color: </label>
        <input onInput={(x) => { setRoomColor(x.target.value) }} type={'color'} name={'roomColor'} value={'#f4ffbe'}></input>
        <br />
        <br />
        <Link className='formButton' to={'/smarthouse'}><button onClick={() => { addRoom() }}>Create</button></Link>
      </div >
    </>
  )
}
