import PropTypes from 'prop-types';
import './Preloader.css';

const evolutionStages = {
  0: '🥚',
  20: '🐣',
  40: '🐥',
  60: '🦅',
  80: '🦖',
  100: '🐉'
};

const Preloader = ({ progress }) => {
  const getStage = (progress) => {
    const stages = Object.keys(evolutionStages).map(Number);
    const currentStage = stages.reduce((prev, curr) => 
      progress >= curr ? curr : prev
    );
    return evolutionStages[currentStage];
  };

  return (
    <div className="preloader">
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="progress-text">
        <span className="evolution-emoji">{getStage(progress)}</span>
      </div>
    </div>
  );
};

Preloader.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default Preloader;
