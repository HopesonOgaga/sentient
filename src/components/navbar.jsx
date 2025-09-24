import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icons
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="fixed top-0 left-0 w-full z-50">
      <nav className="w-full h-20 flex justify-between items-center px-8 
        bg-white/10 backdrop-blur-md shadow-lg border-b border-white/20">
        
        {/* Logo */}
        <p className="font-extrabold text-2xl uppercase text-pink-400 tracking-wide drop-shadow-md">
          sentient community
        </p>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-8 list-none capitalize font-medium text-gray-700">
          <li className="hover:text-pink-400 cursor-pointer transition-colors">education</li>
          <li className="hover:text-pink-400 cursor-pointer transition-colors">community update</li>
          <li className="hover:text-pink-400 cursor-pointer transition-colors">games</li>
          <li className="hover:text-pink-400 cursor-pointer transition-colors">dev</li>
        </ul>

        {/* Sign-in Button (desktop) */}
        <div className="hidden md:block">
          <button className="w-32 h-12 rounded-xl bg-gradient-to-r from-pink-400 to-pink-500 
            hover:from-pink-500 hover:to-pink-600 active:scale-95 transition 
            text-white font-semibold shadow-md backdrop-blur-sm">
            Sign In
          </button>
        </div>

        {/* Hamburger for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} className="text-pink-400" /> : <Menu size={28} className="text-pink-400" />}
          </button>
        </div>
      </nav>

      {/* Mobile Slider Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Sliding Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="fixed top-0 right-0 h-full w-64 bg-white/20 backdrop-blur-lg shadow-xl border-l border-white/30 z-50"
            >
              <div className="flex flex-col h-full p-6">
                <p className="font-extrabold text-xl text-pink-400 mb-8">Menu</p>
                <ul className="flex flex-col gap-6 capitalize font-medium text-gray-700">
                  <li className="hover:text-pink-400 cursor-pointer">education</li>
                  <li className="hover:text-pink-400 cursor-pointer">community update</li>
                  <li className="hover:text-pink-400 cursor-pointer">games</li>
                  <li className="hover:text-pink-400 cursor-pointer">dev</li>
                </ul>
                <div className="mt-auto">
                  <button className="w-full h-12 rounded-xl bg-gradient-to-r from-pink-400 to-pink-500 
                    hover:from-pink-500 hover:to-pink-600 active:scale-95 transition 
                    text-white font-semibold shadow-md backdrop-blur-sm">
                    Sign In
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Navbar;
