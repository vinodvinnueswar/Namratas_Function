import React, { useEffect, useState } from "react";

const Count_Down = () => {

  // IST time
  const weddingDate = new Date("2026-06-22T23:30:00+05:30").getTime();

  const calculateTimeLeft = () => {
    const now = Date.now();
    const difference = weddingDate - now;

    if (difference <= 0) {
      return null; // event started
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = calculateTimeLeft();
      setTimeLeft(updated);

      // stop interval after event
      if (updated === null) clearInterval(timer);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      <div className="gold-text">

        {timeLeft ? (
          <>
            <h2>Our Wedding Countdown</h2>

            <div className="timer">
              <div>
                <span>{String(timeLeft.days).padStart(2, "0")}</span>
                <p>Days</p>
              </div>

              <div>
                <span>{String(timeLeft.hours).padStart(2, "0")}</span>
                <p>Hours</p>
              </div>

              <div>
                <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
                <p>Minutes</p>
              </div>

              <div>
                <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
                <p>Seconds</p>
              </div>
            </div>
          </>
        ) : (
          <h1 className="started">🎉 The Wedding Has Started! 🎉</h1>
        )}

      </div>
    </div>
  );
};

export default Count_Down;