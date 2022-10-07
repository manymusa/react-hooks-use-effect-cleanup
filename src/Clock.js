import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());

      return function cleanup(){
        clearInterval(timerID)
      }
    }, 1000);
  }, []);

  return <div>{time.toString()}</div>;
}

export default Clock;
