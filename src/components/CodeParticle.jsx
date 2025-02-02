/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const CodeParticle = ({ style }) => (
  <div 
    className="absolute text-emerald-500/20 font-mono text-sm animate-float select-none pointer-events-none"
    style={style}
  >
    {['<', '/>', '{', '}', '/>', '&&', '=>', '||', '(', ')', '?'][Math.floor(Math.random() * 8)]}
  </div>
);

export default CodeParticle;
