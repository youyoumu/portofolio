import { VelocityScroll } from './components/scroll-based-velocity'

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
        text="HTML CSS JavaScript TypeScript Ruby SQL Linux Bash Git "
        text2="Next.js Ruby on Rails React Tailwind CSS"
        default_velocity={3}
        className="font-display text-center text-4xl font-medium tracking-[-0.02em] text-black drop-shadow-sm md:text-7xl md:leading-[5rem]"
      />
    </div>
  )
}
