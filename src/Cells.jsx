import { createCells, createNextGeneration } from './golLogic'
import { Graphics, useTick } from '@pixi/react'
import { useCallback, useEffect, useState, useRef } from 'react'

export default function Cells({ windowSize }) {
  const [cells, setCells] = useState(createCells(windowSize))
  const mousePosition = useRef({ x: null, y: null })
  const [tick, setTick] = useState(0)

  useEffect(() => {
    setCells(createCells(windowSize))
  }, [windowSize])

  useEffect(() => {
    const onMouseMove = (e) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY
      }
    }
    window.addEventListener('mousemove', onMouseMove)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  function cellColor(cell) {
    if (cell.isAlive) {
      if (cell.lifetime === 0) {
        return 0xe3e3e3
      } else if (cell.lifetime === 1) {
        return 0xc2c2c2
      } else {
        return 0xa5a5a5
      }
    } else {
      if (cell.deadtime === 1) {
        return 0xc2c2c2
      } else if (cell.deadtime === 2) {
        return 0xe3e3e3
      }
      return 0xffffff
    }
  }

  const cellGraphics = useCallback((g, cells) => {
    const cellsLength = cells.length
    if (cellsLength === 0) return
    g.clear()

    for (let i = 0; i < cellsLength; i++) {
      const rowLength = cells[i].length
      for (let j = 0; j < rowLength; j++) {
        const cell = cells[i][j]
        if (cell.deadtime > 2) {
          continue
        }
        g.beginFill(cellColor(cell))
        g.drawRoundedRect(
          cell.x,
          cell.y,
          cell.width - cell.width / 4,
          cell.height - cell.height / 4,
          10
        )
        g.endFill()
      }
    }
  }, [])

  let stopwatch = 0
  useTick((delta) => {
    stopwatch += delta
    if (stopwatch > 5) {
      stopwatch = 0
      setCells(createNextGeneration(cells, mousePosition.current))
      setTick(tick + 1)
    }
  })

  return <Graphics draw={(g) => cellGraphics(g, cells)} />
}
