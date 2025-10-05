import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const targetDate = new Date("2025-10-20T00:00:00Z").getTime(); // UTC time for Oct 20

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((diff / (1000 * 60)) % 60);
        const secs = Math.floor((diff / 1000) % 60);
        setTimeLeft({ days, hours, mins, secs });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="text-center mt-6 bg-gray-900 text-white rounded-2xl p-6 shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-3">🔥 Cysic Mainnet Countdown</h2>
      <div className="flex justify-center space-x-4 text-lg font-mono">
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold">{timeLeft.days}</span>
          <span className="text-sm text-gray-400">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold">{timeLeft.hours}</span>
          <span className="text-sm text-gray-400">Hrs</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold">{timeLeft.mins}</span>
          <span className="text-sm text-gray-400">Min</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold">{timeLeft.secs}</span>
          <span className="text-sm text-gray-400">Sec</span>
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-400">Launching October 20th, 2025 🚀</p>
    </div>
  );
};

export default CountdownTimer;
