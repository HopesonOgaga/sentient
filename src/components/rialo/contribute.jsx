import React from "react";
import { FaUsers, FaPenNib, FaCode, FaTrophy, FaLightbulb } from "react-icons/fa";

const contributions = [
  {
    title: "Engage with the Community",
    desc: "Join discussions, support newcomers, and participate in events. Active members earn RialoOYAL or Regional Helpers recognition.",
    icon: <FaUsers className="text-white w-6 h-6" />,
    color: "from-green-500 to-emerald-400",
  },
  {
    title: "Create and Share Content",
    desc: "Post tutorials, guides, or project showcases. High-quality contributions can earn RialoORBIT or Rialo Club Member roles.",
    icon: <FaPenNib className="text-white w-6 h-6" />,
    color: "from-rose-500 to-pink-400",
  },
  {
    title: "Develop Tools and dApps",
    desc: "Link your GitHub and contribute to open-source projects. Developers creating innovative tools can earn Developer or Builder roles.",
    icon: <FaCode className="text-white w-6 h-6" />,
    color: "from-indigo-500 to-purple-400",
  },
  {
    title: "Participate in Challenges & Contests",
    desc: "Take part in weekly campaigns, raids, and special events. Top contributors can win Badge X or Xplorer roles.",
    icon: <FaTrophy className="text-white w-6 h-6" />,
    color: "from-yellow-400 to-amber-400",
  },
  {
    title: "Provide Feedback & Suggestions",
    desc: "Help improve Rialo by reporting issues, testing new features, or sharing ideas. Your input directly shapes the ecosystem.",
    icon: <FaLightbulb className="text-white w-6 h-6" />,
    color: "from-blue-500 to-cyan-400",
  },
];

export default function HowToContribute() {
  return (
    <section className="py-16 bg-gray-900 text-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 text-transparent bg-clip-text">
          How to Contribute
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contributions.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl bg-gradient-to-r ${item.color} shadow-lg hover:scale-105 transform transition duration-300`}
            >
              <div className="flex items-center mb-4">
                <div className="bg-black/20 p-3 rounded-full mr-4">{item.icon}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-white/90">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
