//@ts-expect-error Gol is jsx
import Gol from './Gol'
import Portofolio from './Portofolio'
import Cursor from './Cursor'
//@ts-expect-error js library
import Parallax from 'parallax-js'
import { useRef, useEffect } from 'react'

export default function App() {
  const scene = useRef(null)
  useEffect(() => {
    new Parallax(scene.current)
  })
  return (
    <div>
      <Portofolio />
      <div className="fixed left-[-50px] top-[-50px] z-[-1]" ref={scene}>
        <div data-depth="0.1">
          <Gol />
        </div>
      </div>
      <Cursor />
    </div>
  )
}
