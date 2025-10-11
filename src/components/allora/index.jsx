import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import { FaDiscord, FaXTwitter, FaBook } from "react-icons/fa6";
import AlloraRoles from "./roles";

export default function Allora() {
  return (
    <>
      <Navbar />
      <section className="w-full min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-100 py-28 px-6">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Header Section */}
          <div className="text-center space-y-4">
            <img
              src="/images/allora.jpg"
              alt="Allora Logo"
              className="w-28 h-28 mx-auto animate-pulse"
            />
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Allora Network
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A decentralized intelligence layer that allows anyone to deploy,
              contribute, and earn from AI models running on-chain — built to
              turn collective knowledge into active computation.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gray-800/40 backdrop-blur-xl border border-gray-700 p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-indigo-400">
              Mission
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Allora’s mission is to decentralize AI — to make intelligence
              itself an open, composable resource. Instead of siloed models
              behind APIs, Allora enables models to live, learn, and compete
              directly on-chain. Each worker in the network contributes to
              inference, learning, and consensus on outputs.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              It’s a shift from closed intelligence to **collective reasoning**.
              Using cryptographic proofs and incentive alignment, Allora
              transforms ML systems into networks of knowledge where
              contributors are rewarded for accuracy, reliability, and
              improvement.
            </p>
          </div>

          {/* Core Technology */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-purple-400">
                Core Technology
              </h2>
              <ul className="list-disc pl-6 text-gray-300 mt-4 space-y-2">
                <li>
                  <span className="text-white font-semibold">
                    Inference Layer:
                  </span>{" "}
                  Worker nodes run and submit predictions from ML models
                  on-chain.
                </li>
                <li>
                  <span className="text-white font-semibold">
                    Learning Layer:
                  </span>{" "}
                  Workers improve over time through feedback and reward
                  mechanisms.
                </li>
                <li>
                  <span className="text-white font-semibold">
                    Reputation System:
                  </span>{" "}
                  On-chain scoring ensures high-quality outputs and discourages
                  manipulation.
                </li>
                <li>
                  <span className="text-white font-semibold">
                    Forge Builder Kit:
                  </span>{" "}
                  Toolkit to deploy and manage AI workers in minutes.
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
                <source src="/videos/allora.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Ecosystem & Use Cases */}
          <div className="bg-gray-800/40 backdrop-blur-xl border border-gray-700 p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-pink-400">
              Ecosystem & Use Cases
            </h2>
            <p className="text-gray-300 leading-relaxed">
              The Allora ecosystem connects data scientists, node operators, and
              developers through a shared intelligence layer. By running AI
              workers that perform on-chain inference, Allora enables a
              decentralized flow of reasoning that can power trading systems,
              analytics, and decision models.
            </p>
            <p className="text-gray-300 mt-4 leading-relaxed">
              From DeFi and forecasting to autonomous agents, any system that
              relies on predictions or decisions can plug into Allora —
              transforming isolated AI logic into collective computation.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4 mt-6 text-gray-300">
              <li className="bg-gray-900/40 p-4 rounded-lg border border-gray-700">
                🤖 AI Worker Networks
              </li>
              <li className="bg-gray-900/40 p-4 rounded-lg border border-gray-700">
                📊 On-Chain Prediction Markets
              </li>
              <li className="bg-gray-900/40 p-4 rounded-lg border border-gray-700">
                💹 DeFi Forecasting Systems
              </li>
              <li className="bg-gray-900/40 p-4 rounded-lg border border-gray-700">
                🧠 Autonomous AI Agents
              </li>
            </ul>
            <div className="mt-10 border border-gray-700 rounded-xl overflow-hidden">
              <img
                src="/images/allora/ecosystem.png"
                alt="Allora Ecosystem Overview"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <section>
            <AlloraRoles></AlloraRoles>
          </section>

          {/* Guide Section */}
          <div className="bg-gray-800/40 backdrop-blur-xl border border-gray-700 p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-6 text-indigo-400">
              Deploy a Worker (Forge Builder Kit)
            </h2>
            <p className="text-gray-400 mb-6">
              The Allora Forge Builder Kit lets you deploy machine learning
              workers directly to the Allora network in minutes. Here’s how to
              contribute your AI model to the collective intelligence layer:
            </p>
            <ul className="list-decimal pl-6 space-y-3 text-gray-300">
              <li>
                Clone the{" "}
                <a
                  href="https://github.com/allora-network/allora-forge-builder-kit"
                  className="text-blue-400 underline"
                >
                  Forge Builder Kit
                </a>{" "}
                from GitHub.
              </li>
              <li>
                Train or load your model and define a{" "}
                <code className="bg-gray-900 px-2 py-1 rounded">predict()</code>{" "}
                function.
              </li>
              <li>Obtain an API key from the Allora developer portal.</li>
              <li>
                Run your worker using the SDK’s{" "}
                <code className="bg-gray-900 px-2 py-1 rounded">
                  AlloraWorker
                </code>{" "}
                class.
              </li>
              <li>
                Monitor your worker’s performance and start earning inference
                rewards.
              </li>
            </ul>
            <div className="mt-8 bg-gray-900/40 border border-gray-700 rounded-lg p-4 text-sm font-mono overflow-x-auto">
              {`from allora import AlloraWorker

                        worker = AlloraWorker(
                            predict_fn=my_predict_function,
                            api_key="YOUR_API_KEY"
                        )
                        worker.run()`}
            </div>
          </div>
          {/* partner */}
          <section>
            
            {/* Partners Section */}
            <div className="bg-gray-800/40 backdrop-blur-xl border border-gray-700 p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-semibold mb-6 text-indigo-400">
                Partners & Alliances
              </h2>
              <p className="font-semibold text-xl mb-6 capitalize text-yellow-400">secured $35 in funding</p>
              <p className="text-gray-300 leading-relaxed mb-6">
                The Allora Network thrives through collaboration. Its ecosystem
                is woven together with AI-native projects, DeFi protocols, and
                infrastructure builders who share a common vision — to create an
                open, intelligent, and decentralized computation layer for the
                future of Web3.
              </p>
              <p className="text-gray-300 leading-relaxed mb-10">
                From data providers and AI-agent frameworks to execution
                environments and liquidity protocols, each partner strengthens
                Allora’s modular architecture and expands its utility across
                on-chain and off-chain intelligence.
              </p>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  {
                    name: "AMMO Infra",
                    desc: "Architectures for massive multi-agent online coordination.",
                  },
                  {
                    name: "MAFIA AI DeFi",
                    desc: "Building the underboss protocol — decentralized AI for finance.",
                  },
                  {
                    name: "OmniacsDAO",
                    desc: "Decentralized data layer connecting digital agents to real-world signals.",
                  },
                  {
                    name: "Vault Layer",
                    desc: "Stake BTC on L1, unlock liquidity everywhere.",
                  },
                  {
                    name: "MnM.fun",
                    desc: "Autonomous AI market makers bridging DeFi and data.",
                  },
                  {
                    name: "Spheron Network",
                    desc: "Community-powered data center network for AI workloads.",
                  },
                  {
                    name: "Covalent",
                    desc: "Modular data infrastructure enabling high-fidelity AI insights.",
                  },
                  {
                    name: "Helios Finance",
                    desc: "A decentralized Bitcoin bank powering the next-gen financial stack.",
                  },
                ].map((partner, i) => (
                  <div
                    key={i}
                    className="bg-gray-900/40 border border-gray-700 rounded-xl p-5 hover:bg-gray-900/70 transition"
                  >
                    <h3 className="text-lg font-semibold text-white">
                      {partner.name}
                    </h3>
                    <p className="text-gray-400 mt-2 text-sm">{partner.desc}</p>
                  </div>
                ))}
              </div>

              {/* GitHub CTA */}
              <div className="text-center mt-10">
                <a
                  href="https://github.com/allora-network"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2.1c-3.2.7-3.8-1.5-3.8-1.5-.6-1.5-1.5-1.9-1.5-1.9-1.2-.8.1-.8.1-.8 1.3.1 2 .9 2 .9 1.2 2 3.2 1.4 4 .9.1-.9.5-1.4.8-1.7-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2 1-.3 2-.5 3-.5s2 .2 3 .5c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3.8.9 1.2 2 1.2 3.3 0 4.6-2.7 5.6-5.3 5.9.5.4.9 1.1.9 2.3v3.4c0 .4.2.8.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.65 18.35.5 12 .5z" />
                  </svg>
                  View Allora GitHub
                </a>
              </div>

              <p className="text-gray-500 text-sm text-center mt-4">
                ⚙️ More integrations and alliances launching with the next
                Allora epoch.
              </p>
            </div>
          </section>
          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="https://x.com/alloranetwork"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition flex items-center gap-2"
            >
              <FaXTwitter /> Follow on X
            </a>
            <a
              href="https://discord.gg/allora"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition flex items-center gap-2"
            >
              <FaDiscord /> Join Discord
            </a>
            <a
              href="https://research.assets.allora.network/allora.0x10001.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg bg-pink-600 hover:bg-pink-700 transition flex items-center gap-2"
            >
              <FaBook /> Read Whitepaper
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
