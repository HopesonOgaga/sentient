// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import { db } from "../db/firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const moods = [
  { mood: "Happy", image: "/images/happy.jpeg" },
  { mood: "Excited", image: "/images/excited.jpeg" },
  { mood: "Neutral", image: "/images/neutral.jpeg" },
  { mood: "Tired", image: "/images/tired.jpeg" },
  { mood: "Worried", image: "/images/worried.jpeg" },
];

function SentientFeedback() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "submissions"), orderBy("createdAt", "desc"));
    return onSnapshot(q, (snapshot) => {
      setSubmissions(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedMood || !feedback.trim()) return;

    await addDoc(collection(db, "submissions"), {
      mood: selectedMood.mood,
      image: selectedMood.image,
      feedback: feedback.trim(),
      createdAt: serverTimestamp(),
    });

    setFeedback("");
    setSelectedMood(null);
  };

  return (
    <section className="min-h-screen">
      <Navbar />

      <main className="min-h-screen pt-20 bg-gradient-to-b from-pink-300 via-white to-gray-100 flex flex-col items-center p-6">
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-2 text-center">
          Sentient Community Feedback
        </h1>
        <p className="text-gray-600 mb-8 text-center">
          Share your mood and see how others feel in the community.
        </p>

        <div className="w-full max-w-2xl bg-white shadow rounded-2xl p-6 mb-6 text-center">
          <h2 className="font-semibold text-gray-800 mb-3">This Week’s Mood</h2>
          {selectedMood ? (
            <img
              src={selectedMood.image}
              alt={selectedMood.mood}
              className="h-40 mx-auto rounded-lg object-contain"
            />
          ) : (
            <p className="text-gray-500">Pick a mood below</p>
          )}
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl bg-white shadow rounded-2xl p-6 mb-6 space-y-6"
        >
          <div className="grid grid-cols-2 gap-3">
            {moods.map((m, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setSelectedMood(m)}
                className={`py-2 rounded-full border transition ${
                  selectedMood?.mood === m.mood
                    ? "bg-pink-500 text-white border-pink-600"
                    : "bg-white border-gray-300 text-gray-800 hover:bg-pink-400 hover:text-white"
                }`}
              >
                {m.mood}
              </button>
            ))}
          </div>

          <input
            type="text"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Write a quick note..."
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-300"
          />

          <button
            type="submit"
            className="w-full h-12 rounded-full text-white font-semibold bg-gray-900 hover:opacity-80"
          >
            Submit
          </button>
        </form>

        {submissions.length > 0 && (
          <div className="w-full max-w-2xl bg-white shadow rounded-2xl p-6 space-y-4 mb-12">
            <h2 className="font-semibold text-gray-800">Community Sentiment</h2>
            {submissions.map((entry) => (
              <div
                key={entry.id}
                className="flex items-start gap-4 p-4 border rounded-lg bg-gray-50"
              >
                <img
                  src={entry.image}
                  alt={entry.mood}
                  className="w-14 h-14 rounded-full object-cover border"
                />
                <div>
                  <p className="font-semibold">{entry.mood}</p>
                  <p className="text-gray-600">{entry.feedback}</p>
                  <p className="text-xs text-gray-400">
                    {entry.createdAt?.toDate
                      ? entry.createdAt.toDate().toLocaleString()
                      : ""}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </section>
  );
}

export default SentientFeedback;
