import Image from 'next/image'
import { FC } from 'react'

import applemusicLogo from '../public/logos/applemusic-logo.png'
import bcLogo from '../public/logos/bc-logo.png'
import instagramLogo from '../public/logos/instagram-logo.png'
import spotifyLogo from '../public/logos/spotify-logo.png'
import tidalLogo from '../public/logos/tidal-logo.png'

const SocialLinks: FC = () => (
  <nav className="sticky bottom-0 left-0 bg-gray flex w-full justify-between items-center gap-1 px-6 py-6">
    <a href="https://www.instagram.com/ditchdays/" className="leading-[0px]">
      <Image priority quality={100} src={instagramLogo} alt="Instagram logo" />
    </a>
    <a
      href="https://open.spotify.com/artist/3B3nEiNlMRAHeSF9hfVyi2"
      className="leading-[0px]"
    >
      <Image priority quality={100} src={spotifyLogo} alt="Spotify logo" />
    </a>
    <a
      href="https://music.apple.com/us/artist/ditch-days/1091974089"
      className="leading-[0px]"
    >
      <Image
        priority
        quality={100}
        src={applemusicLogo}
        alt="Apple Music logo"
      />
    </a>
    <a href="https://www.instagram.com/ditchdays/" className="leading-[0px]">
      <Image priority quality={100} src={tidalLogo} alt="Tidal logo" />
    </a>
    <a href="https://ditchdays.bandcamp.com/" className="leading-[0px]">
      <Image priority quality={100} src={bcLogo} alt="Bandcamp logo" />
    </a>
  </nav>
)

export default SocialLinks
