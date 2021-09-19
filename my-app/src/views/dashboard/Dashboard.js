import React from 'react';
import { Link } from "react-router-dom";

import './Dashboard.css';

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
            <div class="flex-container">
                <CustomizationPanel class="flex-item"/>
                <PlatformsPanel class="flex-item"/>
                <RoomAllocationPanel class="flex-item"/>
            </div>
        </div>
    );
}

export default Dashboard;
