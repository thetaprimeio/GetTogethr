import React from 'react';
import { Link } from "react-router-dom";

import LiteralForm from './LiteralForm';

function InterestForm(){

    return(
        <div>
            <center><h1 id="test">&nbsp;</h1></center>
            <center><h1>&nbsp;</h1></center>
            <center><h1>&nbsp;</h1></center>
            <center><h1>&nbsp;</h1></center>
            <center><h1>GetTogethr - Interest Form</h1></center>
            <center><Link 
                className="btn btn-pink"
                role="button"
                to="/dashboard"
                > 
                Admin Dashboard
            </Link></center>
            <LiteralForm />
        </div>
    );
}

export default InterestForm;