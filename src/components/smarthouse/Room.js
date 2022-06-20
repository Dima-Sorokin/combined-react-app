import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ComponentStyle.css';

export default function Room(props) {
    const params = useParams(); // to use parameters from url.
    const [flag, setflag] = useState(false);
    const [applItem, setApllItem] = useState('Choose an applience...');
    const [power, setPower] = useState(false);

    const updateValues = () => {
        setflag(flag ? false : true);
    }

    const addAppliance = () => {
        let theRoom = props.roomsData.find(x => x.roomName === params.data);
        let nonSubjectRooms = props.roomsData.filter((item) => item.roomName !== theRoom.roomName);
        let subjectRoom = theRoom;
        if (subjectRoom.appliance) {
            let sameApplaences = subjectRoom.appliance.filter((x) => x.product === applItem.product);
            if (applItem.product === 'Stereo System' && sameApplaences.length > 1) {
                alert('Error, to many stereo systems');
            } else if (applItem.product === 'Water Heater' && subjectRoom.roomType !== 'Bathroom') {
                alert('Error, Water heater can be placed only in the bathroom')
            } else if (subjectRoom.appliance.length > 4) {
                alert('Error, to many applinces in the room');
            } else if (applItem.product === undefined) {
                alert('Error, No appliance were selected');
            } else {
                subjectRoom.appliance.push(applItem);
            }
        } else {
            subjectRoom.appliance = [applItem];
        }
        props.setRoomsData([...nonSubjectRooms, subjectRoom])
        setApllItem('Choose an applience...');
        setflag(flag ? false : true);
    }

    const powerOn = (room, subjectAppliance, applIndex) => {
        let copyRoomsData = props.roomsData;
        let subjectRoomIndex = copyRoomsData.indexOf(room);
        subjectAppliance.on = subjectAppliance.on ? false : true;
        copyRoomsData[subjectRoomIndex].appliance[applIndex] = subjectAppliance;
        props.setRoomsData(copyRoomsData);
        setPower(!power); // updates the UI.
    }

    const showRoom = () => {
        let item = props.roomsData.find(x => x.roomName === params.data);
        if (props.roomsData) {
            return (
                <div className='roomBigBox' style={{ border: '5px solid ' + item.roomColor }}  >
                    <h2>Room Name: {item.roomName}</h2>
                    <h2>Room Type: {item.roomType}</h2>
                    <div id='applianceList'>
                        {showAppliance(item)}
                    </div>
                    <br/>
                    <button onClick={() => { setflag(!flag) }} style={{ display: flag ? 'none' : 'block' }}>Add Product</button>
                    {selectAppliance()}
                </div>
            )
        } else {
            return null;
        }
    }

    const selectAppliance = () => {
        if (flag) {
            return (
                <div style={{ margin: 'auto' }}>
                    <select style={{ color: applItem === 'Choose an applience...' ? "gray" : "black" }} name='appliances' id='appl' defaultValue={'Choose an applience...'} autoFocus onChange={x => { setApllItem({ product: x.target.value, on: false }) }}>
                        <option value={'Choose an applience...'} disabled>Choose an applience...</option>
                        <option value={'Air Conditioner'}>Air Conditioner</option>
                        <option value={'Water Heater'}>Water Heater</option>
                        <option value={'Stereo System'}>Stereo System</option>
                        <option value={'Lamp'}>Lamp</option>
                    </select>
                    <br />
                    <br />
                    <button style={{ width: '100px', display: 'inline-block', margin: '5px' }} onClick={() => { updateValues() }}>Cancel</button>
                    <button style={{ width: '100px', display: 'inline-block', margin: '5px' }} onClick={() => { addAppliance() }} >Add</button>
                </div>
            )
        }
    }

    const showAppliance = (item) => {
        return (
            <>
            
                <h2>Room Appliance:</h2>
                <ol>
                    {
                        item.appliance.map((element, index) => {
                            return (
                                <li key={index.toString()} className='applLine' onClick={() => powerOn(item, element, index)} style={{ boxShadow: element.on ? ' 0px 0px 3px 3px yellow' : '0px 0px 0px 0px yellow' }}>{element.product} </li>
                            )
                        })
                    }
                </ol>
            </>
        )
    }
    return (
        <>
        <h1>Smart House</h1>
            {showRoom()}
        </>
    )
}
