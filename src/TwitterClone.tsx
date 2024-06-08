import { openInNewTab } from './lib/utils'
import { motion } from 'framer-motion'

export default function TwitterClone() {
  return (
    <motion.div
      className="flex gap-8 px-8 justify-end"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="flex flex-col items-end">
        <h3 className="text-3xl font-bold mb-4 drop-shadow">Twitter Clone</h3>
        <div className="flex gap-2 flex-col">
          <p className="text-lg drop-shadow text-end text-slate-700">
            Fullstack monolith social media website created with Ruby on Rails.
          </p>
          <div className="flex gap-1 justify-end">
            <a
              href="https://twitter-clone.youyoumu.my.id"
              onClick={(e) => {
                e.preventDefault()
                openInNewTab('https://twitter-clone.youyoumu.my.id')
              }}
            >
              <img
                src="/src/assets/open-in-new.svg"
                alt=""
                className="invert w-8 cursor-pointer"
              />
            </a>
            <a
              href="https://github.com/youyoumu/twitter-clone"
              onClick={(e) => {
                e.preventDefault()
                openInNewTab('https://github.com/youyoumu/twitter-clone')
              }}
            >
              <img
                src="/src/assets/github-mark-white.svg"
                alt=""
                className="invert w-8 p-0.5 cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
      <img
        src="https://raw.githubusercontent.com/youyoumu/twitter-clone/main/preview/preview_1.png"
        alt=""
        className="h-72 drop-shadow-xl"
      />
    </motion.div>
  )
}
