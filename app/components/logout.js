import React from "react";
import {Link} from 'react-router-dom';

function LogOut(props){
    return (
        <div>
            <Link to='/'>Logout</Link>
            <h1>Welcome, {props.name}</h1>
        </div>
    )
}
export default LogOut;