import { useEffect, useState } from "react";
import CircularCountdown from "./CircularCountdown";

const timer = {
  hours: 1,
  minutes: 0,
  seconds: 10
};

const Timer = () => {
  const [state, setState] = useState({ ...timer });
  const [totalSeconds, setTotalSeconds] = useState(timer.hours * 3600 + timer.minutes * 60 + timer.seconds);

  const startTimer = () => {
    // udpate state
    setTotalSeconds(prev => prev - 1);
    setTimeout(startTimer, 1000);
  }

  useEffect(() => {
    const newHours = ~~(totalSeconds / 3600);
    const newMinutes = ~~((totalSeconds - newHours * 3600) / 60);
    const newSeconds = totalSeconds - newHours * 3600 - newMinutes * 60;

    setState({
      ...state,
      hours: newHours,
      minutes: newMinutes,
      seconds: newSeconds
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalSeconds]);

  useEffect(() => {
    setState({
      ...state,
      parts: state.hours * 3600 + state.minutes * 60 + state
    });
    setTimeout(startTimer(), 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="timers-wrapper">
      <h1>Timers</h1>
      <CircularCountdown
        currTime={totalSeconds}
        parts={timer.hours * 3600 + timer.minutes * 60 + timer.seconds}
        shouldDisplayTimer={true}
      />

      <CircularCountdown currTime={state.hours} parts={timer.hours} />
      <CircularCountdown currTime={state.minutes} parts={60} />
      <CircularCountdown currTime={state.seconds} parts={60} />
    </div>
  );
};

export default Timer;
