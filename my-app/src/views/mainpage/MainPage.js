import React from 'react';
import { Link } from "react-router-dom";

const MainPage = () => (
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

export default MainPage;
