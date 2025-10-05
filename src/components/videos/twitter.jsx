import { useEffect } from "react";

export default function CysicTweet() {
  useEffect(() => {
    // Load Twitter widget script once
    if (!window.twttr) {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      window.twttr.widgets.load();
    }
  }, []);

  return (
    <div className="flex justify-center">
      <blockquote
        className="twitter-tweet"
        data-theme="dark"
        data-cards="hidden"
      >
        <a href="https://x.com/cysic_xyz/status/1973241770256605276"></a>
      </blockquote>
    </div>
  );
}
