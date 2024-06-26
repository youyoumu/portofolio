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

  function cellColor(cell, theme) {
    if (theme !== 'dark') {
      if (cell.isAlive) {
        if (cell.lifetime === 0) {
          return 0xf7f7f7
        } else if (cell.lifetime === 1) {
          return 0xe8e8e8
        } else {
          return 0xe3e3e3
        }
      } else {
        if (cell.deadtime === 1) {
          return 0xe8e8e8
        } else if (cell.deadtime === 2) {
          return 0xf7f7f7
        }
        return 0xffffff
      }
    } else {
      if (cell.isAlive) {
        if (cell.lifetime === 0) {
          return 0x00172b
        } else if (cell.lifetime === 1) {
          return 0x00213d
        } else {
          return 0x00325c
        }
      } else {
        if (cell.deadtime === 1) {
          return 0x00213d
        } else if (cell.deadtime === 2) {
          return 0x00172b
        }
        return 0x001426
      }
    }
  }

  const cellGraphics = useCallback((g, cells, windowSize) => {
    const cellsLength = cells.length
    if (cellsLength === 0) return

    g.clear()
    const theme = localStorage.getItem('vite-ui-theme')
    if (theme !== 'dark') {
      g.beginFill(0xfafafa)
    } else {
      g.beginFill(0x001426)
    }

    g.drawRect(0, 0, windowSize.width + 100, windowSize.height + 100)
    g.endFill()

    for (let i = 0; i < cellsLength; i++) {
      const rowLength = cells[i].length
      for (let j = 0; j < rowLength; j++) {
        const cell = cells[i][j]
        if (cell.deadtime > 2 && !cell.isAlive) {
          continue
        }
        g.beginFill(cellColor(cell, theme))
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
    if (stopwatch > 20) {
      stopwatch = 0
      setCells(createNextGeneration(cells, mousePosition.current))
      setTick(tick + 1)
    }
  })

  return <Graphics draw={(g) => cellGraphics(g, cells, windowSize)} />
}
