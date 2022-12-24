import React from 'react';
import{ Link,Outlet} from "react-router-dom";


const Home = ()=>{
    return(<>
      <h1>This is home page</h1>
    </>)
}
const Contact = ()=>{
    return(<>
      <h1>This is contact page</h1>
    </>)
}
const Help = ()=>{
    return(<>
      <h1>This is help page</h1>
    </>)
}
const About = ()=>{
    return(<>
    <Link to='/Contact'><p>change contact!</p></Link>
      <h1>This is About page</h1>
    </>)
}
export { Home,Contact,Help,About}