import Image from 'next/image'
import { FC } from 'react'

import applemusicLogo from '../public/logos/applemusic-logo.png'
import bcLogo from '../public/logos/bc-logo.png'
import instagramLogo from '../public/logos/instagram-logo.png'
import spotifyLogo from '../public/logos/spotify-logo.png'
import tidalLogo from '../public/logos/tidal-logo.png'

const SocialLinks: FC = () => (
  <nav className="flex w-full justify-between gap-1 px-6">
    <a href="https://www.instagram.com/ditchdays/">
      <Image priority quality={100} src={instagramLogo} alt="Instagram logo" />
    </a>
    <a href="https://open.spotify.com/artist/3B3nEiNlMRAHeSF9hfVyi2">
      <Image priority quality={100} src={spotifyLogo} alt="Spotify logo" />
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
)

export default SocialLinks
