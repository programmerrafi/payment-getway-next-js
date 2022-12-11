import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function CountDownTimer() {
  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">Too lale...</div>;
    }

    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{remainingTime} %</div>
        <div className="text">seconds</div>
      </div>
    );
  };
  return (
    <CountdownCircleTimer
      isPlaying
      duration={10}
      colors="#A30000"
      onComplete={() => {
        // do your stuff here
        return { shouldRepeat: true, delay: 1.5 }; // repeat animation in 1.5 seconds
      }}
    >
      {renderTime}
    </CountdownCircleTimer>
  );
}

export default CountDownTimer;
