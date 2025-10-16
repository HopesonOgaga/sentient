import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import FogoGuide from "./guide";

export default function Fogo() {
  return (
    <>
      <Navbar />
      <section className="w-full min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-100 py-28 px-6">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Header Section */}
          <div className="text-center space-y-4">
            <img
              src="/images/fogo.jpg"
              alt="Fogo Logo"
              className="w-28 h-28 mx-auto animate-pulse"
            />
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-yellow-500 text-transparent bg-clip-text">
              Fogo Network
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A high-performance SVM Layer 1 built for trading, liquidity, and
              speed — blending exchange-grade efficiency with decentralized
              trust.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gray-800/40 backdrop-blur-xl border border-gray-700 p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-orange-400">
              Mission
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Fogo’s mission is to power the next generation of on-chain trading
              systems. Today’s decentralized exchanges face a core limitation:
              latency. Traditional L1s are not designed for high-frequency
              market structures, leaving a gap between centralized exchange
              performance and blockchain transparency. Fogo bridges that gap.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              At its core, Fogo is a Firedancer-based SVM Layer 1 — built on a
              low-latency validator client optimized for real-time execution.
              Through its multi-local consensus design, Fogo ensures validators
              synchronize by region, reducing propagation delay and enabling
              trading at sub-millisecond levels. This architecture allows
              builders to deploy high-speed orderbooks, AMMs, and trading
              protocols natively without compromising on decentralization.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              Beyond speed, Fogo is rethinking economic alignment. Its ecosystem
              prioritizes market integrity, fair MEV capture, and shared
              validator incentives — creating a base layer where liquidity,
              data, and computation coexist seamlessly. The goal: to become the
              financial backbone of real-time on-chain trading — where every
              transaction, every block, and every trade is powered by the flame.
            </p>
          </div>

          {/* Funding Section */}
          <div className="bg-gray-800/40 backdrop-blur-xl border border-gray-700 p-8 rounded-2xl shadow-lg text-center">
            <h2 className="text-3xl font-semibold mb-4 text-yellow-400">
              Funding & Growth
            </h2>
            <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Fogo has raised{" "}
              <span className="text-green-400 font-semibold">$5.5M</span> in
              seed funding from{" "}
              <span className="text-white font-semibold">CMS</span> and
              <span className="text-white font-semibold">
                {" "}
                Distributed Global
              </span>
              , followed by an{" "}
              <span className="text-orange-400 font-semibold">
                $8M public sale
              </span>
              at a{" "}
              <span className="text-yellow-400 font-semibold">$100M FDV</span>,
              supported by{" "}
              <span className="text-white font-semibold">
                3,000+ participants
              </span>
              . This capital fuels ecosystem expansion, validator optimization,
              and developer programs for the coming mainnet launch.
            </p>
          </div>

          {/* Core Technology */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-yellow-400">
                Core Technology
              </h2>
              <ul className="list-disc pl-6 text-gray-300 mt-4 space-y-2">
                <li>
                  <span className="text-white font-semibold">
                    Pure Firedancer:
                  </span>{" "}
                  Validator client delivering unmatched performance and
                  reliability.
                </li>
                <li>
                  <span className="text-white font-semibold">
                    Multi-Local Consensus:
                  </span>{" "}
                  Region-optimized validator design for ultra-low latency.
                </li>
                <li>
                  <span className="text-white font-semibold">
                    Curated Validators:
                  </span>{" "}
                  Ensures fairness, throughput, and MEV resistance.
                </li>
                <li>
                  <span className="text-white font-semibold">
                    Colocated Liquidity:
                  </span>{" "}
                  Bringing traders and market makers closer to execution.
                </li>
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-700 bg-black">
              <video
                className="w-full h-[420px] object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/fogo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Ecosystem Section */}
          <div className="bg-gray-800/40 backdrop-blur-xl border border-gray-700 p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-red-400">
              Ecosystem & Use Cases
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Fogo’s architecture enables builders to create high-frequency DeFi
              systems natively on-chain. By integrating a performance-optimized
              SVM and Firedancer client, Fogo delivers the infrastructure for
              developers to build beyond traditional DeFi limitations.
            </p>
            <p className="text-gray-300 mt-4 leading-relaxed">
              Core ecosystem layers include liquidity markets, execution
              engines, on-chain oracles, and data streams — all interoperable
              within the Fogo runtime. Native integration with traders, market
              makers, and protocol devs fosters a vibrant, self-sustaining
              network for real-time finance.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4 mt-6 text-gray-300">
              <li className="bg-gray-900/40 p-4 rounded-lg border border-gray-700">
                ⚡ High-Frequency DEX Protocols
              </li>
              <li className="bg-gray-900/40 p-4 rounded-lg border border-gray-700">
                💹 On-Chain Derivatives Platforms
              </li>
              <li className="bg-gray-900/40 p-4 rounded-lg border border-gray-700">
                📊 Real-Time Market Feeds
              </li>
              <li className="bg-gray-900/40 p-4 rounded-lg border border-gray-700">
                🧠 Liquidity Vaults & Automated Trading Systems
              </li>
            </ul>
            {/* Ecosystem Image Placeholder */}
            <div className="mt-10 border border-gray-700 rounded-xl overflow-hidden">
              <img
                src="/images/fogo/fogo.jpeg"
                alt="Fogo Ecosystem Overview"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <section>
            <FogoGuide></FogoGuide>
          </section>
          {/* Discord Roles (same as before) */}
          <div className="bg-gray-800/40 backdrop-blur-xl border border-gray-700 p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-6 text-red-400 text-center">
              Discord Role Hierarchy
            </h2>
            <p className="text-gray-400 text-center mb-10 max-w-3xl mx-auto">
              Every flame has a story. Here’s how the fire spreads within the
              Fogo community — from your first spark to the ultimate blaze.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "🔓",
                  title: "Firestarter",
                  desc: "Verified entry point — your initiation into the flame.",
                },
                {
                  icon: "💨",
                  title: "Smoke",
                  desc: "Active and integrated member shaping daily culture.",
                },
                {
                  icon: "⚡",
                  title: "Spark",
                  desc: "Consistent contributor pushing community energy forward.",
                },
                {
                  icon: "🔥",
                  title: "Ember",
                  desc: "Deep believer actively involved in shaping Fogo’s growth.",
                },
                {
                  icon: "🧱",
                  title: "Flame + FOG",
                  desc: "Server OGs — early believers who built the foundation.",
                },
                {
                  icon: "❤️‍🔥",
                  title: "Giga Blaze",
                  desc: "Rare, elite contributors with unwavering conviction.",
                },
                {
                  icon: "🌍",
                  title: "Regional Mod",
                  desc: "Regional language and culture leads bridging communities.",
                },
                {
                  icon: "🔮",
                  title: "Pythenians",
                  desc: "Reserved for holders of Pythenians — Fogo’s oracle core.",
                },
                {
                  icon: "👨‍🍳",
                  title: "Chef",
                  desc: "Creative force — artists who shape Fogo’s visual story.",
                },
                {
                  icon: "🔷",
                  title: "Blue Ember",
                  desc: "Traders and analysts fueling Fogo’s financial insights.",
                },
                {
                  icon: "🎤",
                  title: "Fogo Host",
                  desc: "Community hosts keeping events and vibes alive.",
                },
                {
                  icon: "🧑‍🎨",
                  title: "Flame Crafter",
                  desc: "Cult-tier creatives crafting Fogo’s global identity.",
                },
              ].map((role, i) => (
                <div
                  key={i}
                  className="bg-gray-900/40 border border-gray-700 rounded-xl p-5 hover:bg-gray-900/70 transition"
                >
                  <h3 className="text-xl font-semibold text-orange-400 flex items-center gap-2">
                    <span>{role.icon}</span> {role.title}
                  </h3>
                  <p className="text-gray-400 mt-2 text-sm">{role.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mainnet Status */}
          <div className="text-center py-12 border-t border-gray-800">
            <h2 className="text-3xl font-semibold text-orange-400 mb-3">
              Mainnet Status
            </h2>
            <p className="text-gray-400">
              🚀 Fogo Mainnet —{" "}
              <span className="text-yellow-400 font-semibold">
                To Be Announced
              </span>
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Stay tuned for official updates and pre-mainnet missions.
            </p>
          </div>
          {/* Game Entry Section */}
          <div className="text-center py-16">
            <h2 className="text-3xl font-semibold text-orange-400 mb-6">
              Ready to test your Fogo knowledge?
            </h2>
            <p className="text-gray-400 mb-8">
              Step into the flame and prove your mastery in the ultimate Fogo
              Trivia Challenge.
            </p>
            <a
              href="/fogogame" // 🔥 change this to your trivia route
              className="inline-block px-10 py-4 bg-gradient-to-r from-orange-500 via-red-600 to-yellow-500 
               text-white text-lg font-semibold rounded-full shadow-lg hover:scale-105 
               transition transform hover:shadow-xl"
            >
              Play Trivia Game
            </a>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="https://x.com/fogo_io"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg bg-orange-600 hover:bg-orange-700 transition"
            >
              Follow on X
            </a>
            <a
              href="https://discord.gg/fogo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition"
            >
              Join Discord
            </a>
            <a
              href="https://www.fogo.io/litepaper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg bg-yellow-600 hover:bg-yellow-700 transition"
            >
              Read litepaper
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
