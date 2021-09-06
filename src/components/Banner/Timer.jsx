import { useEffect, useState } from 'react';
import timeIcon from './assets/icon.svg';
const Timer = (props) => {
  const [time, setTime] = useState();
  function msToTime(s) {
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;

    return hrs + ':' + mins + ':' + secs;
  }
  useEffect(() => {
    setInterval(() => {
      setTime(msToTime(props.time - Date.now()));
    }, 1000);
  }, [time, props.time]);
  return (
    <>
      <div className="banner_timer_box">
        <img src={timeIcon} alt="" />
        <span className="banner_timer">{time}</span>
      </div>
    </>
  );
};

export default Timer;
