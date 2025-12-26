import React, { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  onSnapshot,
  orderBy,
  query,
  limit,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../db/firebase";

const LB_COLLECTION = "community_miden_trivia_leaderboard";
const CHAT_COLLECTION = "community_miden_trivia_chat";

const QUESTIONS = [
  {
    question: "What is Miden primarily designed for?",
    options: ["NFT marketplaces", "Zero-knowledge smart contracts", "Social media apps", "GameFi only"],
    answer: 1,
  },
  {
    question: "Which virtual machine does Miden use?",
    options: ["EVM", "WASM", "Move VM", "Miden VM"],
    answer: 3,
  },
  {
    question: "What is a core goal of Miden?",
    options: ["High gas fees", "Centralized execution", "Private & scalable computation", "Off-chain only apps"],
    answer: 2,
  },
];

export default function MidenTriviaGame() {
  const [username, setUsername] = useState("");
  const [gameStarted, setGameStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(15);
  const [finished, setFinished] = useState(false);
  const [leaderboard, setLeaderboard] = useState([]);
  const [chatUser, setChatUser] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // Timer Logic
  useEffect(() => {
    if (!gameStarted || finished) return;
    if (time === 0) {
      moveNext(score);
      return;
    }
    const t = setInterval(() => setTime((prev) => prev - 1), 1000);
    return () => clearInterval(t);
  }, [time, finished, gameStarted]);

  // Leaderboard Listener (Fixed with error handling)
  useEffect(() => {
    const q = query(collection(db, LB_COLLECTION), orderBy("score", "desc"), limit(10));
    const unsub = onSnapshot(q, (snap) => {
      setLeaderboard(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    }, (err) => console.error("LB Error: Check if Index is created.", err));
    return () => unsub();
  }, []);

  // Chat Listener
  useEffect(() => {
    const q = query(collection(db, CHAT_COLLECTION), orderBy("createdAt", "asc"), limit(50));
    const unsub = onSnapshot(q, (snap) => {
      setMessages(snap.docs.map((d) => d.data()));
    });
    return () => unsub();
  }, []);

  const startGame = () => {
    if (username.trim()) setGameStarted(true);
  };

  const answerQuestion = (choice) => {
    const correct = choice === QUESTIONS[index].answer;
    const newScore = correct ? score + 10 : score;
    setScore(newScore);
    moveNext(newScore);
  };

  const moveNext = (finalScore) => {
    if (index + 1 < QUESTIONS.length) {
      setIndex((i) => i + 1);
      setTime(15);
    } else {
      setFinished(true);
      saveScore(finalScore);
    }
  };

  const saveScore = async (finalScore) => {
    try {
      await addDoc(collection(db, LB_COLLECTION), {
        username: String(username),
        score: Number(finalScore), // Forced Number for correct sorting
        createdAt: serverTimestamp(),
      });
    } catch (e) {
      console.error("Save failed", e);
    }
  };

  const resetGame = () => {
    setIndex(0);
    setScore(0);
    setTime(15);
    setFinished(false);
    setGameStarted(true);
  };

  const sendMessage = async () => {
    if (!chatUser.trim() || !message.trim()) return;
    await addDoc(collection(db, CHAT_COLLECTION), {
      user: chatUser,
      text: message,
      createdAt: serverTimestamp(),
    });
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 grid gap-6 md:grid-cols-3">
      {/* TRIVIA SECTION */}
      <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
        <h2 className="text-2xl font-bold mb-4 text-orange-400">🧠 Miden Trivia</h2>

        {!gameStarted ? (
          <div className="space-y-4">
            <p className="text-zinc-400 text-sm">Enter your name to start the challenge:</p>
            <input
              placeholder="Username"
              className="w-full p-2 bg-black border border-zinc-700 rounded text-white"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={startGame} className="w-full bg-orange-500 p-3 rounded-lg font-bold">START GAME</button>
          </div>
        ) : !finished ? (
          <>
            <div className="flex justify-between mb-4">
              <span className="text-orange-400 font-mono">⏱️ {time}s</span>
              <span className="text-zinc-400">Q: {index + 1}/{QUESTIONS.length}</span>
            </div>
            <p className="text-lg mb-6">{QUESTIONS[index].question}</p>
            <div className="grid gap-3">
              {QUESTIONS[index].options.map((opt, i) => (
                <button key={i} onClick={() => answerQuestion(i)} className="bg-zinc-800 hover:bg-orange-600 p-3 rounded-lg text-left transition">
                  {opt}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center space-y-6">
            <h3 className="text-3xl font-bold text-orange-400">Finish! 🚀</h3>
            <p className="text-xl">Score: <span className="text-orange-400">{score}</span></p>
            <div className="grid gap-2">
              <button onClick={resetGame} className="bg-orange-500 p-3 rounded-lg font-bold">PLAY AGAIN</button>
              <button onClick={() => window.location.href = "/"} className="bg-zinc-700 p-3 rounded-lg font-bold">EXIT TO HOME</button>
            </div>
          </div>
        )}
      </div>

      {/* LEADERBOARD SECTION */}
      <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
        <h2 className="text-2xl font-bold mb-4 text-orange-400 text-center">🏆 Top 10</h2>
        <div className="space-y-2">
          {leaderboard.map((u, i) => (
            <div key={i} className={`flex justify-between p-2 rounded ${u.username === username ? 'bg-orange-900/30 border border-orange-500' : 'bg-black/40'}`}>
              <span>{i + 1}. {u.username}</span>
              <span className="font-bold text-orange-400">{u.score}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CHAT SECTION */}
      <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 flex flex-col h-[500px] md:h-auto">
        <h2 className="text-2xl font-bold mb-4 text-orange-400">💬 Chat</h2>
        <div className="flex-1 overflow-y-auto space-y-2 mb-4 pr-2">
          {messages.map((m, i) => (
            <div key={i} className="text-sm bg-black/30 p-2 rounded">
              <span className="text-orange-400 font-bold">{m.user}:</span> {m.text}
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <input
            placeholder="Chat as..."
            className="w-full p-2 bg-black border border-zinc-700 rounded text-xs"
            value={chatUser}
            onChange={(e) => setChatUser(e.target.value)}
          />
          <div className="flex gap-2">
            <input
              placeholder="Message..."
              className="flex-1 p-2 bg-black border border-zinc-700 rounded text-sm"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button onClick={sendMessage} className="bg-orange-500 px-4 rounded-lg">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}