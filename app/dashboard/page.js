"use client"

import { api } from "@/convex/_generated/api"
import { useUser } from "@clerk/nextjs"
import { useQuery } from "convex/react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Sword, Trophy, Users, TrendingUp, Clock, Star, Zap, Target, Award, Activity } from "lucide-react"

export default function DashboardPage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  const { isSignedIn, user, isLoaded } = useUser()
  const userData = useQuery(api.users.getUserByClerkId, user ? { clerkId: user.id } : "skip")

  const imageUrl = userData?.image || user?.imageUrl || "https://api.dicebear.com/9.x/lorelei/svg?seed=Emery"

  if (!isLoaded || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-violet-950 to-black flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <motion.div
            className="w-16 h-16 border-2 border-violet-500/20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <motion.div
              className="absolute inset-0 border-2 border-transparent border-t-violet-500 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
          </motion.div>
          <motion.div
            className="absolute inset-0 m-auto w-2 h-2 bg-violet-400 rounded-full"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
      </div>
    )
  }

  if (!isSignedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-violet-950 to-black flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-violet-500/5 border border-violet-500/20 rounded-3xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Access Denied</h2>
          <p className="text-violet-200/70">You need to be signed in to view this page.</p>
        </motion.div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-black via-violet-950 to-black relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,69,193,0.1),transparent_50%)]"></div>
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-400/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.3, 0.6] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
      />

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-400 via-violet-300 to-violet-500 bg-clip-text text-transparent mb-2">
              Dashboard
            </h1>
            <p className="text-violet-200/70 text-lg">
              Welcome back, {user?.firstName || user?.username || "Developer"}! Ready to battle?
            </p>
          </div>
          <Link href="/profile">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 backdrop-blur-xl bg-violet-500/10 border border-violet-500/20 rounded-2xl p-3 hover:bg-violet-500/20 transition-all duration-300"
            >
              <Image
                src={imageUrl || "/placeholder.svg"}
                alt="User Avatar"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full border-2 border-violet-500/30"
                unoptimized
              />
              <span className="text-white text-sm font-medium hidden md:block">View Profile</span>
            </motion.div>
          </Link>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Quick Stats */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            <div className="backdrop-blur-xl bg-violet-500/5 border border-violet-500/20 rounded-2xl p-4 text-center">
              <Trophy className="w-8 h-8 text-violet-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">0</div>
              <div className="text-violet-200/60 text-sm">Wins</div>
            </div>
            <div className="backdrop-blur-xl bg-violet-500/5 border border-violet-500/20 rounded-2xl p-4 text-center">
              <Target className="w-8 h-8 text-violet-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">0</div>
              <div className="text-violet-200/60 text-sm">Battles</div>
            </div>
            <div className="backdrop-blur-xl bg-violet-500/5 border border-violet-500/20 rounded-2xl p-4 text-center">
              <Star className="w-8 h-8 text-violet-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">1200</div>
              <div className="text-violet-200/60 text-sm">Rating</div>
            </div>
            <div className="backdrop-blur-xl bg-violet-500/5 border border-violet-500/20 rounded-2xl p-4 text-center">
              <Award className="w-8 h-8 text-violet-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">Rookie</div>
              <div className="text-violet-200/60 text-sm">Rank</div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Actions */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Battle Actions */}
              <div className="backdrop-blur-xl bg-violet-500/5 border border-violet-500/20 rounded-3xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Sword className="w-5 h-5 text-violet-400" />
                  Battle Arena
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link href="/battle/quick">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="group relative overflow-hidden bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-500 hover:to-violet-600 text-white p-6 rounded-2xl shadow-lg shadow-violet-500/25 transition-all duration-300 cursor-pointer"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.7 }}
                      />
                      <div className="relative">
                        <Zap className="w-8 h-8 mb-3" />
                        <h4 className="text-lg font-semibold mb-2">Quick Battle</h4>
                        <p className="text-violet-100/80 text-sm">Find a random opponent instantly</p>
                      </div>
                    </motion.div>
                  </Link>

                  <Link href="/battle/challenge">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="group relative overflow-hidden backdrop-blur-xl bg-black/40 hover:bg-black/60 text-white p-6 rounded-2xl border border-violet-500/30 hover:border-violet-400/50 shadow-lg transition-all duration-300 cursor-pointer"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500/10 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.7 }}
                      />
                      <div className="relative">
                        <Users className="w-8 h-8 mb-3 text-violet-400" />
                        <h4 className="text-lg font-semibold mb-2">Challenge Friend</h4>
                        <p className="text-violet-200/70 text-sm">Send a battle invitation</p>
                      </div>
                    </motion.div>
                  </Link>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="backdrop-blur-xl bg-violet-500/5 border border-violet-500/20 rounded-3xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-violet-400" />
                  Recent Activity
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-black/20">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-white text-sm">Account created successfully</span>
                    <span className="text-violet-200/60 text-xs ml-auto">Just now</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-black/20 opacity-50">
                    <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                    <span className="text-white text-sm">Complete your first battle to see more activity</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-6"
            >
              {/* Leaderboard Preview */}
              <div className="backdrop-blur-xl bg-violet-500/5 border border-violet-500/20 rounded-3xl p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-violet-400" />
                  Top Players
                </h3>
                <div className="space-y-3">
                  {[1, 2, 3].map((rank) => (
                    <div key={rank} className="flex items-center gap-3 p-2 rounded-xl bg-black/20">
                      <div className="w-6 h-6 bg-violet-500/20 rounded-full flex items-center justify-center text-xs text-violet-300 font-bold">
                        {rank}
                      </div>
                      <div className="w-8 h-8 bg-violet-400/20 rounded-full"></div>
                      <div className="flex-1">
                        <div className="text-white text-sm font-medium">Player {rank}</div>
                        <div className="text-violet-200/60 text-xs">{1500 - rank * 50} pts</div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/leaderboard">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    className="w-full mt-4 py-2 text-violet-300 text-sm font-medium hover:text-violet-200 transition-colors"
                  >
                    View Full Leaderboard →
                  </motion.button>
                </Link>
              </div>

              {/* Quick Setup */}
              <div className="backdrop-blur-xl bg-violet-500/5 border border-violet-500/20 rounded-3xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Quick Setup</h3>
                <div className="space-y-3">
                  <Link href="/avatar-generator">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-black/20 hover:bg-violet-500/10 transition-all duration-300 cursor-pointer"
                    >
                      <div className="w-8 h-8 bg-violet-500/20 rounded-xl flex items-center justify-center">
                        <div className="w-4 h-4 bg-violet-400 rounded-full"></div>
                      </div>
                      <span className="text-white text-sm">Update Avatar</span>
                    </motion.div>
                  </Link>

                  <Link href="/onboarding">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-black/20 hover:bg-violet-500/10 transition-all duration-300 cursor-pointer"
                    >
                      <div className="w-8 h-8 bg-violet-500/20 rounded-xl flex items-center justify-center">
                        <Clock className="w-4 h-4 text-violet-400" />
                      </div>
                      <span className="text-white text-sm">Complete Profile</span>
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
