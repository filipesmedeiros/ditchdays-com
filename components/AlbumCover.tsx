import clsx from 'clsx'
import Image from 'next/image'
import { FC, useEffect, useRef, useState } from 'react'

import applemusicLogo from '../public/logos/applemusic-logo.png'
import bcLogo from '../public/logos/bc-logo.png'
import spotifyLogo from '../public/logos/spotify-logo.png'
import tidalLogo from '../public/logos/tidal-logo.png'

interface Props {
  image: StaticImageData
  alt: string
  links: {
    appleMusic: string
    tidal: string
    spotify: string
    bandcamp: string
  }
}

const AlbumCover: FC<Props> = ({ image, alt, links }) => {
  const [showLinks, setShowLinks] = useState(false)

  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const cb = (ev: MouseEvent) => {
      let maintain = false
      ref.current!.childNodes[0].childNodes.forEach(child => {
        if (ev.target === child) maintain = true
      })
      if (!maintain) setShowLinks(false)
    }
    window.addEventListener('click', cb)
    return () => window.removeEventListener('click', cb)
  }, [])

  return (
    <div
      ref={ref}
      className="relative shadow-lg hover:cursor-pointer leading-[0px]"
      onClick={() => setShowLinks(true)}
    >
      <Image src={image} alt={alt} />
      <div
        className={clsx(
          'absolute bg-neutral-900/75 w-full h-full top-0 left-0 flex flex-col items-center justify-between p-16',
          {
            hidden: !showLinks,
          }
        )}
      >
        <a href={links.spotify}>
          <Image priority quality={100} src={spotifyLogo} alt="Spotify logo" />
        </a>
        <a href={links.appleMusic}>
          <Image
            priority
            quality={100}
            src={applemusicLogo}
            alt="Apple Music logo"
          />
        </a>
        <a href={links.tidal}>
          <Image priority quality={100} src={tidalLogo} alt="Tidal logo" />
        </a>
        <a href={links.bandcamp}>
          <Image priority quality={100} src={bcLogo} alt="Bandcamp logo" />
        </a>
      </div>
    </div>
  )
}

export default AlbumCover
