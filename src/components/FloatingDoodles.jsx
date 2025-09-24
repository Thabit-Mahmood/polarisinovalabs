import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const FloatingDoodles = () => {
  const doodles = useMemo(() => [
    // Geometric shapes with different styles
    { shape: '◆', size: 'text-4xl', color: 'text-lime-400/30', delay: 0 },
    { shape: '●', size: 'text-3xl', color: 'text-yellow-400/40', delay: 2 },
    { shape: '▲', size: 'text-5xl', color: 'text-emerald-400/25', delay: 4 },
    { shape: '◇', size: 'text-2xl', color: 'text-lime-300/35', delay: 1 },
    { shape: '◐', size: 'text-6xl', color: 'text-yellow-300/20', delay: 3 },
    { shape: '◈', size: 'text-3xl', color: 'text-emerald-300/30', delay: 5 },
    { shape: '◯', size: 'text-4xl', color: 'text-lime-500/25', delay: 0.5 },
    { shape: '◊', size: 'text-2xl', color: 'text-yellow-500/35', delay: 2.5 },
    { shape: '△', size: 'text-5xl', color: 'text-emerald-500/20', delay: 4.5 },
    { shape: '◎', size: 'text-3xl', color: 'text-lime-400/40', delay: 1.5 },
  ], []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Main floating doodles */}
      {doodles.map((doodle, index) => (
        <motion.div
          key={index}
          className={`absolute select-none font-bold ${doodle.size} ${doodle.color}`}
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: typeof window !== 'undefined' ? window.innerHeight + 100 : 1000,
            rotate: 0,
            scale: 0.3,
          }}
          animate={{
            y: -200,
            rotate: [0, 180, 360],
            scale: [0.3, 1.2, 0.8, 1, 0.3],
            x: [
              Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            ]
          }}
          transition={{
            duration: 20 + Math.random() * 15,
            repeat: Infinity,
            delay: doodle.delay,
            ease: "linear",
          }}
          style={{
            filter: 'blur(0.5px)',
            left: `${10 + (index * 8) % 80}%`,
          }}
        >
          {doodle.shape}
        </motion.div>
      ))}

      {/* Additional smaller floating elements */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`small-${i}`}
          className="absolute w-3 h-3 rounded-full bg-gradient-to-br from-lime-400/20 to-yellow-400/20"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: typeof window !== 'undefined' ? window.innerHeight + 50 : 1000,
          }}
          animate={{
            y: -100,
            x: [
              Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            ]
          }}
          transition={{
            duration: 25 + Math.random() * 10,
            repeat: Infinity,
            delay: i * 3,
            ease: "easeInOut",
          }}
          style={{
            filter: 'blur(1px)',
            left: `${5 + (i * 12) % 90}%`,
          }}
        />
      ))}

      {/* Subtle gradient orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-lime-400/5 to-yellow-400/10"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          filter: 'blur(40px)',
          top: '10%',
          left: '10%',
        }}
      />
      
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-emerald-400/5 to-cyan-400/10"
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
        style={{
          filter: 'blur(50px)',
          top: '60%',
          right: '10%',
        }}
      />
    </div>
  );
};

export default FloatingDoodles;