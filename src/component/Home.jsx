import React from 'react';
import ScrollDownArrow from "./ScrollDownArrow";
import BackToTop from './BackToTop';

import "/assets/css/Home.css";

const Home = () => {
    return(
      <>
<BackToTop/>
        <section className="Home">
          <p className="line1" id="hello"><em>hello, i'm</em></p>
          <img className="line2" id="LB" src="/assets/img/lucasbeauloi.svg"></img>
          <p className="line3">a junior front-end developer</p>
          <p className="line4">Currently undergoing front-end training at BeCode, I am eager to apply my skills and actively seeking a challenging internship opportunity. Let's build something remarkable together!</p>
          <div className="line5"><ScrollDownArrow/></div>
        </section>    


      <section class="sectionPin">
      <div class="pin-wrap">
        <div class="project1"><p>PROJET 1</p></div>
        <div class="project2"><p>PROJET 2</p></div>
        <div class="project3"><p>PROJET 3</p></div>
        <div class="project4"><p>PROJET 4</p></div>
       </div>
    </section> 
        </>
        
    )
}
export default Home;


