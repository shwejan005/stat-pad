'use client'

import clerkAppearance from "@/lib/clerkAppearance";
import { SignInButton } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { AlertTriangle, User, Sword, BarChart3 } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-32">

      {/* Subtle Glowing Circle */}
      <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 w-[250px] h-[250px] bg-purple-500/5 blur-[100px] rounded-full z-[-1]" />

      {/* Hero Heading */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-white/80 mb-6 leading-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Welcome to <span className="text-purple-500">DevDuel</span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="max-w-2xl text-white/70 text-lg md:text-xl mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Create your coding avatar. Duel friends. Compare GitHub and LeetCode skills in a fun, gamified battle arena.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="flex gap-6 flex-wrap justify-center mb-16"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <SignInButton mode="modal" appearance={clerkAppearance}>
          <button
            className="border border-purple-600 text-purple-400 hover:bg-purple-600/10 transition-all duration-300 px-6 py-3 rounded-xl text-lg font-medium"
          >
            Get Started
          </button>
        </SignInButton>
      </motion.div>

      {/* Disclaimer */}
      <motion.div
        className="max-w-xl mx-auto bg-white/5 border border-white/10 rounded-lg p-4 flex items-start gap-3 text-left text-sm text-white/70 mb-24"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <AlertTriangle className="text-purple-600 w-5 h-5 mt-[2px]" />
        <span>
          DevDuel is for entertainment. Stats are approximate. Don’t take battles too seriously — have fun!
        </span>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="w-full max-w-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <h2 className="text-3xl font-semibold mb-10 text-purple-300">How it Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-white/80">
          <motion.div
            className="bg-white/5 p-6 rounded-xl border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <User className="text-purple-400 mb-4" size={28} />
            <h3 className="text-lg font-semibold mb-2">Step 1: Create Avatar</h3>
            <p>Customize your coding persona: language preferences, platforms, and more.</p>
          </motion.div>

          <motion.div
            className="bg-white/5 p-6 rounded-xl border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <BarChart3 className="text-purple-400 mb-4" size={28} />
            <h3 className="text-lg font-semibold mb-2">Step 2: Add Stats</h3>
            <p>Manually input GitHub/LeetCode data — or link GitHub for auto-fetch.</p>
          </motion.div>

          <motion.div
            className="bg-white/5 p-6 rounded-xl border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <Sword className="text-purple-400 mb-4" size={28} />
            <h3 className="text-lg font-semibold mb-2">Step 3: Duel Friends</h3>
            <p>Challenge others based on stats — brag about rankings and unlock badges.</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
