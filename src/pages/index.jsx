import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { db } from "../db/firebase";
import { collection, query, orderBy, getDocs } from "firebase/firestore";

export default function Home() {
  const [submissions, setSubmissions] = useState([]);

  // Fetch latest community submissions
  const fetchSubmissions = async () => {
    try {
      const q = query(
        collection(db, "submissions"),
        orderBy("createdAt", "desc")
      );
      const snapshot = await getDocs(q);
      setSubmissions(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    } catch (err) {
      console.error("Error fetching submissions:", err);
    }
  };

  useEffect(() => {
    fetchSubmissions(); // initial fetch

    const interval = setInterval(() => {
      fetchSubmissions(); // refresh every 10 minutes
    }, 600000); // 600,000 ms = 10 minutes

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <main className="h-screen">
      {/* Navbar */}
      <header className="w-full shadow-sm">
        <Navbar />
      </header>

      {/* Hero Section */}
      <section className="relative mt-16 sm:mt-0 flex-1 w-full flex flex-col items-center justify-center text-center gap-6 px-4 h-[65vh] sm:h-screen overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/pixel2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40" />

        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col items-center gap-6">
          <h1 className="capitalize text-3xl md:text-5xl font-bold leading-tight text-white drop-shadow-lg">
            Think, plan, and track all in one place
          </h1>
          <p className="text-base md:text-lg text-gray-200 max-w-xl leading-relaxed drop-shadow">
            Manage tasks, play games, and boost productivity with a
            community-driven hub.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center">
            <a
              href="https://x.com/i/communities/1966141414703509919"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-pink-500 text-white font-medium hover:bg-pink-600 transition"
            >
              Join X Community
            </a>
            <a
              href="https://discord.gg/sentientfoundation"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-900 transition"
            >
              Join Discord
            </a>
          </div>
          <div className="text-sm text-gray-300 max-w-md leading-relaxed drop-shadow mt-4">
            <p >please bear with me as i continue to develop the app , you can drop review and features and will update app every 72 hours</p>
            <p>just an intern dev having fun build for community </p>
          </div>
        </div>
      </section>

      {/* About Sentient */}
      <section className="w-full bg-gradient-to-b from-white via-gray-50 to-pink-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              What is Sentient?
            </h2>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              The Open AI World Everyone Can Join. Imagine if only a few kids in
              school had the world’s biggest, smartest calculator. They decide
              who can use it, what problems it can solve, and when others get
              access. That wouldn’t feel fair, right?
            </p>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg mt-4">
              That’s what’s happening today with Artificial Intelligence (AI). A
              few big companies control the smartest AI systems, and everyone
              else just gets whatever version they choose to share.{" "}
              <span className="font-semibold text-pink-500">@SentientAGI</span>{" "}
              wants to flip this story.
            </p>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg mt-4">
              It’s building Open AGI (Artificial General Intelligence) that
              anyone can use, learn from, and help grow. Think of it as a giant
              playground where all the tools, games, and knowledge are built by
              the community—not locked away.
            </p>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg mt-4">
              At the center of Sentient is the{" "}
              <span className="font-semibold">GRID</span>. It works like a super
              team: one helper might be great at math, another at history,
              another at finding data. When you ask a question, GRID splits it
              into smaller parts, sends each to the right helper, then combines
              everything into one clear answer.
            </p>
          </div>

          {/* Right: Video */}
          <div className="w-full h-64 md:h-96 bg-gray-200 rounded-xl overflow-hidden shadow-lg">
            <video className="w-full h-full object-cover" controls>
              <source src="/videos/roma-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-900">
            Community Interaction
          </h2>

          {/* Card Row */}
          <section className="flex gap-6 mt-8 flex-col sm:flex-row ">
            {submissions.length > 0
              ? submissions.map((entry) => (
                  <div
                    key={entry.id}
                    className="h-full w-full sm:w-1/3 rounded-lg shadow-md border border-gray-200 flex flex-col gap-4 p-6 bg-white hover:shadow-lg transition"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={entry.image || ""}
                        alt={entry.mood}
                        className="w-12 h-12 rounded-full bg-gray-200"
                      />
                      <p className="text-lg font-semibold capitalize text-gray-800">
                        {entry.mood}
                      </p>
                    </div>
                    <p className="text-left text-gray-600 leading-relaxed">
                      {entry.feedback}
                    </p>
                  </div>
                ))
              : // fallback if no submissions yet
                [1, 2, 3, 4].map((_, i) => (
                  <div
                    key={i}
                    className="h-full w-full sm:w-1/3 rounded-lg shadow-md border border-gray-200 flex flex-col gap-4 p-6 bg-white hover:shadow-lg transition"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src=""
                        alt="user avatar"
                        className="w-12 h-12 rounded-full bg-gray-200"
                      />
                      <p className="text-lg font-semibold capitalize text-gray-800">
                        happy
                      </p>
                    </div>
                    <p className="text-left text-gray-600 leading-relaxed">
                      Thinking about launching a community or SaaS product?
                      Outseta is your tool. A CRM, payments, subscriptions,
                      email automation, gated content, segmentation, etc...
                      Outseta is loaded with great features and functionality at
                      an extremely fair price.
                    </p>
                  </div>
                ))}
          </section>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
