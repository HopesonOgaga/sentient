// src/components/Trivia.jsx
import Navbar from "../navbar";
import Footer from "../footer";
import React, { useState, useEffect } from "react";
import { db } from "../../db/firebase";
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

const questions = [
  { question: "What is Sentient aiming to build?", options: ["Closed AI", "Open AGI", "Smartphone App", "Social Media"], answer: "Open AGI" },
  { question: "What is the core of Sentient that answers questions?", options: ["GRID", "CPU", "Network", "Database"], answer: "GRID" },
  { question: "Who can contribute to Sentient's knowledge?", options: ["Only Admins", "Everyone", "Only AI", "Only Investors"], answer: "Everyone" },
  { question: "Which company currently controls the smartest AI?", options: ["OpenAI", "Sentient", "Google", "Microsoft"], answer: "OpenAI" },
  { question: "What does GRID do?", options: ["Processes everything alone", "Splits tasks to helpers", "Stores user data", "None"], answer: "Splits tasks to helpers" },
  { question: "What is the goal of Sentient AGI?", options: ["Restrict AI", "Open learning for all", "Profit only", "Social media app"], answer: "Open learning for all" },
  { question: "Who decides what GRID answers?", options: ["Only Admins", "Community", "AI", "Random"], answer: "Community" },
  { question: "What type of intelligence is Sentient building?", options: ["Narrow AI", "AGI", "Machine Learning", "Robotics"], answer: "AGI" },
  { question: "How many main components does GRID have?", options: ["1", "Multiple helpers", "10", "None"], answer: "Multiple helpers" },
  { question: "Can everyone use Sentient's tools?", options: ["Yes", "No", "Admins only", "Investors only"], answer: "Yes" },
  { question: "What powers the Sentient playground?", options: ["Community", "AI alone", "Corporates", "None"], answer: "Community" },
  { question: "What kind of content can be built by the community?", options: ["Games", "Tools", "Knowledge", "All"], answer: "All" },
  { question: "Does Sentient lock its AI?", options: ["Yes", "No"], answer: "No" },
  { question: "Can users track their progress?", options: ["Yes", "No"], answer: "Yes" },
  { question: "What is rewarded with XP?", options: ["Trivia", "Participation", "Both", "None"], answer: "Both" },
];

export default function TriviaCysic() {
  const [username, setUsername] = useState("");
  const [gameStarted, setGameStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(20);
  const [disable, setDisable] = useState(false);
  const [leaderboard, setLeaderboard] = useState([]);

  // Countdown timer
  useEffect(() => {
    if (!gameStarted || showScore || disable) return;
    if (timer === 0) {
      handleNext();
      return;
    }
    const interval = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timer, gameStarted, showScore, disable]);

  // Live leaderboard sync
  useEffect(() => {
    const q = query(
      collection(db, "leaderboard"),
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

    // Save question attempt
    try {
      await addDoc(collection(db, "triviaResults"), {
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

      // Save/update final score
      try {
        await setDoc(doc(db, "leaderboard", username), {
          username: username || "Anonymous",
          score: newScore,
          timestamp: serverTimestamp(),
        });
      } catch (err) {
        console.error("Error saving score:", err);
      }
    }
  };

  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center min-h-screen justify-center bg-gradient-to-br from-pink-300">
        <div className="max-w-3xl w-full bg-white p-6 rounded-2xl shadow-md">
          {/* Username entry */}
          {!gameStarted && !showScore && (
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-4">
                Enter your name to start
              </h2>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Your name"
                className="border rounded-lg px-4 py-2 mb-4 w-full"
              />
              <button
                disabled={!username}
                onClick={() => setGameStarted(true)}
                className="px-6 py-2 rounded-lg bg-pink-500 text-white font-semibold hover:bg-pink-600 transition"
              >
                Start Game
              </button>
            </div>
          )}

          {/* Quiz screen */}
          {gameStarted && !showScore && (
            <>
              <p className="text-gray-600 mb-2 text-sm">
                {current + 1} / {questions.length}
              </p>

              <p
                className={`font-semibold mb-4 ${
                  timer <= 5 ? "text-red-500" : "text-gray-800"
                }`}
              >
                Time: {timer}s
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {questions[current]?.question}
              </h2>

              <div className="grid gap-3">
                {questions[current]?.options.map((option, i) => {
                  let bgClass =
                    "bg-white border-gray-300 hover:bg-pink-400 hover:text-white text-gray-800";
                  if (selected) {
                    if (option === selected) {
                      bgClass =
                        option === questions[current].answer
                          ? "bg-green-500 text-white border-green-600"
                          : "bg-red-500 text-white border-red-600";
                    }
                    if (
                      option === questions[current].answer &&
                      selected !== option
                    ) {
                      bgClass = "bg-green-500 text-white border-green-600";
                    }
                  }
                  return (
                    <button
                      key={i}
                      onClick={() => handleOptionClick(option)}
                      disabled={disable}
                      className={`w-full py-2 px-4 rounded-lg border transition ${bgClass}`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={handleNext}
                disabled={!selected && timer > 0}
                className="mt-4 w-full py-2 rounded-lg bg-gray-900 text-white font-semibold hover:opacity-80 transition"
              >
                Next
              </button>
            </>
          )}

          {/* Final score & leaderboard */}
          {showScore && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="text-center"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {username}, you scored {score} / {questions.length}
                </h2>

                <h3 className="text-xl font-semibold mb-3">🏆 Leaderboard</h3>
                <table className="w-full border-collapse mb-4">
                  <thead>
                    <tr className="bg-gray-100 text-left">
                      <th className="p-2">Rank</th>
                      <th className="p-2">Name</th>
                      <th className="p-2">Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboard.map((player, index) => (
                      <tr
                        key={index}
                        className={`border-b ${
                          player.username === username
                            ? "bg-yellow-100 font-bold"
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
                  className="mt-6 px-6 py-2 rounded-lg bg-pink-500 text-white font-semibold hover:bg-pink-600 transition"
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
