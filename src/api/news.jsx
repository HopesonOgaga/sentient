import React, { useEffect, useState } from "react";

export default function TwitterFeed() {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const res = await fetch("/api/twitter");
        const data = await res.json();
        setTweets(data);
      } catch (error) {
        console.error("Error fetching tweets:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTweets();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-10 text-gray-500">
        Loading latest tweets...
      </div>
    );
  }

  if (tweets.length === 0) {
    return (
      <div className="text-center py-10 text-gray-400">
        No tweets found.
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-6 text-center">Latest Tweets</h2>
      <div className="flex flex-col gap-6">
        {tweets.map((tweet) => (
          <div
            key={tweet.id}
            className="border border-gray-200 rounded-2xl shadow-sm p-4 hover:shadow-md transition-shadow duration-300"
          >
            <p className="text-gray-800 text-base mb-3">{tweet.text}</p>
            {tweet.image && (
              <img
                src={tweet.image}
                alt="Tweet media"
                className="rounded-xl w-full object-cover"
              />
            )}
            <a
              href={`https://twitter.com/i/web/status/${tweet.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 text-sm mt-2 inline-block hover:underline"
            >
              View on Twitter
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
