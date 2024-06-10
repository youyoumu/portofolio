import { VelocityScroll } from './components/scroll-based-velocity'
import DiscordClone from './DiscordClone'
import TwitterClone from './TwitterClone'
import ChessRuby from './ChessRuby'
import { openInNewTab } from './lib/utils'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from './components/ui/tooltip'
import { motion } from 'framer-motion'

export default function Portofolio() {
  const urlParams = new URLSearchParams(window.location.search)
  const isRealNameEnabled = urlParams.get('real_name') === 'true'

  return (
    <div className="min-w-screen max-w-screen font-outfit max-h-screen overflow-scroll scrollbar-hide dark:text-zinc-200">
      <div className="h-screen w-full flex justify-center items-center p-4 drop-shadow">
        <motion.p
          className="max-w-5xl leading-snug text-3xl sm:text-6xl px-4 sm:px-8"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          Hey, I'm{' '}
          <span className="underline font-medium">
            {isRealNameEnabled ? 'Donny Lau Kim Leng' : 'youyoumu'}
          </span>
          , a self taught fullstack web developer from{' '}
          <span className="underline">Indonesia</span>.
        </motion.p>
      </div>
      <VelocityScroll
        text="HTML CSS JavaScript TypeScript Ruby SQL Linux Bash Git SSH"
        text2="Next.js Ruby on Rails React Tailwind CSS PixiJS shadcn/ui Bootstrap daisyUI"
        default_velocity={1.5}
        className="font-display text-center text-3xl sm:text-5xl font-medium tracking-[-0.02em] drop-shadow md:text-7xl md:leading-[5rem]"
      />
      <motion.div
        className="p-4 h-64 max-w-3xl flex justify-center items-center mx-auto"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <p className=" sm:text-2xl drop-shadow">
          <span className="font-medium">Ruby on Rails</span> and{' '}
          <span className="font-medium">Next.js</span> are my go-to frameworks
          for building full-stack web applications, along with{' '}
          <span className="font-medium">React</span> and{' '}
          <span className="font-medium">Tailwind CSS</span>.
        </p>
      </motion.div>
      <motion.h2
        className="text-3xl sm:text-5xl text-left max-w-4xl font-semibold mb-10 sm:mb-20 mx-auto px-4 sm:px-8"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        Projects
      </motion.h2>
      <div className="max-w-5xl mx-auto flex-col flex gap-16">
        <DiscordClone />
        <TwitterClone />
        <ChessRuby />
      </div>
      <motion.h2
        className="text-3xl sm:text-5xl text-left max-w-4xl font-semibold mt-20 mb-8 mx-auto px-4 sm:px-8"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        Connect
      </motion.h2>
      <motion.div
        className="max-w-4xl mx-auto flex-col flex gap-2 px-4 sm:px-8 text-xl underline text-slate-700 dark:text-zinc-200 items-start"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <div className="flex gap-2">
          <img
            src="/github-mark-white.svg"
            alt=""
            className="invert dark:invert-0 w-6 h-6"
          />
          <a
            className="cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              openInNewTab('https://github.com/youyoumu')
            }}
            href="https://github.com/youyoumu"
          >
            GitHub
          </a>
        </div>
        <TooltipProvider delayDuration={200}>
          <Tooltip>
            <TooltipTrigger>
              <div className="flex gap-2">
                <img
                  src="/discord.svg"
                  alt=""
                  className="invert dark:invert-0 w-6 h-6"
                />
                <div
                  className="cursor-pointer flex gap-2 items-center"
                  onClick={() => navigator.clipboard.writeText('youyoumu2017')}
                >
                  youyoumu2017
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>click to copy</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider delayDuration={200}>
          <Tooltip>
            <TooltipTrigger>
              <div className="flex gap-2">
                <img src="/email.svg" alt="" className="invert dark:invert-0" />
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    navigator.clipboard.writeText(
                      isRealNameEnabled
                        ? 'donnylaukimleng@outlook.com'
                        : 'youyoumu2024@proton.me'
                    )
                  }
                >
                  {isRealNameEnabled
                    ? 'donnylaukimleng@outlook.com'
                    : 'youyoumu2024@proton.me'}
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>click to copy</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </motion.div>
      <div className="h-48"></div>
    </div>
  )
}
