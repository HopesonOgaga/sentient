import React, { useEffect, useState } from "react";

export default function MonadCountdown() {
  const target = new Date("2025-10-14T00:00:00Z").getTime();
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft("Claim is live! 🎉");
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center text-lg text-white mt-4">
      {timeLeft === "Claim is live! 🎉" ? (
        <a
          href="https://claim.monad.xyz/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-fuchsia-400 font-semibold hover:underline"
        >
          Claim is live! 🎉
        </a>
      ) : (
        <>Monad claim opens in {timeLeft}</>
      )}
    </div>
  );
}
