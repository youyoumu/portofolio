import { VelocityScroll } from './components/scroll-based-velocity'

export default function Portofolio() {
  return (
    <div className="min-w-screen max-w-screen font-outfit">
      <div className="h-screen w-full flex justify-center items-center text-5xl p-4 drop-shadow">
        <p className="max-w-2xl leading-snug">
          Hey, I'm <span className="underline font-medium">youyoumu</span>, a
          self taught fullstack web developer from{' '}
          <span className="underline">Indonesia</span>.
        </p>
      </div>
      <VelocityScroll
        text="Velocity Scroll"
        default_velocity={5}
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
      />
    </div>
  )
}
