import React from 'react';

import './RoomAllocationPanel.css';

import roomData from './RoomData';

const RoomAllocationPanel = () => (
    <div class="background-box">
        <h2 class="title">Room Allocation</h2>
        <div class="flex-container">
        {roomData.map((entry) => (
            <div class="card">
                <h3 class="room-title">{entry.name}</h3>
                <h5 class="room-users">
                    {entry.users.map((item) =>
                        <p class="room-title">{item}</p>
                    )}
                </h5>
            </div>
        ))}
        </div>
    </div>
);

export default RoomAllocationPanel;
