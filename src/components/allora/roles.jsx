import { FaDiscord, FaCogs, FaUsers, FaTrophy, FaCode, FaCoins, FaCheckCircle } from "react-icons/fa";

export default function AlloraRoles() {
  const roles = [
    {
      category: "Core Roles",
      icon: <FaCogs className="text-indigo-400 text-xl" />,
      items: [
        {
          name: "Allora Labs",
          desc: "Official team members of the Allora Network."
        },
        {
          name: "Mods",
          desc: "Trusted Advocates who moderate, support users, and uphold community standards."
        },
        {
          name: "Advocates",
          desc: "Technically curious mentors who drive growth through content, translations, and events."
        },
      ],
    },
    {
      category: "Community Achievers",
      icon: <FaTrophy className="text-yellow-400 text-xl" />,
      items: [
        {
          name: "Allora Pilled",
          desc: "Highly engaged members who consistently post thoughtful Allora content."
        },
        {
          name: "yapllora",
          desc: "Top weekly yappers recognized every Friday for community engagement."
        },
        {
          name: "event star",
          desc: "Recognized members who shine during AMAs, contests, quizzes, and events."
        },
        {
          name: "gml gang",
          desc: "Members who greet daily in ☕│gm-gml for 7+ days. Missing 3 days removes the role."
        },
      ],
    },
    {
      category: "Builders & Contributors",
      icon: <FaCode className="text-green-400 text-xl" />,
      items: [
        {
          name: "Builder",
          desc: "Community developers building tools, dApps, or integrations using Allora’s tech."
        },
        {
          name: "Worker",
          desc: "Members who run worker nodes and develop, test, or train ML models."
        },
        {
          name: "Forge",
          desc: "Participants in the Allora Model Forge competition."
        },
      ],
    },
    {
      category: "Token Holders",
      icon: <FaCoins className="text-orange-400 text-xl" />,
      items: [
        {
          name: "Nick Whale",
          desc: "Holders of 5M $NICK tokens."
        },
        {
          name: "Nick OG",
          desc: "Early supporters or holders of 35K $NICK tokens."
        },
      ],
    },
    {
      category: "Verified & Event Members",
      icon: <FaCheckCircle className="text-teal-400 text-xl" />,
      items: [
        {
          name: "Events",
          desc: "Members contributing to or participating in community initiatives."
        },
        {
          name: "Allorian",
          desc: "Verified members who completed onboarding and verification."
        },
      ],
    },
  ];

  return (
    <section className="bg-[#0a0a0a] text-gray-200 py-16 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <div className="flex justify-center items-center gap-3 mb-4">
          <FaDiscord className="text-[#5865F2] text-3xl" />
          <h2 className="text-3xl font-bold text-white">Allora Discord Roles</h2>
        </div>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Every role in Allora represents a unique way to contribute, build, and shape the future of decentralized intelligence.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {roles.map((section, i) => (
          <div key={i} className="bg-[#111] rounded-2xl p-6 border border-gray-800 shadow-md hover:shadow-lg hover:border-indigo-500 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              {section.icon}
              <h3 className="text-xl font-semibold text-white">{section.category}</h3>
            </div>
            <ul className="space-y-3 text-left">
              {section.items.map((role, j) => (
                <li key={j}>
                  <span className="font-medium text-indigo-300">{role.name}</span>
                  <p className="text-gray-400 text-sm">{role.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
