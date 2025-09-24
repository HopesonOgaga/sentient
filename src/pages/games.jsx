// src/components/Trivia.jsx
import React, { useState, useEffect } from "react";
import { db } from "../db/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const questions = [
  {
    question: "What is Sentient aiming to build?",
    options: ["Closed AI", "Open AGI", "Smartphone App", "Social Media"],
    answer: "Open AGI",
  },
  {
    question: "What is the core of Sentient that answers questions?",
    options: ["GRID", "CPU", "Network", "Database"],
    answer: "GRID",
  },
  {
    question: "Who can contribute to Sentient's knowledge?",
    options: ["Only Admins", "Everyone", "Only AI", "Only Investors"],
    answer: "Everyone",
  },
  {
    question: "Which company currently controls the smartest AI?",
    options: ["OpenAI", "Sentient", "Google", "Microsoft"],
    answer: "OpenAI",
  },
  {
    question: "What does GRID do?",
    options: [
      "Processes everything alone",
      "Splits tasks to helpers",
      "Stores user data",
      "None",
    ],
    answer: "Splits tasks to helpers",
  },
  {
    question: "What is the goal of Sentient AGI?",
    options: [
      "Restrict AI",
      "Open learning for all",
      "Profit only",
      "Social media app",
    ],
    answer: "Open learning for all",
  },
  {
    question: "Who decides what GRID answers?",
    options: ["Only Admins", "Community", "AI", "Random"],
    answer: "Community",
  },
  {
    question: "What type of intelligence is Sentient building?",
    options: ["Narrow AI", "AGI", "Machine Learning", "Robotics"],
    answer: "AGI",
  },
  {
    question: "How many main components does GRID have?",
    options: ["1", "Multiple helpers", "10", "None"],
    answer: "Multiple helpers",
  },
  {
    question: "Can everyone use Sentient's tools?",
    options: ["Yes", "No", "Admins only", "Investors only"],
    answer: "Yes",
  },
  {
    question: "What powers the Sentient playground?",
    options: ["Community", "AI alone", "Corporates", "None"],
    answer: "Community",
  },
  {
    question: "What kind of content can be built by the community?",
    options: ["Games", "Tools", "Knowledge", "All"],
    answer: "All",
  },
  {
    question: "Does Sentient lock its AI?",
    options: ["Yes", "No"],
    answer: "No",
  },
  {
    question: "Can users track their progress?",
    options: ["Yes", "No"],
    answer: "Yes",
  },
  {
    question: "What is rewarded with XP?",
    options: ["Trivia", "Participation", "Both", "None"],
    answer: "Both",
  },
];

export default function Trivia() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(20); // 20 sec per question
  const [disable, setDisable] = useState(false);

  // Countdown timer
  useEffect(() => {
    if (showScore || disable) return;
    if (timer === 0) {
      handleNext();
      return;
    }
    const interval = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timer, showScore, disable]);

  const handleOptionClick = (option) => {
    setSelected(option);
    setDisable(true);
  };

  const handleNext = async () => {
    if (selected === questions[current].answer) setScore((s) => s + 1);

    // Store to Firebase
    try {
      await addDoc(collection(db, "triviaResults"), {
        question: questions[current].question,
        selected,
        correct: selected === questions[current].answer,
        timestamp: serverTimestamp(),
      });
    } catch (err) {
      console.error(err);
    }

    setSelected("");
    setDisable(false);
    setTimer(20);

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <section className="flex flex-col items-center h-screen justify-center bg-gradient-to-br from-pink-300 ">
        <div className="max-w-3xl w-full bg-white p-6 rounded-2xl shadow-md">
          {!showScore ? (
            <>
              {/* Progress */}
              <p className="text-gray-600 mb-2 text-sm">
                {current + 1} / {questions.length}
              </p>

              {/* Timer */}
              <p
                className={`font-semibold mb-4 ${
                  timer <= 5 ? "text-red-500" : "text-gray-800"
                }`}
              >
                Time: {timer}s
              </p>

              {/* Question */}
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {questions[current].question}
              </h2>

              {/* Options */}
              <div className="grid gap-3">
                {questions[current].options.map((option, i) => {
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
          ) : (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="text-center"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  You scored {score} / {questions.length}
                </h2>
                <button
                  onClick={() => {
                    setCurrent(0);
                    setScore(0);
                    setShowScore(false);
                    setTimer(20);
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
      <Footer></Footer>
    </>
  );
}
