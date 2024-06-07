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
          <p className="text-lg drop-shadow">
            CLI implementation of classic Chess game using Ruby.
          </p>
          <div className="flex gap-1">
            <img
              src="/src/assets/github-mark-white.svg"
              alt=""
              className="invert w-8 p-0.5 cursor-pointer"
              onClick={() =>
                openInNewTab('https://github.com/youyoumu/chess-ruby')
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}
