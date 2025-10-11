import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import DiscordRoles from "./discordrole";
import GuideSection from "./guide";

export default function Ritual() {
  return (
    <>
      <Navbar />
      <section className="w-full min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-100 py-28 px-6">
        <div className="max-w-6xl mx-auto space-y-20">
          
          {/* Header Section */}
          <div className="text-center space-y-4">
            <img
              src="/images/ritual.jpg"
              alt="Ritual Logo"
              className="w-28 h-28 mx-auto animate-pulse"
            />
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 text-transparent bg-clip-text">
              Ritual Network
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ritual is an open, permissionless network for AI infrastructure — bridging
              the gap between decentralized compute and frontier machine intelligence.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gray-800/40 backdrop-blur-xl border border-gray-700 p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-fuchsia-400">Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              AI today is concentrated in closed, centralized systems. Ritual’s mission is
              to **decentralize intelligence** — to make machine learning models, data, and
              compute verifiable, composable, and accessible to everyone. 
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              By turning AI into a public good, Ritual aims to make intelligence an
              open network primitive. From training and inference to coordination and
              access control, everything is powered by cryptography, transparency,
              and community-driven incentives.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              In short, Ritual is building the connective tissue between **AI and crypto** —
              where machine learning models live, interact, and evolve on-chain.
            </p>
          </div>

          {/* Core Technology */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-pink-400">
                Core Architecture
              </h2>
              <ul className="list-disc pl-6 text-gray-300 mt-4 space-y-2">
                <li>
                  <span className="text-white font-semibold">Infernet:</span>{" "}
                  A decentralized inference layer enabling on-chain AI execution.
                </li>
                <li>
                  <span className="text-white font-semibold">Nodes:</span>{" "}
                  Permissionless GPU operators providing compute and proofs of work.
                </li>
                <li>
                  <span className="text-white font-semibold">Cryptographic Verification:</span>{" "}
                  Ensures outputs are valid, tamper-proof, and reproducible.
                </li>
                <li>
                  <span className="text-white font-semibold">Modular AI Stack:</span>{" "}
                  Built for composability across protocols, agents, and LLMs.
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
                <source src="/videos/ritual.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Ecosystem Section */}
          <div className="bg-gray-800/40 backdrop-blur-xl border border-gray-700 p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-purple-400">Ecosystem & Use Cases</h2>
            <p className="text-gray-300 leading-relaxed">
              Ritual’s open AI infrastructure enables developers to integrate intelligence
              directly into decentralized systems. From DeFi to gaming to governance,
              Ritual unlocks use cases that merge machine reasoning with blockchain logic.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4 mt-6 text-gray-300">
              <li className="bg-gray-900/40 p-4 rounded-lg border border-gray-700">
                🧠 On-chain AI Agents
              </li>
              <li className="bg-gray-900/40 p-4 rounded-lg border border-gray-700">
                🔗 Autonomous Smart Contracts
              </li>
              <li className="bg-gray-900/40 p-4 rounded-lg border border-gray-700">
                🪙 Decentralized Inference Markets
              </li>
              <li className="bg-gray-900/40 p-4 rounded-lg border border-gray-700">
                ⚙️ Verifiable Model Serving
              </li>
            </ul>
            <div className="mt-10 border border-gray-700 rounded-xl overflow-hidden">
              <img
                src="/images/ritual/eco.png"
                alt="Ritual Ecosystem Overview"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Funding Section */}
          <div className="bg-gray-800/40 backdrop-blur-xl border border-gray-700 p-8 rounded-2xl shadow-lg text-center">
            <h2 className="text-3xl font-semibold mb-4 text-fuchsia-400">Funding & Backing</h2>
            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Ritual has raised over <span className="text-green-400 font-semibold">$25M</span> 
              from leading investors including <span className="text-white font-semibold">Polychain, 
              Placeholder, Archetype, and Robot Ventures</span>. This capital supports expansion of 
              Infernet, node operator incentives, and developer tooling.
            </p>
          </div>
          <section><DiscordRoles></DiscordRoles></section>
          <section><GuideSection></GuideSection></section>

          {/* Node Runner Info */}
          <div className="bg-gray-800/40 backdrop-blur-xl border border-gray-700 p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-purple-400">
              Node Runner Info
            </h2>
            <p className="text-gray-300 mb-4">
              Become part of Ritual’s decentralized AI backbone by operating a node. 
              Nodes handle model inference tasks, serve APIs, and validate compute proofs.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>🖥️ Requirements: GPU (8GB+ VRAM), 16GB RAM, 200GB SSD</li>
              <li>⚙️ Role: Execute and verify AI model outputs</li>
              <li>💰 Incentive: Earn $RITUAL tokens for valid inference cycles</li>
              <li>
                📄 Docs:{" "}
                <a
                  href="https://docs.ritual.net"
                  target="_blank"
                  className="text-fuchsia-400 underline"
                >
                  Read Node Setup Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Whitepaper Section */}
          <div className="bg-gray-800/40 backdrop-blur-xl border border-gray-700 p-8 rounded-2xl text-center shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-pink-400">
              Whitepaper & Documentation
            </h2>
            <p className="text-gray-300 mb-6">
              Learn more about Ritual’s cryptoeconomic design and decentralized inference model.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://ritualvisualized.com/#ritual-chain"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-lg bg-fuchsia-600 hover:bg-fuchsia-700 transition"
              >
                📄 Read Whitepaper
              </a>
              <a
                href="https://ritualvisualized.com/#ritual-chain"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
              >
                🧠 View GitHub
              </a>
            </div>
          </div>

          {/* Mainnet Status */}
          <div className="text-center py-12 border-t border-gray-800">
            <h2 className="text-3xl font-semibold text-fuchsia-400 mb-3">
              Mainnet Status
            </h2>
            <p className="text-gray-400">
              🚀 Ritual Infernet —{" "}
              <span className="text-pink-400 font-semibold">Mainnet Coming Soon</span>
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Join early to earn Node Operator rewards and testnet access roles.
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="https://x.com/ritualnet"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg bg-pink-600 hover:bg-pink-700 transition"
            >
              Follow on X
            </a>
            <a
              href="https://discord.gg/ritual"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition"
            >
              Join Discord
            </a>
            <a
              href="https://ritual.net"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg bg-fuchsia-600 hover:bg-fuchsia-700 transition"
            >
              Visit Website
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
