import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import html2canvas from "html2canvas";
import { useLocation, useNavigate } from "react-router-dom";

export default function FogoBadgeCard() {
  const location = useLocation();
  const navigate = useNavigate();
  const score = location.state?.score;
  const [rank, setRank] = useState("Session Wanderer");
  const cardRef = useRef(null);

  useEffect(() => {
    if (score === undefined) {
      navigate("/");
      return;
    }

    if (score < 40) setRank("Session Wanderer");
    else if (score < 70) setRank("Intent Adept");
    else if (score < 90) setRank("Flow Guardian");
    else setRank("Gasless Sage");
  }, [score, navigate]);

  const badgeImages = {
    "Session Wanderer": "/images/fogo/session.jpg",
    "Intent Adept": "/images/fogo/intent.jpg",
    "Flow Guardian": "/images/fogo/flowguard.jpg",
    "Gasless Sage": "/images/fogo/gaslesssage.png",
  };

  const accentColors = {
    "Session Wanderer": "#8B8B8B",
    "Intent Adept": "#A855F7",
    "Flow Guardian": "#22D3EE",
    "Gasless Sage": "#FACC15",
  };

  const color = accentColors[rank];

  const handleDownload = async () => {
    if (!cardRef.current) return;
    const canvas = await html2canvas(cardRef.current, { scale: 3 });
    const link = document.createElement("a");
    link.download = `${rank.replace(" ", "_")}_badge.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#07070D] overflow-hidden relative">
      {/* Background glow */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
        style={{ background: color }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ repeat: Infinity, duration: 4 }}
      />

      {/* Outer NFT Card Frame */}
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6 }}
        className="relative w-[320px] rounded-3xl overflow-hidden shadow-[0_0_25px_rgba(255,255,255,0.1)] border border-white/10 bg-gradient-to-br from-black/50 to-gray-900/70 backdrop-blur-xl"
      >
        {/* Image Container (like NFT artwork) */}
        <div className="relative h-[360px] overflow-hidden rounded-t-3xl">
          <img
            src={badgeImages[rank]}
            alt={rank}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <motion.div
            className="absolute inset-0 rounded-t-3xl border-2 pointer-events-none"
            style={{ borderColor: color }}
            animate={{
              boxShadow: [
                `0 0 10px ${color}`,
                `0 0 25px ${color}`,
                `0 0 10px ${color}`,
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Text metadata section */}
        <div className="p-5 text-center bg-[#0B0B12]/90 backdrop-blur-md border-t border-white/10 rounded-b-3xl">
          <motion.h2
            className="text-lg font-bold tracking-wide text-white"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {rank}
          </motion.h2>
          <motion.p
            className="text-gray-300 text-sm mt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Score: {score} pts
          </motion.p>

          {/* Download Button */}
          <motion.button
            onClick={handleDownload}
            className="mt-3 px-4 py-2 rounded-lg border border-white/30 text-sm text-white hover:bg-white/10 transition"
            whileHover={{ scale: 1.05 }}
          >
            Download Badge
          </motion.button>

          {/* Exit Button */}
          <motion.button
            onClick={() => navigate("/")}
            className="mt-2 px-4 py-2 rounded-lg border border-red-500/40 text-sm text-red-400 hover:bg-red-500/10 transition"
            whileHover={{ scale: 1.05 }}
          >
            Exit Trials
          </motion.button>

          <div className="text-gray-500 text-xs mt-3 uppercase tracking-widest">
            #FogoSessions • #Fogo
          </div>
        </div>
      </motion.div>
    </div>
  );
}
