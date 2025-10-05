import React, { useEffect, useState } from "react";
import CysicVideoEmbed from "../videos/twitter";
import CysicTweet from "../videos/twitter";

export default function Cysic() {
  const targetDate = new Date("2025-10-20T00:00:00");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, mins, secs });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <img
            src="/images/cysiclogo.jpg"
            alt="Cysic Logo"
            className="w-28 h-28 mx-auto animate-pulse"
          />
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-transparent bg-clip-text">
            Cysic Network
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hardware-accelerated ZK proof infrastructure built for the speed,
            scalability, and decentralization the next generation of blockchains
            demand.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-gray-800/40 backdrop-blur-xl border border-gray-700 p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-semibold mb-4 text-cyan-400">Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            Zero-knowledge technology promises a trustless, private internet —
            but it’s bottlenecked by computation. Cysic was founded to break
            this limit. By designing custom hardware that drastically
            accelerates proof generation, it enables ZK rollups, AI, and privacy
            systems to scale beyond software constraints. In short: **Cysic
            turns cryptographic theory into real-world speed**.
          </p>
        </div>

        {/* Technology Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-blue-400">
              Core Technology
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Cysic’s design blends hardware innovation with cryptographic
              precision:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mt-4 space-y-2">
              <li>
                <span className="text-white font-semibold">
                  ZK Hardware Acceleration:
                </span>{" "}
                Proofs generated up to 20× faster than GPUs.
              </li>
              <li>
                <span className="text-white font-semibold">
                  Parallel Circuits:
                </span>{" "}
                Multiple ZK tasks executed simultaneously with no bottleneck.
              </li>
              <li>
                <span className="text-white font-semibold">
                  Proof Compression:
                </span>{" "}
                Reduces bandwidth and verification cost on-chain.
              </li>
              <li>
                <span className="text-white font-semibold">
                  Energy Efficiency:
                </span>{" "}
                Hardware consumes 70% less power per proof cycle.
              </li>
            </ul>
            <p className="text-gray-400 mt-4 italic">
              “It’s like swapping a warehouse of GPUs for one pocket-sized ZK
              super-engine.”
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-700 bg-black">
            <video
              className="w-full h-[420px] object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/cysic.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Ecosystem */}
        <div className="bg-gray-800/40 backdrop-blur-xl border border-gray-700 p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-semibold mb-4 text-indigo-400">
            Ecosystem & Use Cases
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Cysic is powering a growing ecosystem of zero-knowledge builders and
            protocols. From L2 rollups to verifiable AI systems, its hardware
            architecture accelerates every layer of the ZK stack:
          </p>
          <ul className="grid sm:grid-cols-2 gap-4 mt-4 text-gray-300">
            <li className="bg-gray-900/40 p-4 rounded-lg border border-gray-700">
              ⚙️ ZK Rollups & Validiums
            </li>
            <li className="bg-gray-900/40 p-4 rounded-lg border border-gray-700">
              🧠 Verifiable AI & ML
            </li>
            <li className="bg-gray-900/40 p-4 rounded-lg border border-gray-700">
              🔐 Privacy Applications
            </li>
            <li className="bg-gray-900/40 p-4 rounded-lg border border-gray-700">
              🌐 Cross-chain Verification
            </li>
          </ul>
        </div>

        {/* Countdown */}
        <div className="text-center py-12 border-t border-gray-800">
          <h2 className="text-3xl font-semibold text-cyan-400 mb-3">
            Mainnet Countdown
          </h2>
          <p className="text-gray-400 mb-6">
            The <span className="text-white font-semibold">@cysic_xyz</span>{" "}
            mainnet launches on
            <span className="text-blue-400 font-semibold">
              {" "}
              October 20th
            </span>{" "}
            🚀
          </p>
          <div className="flex justify-center gap-6 text-2xl font-bold text-white">
            <div className="bg-gray-900 px-4 py-3 rounded-xl border border-gray-700">
              {timeLeft.days}
              <span className="text-gray-500 text-sm block">Days</span>
            </div>
            <div className="bg-gray-900 px-4 py-3 rounded-xl border border-gray-700">
              {timeLeft.hours}
              <span className="text-gray-500 text-sm block">Hrs</span>
            </div>
            <div className="bg-gray-900 px-4 py-3 rounded-xl border border-gray-700">
              {timeLeft.mins}
              <span className="text-gray-500 text-sm block">Mins</span>
            </div>
            <div className="bg-gray-900 px-4 py-3 rounded-xl border border-gray-700">
              {timeLeft.secs}
              <span className="text-gray-500 text-sm block">Secs</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Eligibility: Testers, Yappers & Discord role holders.
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex justify-center gap-5">
          <a
            href="https://x.com/cysic_xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
          >
            Follow on X
          </a>
          <a
            href="https://discord.gg/cysic"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition"
          >
            Join Discord
          </a>
        </div>
      </div>
    </section>
  );
}
