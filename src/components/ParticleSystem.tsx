
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  color: string;
}

const ParticleSystem: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = React.useState<Particle[]>([]);

  useEffect(() => {
    const createParticles = () => {
      const newParticles: Particle[] = [];
      const colors = ['rgba(34, 197, 94, 0.6)', 'rgba(34, 197, 94, 0.4)', 'rgba(34, 197, 94, 0.2)'];
      
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 6 + 2,
          opacity: Math.random() * 0.5 + 0.1,
          speed: Math.random() * 2 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
      
      setParticles(newParticles);
    };

    createParticles();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.opacity,
          }}
          animate={{
            x: [`${particle.x}%`, `${particle.x + 20}%`, `${particle.x}%`],
            y: [`${particle.y}%`, `${particle.y - 30}%`, `${particle.y}%`],
            scale: [1, 1.2, 1],
            opacity: [particle.opacity, particle.opacity * 0.5, particle.opacity],
          }}
          transition={{
            duration: particle.speed * 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default ParticleSystem;
