import { openInNewTab } from './lib/utils'

export default function TwitterClone() {
  return (
    <div className="flex gap-8 px-8 justify-end">
      <div className="flex flex-col items-end">
        <h3 className="text-3xl font-bold mb-4 drop-shadow">Twitter Clone</h3>
        <div className="flex gap-2 flex-col">
          <p className="text-lg drop-shadow">
            Fullstack monolith social media website created with Ruby on Rails.
          </p>
          <div className="flex gap-1 justify-end">
            <img
              src="/src/assets/open-in-new.svg"
              alt=""
              className="invert w-8"
              onClick={() =>
                openInNewTab('https://twitter-clone.youyoumu.my.id')
              }
            />
            <img
              src="/src/assets/github-mark-white.svg"
              alt=""
              className="invert w-8 p-0.5"
              onClick={() =>
                openInNewTab('https://github.com/youyoumu/twitter-clone')
              }
            />
          </div>
        </div>
      </div>
      <img
        src="https://raw.githubusercontent.com/youyoumu/twitter-clone/main/preview/preview_1.png"
        alt=""
        className="h-72"
      />
    </div>
  )
}
