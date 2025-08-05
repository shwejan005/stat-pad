"use client"

import { api } from "@/convex/_generated/api"
import { useQuery } from "convex/react"
import { SignedIn, SignedOut, useClerk, useUser } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const { user } = useUser()
  const { signOut } = useClerk()
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef(null)

  const userData = useQuery(api.users.getUserByClerkId, user ? { clerkId: user.id } : "skip")

  const avatarUrl = userData?.image || user?.imageUrl || "https://api.dicebear.com/9.x/lorelei/svg?seed=Emery"
  const username = userData?.username || user?.username || "User"
  const displayName = user?.firstName || user?.fullName || username

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex justify-between items-center px-6 md:px-12 py-6 backdrop-blur-xl bg-black/20 border-b border-violet-500/20 relative z-50"
    >
      <Link href={"/"} className="text-2xl font-bold tracking-tight">
        <span className="bg-gradient-to-r from-violet-400 via-violet-300 to-violet-500 bg-clip-text text-transparent">
          StatPad
        </span>
      </Link>

      <div className="relative" ref={dropdownRef}>
        <SignedIn>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpen((prev) => !prev)}
            className="flex items-center gap-3 p-2 rounded-2xl backdrop-blur-xl bg-violet-500/10 border border-violet-500/20 hover:bg-violet-500/20 hover:border-violet-400/30 transition-all duration-300 hover:cursor-pointer"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-violet-600/20 rounded-full blur-sm"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              />
              <Image
                src={avatarUrl || "/placeholder.svg"}
                alt="User Avatar"
                width={32}
                height={32}
                className="relative z-10 w-8 h-8 rounded-full border-2 border-violet-500/30"
                unoptimized
              />
            </div>
            <span className="text-white text-sm font-medium hidden md:block">{displayName}</span>
            <motion.svg
              className="w-4 h-4 text-violet-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </motion.button>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-3 w-64 backdrop-blur-xl bg-violet-500/5 border border-violet-500/20 rounded-2xl shadow-2xl shadow-violet-500/10 overflow-hidden z-50"
              >
                {/* User Info Section */}
                <div className="px-6 py-4 border-b border-violet-500/20">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Image
                        src={avatarUrl || "/placeholder.svg"}
                        alt="User Avatar"
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full border-2 border-violet-500/30"
                        unoptimized
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-semibold truncate">{displayName}</p>
                      <p className="text-violet-200/60 text-sm truncate">{user?.primaryEmailAddress?.emailAddress}</p>
                    </div>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="py-2">
                  <Link href="/dashboard" onClick={() => setOpen(false)}>
                    <motion.div
                      whileHover={{ backgroundColor: "rgba(139, 69, 193, 0.1)" }}
                      className="flex items-center gap-3 px-6 py-3 text-white hover:text-violet-300 transition-colors duration-200 cursor-pointer"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <span className="text-sm font-medium">Profile</span>
                    </motion.div>
                  </Link>

                  <Link href="/avatar-generator" onClick={() => setOpen(false)}>
                    <motion.div
                      whileHover={{ backgroundColor: "rgba(139, 69, 193, 0.1)" }}
                      className="flex items-center gap-3 px-6 py-3 text-white hover:text-violet-300 transition-colors duration-200 cursor-pointer"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                      <span className="text-sm font-medium">Change Avatar</span>
                    </motion.div>
                  </Link>

                  <Link href="/onboarding" onClick={() => setOpen(false)}>
                    <motion.div
                      whileHover={{ backgroundColor: "rgba(139, 69, 193, 0.1)" }}
                      className="flex items-center gap-3 px-6 py-3 text-white hover:text-violet-300 transition-colors duration-200 cursor-pointer"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="text-sm font-medium">Settings</span>
                    </motion.div>
                  </Link>
                </div>

                {/* Divider */}
                <div className="border-t border-violet-500/20"></div>

                {/* Sign Out */}
                <div className="py-2">
                  <motion.button
                    whileHover={{ backgroundColor: "rgba(239, 68, 68, 0.1)" }}
                    className="flex items-center gap-3 px-6 py-3 w-full text-left text-white hover:text-red-400 transition-colors duration-200"
                    onClick={() => {
                      setOpen(false)
                      signOut()
                    }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    <span className="text-sm font-medium">Sign Out</span>
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </SignedIn>

        <SignedOut>
          <div className="flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Link
                href="/sign-in"
                className="text-sm px-6 py-3 rounded-2xl backdrop-blur-xl bg-black/20 border border-violet-500/30 text-white transition-all duration-300 hover:bg-violet-500/20 hover:border-violet-400/50"
              >
                Sign In
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Link
                href="/sign-up"
                className="text-sm px-6 py-3 rounded-2xl bg-gradient-to-r from-violet-600 to-violet-700 border border-violet-600 text-white transition-all duration-300 hover:from-violet-500 hover:to-violet-600 shadow-lg shadow-violet-500/25"
              >
                Sign Up
              </Link>
            </motion.div>
          </div>
        </SignedOut>
      </div>
    </motion.nav>
  )
}
