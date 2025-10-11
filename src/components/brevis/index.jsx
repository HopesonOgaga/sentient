import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";

export default function Brevis() {
  return (
    <>
      <Navbar />
      <section className="w-full min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-100 py-28 px-6">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Header Section */}
          <div className="text-center space-y-4">
            <img
              src="/images/brevis/brevis.png"
              alt="Brevis Logo"
              className="w-28 h-28 mx-auto animate-pulse"
            />
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 text-transparent bg-clip-text">
              Brevis Network
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Brevis is a zero-knowledge (ZK) data attestation and computation
              platform. It allows smart contracts to verify, compute, and reason
              over off-chain or historical on-chain data in a trustless,
              privacy-preserving way. Acting as a ZK coprocessor for
              blockchains, Brevis extends on-chain logic beyond current-state
              data to any verifiable historical or cross-chain dataset.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gray-800/40 backdrop-blur-xl border border-gray-700 p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-fuchsia-400">
              Mission
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Brevis’s mission is to empower decentralized applications with
              trustless access to historical and off-chain data, enabling
              privacy-preserving, intelligent, and autonomous smart contracts.
              By leveraging zero-knowledge proofs, Brevis removes reliance on
              intermediaries or oracles, ensuring data integrity without
              sacrificing security or decentralization.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              With the Pico zkVM and Coprocessor SDK, developers can execute
              complex logic, generate proofs, and verify computations on-chain.
              This enables sophisticated use cases including cross-chain
              analytics, verifiable reputation systems, DeFi reward mechanisms,
              compliance proofs, and more—while minimizing gas costs and trust
              assumptions.
            </p>
          </div>

          {/* Core Architecture */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-pink-400">
                Core Architecture
              </h2>
              <ul className="list-disc pl-6 text-gray-300 mt-4 space-y-2">
                <li>
                  <span className="text-white font-semibold">Pico zkVM:</span>{" "}
                  Modular virtual machine for off-chain computation and proof
                  generation.
                </li>
                <li>
                  <span className="text-white font-semibold">
                    Coprocessor SDK:
                  </span>{" "}
                  Enables querying off-chain or historical data, executing
                  logic, and submitting proofs on-chain.
                </li>
                <li>
                  <span className="text-white font-semibold">
                    Proof Verification:
                  </span>{" "}
                  Cryptographically ensures outputs are valid, tamper-proof, and
                  verifiable on-chain.
                </li>
                <li>
                  <span className="text-white font-semibold">
                    Modular Architecture:
                  </span>{" "}
                  Supports composable circuits, interchangeable backends, and
                  extensibility across applications.
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
                <source src="" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Ecosystem & Use Cases */}
          <div className="bg-gray-800/40 backdrop-blur-xl border border-gray-700 p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-purple-400">
              Ecosystem & Use Cases
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Brevis provides a zero-knowledge infrastructure enabling
              developers to build decentralized applications that securely
              reason over historical and off-chain data. Combining the Pico zkVM
              and Coprocessor SDK, Brevis supports verifiable,
              privacy-preserving, and cross-chain interoperable applications.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4 mt-6 text-gray-300">
              <li className="bg-gray-900/40 p-4 rounded-lg border border-gray-700">
                📊 On-chain Data Analytics
              </li>
              <li className="bg-gray-900/40 p-4 rounded-lg border border-gray-700">
                🔗 Trustless Cross-Chain Verification
              </li>
              <li className="bg-gray-900/40 p-4 rounded-lg border border-gray-700">
                🪙 Verifiable DeFi Metrics & Rewards
              </li>
              <li className="bg-gray-900/40 p-4 rounded-lg border border-gray-700">
                ⚙️ Secure Off-Chain Computation
              </li>
              <li className="bg-gray-900/40 p-4 rounded-lg border border-gray-700">
                🛡️ Compliance & Proof-of-Reserve
              </li>
              <li className="bg-gray-900/40 p-4 rounded-lg border border-gray-700">
                🌐 Omnichain Identity & Reputation Systems
              </li>
            </ul>
            <div className="mt-10 border border-gray-700 rounded-xl overflow-hidden">
              <img
                src="/images/brevis/eco.png"
                alt="Brevis Ecosystem Overview"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Funding & Backing */}
          <div className="bg-gray-800/40 backdrop-blur-xl border border-gray-700 p-8 rounded-2xl shadow-lg text-center">
            <h2 className="text-3xl font-semibold mb-4 text-fuchsia-400">
              Funding & Backing
            </h2>
            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Brevis has raised over{" "}
              <span className="text-green-400 font-semibold">$35M</span> from
              investors including{" "}
              <span className="text-white font-semibold">
                CMS Holdings, Distributed Global, and strategic partners
              </span>
              . Funding supports development of the Pico zkVM, expansion of the
              Coprocessor SDK, developer onboarding, and cross-chain
              integrations—driving adoption of trustless, privacy-preserving
              data infrastructure.
            </p>
          </div>

          <div className="bg-gray-800/40 backdrop-blur-xl border border-gray-700 p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-pink-400">
              Brevis Discord Roles & Community
            </h2>

            {/* Server Roles */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Server Roles
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>
                  <span className="font-semibold text-white">
                    @Whisker Prime:
                  </span>{" "}
                  Community admins overseeing the server and keeping everything
                  purring smoothly.
                </li>
                <li>
                  <span className="font-semibold text-white">@AlphaKat:</span>{" "}
                  Community ambassadors; local leaders, content creators, and
                  engagement boosters.
                </li>
                <li>
                  <span className="font-semibold text-white">@Kat Crew:</span>{" "}
                  Official Brevis team members building behind the scenes.
                </li>
                <li>
                  <span className="font-semibold text-white">@WatchKat:</span>{" "}
                  Moderators ensuring friendly, proof-aligned community vibes.
                </li>
              </ul>
            </div>

            {/* Inner Circle */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-white">
                The Inner Circle
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>
                  <span className="font-semibold text-white">@OG:</span>{" "}
                  Claimable in the first month via Engage points; limited
                  edition.
                </li>
                <li>
                  <span className="font-semibold text-white">
                    @Paw-sitive Prover:
                  </span>{" "}
                  Coming soon.
                </li>
                <li>
                  <span className="font-semibold text-white">
                    @Claw-some Prover:
                  </span>{" "}
                  Coming soon.
                </li>
                <li>
                  <span className="font-semibold text-white">
                    @Fang-tastic Prover:
                  </span>{" "}
                  Coming soon.
                </li>
                <li>
                  <span className="font-semibold text-white">
                    @Purr-fect Prover:
                  </span>{" "}
                  Coming soon.
                </li>
              </ul>
            </div>

            {/* Contributor Zone / Catwalk */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-white">
                The Catwalk & Contributor Roles
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>
                  <span className="font-semibold text-white">@ZKats:</span> Your
                  first verified Brevis role; welcome home to the family.
                </li>
                <li>
                  <span className="font-semibold text-white">
                    @Tail-Blazers:
                  </span>{" "}
                  Contributor role unlocked via Engage points; complete tasks,
                  earn rewards, and get things done.
                </li>
                <li>
                  <span className="font-semibold text-white">@CodeKat:</span>{" "}
                  Developers building with or for Brevis; access special
                  channels for coding, collaboration, and project work.
                </li>
              </ul>
            </div>

            {/* How to Contribute */}
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                How to Contribute
              </h3>
              <p className="text-gray-300 leading-relaxed mb-2">
                Whether you’re here to prove, build, or engage, Brevis has a
                place for you. You can contribute by:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>
                  🔹 Earning Engage points through daily check-ins and community
                  tasks.
                </li>
                <li>
                  🔹 Participating in testing, reporting, and verifying data
                  proofs.
                </li>
                <li>
                  🔹 Building smart contracts, integrations, or apps using
                  Brevis SDKs.
                </li>
                <li>
                  🔹 Sharing knowledge, tutorials, and supporting other
                  community members.
                </li>
              </ul>
              <p className="text-gray-300 mt-4">
                Every contribution helps the Brevis ecosystem grow. Claim your
                role, join the discussion, and start building the future of
                trustless, privacy-preserving decentralized applications.
              </p>
            </div>
          </div>

          {/* Whitepaper & Docs */}
          <div className="bg-gray-800/40 backdrop-blur-xl border border-gray-700 p-8 rounded-2xl text-center shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-pink-400">
              Whitepaper & Documentation
            </h2>
            <p className="text-gray-300 mb-6">
              Learn more about Brevis’s zero-knowledge design, cryptographic
              infrastructure, and developer tools.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://coprocessor-docs.brevis.network/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-lg bg-fuchsia-600 hover:bg-fuchsia-700 transition"
              >
                📄 Read Whitepaper
              </a>
              <a
                href="https://github.com/brevis-network"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
              >
                🧠 View GitHub
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="https://x.com/brevisnetwork"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg bg-pink-600 hover:bg-pink-700 transition"
            >
              Follow on X
            </a>
            <a
              href="https://discord.gg/brevis"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition"
            >
              Join Discord
            </a>
            <a
              href="https://brevis.network"
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
