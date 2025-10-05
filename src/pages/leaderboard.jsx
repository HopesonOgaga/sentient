// src/pages/LeaderboardPage.jsx
import React, { useEffect, useState } from "react";
import { db } from "../db/firebase";
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
} from "firebase/firestore";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const LeaderboardPage = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "cysicLeaderboard"),
      orderBy("score", "desc"),
      limit(20)
    );
    const unsub = onSnapshot(q, (snap) => {
      setLeaderboard(snap.docs.map((doc) => doc.data()));
    });
    return () => unsub();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <div className="h-screen w-full bg-gradient-to-br from-pink-400 via-pink-500 to-pink-700 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-3xl">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
            🏆 Leaderboard
          </h1>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-pink-100 text-gray-700">
                  <th className="border border-gray-200 px-4 py-2 text-left">
                    Rank
                  </th>
                  <th className="border border-gray-200 px-4 py-2 text-left">
                    Name
                  </th>
                  <th className="border border-gray-200 px-4 py-2 text-left">
                    Score
                  </th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((entry, idx) => (
                  <tr
                    key={idx}
                    className="odd:bg-white even:bg-pink-50 hover:bg-pink-100 transition"
                  >
                    <td className="border border-gray-200 px-4 py-2">
                      {idx + 1}
                    </td>
                    <td className="border border-gray-200 px-4 py-2">
                      {entry.username || "Anonymous"}
                    </td>
                    <td className="border border-gray-200 px-4 py-2">
                      {entry.score}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default LeaderboardPage;
