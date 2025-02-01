import { useState, useRef } from 'react';
import PropTypes from 'prop-types';

const glowColors = [
  '#FFD49C', // warm orange
  '#64FFDA', // teal
  '#FF6B6B', // coral
  '#A78BFA', // purple
  '#48BB78', // green
  '#4299E1', // blue
  '#F6E05E'  // yellow
];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * glowColors.length);
  return glowColors[randomIndex];
};

const GlowEffect = ({ 
    src, 
    className = ''
  }) => {
    const [hoverColor, setHoverColor] = useState(getRandomColor());
    const imgRef = useRef(null);
  
    const handleMouseEnter = () => {
      setHoverColor(getRandomColor());
    };
  
    return (
      <img
        ref={imgRef}
        src={src}
        alt="Portal"
        onMouseEnter={handleMouseEnter}
        className={`
          transform 
          transition-all 
          duration-300 
          hover:brightness-125 
          hover:[filter:drop-shadow(0_0_0.5rem_${hoverColor})]
          ${className}
        `}
      />
    );
  };

GlowEffect.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default GlowEffect;