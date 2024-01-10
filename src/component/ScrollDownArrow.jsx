import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ScrollDownArrow = () => {
  const arrowRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(arrowRef.current, { y: -20 }, { y: 20, 
      repeat: -1, 
      yoyo: true, 
      duration: 1 });
  }, []);

  return (
    <div ref={arrowRef} style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
      <p style={{fontSize:'20px', fontWeight:300}}>scroll</p>
      {/* <p style={{fontWeight:300}}>&#8595;</p> */}
    </div>
  );
}

export default ScrollDownArrow;