import React, { useState, useRef, useReducer } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import{Headfile} from "./head";
import { Home,Contact,Help,About} from "./homepage";

const Parent =()=>{
    return(
        <BrowserRouter>
       <Routes>
       <Route path='/' element={<Headfile />}>
           <Route path="/Home" element={<Home />} />
           <Route path="/Contact" element={<Contact />} />
           <Route path="/Help" element={<Help />} />
           <Route path="/About" element={<About />} />
        
         </Route>
       </Routes>
     </BrowserRouter>

    )
}
export{Parent}
