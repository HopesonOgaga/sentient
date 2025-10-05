import React, { useState, useEffect } from "react";
import { db } from "../db/firebase";
import {
  collection,
  addDoc,
  setDoc,
  doc,
  serverTimestamp,
  query,
  orderBy,
  limit,
  onSnapshot,
} from "firebase/firestore";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const questions = [
  {
    question: "What is Cysic building?",
    options: [
      "Gaming App",
      "ZK Hardware Infrastructure",
      "DEX",
      "Blockchain Explorer",
    ],
    answer: "ZK Hardware Infrastructure",
  },
  {
    question: "When is Cysic mainnet scheduled to launch?",
    options: ["October 20th", "November 1st", "September 28th", "December 5th"],
    answer: "October 20th",
  },
  {
    question: "Cysic accelerates which kind of proofs?",
    options: [
      "Zero-Knowledge Proofs",
      "Consensus Proofs",
      "Transaction Proofs",
      "Proof of Work",
    ],
    answer: "Zero-Knowledge Proofs",
  },
  {
    question: "What makes Cysic’s hardware special?",
    options: [
      "AI focus",
      "GPU-based only",
      "Hardware acceleration for ZKPs",
      "Purely software",
    ],
    answer: "Hardware acceleration for ZKPs",
  },
  {
    question: "Which ecosystem is Cysic part of?",
    options: ["Web2", "Web3 / Blockchain", "IoT", "Gaming"],
    answer: "Web3 / Blockchain",
  },
  {
    question: "Cysic optimizes performance using what?",
    options: [
      "ZK coprocessors",
      "AI models",
      "Custom blockchain nodes",
      "Quantum chips",
    ],
    answer: "ZK coprocessors",
  },
  {
    question: "Cysic’s focus is improving:",
    options: [
      "Proof generation speed",
      "Web design",
      "Smart contract UX",
      "Tokenomics",
    ],
    answer: "Proof generation speed",
  },
  {
    question: "Cysic’s chip can outperform:",
    options: ["Data centers", "Single GPU", "Only CPUs", "No hardware"],
    answer: "Data centers",
  },
  {
    question: "What does ZKP stand for?",
    options: [
      "Zero-Knowledge Proof",
      "Zero-Knowledge Process",
      "Zeta Key Program",
      "Zero Knowledge Portal",
    ],
    answer: "Zero-Knowledge Proof",
  },
  {
    question: "Who can access Cysic testnet?",
    options: ["Developers & Testers", "Only Investors", "Only Admins", "None"],
    answer: "Developers & Testers",
  },
];

