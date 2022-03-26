import clsx from 'clsx'
import { NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'

import OffCanvasNav from '../components/OffCanvasNav'
import applemusicLogo from '../public/logos/applemusic-logo.png'
import bcLogo from '../public/logos/bc-logo.png'
import instagramLogo from '../public/logos/instagram-logo.png'
import spotifyLogo from '../public/logos/spotify-logo.png'
import tidalLogo from '../public/logos/tidal-logo.png'
import aboutPicture from '../public/pictures/about.jpg'

const About: NextPage = () => {
  const [offCanvasNavOpen, setOffCanvasNavOpen] = useState(false)

  return (
    <>
      <main
        className={clsx('relative overflow-x-hidden md:hidden', {
          'overflow-y-hidden h-screen': offCanvasNavOpen,
        })}
      >
        <div
          className={clsx('flex flex-col items-center py-10 container', {
            'h-100': offCanvasNavOpen,
          })}
        >
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

          <div className="text-3xl px-8 font-normal pt-48 pb-16">
            <p className="py-4">
              “In the past couple of years, we’ve been stuck inside ourselves.
              Left some songs in the drawer, cancelled a tour around Europe. It
              became quite easy to just let life happen and not think about what
              we wanted to say.
            </p>
            <p className="py-4">
              The best way we found to get back to the place we were missing was
              to start writing together again. Turns out, we haven’t been
              sitting idly by. We’ve been listening. Traveling. Exploring.
              Finding something new. And that is our{' '}
              <span className="text-green">LP #2.</span>”
            </p>
            <p className="py-4">
              <span className="text-orange">DITCH DAYS</span> is Crespo,
              Guilherme and Luis. Live since 2016.
            </p>
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

        <div className="absolute -z-20 -right-36 top-6">
          <Image
            priority
            src={aboutPicture}
            width={511}
            height={341}
            alt="Background picture TODO"
            role="presentation"
          />
        </div>
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

export default About
