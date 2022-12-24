import React from "react";
import{ Link , Outlet} from "react-router-dom";
 

const Headfile = ()=>(
    <div>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/Contact'>Contact</Link>
            </li>
            <li>
                <Link to='/Help'>Help</Link>
            </li>
            <li>
                <Link to='/About'>About</Link>
            </li>
        </ul>
        <Outlet/>

    </div>
)
export{Headfile}