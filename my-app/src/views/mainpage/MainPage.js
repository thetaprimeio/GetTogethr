import React from 'react';
import { Link } from "react-router-dom";

import RoomData from '../dashboard/roomAllocationPanel/RoomData';

const loadRoomData = () => (
    RoomData[0].users.push("new name")
);

function MainPage(){
    //loadRoomData()
    return(
        <div>
            <h1>Main Page</h1>
            <Link 
                className="btn btn-pink"
                role="button"
                to="/form"
                > 
                Interest Form
            </Link>
            <br/>
            <Link 
                className="btn btn-pink"
                role="button"
                to="/dashboard"
                > 
                Admin Dashboard
            </Link>
        </div>
    );
}

export default MainPage;
