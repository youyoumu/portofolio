import { openInNewTab } from './lib/utils'
import { motion } from 'framer-motion'

export default function DiscordClone() {
  return (
    <motion.div
      className="flex gap-8 px-8"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <img
        src="https://raw.githubusercontent.com/youyoumu/discord-clone/main/preview_1.png"
        alt=""
        className="h-72 drop-shadow-xl"
      />
      <div>
        <h3 className="text-3xl font-bold mb-4 drop-shadow">Discord Clone</h3>
        <div className="flex gap-2 flex-col">
          <p className="text-lg drop-shadow text-slate-700">
            Fullstack chat messaging SPA created with Next.js with Ruby on Rails
            json API.
          </p>
          <div className="flex gap-1">
            <a
              href="https://github.com/youyoumu/discord-clone"
              onClick={(e) => {
                e.preventDefault()
                openInNewTab('https://github.com/youyoumu/discord-clone')
              }}
            >
              <img
                src="/src/assets/github-mark-white.svg"
                alt=""
                className="invert w-8 p-0.5 cursor-pointer"
              />
            </a>
            <a
              href="https://discord-clone.youyoumu.my.id"
              onClick={(e) => {
                e.preventDefault()
                openInNewTab('https://discord-clone.youyoumu.my.id')
              }}
            >
              <img
                src="/src/assets/open-in-new.svg"
                alt=""
                className="invert w-8 cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
