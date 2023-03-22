import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date().toString());

  useEffect(() => {
    console.log("component mounted or updated");
    const interval = setInterval(showDate, 1000);

    return () => {
      console.log("cleanup of Interval");
      clearInterval(interval);
    };
  }, [time]);

  function showDate() {
    // console.log(new Date().toString());
    setTime(new Date().toString());
  }
  setInterval(showDate, 1000);
  return <h1>{time}</h1>;
}

export default Clock;
