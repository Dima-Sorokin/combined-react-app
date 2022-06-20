import './ComponentStyle.css';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';



export default function Home(props) {
    const data = 'some random data';
    const viewRooms = () => {
        if (props.roomsData) {
            return (props.roomsData.map((room) => {
                return (
                    <Link to={'/smarthouse/room/' + room.roomName} key={data} >
                        <div className='roomBox' style={{ border: '4px solid '+ room.roomColor }}  >
                            <h2>{room.roomType} name {room.roomName}</h2>
                        </div>
                    </Link>
                )
            }))
        } else {
            return (<h2>NO rooms curently availble.</h2>);
        }
    }
    return (
        <div>
            <h1>Smart House</h1>
            <br />
            <br />
            {viewRooms()}
            <br /><br />
            <Link to={'/smarthouse/addRoom'} className='link' ><img className='plusImage' src={require('../smarthouse/pictures/icon-plus-15.jpg')} alt={'Plus'} /></Link>
            <Outlet />
            
        </div>
    )
}
