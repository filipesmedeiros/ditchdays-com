import clsx from 'clsx'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import OffCanvasNav from '../components/OffCanvasNav'
import aboutPicture from '../public/pictures/about.png'
import contactPicture from '../public/pictures/contact.png'
import merchPicture from '../public/pictures/merch.png'
import subscribePicture from '../public/pictures/subscribe.png'
import tourPicture from '../public/pictures/tour.png'

const pictureLoop = ['about', 'tour', 'merch', 'contact', 'subscribe'] as const
type PictureName = 'about' | 'tour' | 'merch' | 'contact' | 'subscribe'

export default function Home() {
  const [offCanvasNavOpen, setOffCanvasNavOpen] = useState(false)
  const [activePicture, setActivePicture] = useState<{
    curr: PictureName | null
    prev: PictureName
  }>({ curr: null, prev: 'tour' }) // cheats

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        setActivePicture(({ curr, prev }) => {
          if (curr !== null) return { curr: null, prev }
          const prevIndex = pictureLoop.indexOf(prev)
          const currIndex = (prevIndex + 1) % 5
          return { prev: pictureLoop[currIndex], curr: pictureLoop[currIndex] }
        })
      },
      activePicture.curr === null ? 750 : 2700
    )

    return () => clearTimeout(timeout)
  }, [activePicture])

  return (
    <>
      <main className="relative flex flex-col justify-between items-center w-screen h-screen container overflow-hidden py-10 m-auto md:hidden">
        <div
          className={clsx(
            'text-4xl font-extralight text-center relative w-full',
            "before:absolute before:content-[''] before:border-white before:border-b-2 before:border-solid before:w-[30%] sm:before:w-[40%] before:left-0 before:top-1/2 before:-z-10 before:-translate-y-1 before:ml-6",
            "after:absolute after:content-[''] after:border-white after:border-b-2 after:border-solid after:w-[30%] sm:after:w-[40%] after:right-0 after:top-1/2 after:-z-10 after:-translate-y-1 after:mr-6"
          )}
        >
          <button
            className="hover:cursor-pointer"
            onClick={() => setOffCanvasNavOpen(true)}
          >
            MENU
          </button>
        </div>
        <h1 className="text-center text-9xl font-extrabold leading-[0.8]">
          DITCH
          <br />
          DAYS
        </h1>
        <nav className="flex w-full justify-between gap-1 px-6">
          <a href="https://www.instagram.com/ditchdays/">
            <Image
              src="/logos/instagram-logo.png"
              width={27}
              height={27}
              alt="Instagram logo"
            />
          </a>
          <a href="https://open.spotify.com/artist/3B3nEiNlMRAHeSF9hfVyi2">
            <Image
              src="/logos/spotify-logo.png"
              width={27}
              height={26}
              alt="Instagram logo"
            />
          </a>
          <a href="https://music.apple.com/us/artist/ditch-days/1091974089">
            <Image
              src="/logos/applemusic-logo.png"
              width={27}
              height={26}
              alt="Instagram logo"
            />
          </a>
          <a href="https://www.instagram.com/ditchdays/">
            <Image
              src="/logos/tidal-logo.png"
              width={33}
              height={22}
              alt="Instagram logo"
            />
          </a>
          <a href="https://ditchdays.bandcamp.com/">
            <Image
              src="/logos/bc-logo.png"
              width={62}
              height={21}
              alt="Instagram logo"
            />
          </a>
        </nav>
        {activePicture.curr === 'about' && (
          <div className="absolute -z-20 -right-6 top-6">
            <Image
              src={aboutPicture}
              alt="Background picture TODO"
              role="presentation"
            />
          </div>
        )}
        {activePicture.curr === 'contact' && (
          <div className="absolute -z-20 -right-6 -bottom-2">
            <Image
              src={contactPicture}
              alt="Background picture TODO"
              role="presentation"
            />
          </div>
        )}
        {activePicture.curr === 'merch' && (
          <div className="absolute -z-20 -left-6 top-1/4">
            <Image
              src={merchPicture}
              alt="Background picture TODO"
              role="presentation"
            />
          </div>
        )}
        {activePicture.curr === 'subscribe' && (
          <div className="absolute -z-20 -left-6 top-0">
            <Image
              src={subscribePicture}
              alt="Background picture TODO"
              role="presentation"
            />
          </div>
        )}
        {activePicture.curr === 'tour' && (
          <div className="absolute -z-20 -left-6 -bottom-2">
            <Image
              src={tourPicture}
              alt="Background picture TODO"
              role="presentation"
            />
          </div>
        )}
      </main>
      <OffCanvasNav
        open={offCanvasNavOpen}
        onClose={() => setOffCanvasNavOpen(false)}
      />

      <main className="flex-col gap-6 justify-center items-center w-screen h-screen px-6 container py-10 m-auto overflow-hidden hidden md:flex">
        <h1 className="text-center text-9xl font-extrabold leading-[0.8]">
          DITCH
          <br />
          DAYS
        </h1>
        <h2 className="text-center text-6xl font-extrabold">
          DESKTOP WEBSITE
          <br />
          COMING SOON
        </h2>
      </main>
    </>
  )
}
