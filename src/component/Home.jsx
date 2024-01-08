import React from 'react';
import ScrollDownArrow from "./ScrollDownArrow";
import BackToTop from './BackToTop';

import "/assets/css/Home.css";
import '/assets/css/Contact.css';


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


        <section class="horizontal-scroll">
          <div class="horizontal-scroll__inner">
            
            <div class="horizontal-text">
              <h3>projet 1</h3>
            </div>
            
            <div class="horizontal-text">
              <h3>projet 2</h3>
            </div>
            
            <div class="horizontal-text">
              <h3>projet 3</h3>
            </div>
            
            <div class="horizontal-text">
              <h3>projet 4</h3>
            </div>
          </div>
        </section>

        <section className='contactContainer'id='contact'>
            <img className="line1" src="/assets/img/letsconnect.svg" alt="" />
            <a className='line2' href="">l.beauloi@gmail.com</a>
            <div className='line3'>
                <p>Follow me here</p> <br />
                <a className='btn1' href="">Btn1</a>
                <a className= 'btn2'href="">Btn2</a>
            </div>
            <p className='line4'>Coded by <a href="https://www.linkedin.com/in/lucas-beauloi/" target='_blank'><strong>Lucas Beauloi</strong></a>, designed by <a href="http://laurakeerman.be/" target='_blank'><strong>Laura Keerman</strong></a></p>
        </section>
      </>
        
    )
}
export default Home;


