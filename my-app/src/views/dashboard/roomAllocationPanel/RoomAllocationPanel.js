import React from 'react';

import './RoomAllocationPanel.css';
//import './RoomAllocationPanel2.css';

import roomData from './RoomData';

const RoomAllocationPanel = () => (
    <div>
        <hr/>
        <h2>Room Allocation</h2>
        <div class="flex-container">
        {roomData.map((entry) => (
            <div class="card">
                <h3 class="room-title">{entry.name}</h3>
                <h5 class="room-users">
                    {entry.users.map((item) =>
                        <p>- {item}</p>
                    )}
                </h5>
            </div>
        ))}
        </div>
    </div>
);

export default RoomAllocationPanel;
