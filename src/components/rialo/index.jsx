import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import RialoDiscordRoles from "./roles";
import HowToContribute from "./contribute";


export default function Rialo() {
  return (
    <>
      <Navbar />
      <section className="w-full min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-100 py-28 px-6">
        <div className="max-w-6xl mx-auto space-y-20">

          {/* Header Section */}
          <div className="text-center space-y-4">
            <img
              src="/images/riaol/riaol.jpg"
              alt="Rialo Logo"
              className="w-28 h-28 mx-auto animate-pulse"
            />
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 text-transparent bg-clip-text">
              Rialo Network
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Rialo is a next-generation blockchain platform that makes real-world assets truly programmable and reactive on-chain.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gray-800/40 backdrop-blur-xl border border-gray-700 p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-fuchsia-400">Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              Rialo’s mission is to bridge the gap between real-world assets and blockchain by creating dynamic, event-driven, and automated decentralized protocols.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              By integrating live data, real-world verification, and programmable finance, Rialo unlocks a new class of decentralized applications for trading, insurance, real estate, and beyond.
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
                  <span className="text-white font-semibold">RWA Tokenization:</span>{" "}
                  Real-world assets become programmable and responsive on-chain.
                </li>
                <li>
                  <span className="text-white font-semibold">Event-Driven Smart Contracts:</span>{" "}
                  Automate actions without off-chain bots.
                </li>
                <li>
                  <span className="text-white font-semibold">Real-Time Data Integration:</span>{" "}
                  Connect to APIs, registries, and payment systems natively.
                </li>
                <li>
                  <span className="text-white font-semibold">High-Performance Trading:</span>{" "}
                  Sub-second updates and scalable markets.
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
                <source src="/videos/rialo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Ecosystem & Use Cases */}
          <div className="bg-gray-800/40 backdrop-blur-xl border border-gray-700 p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-purple-400">Ecosystem & Use Cases</h2>
            <p className="text-gray-300 leading-relaxed">
              Rialo enables decentralized finance, insurance, real estate, commodities, and IP markets with dynamic, automated, and verifiable on-chain interactions.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4 mt-6 text-gray-300">
              <li className="bg-gray-900/40 p-4 rounded-lg border border-gray-700">💰 Tokenized Bonds & Credit</li>
              <li className="bg-gray-900/40 p-4 rounded-lg border border-gray-700">🏠 Dynamic Real Estate Assets</li>
              <li className="bg-gray-900/40 p-4 rounded-lg border border-gray-700">📊 Automated Market Derivatives</li>
              <li className="bg-gray-900/40 p-4 rounded-lg border border-gray-700">🌱 Environmental & Sustainability Tokens</li>
            </ul>
            <div className="mt-10 border border-gray-700 rounded-xl overflow-hidden">
              <img
                src="/images/rialo/eco.png"
                alt="Rialo Ecosystem Overview"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Funding Section */}
          <div className="bg-gray-800/40 backdrop-blur-xl border border-gray-700 p-8 rounded-2xl shadow-lg text-center">
            <h2 className="text-3xl font-semibold mb-4 text-fuchsia-400">Funding & Backing</h2>
            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Rialo has raised over <span className="text-green-400 font-semibold">$20M</span> 
              from leading investors, providing a strong war chest to bring this vision to market.
            </p>
          </div>

          {/* Discord Roles & Guide */}
         

          {/* Node / Developer Info */}
          <div className="bg-gray-800/40 backdrop-blur-xl border border-gray-700 p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-purple-400">Developer & Node Info</h2>
            <p className="text-gray-300 mb-4">
              Join Rialo’s decentralized network by running nodes, automating smart contracts, or contributing APIs for real-world data integration.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>🖥️ Requirements: High-performance GPU, 16GB+ RAM, reliable internet</li>
              <li>⚙️ Role: Execute smart contract events & validate RWA data</li>
              <li>💰 Incentive: Earn tokens for network contributions</li>
            </ul>
          </div>
          <RialoDiscordRoles></RialoDiscordRoles>
          <HowToContribute></HowToContribute>
          {/* Whitepaper Section */}
          <div className="bg-gray-800/40 backdrop-blur-xl border border-gray-700 p-8 rounded-2xl text-center shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-pink-400">Whitepaper & Documentation</h2>
            <p className="text-gray-300 mb-6">
              Learn more about Rialo’s blockchain, real-world asset integration, and event-driven architecture.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://www.rialo.io"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-lg bg-fuchsia-600 hover:bg-fuchsia-700 transition"
              >
                📄 Read Whitepaper
              </a>
              <a
                href="https://github.com/rialo-network"
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
            <h2 className="text-3xl font-semibold text-fuchsia-400 mb-3">Mainnet Status</h2>
            <p className="text-gray-400">
              🚀 Rialo Network — <span className="text-pink-400 font-semibold">Mainnet Coming Soon</span>
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Join early to participate in RWA testing, node operation, and developer programs.
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="https://x.com/RialoHQ"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg bg-pink-600 hover:bg-pink-700 transition"
            >
              Follow on X
            </a>
            <a
              href="https://discord.gg/5P5CKHFz"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition"
            >
              Join Discord
            </a>
            <a
              href="https://www.rialo.io"
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
