import { Stage } from '@pixi/react'
import { useState, useEffect } from 'react'
import Cells from './Cells'

export default function Gol() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Stage
      width={windowSize.width}
      height={windowSize.height}
      options={{ background: 0xffffff, antialias: true }}
    >
      <Cells windowSize={windowSize} />
    </Stage>
  )
}
