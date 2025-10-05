import React from "react";
import { Link } from "react-router-dom";

export default function Sentient() {
  return (
    <section className="w-full bg-gradient-to-b from-white via-gray-50 to-pink-50 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            What is Sentient?
          </h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            The Open AI World Everyone Can Join. Imagine if only a few kids in
            school had the world’s biggest, smartest calculator. They decide who
            can use it, what problems it can solve, and when others get access.
            That wouldn’t feel fair, right?
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mt-4">
            That’s what’s happening today with Artificial Intelligence (AI). A
            few big companies control the smartest AI systems, and everyone else
            just gets whatever version they choose to share.{" "}
            <span className="font-semibold text-pink-500">@SentientAGI</span>{" "}
            wants to flip this story.
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mt-4">
            It’s building Open AGI (Artificial General Intelligence) that anyone
            can use, learn from, and help grow. Think of it as a giant playground
            where all the tools, games, and knowledge are built by the
            community—not locked away.
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mt-4">
            At the center of Sentient is the{" "}
            <span className="font-semibold">GRID</span>. It works like a super
            team: one helper might be great at math, another at history, another
            at finding data. When you ask a question, GRID splits it into smaller
            parts, sends each to the right helper, then combines everything into
            one clear answer.
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
  );
}
