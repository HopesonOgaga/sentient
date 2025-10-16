// import React, { useEffect, useState } from "react";

// export default function TwitterFeed() {
//   const [tweets, setTweets] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchTweets = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/tweets");
//         if (!res.ok) throw new Error("Failed to fetch tweets");

//         const data = await res.json();
//         console.log("🐦 Twitter API Data:", data);

//         const mediaMap =
//           data.includes?.media?.reduce((map, media) => {
//             map[media.media_key] = media.url || media.preview_image_url;
//             return map;
//           }, {}) || {};

//         const tweetsList =
//           data.data?.map((t) => ({
//             id: t.id,
//             text: t.text,
//             image: t.attachments?.media_keys
//               ? mediaMap[t.attachments.media_keys[0]]
//               : null,
//           })) || [];

//         setTweets(tweetsList);
//       } catch (err) {
//         console.error("❌ Twitter fetch error:", err);
//         setError("Could not load tweets at the moment.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTweets();
//   }, []);

//   // 🌀 Loading state
//   if (loading)
//     return (
//       <div className="flex justify-center items-center py-10 text-gray-500 animate-pulse">
//         Loading latest tweets...
//       </div>
//     );

//   // ⚠️ Error state
//   if (error)
//     return (
//       <div className="text-center py-10 text-red-500 font-medium">{error}</div>
//     );

//   // 🚫 No tweets
//   if (!tweets.length)
//     return (
//       <div className="text-center py-10 text-gray-400">No tweets found.</div>
//     );

//   // ✅ Tweets UI
//   return (
//     <div className=" p-4">
//       <h2 className="text-2xl font-semibold mb-6 text-center">Latest Tweets</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {tweets.map((tweet) => (
//           <div
//             key={tweet.id}
//             className="border border-gray-200 rounded-2xl shadow-sm p-4 hover:shadow-md transition-shadow duration-300"
//           >
//             <p className="text-gray-800 text-base mb-3 leading-relaxed">
//               {tweet.text}
//             </p>
// {/* */}
//             {tweet.image && (
//               <img
//                 src={tweet.image}
//                 alt="Tweet media"
//                 className="rounded-xl w-full object-cover mb-2"
//               />
//             )}

//             <a
//               href={`https://twitter.com/i/web/status/${tweet.id}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-500 text-sm mt-2 inline-block hover:underline"
//             >
//               View on Twitter →
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
