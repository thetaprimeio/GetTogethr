import React from 'react';
import { Link } from "react-router-dom";

import './Dashboard.css';

import CustomizationPanel from './customizationPanel/CustomizationPanel';
import RoomAllocationPanel from './roomAllocationPanel/RoomAllocationPanel';
import PlatformsPanel from './platformsPanel/PlatformsPanel';

import GetTogethrLogo from './../../images/GetTogthrLogo.png';

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
                {/* <hr> */}
                <div class="flex-container">
                    <CustomizationPanel class="flex-item"/>
                    {/* <img class="flex-item" scr={GetTogethrLogo}></img> */}
                    <PlatformsPanel class="flex-item"/>
                </div>
                {/* <dir class="roomContainer" id="roomtContainer">
                    <hr/>
                    <RoomAllocationPanel/>
                </dir> */}
                
                {!this.state.isHidden && <RoomAllocationPanel />}
            </div>
        );
    }
}

export default Dashboard;
