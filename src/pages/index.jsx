import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { db } from "../db/firebase";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { Projects } from "../components/projects";
import { Link } from "react-router";



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
    <main className="h-screen ">
      {/* Navbar */}
      <header className="w-full shadow-sm">
        <Navbar />
      </header>

      {/* Hero Section */}
      <section className="relative mt-16  sm:mt-0 flex-1 w-full flex flex-col items-center justify-center text-center gap-6 px-4 h-[100vh]  overflow-hidden ">
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
              href="https://x.com/NekoCoiner"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-pink-500 text-white font-medium hover:bg-pink-600 transition"
            >
              Join X Community
            </a>
            {/* <a
              href="https://discord.gg/hopeson1498"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-900 transition"
            >
              Join Discord
            </a> */}
          </div>
          <div className="text-sm text-gray-300 max-w-md leading-relaxed drop-shadow mt-4">
            <p>
              please bear with me as i continue to develop the app , you can
              drop review and features and will update app every 72 hours
            </p>
            <p>just an intern dev having fun build for community </p>
            <div>
             
              
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="w-full bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
            Explore Top Web3 Projects
          </h2>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Projects.map((p, index) => (
              <Link
                key={index}
                to={p.link || "#"}
                className="relative bg-white rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all p-6 flex flex-col items-center text-center border border-gray-200"
              >
                {/* 🔖 Status Badge */}
                <div className="absolute top-4 right-4">
                 

                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      p.status === "Ongoing"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {p.status}
                  </span>
                </div>

                <img
                  src={p.logo}
                  alt={p.name}
                  className="w-20 h-20 object-contain mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {p.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{p.desc}</p>
                 {/* <p className="text-sm text-gray-400">{p.type}</p> */}
                <div className="flex gap-3">
                  <a
                    href={p.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                    onClick={(e) => e.stopPropagation()}
                  >
                    X
                  </a>
                  <a
                    href={p.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Discord
                  </a>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
       {/* news  */}
       
      {/* Community Section */}
      <section className="w-full  bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-900">
            Community Interaction
          </h2>


          {/* Card Row */}
          {/* <section className="flex gap-6 mt-8 flex-col sm:flex-row ">
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
          </section> */}

          <div>
            <p>coming soon</p>
          </div>
        </div>
      </section>
      <section>prediction market</section>
      
      <section>Node </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
