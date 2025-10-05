// src/components/navbar.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="fixed top-0 left-0 w-full z-50">
      <nav
        className="w-full h-20 flex justify-between items-center px-8 
        bg-[#0A0F1C] shadow-lg border-b border-[#00CFFF]/40"
      >
        {/* Logo */}
        <Link to={"/"}>
          <p className="font-extrabold text-2xl uppercase tracking-wide text-[#00CFFF] drop-shadow-[0_0_10px_#00CFFF80]">
            NekoCoiner
          </p>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-8 capitalize font-medium text-lg text-[#A9E8FF]">
          <Link to={"/game"}>
            <li className="hover:text-[#00CFFF] cursor-pointer transition-colors duration-200">
              Games
            </li>
          </Link>
          <Link to={"/chat"}>
            <li className="hover:text-[#00CFFF] cursor-pointer transition-colors duration-200">
              Chat
            </li>
          </Link>
          <Link to={"/leaderboard"}>
            <li className="hover:text-[#00CFFF] cursor-pointer transition-colors duration-200">
              Leaderboard
            </li>
          </Link>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X size={28} className="text-[#00CFFF]" />
            ) : (
              <Menu size={28} className="text-[#00CFFF]" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="fixed top-0 right-0 h-full w-64 bg-[#0A0F1C] shadow-2xl border-l border-[#00CFFF]/30 z-50"
            >
              <div className="flex flex-col h-full p-6">
                <p className="font-extrabold text-xl text-[#00CFFF] mb-8">
                  Menu
                </p>
                <ul className="flex flex-col gap-6 capitalize font-medium text-[#A9E8FF]">
                  <Link to={"/game"} onClick={() => setIsOpen(false)}>
                    <li className="hover:text-[#00CFFF] cursor-pointer">
                      Games
                    </li>
                  </Link>
                  <Link to={"/chat"} onClick={() => setIsOpen(false)}>
                    <li className="hover:text-[#00CFFF] cursor-pointer">
                      Chat
                    </li>
                  </Link>
                  <Link to={"/leaderboard"} onClick={() => setIsOpen(false)}>
                    <li className="hover:text-[#00CFFF] cursor-pointer">
                      Leaderboard
                    </li>
                  </Link>
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Navbar;
