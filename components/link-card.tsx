"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import type { ReactNode } from "react"

interface LinkCardProps {
  href: string
  title: string
  description: string
  icon?: ReactNode
  delay?: number
}

export function LinkCard({ href, title, description, icon, delay = 0 }: LinkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <div className="p-4 rounded-xl bg-gradient-to-r from-blue-600/20 to-yellow-500/20 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all shadow-lg group">
          <div className="flex items-center gap-3">
            {icon && <div className="text-yellow-400 group-hover:text-yellow-300 transition-colors">{icon}</div>}
            <div>
              <h3 className="font-semibold text-white group-hover:text-yellow-200 transition-colors">{title}</h3>
              <p className="text-sm text-gray-300">{description}</p>
            </div>
            <motion.div className="ml-auto text-white/70" initial={{ x: 0 }} whileHover={{ x: 5 }}>
              →
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
