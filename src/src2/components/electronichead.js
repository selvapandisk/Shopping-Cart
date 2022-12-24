import React from "react";
import { Link ,Outlet} from "react-router-dom";
import './electronic.css';



const Electronic = () =>{
    return(<header className="head">
    <div className="logo">
        <h1>
           <ul>
              <Link to="/" className="logo">ELECTRONIC SHOP</Link>
           </ul>
        </h1>
    </div>
        <div className="header-link">
            <ul>
                <li>
                <Link to="/elechome">Home</Link>
                </li>
            </ul>

            <ul>
                <li>
                <Link to="/signup">Signup</Link>
                </li>
            </ul>
        
        
            <ul>
                <li>
                <Link to="/cart"><i class="fa-solid fa-cart-shopping"></i></Link>
                </li>
            </ul>
        </div>
    <Outlet />
   
    </header>
    )
} 
export{Electronic}