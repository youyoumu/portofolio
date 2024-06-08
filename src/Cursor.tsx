import { useState, useEffect } from 'react'

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const updateMousePosition = (ev: any) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY })
    }
    window.addEventListener('mousemove', updateMousePosition)
    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return (
    <div
      className="w-6 h-6 bg-[#004c8c] rounded-full fixed z-[-1] pointer-events-none"
      style={{ left: mousePosition.x - 12, top: mousePosition.y - 12 }}
    ></div>
  )
}
