import React from "react";
import {Link} from 'react-router-dom';



function LogOut(){
    return (
        <div>
            <Link to='/'>Logout</Link>
            <h1>Welcome...</h1>
        </div>
    )
}
export default LogOut;