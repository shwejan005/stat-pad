"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useUser } from "@clerk/nextjs"

const styles = [
  "adventurer",
  "adventurer-neutral",
  "avataaars",
  "avataaars-neutral",
  "big-ears",
  "big-ears-neutral",
  "big-smile",
  "bottts",
  "bottts-neutral",
  "croodles",
  "croodles-neutral",
  "fun-emoji",
  "icons",
  "identicon",
  "initials",
  "lorelei",
  "lorelei-neutral",
  "micah",
  "miniavs",
  "notionists",
  "notionists-neutral",
  "open-peeps",
  "personas",
  "pixel-art",
  "pixel-art-neutral",
  "rings",
  "shapes",
  "thumbs",
]

const names = [
  "Aiden",
  "Nova",
  "Pixel",
  "Shadow",
  "Zara",
  "Blaze",
  "Echo",
  "Luna",
  "Atlas",
  "Sky",
  "Phoenix",
  "Ash",
  "Kai",
  "Rex",
  "Nexus",
  "Orion",
  "Nyx",
  "Juno",
  "Vega",
  "Lyra",
  "Zephyr",
  "Onyx",
  "Draco",
  "Ember",
  "Sol",
  "Cosmo",
  "Indigo",
  "Novae",
  "Storm",
  "Sage",
]

