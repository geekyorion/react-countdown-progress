import PropTypes from 'prop-types';

// defaultProperties
const width = 200;
const height = 200;
const radius = (width / 2) * 0.9;
const centerX = width / 2;
const centerY = height / 2;
const strokeEmptyWidth = 4;
const strokeFullWidth = 8;
const strokeCircleColor = "#e6e6e6";
const strokeTimerColor = "#00cc66";
const fontSize = 40;

const getTextInTimerFormat = (currTime) => {
  const hours = ~~(currTime / 3600);
  const minutes = ~~((currTime - hours * 3600) / 60);
  const seconds = currTime - hours * 3600 - minutes * 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

const CircularCountdown = ({
  currTime,
  parts,
  shouldDisplayTimer = false,
  customText = null,
  transitionDuration = 1000
}) => {
  return (
    <span className="circular-countdown">
      <svg width="200" height="200">
        <circle
          r={radius}
          cx={centerX}
          cy={centerY}
          fill="none"
          strokeWidth={strokeEmptyWidth}
          stroke={strokeCircleColor}
        />
        
        <circle
          r={radius}
          cx={centerX}
          cy={centerY}
          fill="none"
          strokeWidth={strokeFullWidth}
          stroke={strokeTimerColor}
          strokeDasharray={`${(currTime / parts) * (Math.PI * 2 * radius)} ${(Math.PI * 2 * radius)}`}
          strokeLinecap="round"
          transform="rotate(-90 100 100)"
          style={{ transition: `stroke-dasharray ${transitionDuration}ms linear` }}
        />
        
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy={fontSize * 0.45}
          fontFamily="sans-serif"
          fontSize={fontSize}
          fill={strokeTimerColor}
        >
          {customText
            ? customText
            : (shouldDisplayTimer ? getTextInTimerFormat(currTime) : currTime)
          }
        </text>
      </svg>
    </span>
  );
};

export default CircularCountdown;

CircularCountdown.propTypes = {
  parts: PropTypes.number.isRequired,
  currTime: PropTypes.number.isRequired,
  shouldDisplayTimer: PropTypes.bool,
  customText: PropTypes.string,
  transitionDuration: PropTypes.number
};
