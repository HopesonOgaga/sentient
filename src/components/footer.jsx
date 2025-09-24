import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left side */}
        <div className="text-sm text-center md:text-left">
          <p>© {new Date().getFullYear()} Sentient. All rights reserved.</p>
          <p className="mt-2">
            Built by{" "}
            <a
              href="https://x.com/NekoCoiner"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:underline"
            >
              @NekoCoiner
            </a>
          </p>
        </div>

        {/* Right side */}
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition">
            About
          </a>
          <a href="#" className="hover:text-white transition">
            Contact
          </a>
          <a href="#" className="hover:text-white transition">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