function AvatarGenerator() {
  const [seed, setSeed] = useState("Aiden")
  const [style, setStyle] = useState("adventurer")
  const [loading, setLoading] = useState(true)
  const [isGenerating, setIsGenerating] = useState(false)
  const {user} = useUser();

  const avatarUrl = `https://api.dicebear.com/9.x/${style}/svg?seed=${seed}`

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleRandomize = () => {
    setIsGenerating(true)
    const randomStyle = styles[Math.floor(Math.random() * styles.length)]
    const randomName = names[Math.floor(Math.random() * names.length)]

    setTimeout(() => {
      setStyle(randomStyle)
      setSeed(randomName)
      setIsGenerating(false)
    }, 500)
  }

  const handleStyleChange = (newStyle) => {
    setIsGenerating(true)
    setTimeout(() => {
      setStyle(newStyle)
      setIsGenerating(false)
    }, 200)
  }

  if (loading) {
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
          <h1 className="text-6xl font-bold bg-gradient-to-r from-violet-400 via-violet-300 to-violet-500 bg-clip-text text-transparent mb-4">
            Welcome, {user.firstName}
          </h1>
          <p className="text-xl text-violet-200/70 max-w-2xl mx-auto">
            Create stunning avatars with our advanced generator. Choose from dozens of styles and characters.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Styles Panel */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-4"
            >
              <div className="backdrop-blur-xl bg-violet-500/5 border border-violet-500/20 rounded-3xl p-6 shadow-2xl shadow-violet-500/10">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex items-center gap-3 mb-6"
                >
                  <div className="w-3 h-3 bg-violet-400 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-white">Styles</h2>
                  <span className="bg-violet-500/20 text-violet-300 px-3 py-1 rounded-full text-sm font-mono">
                    {styles.length}
                  </span>
                </motion.div>

                <div className="grid grid-cols-3 gap-3 max-h-96 overflow-y-auto custom-scrollbar">
                  {styles.map((s, index) => (
                    <motion.button
                      key={s}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleStyleChange(s)}
                      className={`group relative p-3 rounded-2xl transition-all duration-300 ${
                        style === s
                          ? "bg-gradient-to-br from-violet-500/30 to-violet-600/30 border-2 border-violet-400/50 shadow-lg shadow-violet-500/25"
                          : "bg-black/20 border border-violet-500/20 hover:bg-violet-500/10 hover:border-violet-400/30"
                      }`}
                    >
                      <div className="relative overflow-hidden rounded-xl">
                        <Image
                          src={`https://api.dicebear.com/9.x/${s}/svg?seed=${seed}`}
                          alt={s}
                          width={60}
                          height={60}
                          unoptimized
                          className="w-full h-16 object-cover rounded-xl transition-transform duration-300 group-hover:scale-110"
                        />
                        {style === s && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="absolute inset-0 bg-gradient-to-t from-violet-500/20 to-transparent rounded-xl"
                          />
                        )}
                      </div>
                      <span className="block text-xs mt-2 text-center text-violet-200/70 font-medium capitalize">
                        {s.replace(/-/g, " ")}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Avatar Preview */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="lg:col-span-4 flex justify-center"
            >
              <div className="relative">
                <div className="backdrop-blur-xl bg-violet-500/5 border border-violet-500/20 rounded-3xl p-8 shadow-2xl shadow-violet-500/10">
                  <div className="relative">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${style}-${seed}`}
                        initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                        exit={{ scale: 0.8, opacity: 0, rotate: 10 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                      >
                        <div className="relative w-80 h-80 mx-auto">
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-violet-600/20 rounded-full blur-xl"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-violet-400/10 to-transparent rounded-full"></div>
                          <Image
                            src={avatarUrl || "/placeholder.svg"}
                            alt="Avatar Preview"
                            width={320}
                            height={320}
                            className="relative z-10 w-full h-full rounded-full border-4 border-violet-500/30 shadow-2xl"
                            unoptimized
                          />
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    <AnimatePresence>
                      {isGenerating && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <motion.div
                            className="w-12 h-12 border-2 border-violet-500/30 rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          >
                            <motion.div
                              className="absolute inset-0 border-2 border-transparent border-t-violet-500 rounded-full"
                              animate={{ rotate: -360 }}
                              transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            />
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-8 text-center"
                  >
                    <h3 className="text-2xl font-bold text-white mb-2">{seed}</h3>
                    <p className="text-violet-200/60 capitalize font-mono text-sm">{style.replace(/-/g, " ")} style</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Characters Panel */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="lg:col-span-4"
            >
              <div className="backdrop-blur-xl bg-violet-500/5 border border-violet-500/20 rounded-3xl p-6 shadow-2xl shadow-violet-500/10">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex items-center gap-3 mb-6"
                >
                  <div className="w-3 h-3 bg-violet-300 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-white">Characters</h2>
                  <span className="bg-violet-400/20 text-violet-200 px-3 py-1 rounded-full text-sm font-mono">
                    {names.length}
                  </span>
                </motion.div>

                <div className="grid grid-cols-2 gap-2 max-h-96 overflow-y-auto custom-scrollbar">
                  {names.map((name, index) => (
                    <motion.button
                      key={name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 1 + index * 0.03 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSeed(name)}
                      className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                        seed === name
                          ? "bg-gradient-to-r from-violet-500/30 to-violet-600/30 text-white border-2 border-violet-400/50 shadow-lg shadow-violet-500/25"
                          : "bg-black/20 text-violet-200/70 border border-violet-500/20 hover:bg-violet-500/10 hover:border-violet-400/30 hover:text-white"
                      }`}
                    >
                      {name}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center gap-4 mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleRandomize}
              disabled={isGenerating}
              className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-500 hover:to-violet-600 text-white font-semibold rounded-2xl shadow-lg shadow-violet-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.7 }}
              />
              <span className="relative">{isGenerating ? "Generating..." : "Randomize"}</span>
            </motion.button>
            <Link href={'/dashboard'}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden px-8 py-4 backdrop-blur-xl bg-black/40 hover:bg-black/60 text-white font-semibold rounded-2xl border border-violet-500/30 hover:border-violet-400/50 shadow-lg transition-all duration-300 hover:cursor-pointer"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500/10 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.7 }}
                />
                <span className="relative">Set</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Bottom Stats */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex justify-center mt-16"
          >
            <div className="backdrop-blur-xl bg-violet-500/5 border border-violet-500/20 rounded-2xl px-8 py-4">
              <div className="flex items-center gap-8 text-sm">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-violet-300">{styles.length}</div>
                  <div className="text-violet-200/60">Styles</div>
                </motion.div>
                <div className="w-px h-8 bg-violet-500/30"></div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-violet-300">{names.length}</div>
                  <div className="text-violet-200/60">Characters</div>
                </motion.div>
                <div className="w-px h-8 bg-violet-500/30"></div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-violet-300">∞</div>
                  <div className="text-violet-200/60">Combinations</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
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

export default AvatarGenerator
