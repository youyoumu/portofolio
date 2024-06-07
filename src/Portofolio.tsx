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

export default function Portofolio() {
  return (
    <div className="min-w-screen max-w-screen font-outfit max-h-screen overflow-scroll scrollbar-hide">
      <div className="h-screen w-full flex justify-center items-center p-4 drop-shadow">
        <p className="max-w-5xl leading-snug text-6xl px-8">
          Hey, I'm <span className="underline font-medium">youyoumu</span>, a
          self taught fullstack web developer from{' '}
          <span className="underline">Indonesia</span>.
        </p>
      </div>
      <VelocityScroll
        text="HTML CSS JavaScript TypeScript Ruby SQL Linux Bash Git SSH"
        text2="Next.js Ruby on Rails React Tailwind CSS PixiJS shadcn/ui Bootstrap daisyUI"
        default_velocity={3}
        className="font-display text-center text-4xl font-medium tracking-[-0.02em] text-black drop-shadow md:text-7xl md:leading-[5rem]"
      />
      <div className="p-4 h-64 max-w-3xl flex justify-center items-center mx-auto">
        <p className="text-2xl drop-shadow">
          <span className="font-medium">Ruby on Rails</span> and{' '}
          <span className="font-medium">Next.js</span> are my go-to frameworks
          for building full-stack web applications, along with{' '}
          <span className="font-medium">React</span> and{' '}
          <span className="font-medium">Tailwind CSS</span>.
        </p>
      </div>
      <h2 className="text-5xl text-left max-w-4xl font-semibold mb-20 mx-auto px-8">
        Projects
      </h2>
      <div className="max-w-5xl mx-auto flex-col flex gap-16">
        <DiscordClone />
        <TwitterClone />
        <ChessRuby />
      </div>
      <h2 className="text-5xl text-left max-w-4xl font-semibold mt-20 mb-8 mx-auto px-8">
        Connect
      </h2>
      <div className="max-w-4xl mx-auto flex-col flex gap-2 px-8 text-xl underline text-slate-700 items-start">
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
        <div
          className="cursor-pointer"
          onClick={() => navigator.clipboard.writeText('youyoumu2024')}
        >
          Discord
        </div>
        <TooltipProvider delayDuration={200}>
          <Tooltip>
            <TooltipTrigger>
              <div
                className="cursor-pointer"
                onClick={() =>
                  navigator.clipboard.writeText('youyoumu2024.proton.me')
                }
              >
                Email
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>click to copy</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="h-48"></div>
    </div>
  )
}
