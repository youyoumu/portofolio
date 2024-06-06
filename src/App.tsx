//@ts-expect-error Gol is jsx
import Gol from './Gol'
import Portofolio from './Portofolio'
import Cursor from './Cursor'

export default function App() {
  return (
    <div>
      <Portofolio />
      <div className="fixed left-0 top-0 z-[-1]">
        <Gol />
      </div>
      <Cursor />
    </div>
  )
}
