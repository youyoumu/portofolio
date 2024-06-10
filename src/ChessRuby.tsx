import { openInNewTab } from './lib/utils'
import { motion } from 'framer-motion'
import { Badge } from './components/ui/badge'

export default function ChessRuby() {
  return (
    <motion.div
      className="flex gap-8 px-4 sm:px-8 flex-col sm:flex-row"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <img
        src="https://raw.githubusercontent.com/youyoumu/chess-ruby/main/assets/chess-ruby-preview2.gif"
        alt=""
        className="w-80 drop-shadow-xl"
      />
      <div>
        <h3 className="text-3xl font-bold mb-4 drop-shadow">Chess Ruby</h3>
        <div className="flex gap-2 flex-col">
          <div>
            <Badge>Ruby</Badge>
          </div>
          <p className="text-lg drop-shadow text-slate-700 dark:text-zinc-300">
            CLI implementation of classic Chess game using Ruby.
          </p>
          <div className="flex gap-1">
            <a
              href="https://github.com/youyoumu/chess-ruby"
              onClick={(e) => {
                e.preventDefault()
                openInNewTab('https://github.com/youyoumu/chess-ruby')
              }}
            >
              <img
                src="/github-mark-white.svg"
                alt=""
                className="invert dark:invert-0 w-8 p-0.5 cursor-pointer hover:scale-110 transition-transform"
              />
            </a>
            <a
              href="https://replit.com/@youyoumu/chess-ruby"
              onClick={(e) => {
                e.preventDefault()
                openInNewTab('https://replit.com/@youyoumu/chess-ruby')
              }}
            >
              <img
                src="/open-in-new.svg"
                alt=""
                className="invert dark:invert-0 w-8 cursor-pointer hover:scale-110 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
