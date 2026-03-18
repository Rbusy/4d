import React, { useEffect, useState } from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    // Generate petals
    const newPetals = Array.from({ length: 15 }).map((_, i) => {
      // Random properties for each petal
      const style = {
        left: `${Math.random() * 100}vw`,
        animationDuration: `${10 + Math.random() * 15}s`,
        animationDelay: `${-Math.random() * 20}s`,
        width: `${15 + Math.random() * 15}px`,
        opacity: 0.2 + Math.random() * 0.4,
        transform: `rotate(${Math.random() * 360}deg)`,
        filter: `hue-rotate(${Math.random() * 20 - 10}deg)`
      };
      return <div key={i} className="rose-petal" style={style}></div>;
    });
    setPetals(newPetals);
  }, []);

  return (
    <div className="elegant-bg">
      <div className="petals-container">
        {petals}
      </div>
    </div>
  );
};

export default AnimatedBackground;
