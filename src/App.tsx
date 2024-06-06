//@ts-expect-error Gol is jsx
import Gol from './Gol'
import Portofolio from './Portofolio'

export default function App() {
  return (
    <div>
      <Portofolio />
      <div className="absolute left-0 top-0 z-[-1]">
        <Gol />
      </div>
    </div>
  )
}
