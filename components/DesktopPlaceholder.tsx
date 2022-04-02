import { FC } from 'react'

import SocialLinks from './SocialLinks'

const DesktopPlaceholder: FC = () => (
  <>
    <main className="flex-col gap-6 justify-center items-center w-screen h-screen px-6 container m-auto overflow-hidden hidden md:flex landscape:flex">
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-center text-9xl font-bold font-lc leading-[0.8]">
          DITCH DAYS
        </h1>
        <h2 className="text-center text-6xl font-extralight font-hc text-orange">
          DESKTOP COMING SOON &bull; TRY MOBILE
        </h2>
      </div>
      <SocialLinks />
    </main>
  </>
)

export default DesktopPlaceholder