export default function CysicTrivia() {
  const [username, setUsername] = useState("");
  const [gameStarted, setGameStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(20);
  const [disable, setDisable] = useState(false);
  const [leaderboard, setLeaderboard] = useState([]);

  // Countdown
  useEffect(() => {
    if (!gameStarted || showScore || disable) return;
    if (timer === 0) {
      handleNext();
      return;
    }
    const interval = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timer, gameStarted, showScore, disable]);

  // Leaderboard sync
  useEffect(() => {
    const q = query(
      collection(db, "cysicLeaderboard"),
      orderBy("score", "desc"),
      limit(10)
    );
    const unsub = onSnapshot(q, (snap) => {
      setLeaderboard(snap.docs.map((doc) => doc.data()));
    });
    return () => unsub();
  }, []);

  const handleOptionClick = (option) => {
    setSelected(option);
    setDisable(true);
  };

  const handleNext = async () => {
    let newScore = score;
    if (selected === questions[current].answer) {
      newScore = score + 1;
      setScore(newScore);
    }

    try {
      await addDoc(collection(db, "cysicTriviaResults"), {
        username,
        question: questions[current]?.question,
        selected,
        correct: selected === questions[current]?.answer,
        timestamp: serverTimestamp(),
      });
    } catch (err) {
      console.error(err);
    }

    setSelected("");
    setDisable(false);
    setTimer(20);

    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
    } else {
      setShowScore(true);
      try {
        const cleanUsername = username?.trim() || "Anonymous";

        // Add or update user score (if higher)
        try {
          const leaderboardRef = collection(db, "cysicLeaderboard");
          await addDoc(leaderboardRef, {
            username: cleanUsername,
            score: newScore,
            timestamp: serverTimestamp(),
          });
          console.log("Score saved:", cleanUsername, newScore);
        } catch (err) {
          console.error("Error saving score:", err);
        }
      } catch (err) {
        console.error("Error saving score:", err);
      }
    }
  };

  const handleShareOnX = () => {
    const tweetText = encodeURIComponent(
      `💻 I scored ${score}/${questions.length} in the @cysic_xyz Trivia!  
⚙️ Test your knowledge about Zero-Knowledge hardware and the upcoming mainnet launch 🔥  
Think you can beat me? Try it out here: https://sentient-zeta.vercel.app/game #CysicTrivia`
    );
    const twitterUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
    window.open(twitterUrl, "_blank");
  };

  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center min-h-screen justify-center bg-gradient-to-br from-gray-950 via-blue-950 to-black text-white px-4">
        <div className="max-w-3xl w-full bg-gray-900 p-6 rounded-2xl shadow-lg border border-blue-800/40">
          {/* Username */}
          {!gameStarted && !showScore && (
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-4 text-cyan-400">
                Enter your name to start Cysic Trivia ⚙️
              </h2>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Your name"
                className="border border-gray-700 rounded-lg px-4 py-2 mb-4 w-full bg-gray-800 text-white"
              />
              <button
                disabled={!username}
                onClick={() => setGameStarted(true)}
                className="px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              >
                Start Game
              </button>
            </div>
          )}

          {/* Quiz */}
          {gameStarted && !showScore && (
            <>
              <p className="text-gray-400 mb-2 text-sm">
                {current + 1} / {questions.length}
              </p>

              <p
                className={`font-semibold mb-4 ${
                  timer <= 5 ? "text-red-500" : "text-cyan-400"
                }`}
              >
                Time: {timer}s
              </p>

              <h2 className="text-xl font-semibold text-white mb-4">
                {questions[current]?.question}
              </h2>

              <div className="grid gap-3">
                {questions[current]?.options.map((option, i) => {
                  let bgClass =
                    "bg-gray-800 border border-gray-700 hover:bg-blue-600 hover:text-white";
                  if (selected) {
                    if (option === selected) {
                      bgClass =
                        option === questions[current].answer
                          ? "bg-green-600 text-white"
                          : "bg-red-600 text-white";
                    }
                    if (
                      option === questions[current].answer &&
                      selected !== option
                    ) {
                      bgClass = "bg-green-600 text-white";
                    }
                  }
                  return (
                    <button
                      key={i}
                      onClick={() => handleOptionClick(option)}
                      disabled={disable}
                      className={`w-full py-2 px-4 rounded-lg transition ${bgClass}`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={handleNext}
                disabled={!selected && timer > 0}
                className="mt-4 w-full py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              >
                Next
              </button>
            </>
          )}

          {/* Score & Leaderboard */}
          {showScore && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="text-center"
              >
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">
                  {username}, you scored {score} / {questions.length} ⚡
                </h2>

                <button
                  onClick={handleShareOnX}
                  className="mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-3 rounded-xl shadow-lg hover:opacity-90 transition transform hover:scale-105"
                >
                  🐦 Share on X
                </button>

                <h3 className="text-xl font-semibold mb-3 text-blue-400">
                  🏆 Leaderboard
                </h3>
                <table className="w-full border-collapse mb-4 text-gray-300">
                  <thead>
                    <tr className="bg-gray-800 text-left">
                      <th className="p-2">Rank</th>
                      <th className="p-2">Name</th>
                      <th className="p-2">Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboard.map((player, index) => (
                      <tr
                        key={index}
                        className={`border-b border-gray-800 ${
                          player.username === username
                            ? "bg-blue-900/50 font-bold"
                            : ""
                        }`}
                      >
                        <td className="p-2">{index + 1}</td>
                        <td className="p-2">{player.username}</td>
                        <td className="p-2">{player.score}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <button
                  onClick={() => {
                    setCurrent(0);
                    setScore(0);
                    setShowScore(false);
                    setTimer(20);
                    setGameStarted(false);
                  }}
                  className="mt-6 px-6 py-2 rounded-lg bg-gray-800 text-blue-400 font-semibold hover:bg-gray-700 transition"
                >
                  Restart
                </button>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
