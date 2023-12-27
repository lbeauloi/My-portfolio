import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
    return(
        <>
    
        <section className="Home">
          <h1>Welcome to my portfolio !</h1>
          <p>My name is Lucas and I am 26 years old. I am currently training at BeCode to become a front end developer. On this site you can see my different projects. Keep in mind that this portfolio is constantly evolving and under construction.</p>
        </section>
        
        
        <section className="project">
          <div>
            <Link to = "/Projet 1">projet 1</Link>
          </div> 

         <div>
            <Link to = "/Projet 2">projet 2</Link>
         </div>

         <div>
            <Link to = "/Projet 3">projet 3</Link>
         </div>

         <div>
            <Link to = "/Projet 4">projet 4</Link>
         </div>
        </section>
          

   
        </>
    )
}
export default Home;