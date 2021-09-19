import React from 'react';
import { Link } from "react-router-dom";

import LiteralForm from './LiteralForm';
// import {FormBuilder} from 'native-base-form-builder';

function InterestForm(){

    return(
        <div>
            <center><h1 id="test">&nbsp;</h1></center>
            <center><h1>&nbsp;</h1></center>
            <center><h1>&nbsp;</h1></center>
            <center><h1>&nbsp;</h1></center>
            <center><h1>InterestForm</h1></center>
            <center><Link 
                className="btn btn-pink"
                role="button"
                to="/"
                > 
                Main Page
            </Link></center>
            <LiteralForm />
        </div>
    );
}

export default InterestForm;