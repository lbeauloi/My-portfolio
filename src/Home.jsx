import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
    return(
        <>
    
        <div>
          <h1>Home</h1>
        
          <div>
            <Link to = "/Projet 1">projet 1</Link>
          </div> 

         <div>
            <Link to = "/Projet 2">projet 2</Link>
         </div>
          

        </div>
        </>
    )
}
export default Home;