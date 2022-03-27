import clsx from 'clsx'
import { NextPage } from 'next'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import MenuBar from '../components/MenuBar'
import OffCanvasNav from '../components/OffCanvasNav'
import SocialLinks from '../components/SocialLinks'
import { useOffCanvasNavContext } from '../hooks/useOffCanvasNav'
import applemusicLogo from '../public/logos/applemusic-logo.png'
import bcLogo from '../public/logos/bc-logo.png'
import instagramLogo from '../public/logos/instagram-logo.png'
import spotifyLogo from '../public/logos/spotify-logo.png'
import tidalLogo from '../public/logos/tidal-logo.png'
import aboutPicture from '../public/pictures/about.jpg'
import contactPicture from '../public/pictures/contact.jpg'
import merchPicture from '../public/pictures/merch.jpg'
import subscribePicture from '../public/pictures/subscribe.jpg'
import tourPicture from '../public/pictures/tour.jpg'

const pictureLoop = ['about', 'tour', 'merch', 'contact', 'subscribe'] as const
type PictureName = 'about' | 'tour' | 'merch' | 'contact' | 'subscribe'

const Home: NextPage = () => {
  const { setOpen } = useOffCanvasNavContext()
  useEffect(() => setOpen(false), [setOpen])

  const [activePicture, setActivePicture] = useState<{
    curr: PictureName | null
    prev: PictureName
  }>({ curr: null, prev: 'subscribe' }) // cheats

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
    <main className="relative w-full h-full overflow-hidden md:hidden">
      <div className="flex flex-col justify-between items-center py-10 w-full h-full container">
        <MenuBar />
        <h1 className="text-center text-9xl font-extrabold leading-[0.8]">
          DITCH
          <br />
          DAYS
        </h1>
        <SocialLinks />
      </div>

      <div
        className={clsx('absolute -z-20 -right-36 top-6', {
          hidden: activePicture.curr !== 'about',
        })}
      >
        <Image
          priority
          src={aboutPicture}
          width={511}
          height={341}
          alt="Background picture TODO"
          role="presentation"
        />
      </div>
      <div
        className={clsx('absolute -z-20 -left-24 -bottom-24', {
          hidden: activePicture.curr !== 'tour',
        })}
      >
        <Image
          priority
          src={tourPicture}
          width={452}
          height={586}
          alt="Background picture TODO"
          role="presentation"
        />
      </div>
      <div
        className={clsx('absolute -z-20 -left-6 top-[20%]', {
          hidden: activePicture.curr !== 'merch',
        })}
      >
        <Image
          priority
          src={merchPicture}
          width={313}
          height={470}
          alt="Background picture TODO"
          role="presentation"
        />
      </div>
      <div
        className={clsx('absolute -z-20 -right-6 -bottom-24', {
          hidden: activePicture.curr !== 'contact',
        })}
      >
        <Image
          priority
          src={contactPicture}
          width={369}
          height={553}
          alt="Background picture TODO"
          role="presentation"
        />
      </div>
      <div
        className={clsx('absolute -z-20 -left-14 top-0', {
          hidden: activePicture.curr !== 'subscribe',
        })}
      >
        <Image
          priority
          src={subscribePicture}
          width={379}
          height={570}
          alt="Background picture TODO"
          role="presentation"
        />
      </div>
    </main>
  )
}

export default Home
