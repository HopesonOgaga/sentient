import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";



const fogoQuestions = [
  {
    question: "What does Fogo Sessions simplify?",
    options: ["Gas fees", "Account abstraction", "Wallet creation", "Smart contract design"],
    answer: "Account abstraction",
  },
  {
    question: "What chain type is Fogo compatible with?",
    options: ["SVM-compatible", "EVM-compatible", "Bitcoin", "Cosmos"],
    answer: "SVM-compatible",
  },
  {
    question: "What’s the purpose of Fogo intents?",
    options: ["Batch transactions", "Avoid re-signing actions", "Store NFTs", "Validate blocks"],
    answer: "Avoid re-signing actions",
  },
  {
    question: "What core client powers Fogo’s validator performance?",
    options: ["Firestorm", "Firedancer", "BlazeNode", "Inferno Engine"],
    answer: "Firedancer",
  },
  {
    question: "What key issue in DEXs does Fogo aim to solve?",
    options: ["Liquidity pools", "Scalability", "Latency", "Cross-chain swaps"],
    answer: "Latency",
  },
  {
    question: "What consensus model does Fogo introduce?",
    options: ["Single-node", "Proof of Work", "Multi-Local Consensus", "Delegated Proof"],
    answer: "Multi-Local Consensus",
  },
  {
    question: "Fogo’s ecosystem is designed for which primary use case?",
    options: ["Gaming", "Real-time trading and liquidity", "NFT minting", "Data storage"],
    answer: "Real-time trading and liquidity",
  },
  {
    question: "Which funding round helped fuel Fogo’s mainnet growth?",
    options: ["Series B", "Public Sale", "Private Equity", "Launchpad IDO"],
    answer: "Public Sale",
  },
  {
    question: "What’s a key focus of Fogo’s economic alignment?",
    options: ["Randomized staking rewards", "Fair MEV capture and validator incentives", "NFT royalties", "Advertising partnerships"],
    answer: "Fair MEV capture and validator incentives",
  },
  {
    question: "What is Fogo ultimately trying to become?",
    options: ["A social media chain", "The financial backbone of real-time on-chain trading", "A metaverse platform", "A game hub"],
    answer: "The financial backbone of real-time on-chain trading",
  },
];


export default function FogoTrivia() {
    
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [timer, setTimer] = useState(15);
  const [failed, setFailed] = useState(false);
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  // 🔥 Loading intro
  useEffect(() => {
    const timerId = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timerId);
  }, []);

  // ⏱ Countdown
  useEffect(() => {
    if (!loading && !failed) {
      if (timer === 0) {
        setFailed(true);
        return;
      }
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    }
  }, [timer, loading, failed]);

  // ✅ Answer selection logic
  const handleAnswer = (option) => {
  if (selected) return;
  setSelected(option);

  const isCorrect = option === fogoQuestions[index].answer;
  const newScore = isCorrect ? score + 10 : score;
  setScore(newScore);

  setTimeout(() => {
    const next = index + 1;
    if (next < fogoQuestions.length) {
      setIndex(next);
      setTimer(15);
      setSelected(null);
    } else {
      navigate("/card", { state: { score: newScore } }); // ✅ Use updated score
    }
  }, 800);
};


  // 💀 Trial failed (time ran out)
  if (failed) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black to-red-900 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1 className="text-4xl mb-4 font-bold text-red-400">🔥 Trial Failed</h1>
        <p className="text-gray-300 mb-6">Your flow broke under pressure.</p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-all"
        >
          Retry
        </button>
      </motion.div>
    );
  }

  // 🔥 Intro Loading
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="text-5xl text-orange-500 font-extrabold tracking-wider"
        >
          🔥 Fogo Trials Loading...
        </motion.div>
        <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-orange-500/30 blur-2xl" />
      </div>
    );
  }

  const q = fogoQuestions[index];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-[#0C0C12] via-[#141420] to-[#0C0C12] text-white">
      {/* Floating flames animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 w-1 h-10 bg-orange-500/40 blur-sm rounded-full"
            style={{ left: `${Math.random() * 100}%` }}
            animate={{ y: [-10, -200, 0], opacity: [0.3, 1, 0] }}
            transition={{ duration: 3 + Math.random() * 2, repeat: Infinity }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="z-10 text-center p-6 bg-black/40 backdrop-blur-md rounded-xl w-80 border border-cyan-500/30 shadow-lg shadow-cyan-400/10"
        >
          <h2 className="text-xl mb-4 font-semibold text-cyan-400">{q.question}</h2>

          <div className="flex flex-col gap-3">
            {q.options.map((opt, i) => {
              const isCorrect = opt === q.answer;
              const isSelected = selected === opt;

              let btnStyle = "bg-gray-800 hover:bg-cyan-500 hover:text-black";
              if (selected) {
                if (isSelected && isCorrect) btnStyle = "bg-green-500 text-black";
                else if (isSelected && !isCorrect) btnStyle = "bg-red-600 text-white";
                else if (isCorrect) btnStyle = "bg-green-400/30 text-green-300";
                else btnStyle = "bg-gray-800/40 text-gray-400";
              }

              return (
                <button
                  key={i}
                  onClick={() => handleAnswer(opt)}
                  disabled={!!selected}
                  className={`${btnStyle} px-4 py-2 rounded-lg transition-all duration-300`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          <div className="mt-6 text-sm text-gray-400">
            Question {index + 1} / {fogoQuestions.length}
          </div>
          <div className="mt-2 text-orange-400 font-mono">🔥 Time left: {timer}s</div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
