import React from 'react';
import { Link } from "react-router-dom";

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
        </div>
    );
}

export default Dashboard;
