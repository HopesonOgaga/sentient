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
    question: "What core technology allows Miden to verify computations without revealing underlying data?",
    options: ["Proof of Work", "Zero-knowledge proofs", "Proof of Stake", "Federated learning"],
    answer: 1,
  },
  {
    question: "Miden moves transaction execution from network nodes to what location?",
    options: ["Mainframe computers", "User devices", "Central servers", "Blockchain validators"],
    answer: 1,
  },
  {
    question: "Which rollup model does Miden implement?",
    options: ["Optimistic rollup", "Plasma rollup", "Zero-knowledge rollup (ZK rollup)", "Sharding"],
    answer: 2,
  },
  {
    question: "In Miden, what is submitted to the chain instead of raw transaction data?",
    options: ["Signed transactions", "Proofs of execution", "Account balances", "Encrypted payloads"],
    answer: 1,
  },
  {
    question: "What concept describes the decentralization of computation across users in Miden?",
    options: ["Edge execution", "Validator pooling", "Sharding", "Off-chain batching"],
    answer: 0,
  },
  {
    question: "Which base layer’s security does Miden leverage as a rollup?",
    options: ["Bitcoin", "Solana", "Ethereum", "Cosmos"],
    answer: 2,
  },
  {
    question: "Which programming language ecosystem does Miden support for smart contracts?",
    options: ["Solidity only", "Rust and WASM", "Python", "JavaScript"],
    answer: 1,
  },
  {
    question: "Miden’s VM automatically generates proofs using what type of cryptographic system?",
    options: ["SNARKs", "STARKs", "Hashing", "ECDSA"],
    answer: 1,
  },
  {
    question: "What paradigm does Miden use to represent accounts as independent state machines?",
    options: ["Actor model", "Client-server model", "Monolithic VM", "Central ledger"],
    answer: 0,
  },
  {
    question: "Miden’s architecture helps reduce which major burden on blockchain nodes?",
    options: ["Consensus time", "State bloat", "Mining fees", "Network latency"],
    answer: 1,
  },
  {
    question: "What is a unique object in Miden that holds assets and programmable logic?",
    options: ["UTXO", "Note", "Token", "Account blob"],
    answer: 1,
  },
  {
    question: "How does Miden maintain privacy without exposing transaction details on-chain?",
    options: ["Encryption only", "Proof broadcast", "Zero-knowledge proofs", "Multi-sig verification"],
    answer: 2,
  },
  {
    question: "What benefit does edge execution bring to users with regards to fees?",
    options: ["Higher fees", "Lower fees", "Variable fees", "Static fees"],
    answer: 1,
  },
  {
    question: "Which component verifies the proofs submitted by users in Miden?",
    options: ["Proving servers", "Validators", "Sequencers", "Miners"],
    answer: 1,
  },
  {
    question: "What advantage does Miden’s proof verification model offer over traditional execution?",
    options: ["Faster block times", "No need for global re-execution", "Multiple signatures", "Sharding"],
    answer: 1,
  },
  {
    question: "What type of accounts does Miden support that exist only off-chain?",
    options: ["Public accounts", "Private accounts", "Hybrid accounts", "Nested accounts"],
    answer: 1,
  },
  {
    question: "Why is edge execution considered beneficial for scalability?",
    options: ["Centralizes execution", "Parallelizes computation", "Deletes transaction data", "Requires fewer nodes"],
    answer: 1,
  },
  {
    question: "What does Miden use to enable both public and private interactions?",
    options: ["Permissioned bridges", "Hybrid model", "Delegate proof lists", "Oracle feeds"],
    answer: 1,
  },
  {
    question: "In Miden’s architecture, which entity is responsible for proof generation?",
    options: ["Validators only", "Users’ devices", "Sequencers", "Central provers"],
    answer: 1,
  },
  {
    question: "What role do validators play in Miden?",
    options: ["Execute all transactions", "Verify proofs", "Store private data", "Generate user keys"],
    answer: 1,
  },
  {
    question: "Which type of smart contract compilation does Miden support?",
    options: ["Direct bytecode", "Rust → WASM", "Python bytecode", "Native SQL"],
    answer: 1,
  },
  {
    question: "Edge execution moves computation from the network to where?",
    options: ["Cloud servers", "User devices", "Central repository", "Third-party API"],
    answer: 1,
  },
  {
    question: "Miden’s notes are similar to which classic blockchain concept?",
    options: ["Account balances", "UTXO", "Delegated proof", "State trees"],
    answer: 1,
  },
  {
    question: "Which aspect of privacy does Miden’s design address?",
    options: ["Anonymity only", "Verifiable correctness without revealing data", "Encryption only", "Central key storage"],
    answer: 1,
  },
  {
    question: "What happens after a user generates a zero-knowledge proof locally?",
    options: ["It is broadcast to peers", "Sent to validators for verification", "Stored locally only", "Discarded"],
    answer: 1,
  },
  {
    question: "Which advantage does local computation provide in Miden?",
    options: ["More gas fees", "Fewer proofs", "Reduced redundancy", "Slower confirmations"],
    answer: 2,
  },
  {
    question: "The Miden VM is designed to support which compilation target?",
    options: ["EVM", "WASM", "Native C", "Java bytecode"],
    answer: 1,
  },
  {
    question: "How does Miden’s execution model impact storage requirements?",
    options: ["Increases total state", "No change", "Minimizes chain state", "Randomizes blocks"],
    answer: 2,
  },
  {
    question: "Which key benefit emerges from edge execution plus ZK proofs?",
    options: ["Central sequencing", "Privacy and scalability", "Multi-chain bridges", "Heavy re-execution"],
    answer: 1,
  },
  {
    question: "The actor model in Miden allows accounts to do what?",
    options: ["Increase fees", "Maintain own state independently", "Merge accounts", "Disable proofs"],
    answer: 1,
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

  useEffect(() => {
    if (!gameStarted || finished) return;
    if (time === 0) {
      moveNext(score);
      return;
    }
    const t = setInterval(() => setTime((prev) => prev - 1), 1000);
    return () => clearInterval(t);
  }, [time, finished, gameStarted]);

  useEffect(() => {
    const q = query(collection(db, LB_COLLECTION), orderBy("score", "desc"), limit(10));
    const unsub = onSnapshot(q, (snap) => {
      setLeaderboard(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    }, (err) => console.error("LB Error", err));
    return () => unsub();
  }, []);

  useEffect(() => {
    const q = query(collection(db, CHAT_COLLECTION), orderBy("createdAt", "asc"), limit(50));
    const unsub = onSnapshot(q, (snap) => {
      setMessages(snap.docs.map((d) => d.data()));
    });
    return () => unsub();
  }, []);

  const startGame = () => {
    if (username.trim()) {
      setGameStarted(true);
      if (!chatUser) setChatUser(username); // Auto-fill chat name
    }
  };

  const answerQuestion = (choice, e) => {
    // BUG FIX: Manually remove focus from the button so it doesn't stay highlighted on mobile
    if (e && e.currentTarget) e.currentTarget.blur();

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
        score: Number(finalScore),
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
    <div className="min-h-screen bg-black text-white p-4 grid gap-6 md:grid-cols-3 font-sans">
      {/* TRIVIA SECTION */}
      <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 shadow-xl">
        <h2 className="text-2xl font-bold mb-4 text-orange-400">🧠 Miden Trivia</h2>

        {!gameStarted ? (
          <div className="space-y-4">
            <p className="text-zinc-400 text-sm">Enter your name to start the challenge:</p>
            <input
              placeholder="Username"
              className="w-full p-2 bg-black border border-zinc-700 rounded text-white focus:outline-none focus:border-orange-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={startGame} className="w-full bg-orange-500 hover:bg-orange-600 p-3 rounded-lg font-bold transition">START GAME</button>
          </div>
        ) : !finished ? (
          <div key={`question-${index}`}> {/* BUG FIX: Key forces React to refresh the whole block per question */}
            <div className="flex justify-between mb-4">
              <span className="text-orange-400 font-mono font-bold">⏱️ {time}s</span>
              <span className="text-zinc-400 text-sm">Question {index + 1} of {QUESTIONS.length}</span>
            </div>
            
            <div className="h-2 w-full bg-zinc-800 rounded-full mb-6">
              <div 
                className="h-full bg-orange-500 rounded-full transition-all duration-500" 
                style={{ width: `${((index + 1) / QUESTIONS.length) * 100}%` }}
              />
            </div>

            <p className="text-lg font-medium mb-6 leading-relaxed">{QUESTIONS[index].question}</p>
            
            <div className="grid gap-3">
              {QUESTIONS[index].options.map((opt, i) => (
                <button 
                  key={`${index}-${i}`} // BUG FIX: Unique key per question/option combo
                  onClick={(e) => answerQuestion(i, e)} 
                  className="bg-zinc-800 hover:bg-orange-500/20 active:bg-orange-600 border border-zinc-700 hover:border-orange-500 p-4 rounded-lg text-left transition-all"
                >
                  <span className="inline-block w-8 h-8 mr-3 text-center leading-8 bg-zinc-700 rounded-full text-sm font-bold">
                    {String.fromCharCode(65 + i)}
                  </span>
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center space-y-6 py-8">
            <div className="text-5xl">🚀</div>
            <h3 className="text-3xl font-bold text-orange-400">Mission Complete</h3>
            <div className="bg-black/40 p-6 rounded-lg border border-zinc-800">
              <p className="text-zinc-400 uppercase tracking-widest text-xs mb-1">Final Score</p>
              <p className="text-5xl font-black text-white">{score}</p>
            </div>
            <div className="grid gap-3 pt-4">
              <button onClick={resetGame} className="bg-orange-500 hover:bg-orange-600 p-3 rounded-lg font-bold transition">PLAY AGAIN</button>
              <button onClick={() => window.location.href = "/"} className="bg-zinc-800 hover:bg-zinc-700 p-3 rounded-lg font-bold transition text-zinc-300">EXIT TO HOME</button>
            </div>
          </div>
        )}
      </div>

      {/* LEADERBOARD SECTION */}
      <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 overflow-hidden flex flex-col">
        <h2 className="text-2xl font-bold mb-4 text-orange-400 text-center flex items-center justify-center gap-2">
          🏆 Top Agents
        </h2>
        <div className="flex-1 space-y-2 overflow-y-auto">
          {leaderboard.map((u, i) => (
            <div 
              key={i} 
              className={`flex justify-between items-center p-3 rounded-lg transition-all ${
                u.username === username ? 'bg-orange-500/20 border border-orange-500/50' : 'bg-black/40 border border-transparent'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full ${i < 3 ? 'bg-orange-500 text-black' : 'bg-zinc-700 text-zinc-400'}`}>
                  {i + 1}
                </span>
                <span className="font-medium truncate max-w-[120px]">{u.username}</span>
              </div>
              <span className="font-mono font-bold text-orange-400">{u.score}</span>
            </div>
          ))}
          {leaderboard.length === 0 && <p className="text-center text-zinc-500 mt-10 text-sm">No scores yet. Be the first!</p>}
        </div>
      </div>

      {/* CHAT SECTION */}
      <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 flex flex-col h-[500px] md:h-auto shadow-2xl">
        <h2 className="text-2xl font-bold mb-4 text-orange-400">💬 Comms</h2>
        <div className="flex-1 overflow-y-auto space-y-3 mb-4 pr-2 scrollbar-hide">
          {messages.map((m, i) => (
            <div key={i} className="animate-fadeIn">
              <div className="flex items-baseline gap-2">
                <span className="text-orange-400 font-bold text-xs uppercase">{m.user}</span>
                <span className="text-[10px] text-zinc-600 font-mono">
                  {m.createdAt?.toDate ? new Date(m.createdAt.toDate()).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : ''}
                </span>
              </div>
              <p className="text-sm text-zinc-300 bg-black/20 p-2 rounded-r-lg rounded-bl-lg mt-1 border-l-2 border-orange-500">
                {m.text}
              </p>
            </div>
          ))}
        </div>
        
        <div className="space-y-2 pt-2 border-t border-zinc-800">
          {!username && (
            <input
              placeholder="Chat Display Name"
              className="w-full p-2 bg-black border border-zinc-700 rounded text-xs focus:border-orange-500 focus:outline-none"
              value={chatUser}
              onChange={(e) => setChatUser(e.target.value)}
            />
          )}
          <div className="flex gap-2">
            <input
              placeholder="Type message..."
              className="flex-1 p-2 bg-black border border-zinc-700 rounded text-sm focus:border-orange-500 focus:outline-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button 
              onClick={sendMessage} 
              className="bg-orange-500 hover:bg-orange-600 px-4 rounded-lg font-bold transition active:scale-95"
            >
              🚀
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}