import { openInNewTab } from './lib/utils'

export default function ChessRuby() {
  return (
    <div className="flex gap-8 px-8">
      <img
        src="https://raw.githubusercontent.com/youyoumu/chess-ruby/main/assets/chess-ruby-preview2.gif"
        alt=""
        className="w-80 drop-shadow-xl"
      />
      <div>
        <h3 className="text-3xl font-bold mb-4 drop-shadow">Chess Ruby</h3>
        <div className="flex gap-2 flex-col">
          <p className="text-lg drop-shadow text-slate-700">
            CLI implementation of classic Chess game using Ruby.
          </p>
          <div className="flex gap-1">
            <a
              href="https://github.com/youyoumu/chess-ruby"
              onClick={(e) => {
                e.preventDefault()
                openInNewTab('https://github.com/youyoumu/chess-ruby')
              }}
            >
              <img
                src="/src/assets/github-mark-white.svg"
                alt=""
                className="invert w-8 p-0.5 cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
