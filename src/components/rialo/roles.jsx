import React from "react";
import { FaDiscord } from "react-icons/fa";

export default function RialoDiscordRoles() {
const roles = [
  {
    name: "Xplorer",
    desc: "For members following Rialo’s X page. Distributed weekly in a lucky raffle to active followers.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    name: "Badge X",
    desc: "For event winners and standout contributors — celebrates participation and growth.",
    color: "from-purple-500 to-fuchsia-400",
  },
  {
    name: "RialoOPS",
    desc: "Rewards members active in community raids and engagement campaigns.",
    color: "from-amber-500 to-orange-400",
  },
  {
    name: "RialoONE",
    desc: "Given to newcomers after completing onboarding challenges in the welcome channel.",
    color: "from-yellow-400 to-lime-400",
  },
  {
    name: "Developer",
    desc: "For those linking GitHub and contributing to Rialo’s open-source ecosystem.",
    color: "from-indigo-500 to-purple-400",
  },
  {
    name: "RialoORBIT",
    desc: "For creators of high-quality content reaching significant engagement on X.",
    color: "from-rose-500 to-pink-400",
  },
  {
    name: "Rialo Club Member",
    desc: "For top weekly creators in the #club-tasks channel, awarded every Tuesday.",
    color: "from-amber-400 to-yellow-400",
  },
  {
    name: "Builder",
    desc: "For developers creating ecosystem tools and innovative Rialo dApps.",
    color: "from-sky-500 to-cyan-400",
  },
  {
    name: "RialoOYAL",
    desc: "Awarded to the week’s most active members — refreshed weekly to honor engagement.",
    color: "from-green-500 to-emerald-400",
  },
  {
    name: "Regional Helpers",
    desc: "Elected by local communities — regional leaders supporting new members and events.",
    color: "from-pink-500 to-rose-400",
  },
  {
    name: "RialoOG",
    desc: "For founding community members who joined early and shaped Rialo’s foundation.",
    color: "from-red-500 to-orange-400",
  },
  {
    name: "Mod",
    desc: "Official team members ensuring moderation, fairness, and smooth server operations.",
    color: "from-fuchsia-500 to-purple-500",
  },
];


  return (
    <section className="w-full bg-gradient-to-b from-gray-950 to-black py-28 text-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="flex items-center justify-center gap-3">
            <FaDiscord className="text-indigo-400 text-3xl" />
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
              Discord Role System
            </h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore Rialo’s tiered role ecosystem — rewarding collaboration, building, and community growth.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, index) => (
            <div
              key={index}
              className="relative group p-[1px] rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900 hover:from-fuchsia-500 hover:to-purple-500 transition-all duration-300"
            >
              <div className="bg-gray-950 rounded-2xl p-6 h-full flex flex-col justify-between">
                <div>
                  <h3
                    className={`text-xl font-bold bg-gradient-to-r ${role.color} text-transparent bg-clip-text`}
                  >
                    {role.name}
                  </h3>
                  <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                    {role.desc}
                  </p>
                </div>
                <div className="mt-4">
                  <div
                    className={`w-full h-1 bg-gradient-to-r ${role.color} rounded-full`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Tagline */}
        <div className="text-center mt-16 text-gray-500 text-sm tracking-wide">
          Rethink. Rebuild. Rialo.
        </div>
      </div>
    </section>
  );
}
