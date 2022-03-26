import clsx from 'clsx'
import { NextPage } from 'next'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import OffCanvasNav from '../components/OffCanvasNav'
import { useOffCanvasNavContext } from '../hooks/useOffCanvasNav'
import applemusicLogo from '../public/logos/applemusic-logo.png'
import bcLogo from '../public/logos/bc-logo.png'
import instagramLogo from '../public/logos/instagram-logo.png'
import spotifyLogo from '../public/logos/spotify-logo.png'
import tidalLogo from '../public/logos/tidal-logo.png'
import contactPicture from '../public/pictures/contact.jpg'

const Tour: NextPage = () => {
  const { setOpen } = useOffCanvasNavContext()
  useEffect(() => setOpen(false), [setOpen])

  return (
    <>
      <main className="relative w-full h-full overflow-hidden md:hidden">
        <div className="flex flex-col justify-between items-center py-10 w-full h-full container">
          <div
            className={clsx(
              'text-4xl font-extralight text-center relative w-full',
              "before:absolute before:content-[''] before:border-white before:border-b-2 before:border-solid before:w-[30%] sm:before:w-[40%] before:left-0 before:top-1/2 before:-z-10 before:-translate-y-1 before:ml-6",
              "after:absolute after:content-[''] after:border-white after:border-b-2 after:border-solid after:w-[30%] sm:after:w-[40%] after:right-0 after:top-1/2 after:-z-10 after:-translate-y-1 after:mr-6"
            )}
          >
            <button
              className="hover:cursor-pointer font-extralight"
              onClick={() => setOpen(true)}
            >
              MENU
            </button>
          </div>

          <div className="self-start flex flex-col gap-6 pl-16 pt-80 text-2xl">
            <div>
              <p>
                Booking & Press{' '}
                <span className="text-orange">International</span>
              </p>
              <p className="font-extralight">
                <a href="mailto:general@ditch-days.com">
                  general@ditch-days.com
                </a>
              </p>
            </div>
            <div>
              <p>
                Booking <span className="text-green">Portugal</span>
              </p>
              <p className="font-extralight">
                <a href="mailto:joao.vaz.silva@fproducao.pt">
                  joao.vaz.silva@fproducao.pt
                </a>
              </p>
            </div>
            <div>
              <p>
                Press <span className="text-green">Portugal</span>
              </p>
              <p className="font-extralight">
                <a href="mailto:teresa.sequeira@fproducao.pt">
                  teresa.sequeira@fproducao.pt
                </a>
              </p>
            </div>
          </div>

          <nav className="flex w-full justify-between gap-1 px-6">
            <a href="https://www.instagram.com/ditchdays/">
              <Image
                priority
                quality={100}
                src={instagramLogo}
                alt="Instagram logo"
              />
            </a>
            <a href="https://open.spotify.com/artist/3B3nEiNlMRAHeSF9hfVyi2">
              <Image
                priority
                quality={100}
                src={spotifyLogo}
                alt="Spotify logo"
              />
            </a>
            <a href="https://music.apple.com/us/artist/ditch-days/1091974089">
              <Image
                priority
                quality={100}
                src={applemusicLogo}
                alt="Apple Music logo"
              />
            </a>
            <a href="https://www.instagram.com/ditchdays/">
              <Image priority quality={100} src={tidalLogo} alt="Tidal logo" />
            </a>
            <a href="https://ditchdays.bandcamp.com/">
              <Image priority quality={100} src={bcLogo} alt="Bandcamp logo" />
            </a>
          </nav>
        </div>

        <div className="absolute -z-20 -right-6 top-24">
          <Image
            priority
            src={contactPicture}
            width={269}
            height={403}
            alt="Background picture TODO"
            role="presentation"
          />
        </div>
      </main>

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

export default Tour
