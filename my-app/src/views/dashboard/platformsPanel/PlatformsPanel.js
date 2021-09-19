import React from 'react';

import zoomLogo from '../../../images/zoom-logo.jpg';
import teamsLogo from '../../../images/teams-logo.jpg';
import webexLogo from '../../../images/webex-logo.jpg';
import meetLogo from '../../../images/meet-logo.png';


import './PlatformPanel.css';

const PlatformsPanel = () => (
    <div>
        <h2>Platforms</h2>
        <h5>Select the platform to generate the breakout rooms.</h5>
        <div class="logosBox">
            <ul>
                <li><img class="logo-images" src={zoomLogo} alt="Zoom" /></li>
                <li><img class="logo-images" src={teamsLogo} alt="Microsoft Teams" /></li>
                <li><img class="logo-images" src={webexLogo} alt="WebEx" /></li>
                <li><img class="logo-images" src={meetLogo} alt="Google Meet" /></li>
            </ul>
        </div>
    </div>
);

export default PlatformsPanel;
