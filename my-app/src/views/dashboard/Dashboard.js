import React from 'react';
import { Link } from "react-router-dom";

import CustomizationPanel from './customizationPanel/CustomizationPanel';
import RoomAllocationPanel from './roomAllocationPanel/RoomAllocationPanel';
import PlatformsPanel from './platformsPanel/PlatformsPanel';

function Dashboard(){

    return(
        <div>
            <h1>Admin Dashboard</h1>
            <Link 
            className="btn btn-pink"
            role="button"
            to="/"
            > 
            Main Page
        </Link>

        <CustomizationPanel />
        <RoomAllocationPanel />
        <PlatformsPanel />

        </div>
    );
}

export default Dashboard;
