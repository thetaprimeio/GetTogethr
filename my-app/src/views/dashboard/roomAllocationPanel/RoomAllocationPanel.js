import React from 'react';

import roomData from './RoomData';

const RoomAllocationPanel = () => (
    <div>
        <h2>Room Allocation</h2>
        {roomData.map((entry) => (
            <div>
                <h3>{entry.name}</h3>
                <h5>
                    {entry.users.map((item) =>
                        <p>- {item}</p>
                    )}
                </h5>
            </div>
        ))}
    </div>
);

export default RoomAllocationPanel;
