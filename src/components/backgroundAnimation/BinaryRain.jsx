/* eslint-disable no-unused-vars */
import React from 'react';

const BinaryRain = () => {
  const chars = '01';
  return (
    <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute text-emerald-500 font-mono text-xs animate-matrix"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${10 + Math.random() * 10}s`
          }}
        >
          {[...Array(20)].map((_, j) => (
            <div key={j} className="my-1">
              {chars[Math.floor(Math.random() * chars.length)]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BinaryRain;
