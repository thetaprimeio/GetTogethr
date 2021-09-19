import React from 'react';
import { Link } from "react-router-dom";

import './Dashboard.css';

import CustomizationPanel from './customizationPanel/CustomizationPanel';
import RoomAllocationPanel from './roomAllocationPanel/RoomAllocationPanel';
import PlatformsPanel from './platformsPanel/PlatformsPanel';

class Dashboard extends React.Component{
    constructor () {
        super()
        this.state = {
          isHidden: true
        }
      }
    toggleHidden () {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    render(){ 
        return(
            <div class="background-screen">
                <div class="center-screen">
                    <button class="hideButton" onClick={this.toggleHidden.bind(this)} >Click</button>
                    <h1>GetTogethr - Admin Dashboard</h1>
                    <Link 
                        className="btn btn-pink"
                        role="button"
                        to="/form"
                        > 
                        Interest Form
                    </Link>
                </div>

                <div class="flex-container">
                    <CustomizationPanel class="flex-item"/>
                    <PlatformsPanel class="flex-item"/>
                </div>

                {!this.state.isHidden && <RoomAllocationPanel />}
            </div>
        );
    }
}

export default Dashboard;
