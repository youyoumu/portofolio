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
        width: window.innerWidth + 100,
        height: window.innerHeight + 100
      })
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Stage
      width={windowSize.width + 100}
      height={windowSize.height + 100}
      options={{ background: 0xfafafa, antialias: true }}
    >
      <Cells windowSize={windowSize} />
    </Stage>
  )
}
