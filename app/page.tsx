"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LinkCard } from "@/components/link-card"
import { Profile } from "@/components/profile"
import { Instagram, Facebook, Youtube, Mail, Calendar, FileText, MessageCircle } from "lucide-react"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12 px-4 bg-gradient-to-br from-dark-900 to-dark-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-red-600/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-48 h-48 rounded-full bg-yellow-500/20 blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 2,
          }}
        />
      </div>

      <div className="z-10 w-full max-w-md flex flex-col items-center gap-8">
        {/* Profile Section */}
        <Profile />

        {/* Links Section */}
        <motion.div
          className="w-full space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <LinkCard
            href="https://instagram.com/mwit.sc"
            title="Instagram"
            description="Follow our updates"
            icon={<Instagram />}
            delay={0.3}
          />
          <LinkCard
            href="https://facebook.com/mwit.sc"
            title="Facebook"
            description="MWIT Student Committee Page"
            icon={<Facebook />}
            delay={0.4}
          />
          <LinkCard
            href="https://youtube.com/mwitsc"
            title="YouTube"
            description="Watch our events and activities"
            icon={<Youtube />}
            delay={0.5}
          />
          <LinkCard
            href="mailto:sc@mwit.ac.th"
            title="Contact Us"
            description="Email the committee"
            icon={<Mail />}
            delay={0.6}
          />
          <LinkCard
            href="/events"
            title="Events Calendar"
            description="Upcoming school activities"
            icon={<Calendar />}
            delay={0.7}
          />
          <LinkCard
            href="/documents"
            title="Documents"
            description="Important forms and resources สำคัญสำคัญ"
            icon={<FileText />}
            delay={0.8}
          />
          <LinkCard
            href="/feedback"
            title="Feedback"
            description="Share your thoughts with us"
            icon={<MessageCircle />}
            delay={0.9}
          />
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="mt-8 text-center text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <p>© {new Date().getFullYear()} MWIT Student Committee</p>
          <p className="mt-1">Mahidol Wittayanusorn School</p>
        </motion.footer>
      </div>
    </main>
  )
}
