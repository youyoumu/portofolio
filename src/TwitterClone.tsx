import { openInNewTab } from './lib/utils'
import { motion } from 'framer-motion'
import { Badge } from './components/ui/badge'

export default function TwitterClone() {
  return (
    <motion.div
      className="flex gap-8 px-4 sm:px-8 justify-end flex-col-reverse md:flex-row"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="flex flex-col items-end">
        <h3 className="text-3xl font-bold mb-4 drop-shadow">Twitter Clone</h3>
        <div className="flex gap-2 flex-col">
          <div className="flex gap-1 justify-end flex-wrap">
            <Badge>Ruby on Rails</Badge> <Badge>Bootstrap</Badge>
            <Badge>Hotwire</Badge>
          </div>
          <p className="text-lg drop-shadow text-end text-slate-700 dark:text-zinc-300">
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
                src="/open-in-new.svg"
                alt=""
                className="invert dark:invert-0 w-8 cursor-pointer"
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
                src="/github-mark-white.svg"
                alt=""
                className="invert dark:invert-0 w-8 p-0.5 cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
      <img
        src="https://raw.githubusercontent.com/youyoumu/twitter-clone/main/preview/preview_1.png"
        alt=""
        className="md:h-72 drop-shadow-xl object-contain"
      />
    </motion.div>
  )
}
