import { useState, useEffect } from 'react';
import BinaryRain from '../backgroundAnimation/BinaryRain';
import GeometricBackground from '../backgroundAnimation/GeometricBackground';
import CodeParticle from '../backgroundAnimation/CodeParticle';

const BackgroundEffects = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [...Array(15)].map((_, i) => ({
        id: i,
        style: {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${15 + Math.random() * 15}s`
        }
      }));
      setParticles(newParticles);
    };

    generateParticles();
    const interval = setInterval(generateParticles, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <BinaryRain />
      <GeometricBackground />
      {particles.map(particle => (
        <CodeParticle key={particle.id} style={particle.style} />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3b82f6,transparent)] opacity-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_100%,#22c55e,transparent)] opacity-10"></div>
    </>
  );
};

export default BackgroundEffects;