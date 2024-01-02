import React from "react";
import ProjectSection from "./ProjectSection";
import ScrollDownArrow from "./ScrollDownArrow";
import "/assets/css/Home.css";

const Home = () => {
    return(
      <>
        <section className="Home">
          <h2>Welcome to my portfolio!</h2>
          <p>Hello I'm Lucas, currently training at BeCode to become a front end developer. On this site you can see my different projects. My portfolio is constantly evolving, so don't hesitate to come back later !</p>
          <ScrollDownArrow/>
        </section>
        
        <section className="projectSection">
         <ProjectSection/>
        </section>
        </>
    )
}
export default Home;