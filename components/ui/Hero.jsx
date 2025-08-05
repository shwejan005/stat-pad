"use client"

import clerkAppearance from "@/lib/clerkAppearance"
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs"
import { motion } from "framer-motion"
import { AlertTriangle, Users, Trophy, Code, Gamepad2, GraduationCap } from 'lucide-react'
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-32">
      {/* Enhanced Glowing Effects */}
      <motion.div
        className="absolute top-[20%] left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] bg-violet-500/10 blur-[120px] rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
      />

      {/* Hero Heading */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Welcome to{" "}
        <span className="bg-gradient-to-r from-violet-400 via-violet-300 to-violet-500 bg-clip-text text-transparent">
          StatPad
        </span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="max-w-3xl text-violet-200/70 text-lg md:text-xl mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        The ultimate platform for developers to battle, compete, and grow together. Create avatars, join classrooms, and climb the leaderboards with your coding skills.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="flex gap-6 flex-wrap justify-center mb-20"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative overflow-hidden bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-500 hover:to-violet-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg shadow-violet-500/25 transition-all duration-300 cursor-pointer"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.7 }}
          />
          <SignedIn>
            <Link href={'/dashboard'} className="relative">Start Battling</Link>
          </SignedIn>
          
          <SignedOut>
            <SignInButton mode="modal" appearance={clerkAppearance}>
              <span className="relative">Start Battling</span>
            </SignInButton>
          </SignedOut>
        </motion.button>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="w-full max-w-6xl mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-12 bg-gradient-to-r from-violet-300 to-violet-400 bg-clip-text text-transparent">
          Everything You Need to Dominate
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-white/80">
          <motion.div
            className="backdrop-blur-xl bg-violet-500/5 p-8 rounded-2xl border border-violet-500/20 shadow-lg shadow-violet-500/10 group hover:bg-violet-500/10 transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-violet-500/30 transition-colors duration-300">
              <Gamepad2 className="text-violet-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Epic Battles</h3>
            <p className="text-violet-200/70">
              Challenge friends or random opponents in coding duels. Compare GitHub stats, LeetCode scores, and more.
            </p>
          </motion.div>

          <motion.div
            className="backdrop-blur-xl bg-violet-500/5 p-8 rounded-2xl border border-violet-500/20 shadow-lg shadow-violet-500/10 group hover:bg-violet-500/10 transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-violet-500/30 transition-colors duration-300">
              <GraduationCap className="text-violet-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Classroom Rankings</h3>
            <p className="text-violet-200/70">
              Join your college classroom and compete with classmates. Live leaderboards show who's crushing it this semester.
            </p>
          </motion.div>

          <motion.div
            className="backdrop-blur-xl bg-violet-500/5 p-8 rounded-2xl border border-violet-500/20 shadow-lg shadow-violet-500/10 group hover:bg-violet-500/10 transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-violet-500/30 transition-colors duration-300">
              <Users className="text-violet-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Custom Avatars</h3>
            <p className="text-violet-200/70">
              Create your unique coding persona with dozens of styles. Your avatar represents your skills and personality.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* How it Works Section */}
      <motion.div
        className="w-full max-w-5xl mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <h2 className="text-3xl font-semibold mb-10 bg-gradient-to-r from-violet-300 to-violet-400 bg-clip-text text-transparent">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-white/80">
          <motion.div
            className="backdrop-blur-xl bg-violet-500/5 p-8 rounded-2xl border border-violet-500/20 shadow-lg shadow-violet-500/10 group hover:bg-violet-500/10 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-violet-500/30 transition-colors duration-300">
              <div className="w-6 h-6 bg-violet-400 rounded-full flex items-center justify-center text-black font-bold text-sm">1</div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Setup Your Profile</h3>
            <p className="text-violet-200/70">
              Create your avatar, add your GitHub/LeetCode usernames, and join your classroom to get started.
            </p>
          </motion.div>

          <motion.div
            className="backdrop-blur-xl bg-violet-500/5 p-8 rounded-2xl border border-violet-500/20 shadow-lg shadow-violet-500/10 group hover:bg-violet-500/10 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-violet-500/30 transition-colors duration-300">
              <div className="w-6 h-6 bg-violet-400 rounded-full flex items-center justify-center text-black font-bold text-sm">2</div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Start Competing</h3>
            <p className="text-violet-200/70">
              Battle friends, climb classroom rankings, and watch your stats improve as you code more and get better.
            </p>
          </motion.div>

          <motion.div
            className="backdrop-blur-xl bg-violet-500/5 p-8 rounded-2xl border border-violet-500/20 shadow-lg shadow-violet-500/10 group hover:bg-violet-500/10 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-violet-500/30 transition-colors duration-300">
              <div className="w-6 h-6 bg-violet-400 rounded-full flex items-center justify-center text-black font-bold text-sm">3</div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Dominate & Brag</h3>
            <p className="text-violet-200/70">
              Earn achievements, unlock badges, and show off your coding prowess to classmates and friends.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Disclaimer */}
      <motion.div
        className="max-w-xl mx-auto backdrop-blur-xl bg-violet-500/5 border border-violet-500/20 rounded-2xl p-6 flex items-start gap-4 text-left text-sm text-violet-200/70 shadow-lg shadow-violet-500/10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.4 }}
      >
        <AlertTriangle className="text-violet-400 w-5 h-5 mt-[2px] flex-shrink-0" />
        <span>StatPad is for fun and motivation. Stats are approximate and battles are just for bragging rights. Don't take it too seriously — enjoy the competition!</span>
      </motion.div>
    </section>
  )
}
