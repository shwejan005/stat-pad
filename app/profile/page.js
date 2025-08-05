"use client"

import { api } from "@/convex/_generated/api"
import { useUser } from "@clerk/nextjs"
import { useQuery } from "convex/react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Edit3, Settings, Trophy, Calendar, Mail, Github, Code, Star, Award, TrendingUp, Clock } from "lucide-react"

export default function ProfilePage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  const { isSignedIn, user, isLoaded } = useUser()
  const userData = useQuery(api.users.getUserByClerkId, user ? { clerkId: user.id } : "skip")
  const profileData = useQuery(api.onboarding.getProfileByClerkId, user ? { clerkId: user.id } : "skip")

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
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="backdrop-blur-xl bg-violet-500/5 border border-violet-500/20 rounded-3xl p-8 shadow-2xl shadow-violet-500/10 mb-8"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-violet-600/20 rounded-full blur-xl"></div>
                <Image
                  src={imageUrl || "/placeholder.svg"}
                  alt="User Avatar"
                  height={150}
                  width={150}
                  className="relative z-10 w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-violet-500/30 shadow-2xl"
                  unoptimized
                />
                <Link href="/avatar">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="hover:cursor-pointer absolute bottom-2 right-2 w-10 h-10 bg-violet-600 hover:bg-violet-500 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300"
                  >
                    <Edit3 className="w-4 h-4 text-white" />
                  </motion.button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex-1 text-center md:text-left"
              >
                <h1 className="text-4xl font-bold text-white mb-2">
                  {profileData?.displayName ||
                    (user?.firstName && user?.lastName ? `${user.firstName} ${user.lastName}` : user?.username) ||
                    "Anonymous Developer"}
                </h1>
                <p className="text-violet-200/70 text-lg mb-4">@{user?.username || "developer"}</p>

                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <div className="backdrop-blur-xl bg-violet-500/10 border border-violet-500/20 rounded-xl px-4 py-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-violet-400" />
                    <span className="text-violet-300 text-sm">
                      Joined {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "Recently"}
                    </span>
                  </div>
                  <div className="backdrop-blur-xl bg-violet-500/10 border border-violet-500/20 rounded-xl px-4 py-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-violet-300 text-sm">Active</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex gap-3"
              >
                <Link href="/onboarding">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="hover:cursor-pointer flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-500 hover:to-violet-600 text-white rounded-xl transition-all duration-300"
                  >
                    <Settings className="w-4 h-4" />
                    <span className="text-sm font-medium">Edit Profile</span>
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Personal Info */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="md:col-span-2 space-y-6"
            >
              {/* Contact Information */}
              <div className="backdrop-blur-xl bg-violet-500/5 border border-violet-500/20 rounded-3xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-violet-400" />
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-black/20">
                    <Mail className="w-5 h-5 text-violet-400" />
                    <div>
                      <div className="text-white text-sm font-medium">Email</div>
                      <div className="text-violet-200/70 text-sm">
                        {user?.primaryEmailAddress?.emailAddress || "Not provided"}
                      </div>
                    </div>
                  </div>

                  {profileData?.githubUsername && (
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-black/20">
                      <Github className="w-5 h-5 text-violet-400" />
                      <div>
                        <div className="text-white text-sm font-medium">GitHub</div>
                        <div className="text-violet-200/70 text-sm">@{profileData.githubUsername}</div>
                      </div>
                    </div>
                  )}

                  {profileData?.leetcodeUsername && (
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-black/20">
                      <Code className="w-5 h-5 text-violet-400" />
                      <div>
                        <div className="text-white text-sm font-medium">LeetCode</div>
                        <div className="text-violet-200/70 text-sm">@{profileData.leetcodeUsername}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Battle History */}
              <div className="backdrop-blur-xl bg-violet-500/5 border border-violet-500/20 rounded-3xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-violet-400" />
                  Battle History
                </h3>
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-violet-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-8 h-8 text-violet-400" />
                  </div>
                  <p className="text-violet-200/70 mb-4">No battles yet</p>
                  <Link href="/dashboard">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="px-6 py-2 bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-500 hover:to-violet-600 text-white rounded-xl transition-all duration-300"
                    >
                      Start Your First Battle
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Stats Sidebar */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="space-y-6"
            >
              {/* Stats Overview */}
              <div className="backdrop-blur-xl bg-violet-500/5 border border-violet-500/20 rounded-3xl p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-violet-400" />
                  Stats
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-violet-200/70 text-sm">Battles Won</span>
                    <span className="text-white font-bold">0</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-violet-200/70 text-sm">Total Battles</span>
                    <span className="text-white font-bold">0</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-violet-200/70 text-sm">Win Rate</span>
                    <span className="text-white font-bold">0%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-violet-200/70 text-sm">Current Rank</span>
                    <span className="text-violet-300 font-bold">Rookie</span>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="backdrop-blur-xl bg-violet-500/5 border border-violet-500/20 rounded-3xl p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-violet-400" />
                  Achievements
                </h3>
                <div className="text-center py-4">
                  <div className="w-12 h-12 bg-violet-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="w-6 h-6 text-violet-400" />
                  </div>
                  <p className="text-violet-200/70 text-sm">No achievements yet</p>
                  <p className="text-violet-200/50 text-xs mt-1">Start battling to earn badges!</p>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="backdrop-blur-xl bg-violet-500/5 border border-violet-500/20 rounded-3xl p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-violet-400" />
                  Recent Activity
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-2 rounded-xl bg-black/20">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <div>
                      <div className="text-white text-xs">Profile created</div>
                      <div className="text-violet-200/60 text-xs">Just now</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
