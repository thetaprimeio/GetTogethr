import React from 'react';
import { Link } from "react-router-dom";

import LiteralForm from './LiteralForm';
// import {FormBuilder} from 'native-base-form-builder';


function InterestForm(){

    return(
        <div>
            <h1>Interest Form</h1>
            <Link 
                className="btn btn-pink"
                role="button"
                to="/"
                > 
                Main Page
            </Link>
            <LiteralForm />
        </div>
    );
}

export default InterestForm;
