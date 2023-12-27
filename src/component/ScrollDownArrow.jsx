import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ScrollDownArrow = () => {
  const arrowRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(arrowRef.current, { y: -20 }, { y: 20, repeat: -1, yoyo: true, duration: 1 });
  }, []);

  return (
    <div ref={arrowRef} style={{ fontSize: '2em', display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      &#8595;
    </div>
  );
}

export default ScrollDownArrow;