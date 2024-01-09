import React from 'react';
import ScrollDownArrow from "./ScrollDownArrow";
import BackToTop from './BackToTop';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import "/assets/css/Home.css";
import '/assets/css/Contact.css';

gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  const component = useRef();
  const slider = useRef();
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 0.01, //jouer sur la vityesse de scroll 
          snap: 1 / (panels.length - 1), //snap = sauter d'une section à l'autre
          end: () => "+=" + slider.current.offsetWidth,
          markers: false, // indicateur du style "end" "scroll start" "start" etc etc utile pour dev mais masquer pour le deployement final
        },
      });
    }, component);
    return () => ctx.revert();
  });
    return(
      <>
      <BackToTop/>
      <div className="App" ref={component}>
        
        <section className="Home">
          <p className="line1" id="hello"><em>hello, i'm</em></p>
          <h1 className="line2" id="LB"><img src="/assets/img/lucasbeauloi.svg" alt="Lucas Beauloi" /></h1>
          <p className="line3">a junior front-end developer</p>
          <p className="line4">Currently undergoing front-end training at BeCode, I am eager to apply my skills and actively seeking a challenging internship opportunity. Let's build something remarkable together!</p>
          <div className="line5"><ScrollDownArrow/></div>
        </section>    


        <section className="container" id='projects' ref={slider}>
            <div class="panel">
              <div className='projectContainer'>
                <div className='projectImg projectImg1'>
                </div>

                <div className='projectdetails'>
                    <h2>The Collection</h2>
                    <p className='description'>A collection of my favorite artists. The cards are dynamically generated in JavaScript. The concepts of DOM, basic HTML CSS JS and responsive design are used in this project.</p>
                    <div className='langageTag'>
                        <p>html/css</p>
                        <p>js</p>
                        <p>dom</p>
                        <p>responsive</p>
                    </div>
                    <a href="https://lbeauloi.github.io/The-Collection/" target="_blank" className='projectLink'>See the project</a>
                </div>
              </div>
            </div>
            
            <div class="panel">
              <div className='projectContainer'>
                <div className='projectImg projectImg2'>
                </div>

              <div className='projectdetails'>
                  <h2>Weather App</h2>
                  <p className='description'>A collection of my favorite artists. The cards are dynamically generated in JavaScript. The concepts of DOM, basic HTML CSS JS and responsive design are used in this project.</p>
                  <div className='langageTag'>
                      <p>html/css</p>
                      <p>js</p>
                      <p>dom</p>
                      <p>responsive</p>
                  </div>
                  <a href="https://lbeauloi.github.io/Weather-app/" target="_blank" className='projectLink'>See the project</a>
              </div>
            </div>
            </div>
            
            <div class="panel">
              <div className='projectContainer'>
                  <div className='projectImg projectImg3'>
                  </div>

                  <div className='projectdetails'>
                      <h2>Sunnyside Agency</h2>
                      <p className='description'>A collection of my favorite artists. The cards are dynamically generated in JavaScript. The concepts of DOM, basic HTML CSS JS and responsive design are used in this project.</p>
                      <div className='langageTag'>
                          <p>html/css</p>
                          <p>js</p>
                          <p>dom</p>
                          <p>responsive</p>
                      </div>
                      <a href="https://lbeauloi.github.io/Sunnyside/" target="_blank" className='projectLink'>See the project</a>
                  </div>
                </div>
            </div>
            
            <div class="panel">
              <div className='projectContainer'>
                  <div className='projectImg projectImg4'>
                  </div>

                  <div className='projectdetails'>
                      <h2>Movie Browser</h2>
                      <p className='description'>A collection of my favorite artists. The cards are dynamically generated in JavaScript. The concepts of DOM, basic HTML CSS JS and responsive design are used in this project.</p>
                      <div className='langageTag'>
                          <p>html/css</p>
                          <p>js</p>
                          <p>dom</p>
                          <p>responsive</p>
                      </div>
                      <a href="https://lbeauloi.github.io/The-Collection/" target="_blank" className='projectLink'>See the project</a>
                  </div>
                </div>
            </div>
        </section>

        <section className='contactContainer'id='contact'>
            <img className="line1" src="./assets/img/letsconnect.svg" alt="" />
            <a className='line2' href="">l.beauloi@gmail.com</a>
            <div className='line3'>
                <p>Follow me here</p> <br />
                <a className='btn1' href="">Btn1</a>
                <a className= 'btn2'href="">Btn2</a>
            </div>
            <p className='line4'>Coded by <a href="https://www.linkedin.com/in/lucas-beauloi/" target='_blank'><strong>Lucas Beauloi</strong></a>, designed by <a href="http://laurakeerman.be/" target='_blank'><strong>Laura Keerman</strong></a></p>
        </section>
      </div>
      </>
        
    )
}
export default Home;

