import { VelocityScroll } from './components/scroll-based-velocity'
import DiscordClone from './DiscordClone'

export default function Portofolio() {
  return (
    <div className="min-w-screen max-w-screen font-outfit max-h-screen overflow-scroll scrollbar-hide">
      <div className="h-screen w-full flex justify-center items-center text-5xl p-4 drop-shadow">
        <p className="max-w-2xl leading-snug">
          Hey, I'm <span className="underline font-medium">youyoumu</span>, a
          self taught fullstack web developer from{' '}
          <span className="underline">Indonesia</span>.
        </p>
      </div>
      <VelocityScroll
        text="HTML CSS JavaScript TypeScript Ruby SQL Linux Bash Git SSH"
        text2="Next.js Ruby on Rails React Tailwind CSS PixiJS shadcn/ui Bootstrap daisyUI"
        default_velocity={3}
        className="font-display text-center text-4xl font-medium tracking-[-0.02em] text-black drop-shadow-sm md:text-7xl md:leading-[5rem]"
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
      <h2 className="text-4xl text-center font-semibold mb-16">Projects</h2>
      <div className="max-w-7xl mx-auto">
        <DiscordClone />
      </div>
    </div>
  )
}
