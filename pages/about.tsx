import clsx from 'clsx'
import { NextPage } from 'next'
import Image from 'next/image'
import { useEffect } from 'react'

import MenuBar from '../components/MenuBar'
import SocialLinks from '../components/SocialLinks'
import { useOffCanvasNavContext } from '../hooks/useOffCanvasNav'
import applemusicLogo from '../public/logos/applemusic-logo.png'
import bcLogo from '../public/logos/bc-logo.png'
import instagramLogo from '../public/logos/instagram-logo.png'
import spotifyLogo from '../public/logos/spotify-logo.png'
import tidalLogo from '../public/logos/tidal-logo.png'
import aboutPicture from '../public/pictures/about.jpg'

const About: NextPage = () => {
  const { isOpen, setOpen } = useOffCanvasNavContext()
  useEffect(() => setOpen(false), [setOpen])

  return (
    <main
      className={clsx('relative overflow-x-hidden md:hidden', {
        'overflow-y-hidden h-screen': isOpen,
      })}
    >
      <div
        className={clsx('flex flex-col items-center py-10 container', {
          'h-100': isOpen,
        })}
      >
        <MenuBar />

        <div className="text-3xl px-8 font-normal pt-48 pb-16">
          <p className="py-4">
            “In the past couple of years, we’ve been stuck inside ourselves.
            Left some songs in the drawer, cancelled a tour around Europe. It
            became quite easy to just let life happen and not think about what
            we wanted to say.
          </p>
          <p className="py-4">
            The best way we found to get back to the place we were missing was
            to start writing together again. Turns out, we haven’t been sitting
            idly by. We’ve been listening. Traveling. Exploring. Finding
            something new. And that is our{' '}
            <span className="text-green">LP #2.</span>”
          </p>
          <p className="py-4">
            <span className="text-orange">DITCH DAYS</span> is Crespo, Guilherme
            and Luis. Live since 2016.
          </p>
        </div>

        <SocialLinks />
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
  )
}

export default About
