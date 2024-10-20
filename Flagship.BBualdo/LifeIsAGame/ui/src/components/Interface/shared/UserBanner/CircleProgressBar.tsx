const CircleProgressBar = ({
  progress,
  circleWidth,
}: {
  progress: number;
  circleWidth: number;
}) => {
  const radius = 26;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * progress) / 100;

  return (
    <svg
      width={circleWidth}
      height={circleWidth}
      viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      className="rotate-90"
    >
      <circle
        cx={circleWidth / 2}
        cy={circleWidth / 2}
        strokeWidth="8px"
        r={radius}
        className="fill-none stroke-cp-cyan/20"
      />
      <circle
        cx={circleWidth / 2}
        cy={circleWidth / 2}
        strokeWidth="8px"
        r={radius}
        className="fill-none stroke-cp-cyan transition-all duration-700"
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
        }}
      />
    </svg>
  );
};

export default CircleProgressBar;
