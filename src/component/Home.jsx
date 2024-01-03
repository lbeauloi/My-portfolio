import React from "react";
import ScrollDownArrow from "./ScrollDownArrow";
import "/assets/css/Home.css";
import Projet1 from "./Projet1";
import Projet2 from "./Projet2";
import Projet3 from "./Projet3";
import Projet4 from "./Projet4";

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

        <section className="projectHoriz">
          <section className="Projet1" id="projects">
            <Projet1/>
          </section>

          <section className="Projet2">
            <Projet2/>
          </section>

          <section className="Projet3">
            <Projet3/>
          </section>

          <section className="Projet4">
            <Projet4/>
          </section>
        </section>


        
        </>
        
    )
}
export default Home;