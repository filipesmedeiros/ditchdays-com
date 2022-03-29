import { FC } from 'react'

const DesktopPlaceholder: FC = () => (
  <main className="flex-col gap-6 justify-center items-center w-screen h-screen px-6 container py-10 m-auto overflow-hidden hidden md:flex sm:portrait:hidden">
    <h1 className="text-center text-9xl font-extrabold leading-[0.8]">
      DITCH DAYS
    </h1>
    <h2 className="text-center text-6xl font-extralight text-orange">
      DESKTOP COMING SOON &bull; TRY MOBILE
    </h2>
  </main>
)

export default DesktopPlaceholder
