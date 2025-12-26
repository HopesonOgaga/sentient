import React from "react";
import { Link } from "react-router";
import Navbar from "../navbar";
import Footer from "../footer";

export default function MidenLanding() {
  return (
    <main className="w-full min-h-screen bg-white text-gray-900">
      {/* HEADER / HERO */}
      <header className="relative overflow-hidden">
        <section>
           <Navbar></Navbar>
        </section>
        {/* Floating shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <span className="floating-shape left-10 top-20" />
          <span className="floating-shape right-20 top-32 delay-200" />
          <span className="floating-shape left-1/2 top-10 delay-500" />
        </div>

        <section className="max-w-6xl mx-auto px-6 py-32 relative">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Miden
            <span className="block text-orange-500">
              Zero-Knowledge, Simplified
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-600">
            Miden is a ZK-first blockchain where transactions are proven on the
            client and verified on-chain. More privacy. More scalability. Less
            complexity.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              target="_blank"
              to="https://docs.miden.xyz/intro"
              className="px-6 py-3 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 transition"
            >
              Start Learning
            </Link>

            <Link
              to="/midengame"
              className="px-6 py-3 rounded-lg border border-orange-200 text-orange-600 hover:bg-orange-50 transition"
            >
              Play a Game 🎮
            </Link>
          </div>
        </section>
      </header>

      {/* WHAT IS MIDEN */}
      <section className="py-24 px-6 bg-orange-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">What is Miden?</h2>
            <p className="text-gray-700 leading-relaxed">
              Miden is a blockchain designed around zero-knowledge proofs from
              day one. Instead of executing everything on-chain, users generate
              cryptographic proofs locally and submit only what needs to be
              verified.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-orange-100 p-6">
            <ul className="space-y-3 text-gray-700">
              <li>• Client-side proving</li>
              <li>• Privacy by default</li>
              <li>• Custom Miden VM</li>
              <li>• Scalable execution model</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHY MIDEN */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            Why Builders Choose Miden
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Local Proofs",
                desc: "Execution happens on the client, reducing chain congestion.",
              },
              {
                title: "ZK-Native VM",
                desc: "Miden VM is built specifically for efficient proving.",
              },
              {
                title: "Simple Mental Model",
                desc: "Prove correctness, don’t expose data.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 p-6 hover:border-orange-300 transition"
              >
                <h3 className="font-semibold mb-2 text-orange-600">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLAY GAME */}
      <section className="py-24 px-6 bg-orange-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Learn by Playing 🎮</h2>

          <p className="text-gray-700 mb-8">
            Zero-knowledge doesn’t have to be boring. Play small games and
            challenges that teach Miden concepts by doing.
          </p>

          <Link
            to="/play"
            className="inline-block px-8 py-4 rounded-xl bg-orange-500 text-white font-medium hover:bg-orange-600 transition"
          >
            Play the ZK Game
          </Link>
        </div>
      </section>
      {/* explore miden */}
      <section>
        <div className="">
          <p className="">miden community content</p>
          <div className="">
            {/* community videos and guides will be dropped here  */}
          </div>
        </div>
        <div></div>
      </section>

      {/* COMMUNITY */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Built in Public</h2>
          <p className="text-gray-600 mb-8">
            This is a community-driven space for learning, experimenting, and
            building with Miden.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/0xMiden"
              className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition"
            >
              GitHub
            </a>
            <a
              href="https://t.me/BuildOnMiden"
              className="px-6 py-3 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition"
            >
              Join Community
            </a>
          </div>
        </div>
      
      </section>
      <Footer></Footer>
    </main>
  );
}
