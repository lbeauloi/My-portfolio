import React from "react";
import ProjectSection from "./ProjectSection";
import ScrollDownArrow from "./ScrollDownArrow";
import "/assets/css/Home.css";

const Home = () => {
    return(
      <>
        <section className="Home">
          <h2>Welcome to my portfolio!</h2>
          <p>My name is Lucas and I am 26 years old. I am currently training at BeCode to become a front end developer. On this site you can see my different projects. Keep in mind that this portfolio is constantly evolving and under construction.</p>
          <ScrollDownArrow/>
        </section>
        
        <section className="projectSection">
         <ProjectSection/>
        </section>
        </>
    )
}
export default Home;