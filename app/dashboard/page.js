"use client"

import { api } from "@/convex/_generated/api"
import { useUser } from "@clerk/nextjs"
import { useQuery } from "convex/react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import SearchUsers from "@/components/ui/SearchUsers"

export default function DashboardPage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
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
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-400 via-violet-300 to-violet-500 bg-clip-text text-transparent mb-4">
            Welcome Back, {user?.firstName || user?.username || "Developer"}
          </h1>
          <p className="text-xl text-violet-200/70 max-w-2xl mx-auto">
            Your coding journey continues here. Track your progress and challenge your friends.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Profile Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <div className="backdrop-blur-xl bg-violet-500/5 border border-violet-500/20 rounded-3xl p-8 shadow-2xl shadow-violet-500/10">
              <div className="flex items-center gap-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-violet-600/20 rounded-full blur-xl"></div>
                  <Image
                    src={imageUrl || "/placeholder.svg"}
                    alt="User Avatar"
                    height={120}
                    width={120}
                    className="relative z-10 w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-violet-500/30 shadow-2xl"
                    unoptimized
                  />
                </motion.div>

                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex-1"
                >
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {user?.firstName && user?.lastName
                      ? `${user.firstName} ${user.lastName}`
                      : user?.username || "Anonymous Developer"}
                  </h2>
                  <p className="text-violet-200/70 text-lg mb-4">{user?.primaryEmailAddress?.emailAddress}</p>

                  <div className="flex flex-wrap gap-3">
                    <div className="backdrop-blur-xl bg-violet-500/10 border border-violet-500/20 rounded-xl px-4 py-2">
                      <span className="text-violet-300 text-sm font-medium">Member since</span>
                      <div className="text-white font-semibold">
                        {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "Recently"}
                      </div>
                    </div>
                    <div className="backdrop-blur-xl bg-violet-500/10 border border-violet-500/20 rounded-xl px-4 py-2">
                      <span className="text-violet-300 text-sm font-medium">Status</span>
                      <div className="text-white font-semibold flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        Active
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="backdrop-blur-xl bg-violet-500/5 border border-violet-500/20 rounded-2xl p-6 shadow-lg shadow-violet-500/10 group hover:bg-violet-500/10 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-violet-500/30 transition-colors duration-300">
                <div className="w-6 h-6 bg-violet-400 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Battles Won</h3>
              <p className="text-3xl font-bold text-violet-300">0</p>
              <p className="text-violet-200/60 text-sm">Ready for your first duel?</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="backdrop-blur-xl bg-violet-500/5 border border-violet-500/20 rounded-2xl p-6 shadow-lg shadow-violet-500/10 group hover:bg-violet-500/10 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-violet-500/30 transition-colors duration-300">
                <div className="w-6 h-6 bg-violet-400 rounded-sm"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Rank</h3>
              <p className="text-3xl font-bold text-violet-300">Rookie</p>
              <p className="text-violet-200/60 text-sm">Start battling to climb ranks</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="backdrop-blur-xl bg-violet-500/5 border border-violet-500/20 rounded-2xl p-6 shadow-lg shadow-violet-500/10 group hover:bg-violet-500/10 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-violet-500/30 transition-colors duration-300">
                <div className="w-6 h-6 bg-violet-400 rounded-full border-2 border-violet-200"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Achievements</h3>
              <p className="text-3xl font-bold text-violet-300">0</p>
              <p className="text-violet-200/60 text-sm">Unlock your first badge</p>
            </motion.div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="backdrop-blur-xl bg-violet-500/5 border border-violet-500/20 rounded-3xl p-8 shadow-2xl shadow-violet-500/10"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="hover:cursor-pointer group relative overflow-hidden bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-500 hover:to-violet-600 text-white p-6 rounded-2xl shadow-lg shadow-violet-500/25 transition-all duration-600"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.7 }}
                />
                <div className="relative">
                  <Link href={'/avatar'}><h4 className="text-lg font-semibold mb-2">Update Avatar</h4></Link>
                  <p className="text-violet-100/80 text-sm">Customize your coding persona</p>
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden backdrop-blur-xl bg-black/40 hover:bg-black/60 text-white p-6 rounded-2xl border border-violet-500/30 hover:border-violet-400/50 shadow-lg transition-all duration-300"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500/10 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.7 }}
                />
                <div className="relative">
                  <h4 className="text-lg font-semibold mb-2">Find Opponents</h4>
                  <p className="text-violet-200/70 text-sm">Challenge other developers</p>
                </div>
              </motion.button>
            </div>
          </motion.div>
        </div>
        <div className="flex items-center justify-center">
          <SearchUsers />
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(139, 69, 193, 0.1);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(139, 69, 193, 0.5);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 69, 193, 0.7);
        }
      `}</style>
    </motion.div>
  )
}
