//@ts-expect-error Gol is jsx
import Gol from './Gol'
import Portofolio from './Portofolio'
import Cursor from './Cursor'
//@ts-expect-error js library
import Parallax from 'parallax-js'
import { useRef, useEffect } from 'react'
import { ThemeProvider } from './ThemeProvider'
import { ModeToggle } from './ModeToggle'

export default function App() {
  const scene = useRef(null)
  useEffect(() => {
    new Parallax(scene.current)
  })
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div>
        <Portofolio />
        <div className="fixed left-[-50px] top-[-50px] z-[-1]" ref={scene}>
          <div data-depth="0.2">
            <Gol />
          </div>
        </div>
        <Cursor />
      </div>
      <div className="fixed top-4 right-4">
        <ModeToggle />
      </div>
    </ThemeProvider>
  )
}
