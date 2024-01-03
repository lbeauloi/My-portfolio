import React from "react";
import ProjectSection from "./ProjectSection";
import ScrollDownArrow from "./ScrollDownArrow";
import "/assets/css/Home.css";

const Home = () => {
    return(
      <>
        <section className="Home">
          <p className="line1"><em>hello, i'm</em></p>
          <img className="line2" src="./assets/img/lucasbeauloi.svg"></img>
          <p className="line3">a junior front-end developer</p>
          <p className="line4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sed eos porro vero omnis veritatis quaerat, numquam repellendus natus eveniet aliquid ea perspiciatis ut expedita deserunt, ducimus quas consequatur. Modi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus exercitationem dolores ipsa iste!</p>
          <div className="line5"><ScrollDownArrow/></div>
        </section>
        
        <section className="projectSection">
         <ProjectSection/>
        </section>
        </>
        
    )
}
export default Home;