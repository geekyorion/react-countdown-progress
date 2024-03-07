import { useState } from "react";
import CircularCountdown from "./CircularCountdown";

const Progress = () => {

  const [attempt, setAttempt] = useState(0);
  const max = 20;

  return (
    <div className="progress-wrapper">
      <h1>Timer</h1>
      <CircularCountdown
        parts={max}
        currTime={attempt}
        customText={`${~~((attempt / max) * 100)}%`}
        transitionDuration={200}
      />
      <p>Max {max} questions, click on the button to mimic the progress</p>
      <div className="button-wrapper">
        <button onClick={() => setAttempt(attempt + 1)} disabled={attempt >= 20}>Attempt</button>
        <button onClick={() => setAttempt(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Progress;
