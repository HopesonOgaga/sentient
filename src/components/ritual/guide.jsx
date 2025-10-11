// GuideSection.jsx
import React from "react";

export default function GuideSection() {
  return (
    <section className="bg-gray-900 text-gray-100 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-purple-400">
          How to Contribute to Ritual
        </h2>

        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            Join the Ritual movement and take part in building the new frontier
            of decentralized intelligence. Follow these steps to become part of
            the Ritual ecosystem:
          </p>

          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Join Discord:</strong>{" "}
              <a
                href="https://discord.gg/ritual-net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:underline"
              >
                https://discord.gg/ritual-net
              </a>
            </li>
            <li>
              Visit the <strong>"pledge"</strong> channel and click{" "}
              <strong>Pledge</strong>.
            </li>
            <li>
              Go to{" "}
              <a
                href="http://ritualtrials.domino.page/quests"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:underline"
              >
                ritualtrials.domino.page/quests
              </a>{" "}
              to connect your X and Discord.
            </li>
            <li>Invite one friend to the Ritual Discord.</li>
            <li>
              Post on X:{" "}
              <span className="italic text-gray-300">
                “I pledge myself to Ritual.”
              </span>
            </li>
            <li>
              Return to Discord and click <strong>Integrate</strong>,{" "}
              <strong>Pledge</strong>, and <strong>Ascend</strong>.
            </li>
          </ul>

          <div className="mt-8 border-l-4 border-purple-500 pl-4">
            <h3 className="text-2xl font-semibold text-purple-300 mb-2">
              Blessing of Syn Ritual
            </h3>
            <p>
              Complete the next step by visiting{" "}
              <a
                href="http://ritual-synful.domino.page/quests"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:underline"
              >
                ritual-synful.domino.page/quests
              </a>
              . Hold <strong>(❖,❖)</strong> in your Discord name and invite a
              friend. The longer you hold <strong>(❖,❖)</strong>, the more stars
              you earn — each star reflects your devotion.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-purple-300 mb-4">
              Discord Role Breakdown
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Zealots</strong> – Ambassadors spreading Ritual’s
                message.
              </li>
              <li>
                <strong>Ritualist</strong> – OG members devoted to the cause.
              </li>
              <li>
                <strong>Mages</strong> – Content creators shaping the narrative.
              </li>
            </ul>
          </div>

          <div className="mt-8 border-l-4 border-purple-500 pl-4">
            <h3 className="text-2xl font-semibold text-purple-300 mb-2">
              How to Get the Ritualist Role
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>First, become a <strong>Ritualist Ascendant</strong>.</li>
              <li>
                To ascend, reach <strong>Level 10</strong> and obtain the{" "}
                <strong>Blessing/Curse</strong> role.
              </li>
              <li>
                Get blessed or cursed by someone in the{" "}
                <strong>#vestibule</strong> channel.
              </li>
              <li className="italic text-gray-400">Done and good luck.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
