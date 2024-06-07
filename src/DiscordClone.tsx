import { openInNewTab } from './lib/utils'

export default function DiscordClone() {
  return (
    <div className="flex gap-8 me-auto px-8">
      <img
        src="https://raw.githubusercontent.com/youyoumu/discord-clone/main/preview_1.png"
        alt=""
        className="h-72"
      />
      <div>
        <h3 className="text-3xl font-bold mb-4">Discord Clone</h3>
        <div className="flex gap-2 flex-col">
          <p className="text-lg">
            Fullstack chat messaging SPA created with Next.js with Ruby on Rails
            json API.
          </p>
          <div className="flex gap-1">
            <img
              src="/src/assets/github-mark-white.svg"
              alt=""
              className="invert w-8 p-0.5"
              onClick={() =>
                openInNewTab('https://github.com/youyoumu/discord-clone')
              }
            />
            <img
              src="/src/assets/open-in-new.svg"
              alt=""
              className="invert w-8"
              onClick={() =>
                openInNewTab('https://discord-clone.youyoumu.my.id')
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}