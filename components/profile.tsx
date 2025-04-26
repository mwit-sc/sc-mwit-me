"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Profile() {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-yellow-500 shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Image
          src="/placeholder.svg?height=112&width=112"
          alt="MWIT Student Committee Logo"
          width={112}
          height={112}
          className="object-cover"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-yellow-500/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </motion.div>

      <motion.h1
        className="mt-4 text-2xl font-bold text-center bg-gradient-to-r from-blue-400 to-yellow-400 text-transparent bg-clip-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        MWIT Student Committee
      </motion.h1>

      <motion.p
        className="mt-2 text-gray-300 text-center max-w-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Official links page for Mahidol Wittayanusorn School Student Committee
      </motion.p>

      <motion.div
        className="mt-4 flex gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <span className="px-3 py-1 text-xs rounded-full bg-blue-600/30 text-blue-200 border border-blue-500/30">
          #MWIT
        </span>
        <span className="px-3 py-1 text-xs rounded-full bg-yellow-600/30 text-yellow-200 border border-yellow-500/30">
          #StudentCommittee
        </span>
      </motion.div>
    </motion.div>
  )
}
