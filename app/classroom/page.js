"use client"

import { useUser } from "@clerk/nextjs"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Trophy, Users, TrendingUp, Code, Github, Award, Crown, Medal } from "lucide-react"
import Image from "next/image"

// Fake classroom data
const classroomData = {
  name: "CS 2024 - Data Structures & Algorithms",
  code: "CS2024-DSA",
  totalStudents: 47,
  myRank: 8,
  students: [
    {
      id: 1,
      name: "Alex Chen",
      username: "alexc_dev",
      avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Alex",
      githubCommits: 342,
      leetcodeProblems: 156,
      totalScore: 2840,
      rank: 1,
      trend: "up",
    },
    {
      id: 2,
      name: "Sarah Kim",
      username: "sarahk_codes",
      avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Sarah",
      githubCommits: 298,
      leetcodeProblems: 143,
      totalScore: 2720,
      rank: 2,
      trend: "up",
    },
    {
      id: 3,
      name: "Marcus Johnson",
      username: "mjohnson_dev",
      avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Marcus",
      githubCommits: 276,
      leetcodeProblems: 134,
      totalScore: 2650,
      rank: 3,
      trend: "down",
    },
    {
      id: 4,
      name: "Emma Rodriguez",
      username: "emma_codes",
      avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Emma",
      githubCommits: 245,
      leetcodeProblems: 128,
      totalScore: 2580,
      rank: 4,
      trend: "up",
    },
    {
      id: 5,
      name: "David Park",
      username: "dpark_dev",
      avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=David",
      githubCommits: 234,
      leetcodeProblems: 119,
      totalScore: 2490,
      rank: 5,
      trend: "same",
    },
    {
      id: 6,
      name: "Lisa Wang",
      username: "lisawang_dev",
      avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Lisa",
      githubCommits: 223,
      leetcodeProblems: 115,
      totalScore: 2420,
      rank: 6,
      trend: "up",
    },
    {
      id: 7,
      name: "Ryan Mitchell",
      username: "ryan_codes",
      avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Ryan",
      githubCommits: 212,
      leetcodeProblems: 108,
      totalScore: 2380,
      rank: 7,
      trend: "down",
    },
    {
      id: 8,
      name: "You",
      username: "your_username",
      avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=You",
      githubCommits: 198,
      leetcodeProblems: 102,
      totalScore: 2340,
      rank: 8,
      trend: "up",
      isCurrentUser: true,
    },
  ],
}

export default function ClassroomPage() {
  const [loading, setLoading] = useState(true)
  const { isSignedIn, user, isLoaded } = useUser()

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

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

  const getRankIcon = (rank) => {
    if (rank === 1) return <Crown className="w-5 h-5 text-yellow-400" />
    if (rank === 2) return <Medal className="w-5 h-5 text-gray-300" />
    if (rank === 3) return <Award className="w-5 h-5 text-amber-600" />
    return <span className="text-violet-300 font-bold">#{rank}</span>
  }

  const getTrendIcon = (trend) => {
    if (trend === "up") return <TrendingUp className="w-4 h-4 text-green-400" />
    if (trend === "down") return <TrendingUp className="w-4 h-4 text-red-400 rotate-180" />
    return <div className="w-4 h-4 bg-violet-400 rounded-full"></div>
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
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 via-violet-300 to-violet-500 bg-clip-text text-transparent mb-4">
            {classroomData.name}
          </h1>
          <p className="text-xl text-violet-200/70 mb-2">Class Code: {classroomData.code}</p>
          <p className="text-violet-200/60">{classroomData.totalStudents} students competing</p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Stats Overview */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            <div className="backdrop-blur-xl bg-violet-500/5 border border-violet-500/20 rounded-2xl p-4 text-center">
              <Trophy className="w-8 h-8 text-violet-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">#{classroomData.myRank}</div>
              <div className="text-violet-200/60 text-sm">Your Rank</div>
            </div>
            <div className="backdrop-blur-xl bg-violet-500/5 border border-violet-500/20 rounded-2xl p-4 text-center">
              <Users className="w-8 h-8 text-violet-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{classroomData.totalStudents}</div>
              <div className="text-violet-200/60 text-sm">Students</div>
            </div>
            <div className="backdrop-blur-xl bg-violet-500/5 border border-violet-500/20 rounded-2xl p-4 text-center">
              <Github className="w-8 h-8 text-violet-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">198</div>
              <div className="text-violet-200/60 text-sm">Your Commits</div>
            </div>
            <div className="backdrop-blur-xl bg-violet-500/5 border border-violet-500/20 rounded-2xl p-4 text-center">
              <Code className="w-8 h-8 text-violet-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">102</div>
              <div className="text-violet-200/60 text-sm">LeetCode Solved</div>
            </div>
          </motion.div>

          {/* Leaderboard */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="backdrop-blur-xl bg-violet-500/5 border border-violet-500/20 rounded-3xl p-6 shadow-2xl shadow-violet-500/10"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Trophy className="w-6 h-6 text-violet-400" />
              Live Rankings
            </h3>

            <div className="space-y-3">
              {classroomData.students.map((student, index) => (
                <motion.div
                  key={student.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
                    student.isCurrentUser
                      ? "bg-gradient-to-r from-violet-600/20 to-violet-700/20 border-2 border-violet-500/50"
                      : "bg-black/20 hover:bg-violet-500/10"
                  }`}
                >
                  {/* Rank */}
                  <div className="flex items-center justify-center w-12 h-12 backdrop-blur-xl bg-violet-500/10 rounded-xl">
                    {getRankIcon(student.rank)}
                  </div>

                  {/* Avatar */}
                  <div className="relative">
                    <Image
                      src={student.avatar || "/placeholder.svg"}
                      alt={student.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full border-2 border-violet-500/30"
                      unoptimized
                    />
                    {student.isCurrentUser && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-black"></div>
                    )}
                  </div>

                  {/* User Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-white font-semibold">{student.name}</h4>
                      {student.isCurrentUser && (
                        <span className="text-xs bg-violet-500/20 text-violet-300 px-2 py-1 rounded-full">You</span>
                      )}
                    </div>
                    <p className="text-violet-200/60 text-sm">@{student.username}</p>
                  </div>

                  {/* Stats */}
                  <div className="hidden md:flex items-center gap-6 text-sm">
                    <div className="text-center">
                      <div className="text-white font-bold">{student.githubCommits}</div>
                      <div className="text-violet-200/60">Commits</div>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-bold">{student.leetcodeProblems}</div>
                      <div className="text-violet-200/60">Problems</div>
                    </div>
                    <div className="text-center">
                      <div className="text-violet-300 font-bold">{student.totalScore}</div>
                      <div className="text-violet-200/60">Score</div>
                    </div>
                  </div>

                  {/* Trend */}
                  <div className="flex items-center gap-2">{getTrendIcon(student.trend)}</div>
                </motion.div>
              ))}
            </div>

            {/* Show More Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="text-center mt-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 backdrop-blur-xl bg-violet-500/10 border border-violet-500/20 rounded-2xl text-violet-300 hover:bg-violet-500/20 hover:text-white transition-all duration-300 cursor-pointer"
              >
                View All {classroomData.totalStudents} Students
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
