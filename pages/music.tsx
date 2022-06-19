import { NextPage } from 'next'
import { useEffect } from 'react'

import AlbumCover from '../components/AlbumCover'
import { useOffCanvasNavContext } from '../hooks/useOffCanvasNav'
import clementineSpaceBetweenEverythingCover from '../public/pictures/clementine-space-between-everything.jpeg'
import privateEyesCover from '../public/pictures/private-eyes.jpeg'
import andyKaufmanCover from '../public/pictures/andy-kaufman.jpg'
import baltimoreCover from '../public/pictures/baltimore.jpg'
import downtownCover from '../public/pictures/downtown.jpg'
import evenIfYouKnowCover from '../public/pictures/even-if-you-know.png'
import liquidSpringsCover from '../public/pictures/liquid-springs.jpg'
import sethRogenCover from '../public/pictures/seth-rogen.png'

const albums = [
  {
    image: clementineSpaceBetweenEverythingCover,
    alt: '"Clementine/Space Between Everything" cover',
    links: {
      appleMusic: 'https://music.apple.com/us/album/clementine-ep/1625389492',
      tidal: 'https://tidal.com/browse/album/230219825',
      spotify: 'https://open.spotify.com/album/0OUokANrQiTMOjAmU3gX73',
      bandcamp: '',
    },
  },
  {
    image: privateEyesCover,
    alt: '"Private Eyes" cover',
    links: {
      appleMusic:
        'https://music.apple.com/pt/album/private-eyes/1615117797?i=1615117798',
      tidal: 'https://tidal.com/browse/album/221320188',
      spotify: 'https://open.spotify.com/album/0OUokANrQiTMOjAmU3gX73',
      bandcamp: 'https://ditchdays.bandcamp.com/album/private-eyes',
    },
  },
  {
    image: baltimoreCover,
    alt: '"Baltimore" cover',
    links: {
      appleMusic:
        'https://music.apple.com/us/album/andy-kaufman/1499997845?i=1499998018',
      tidal: 'https://tidal.com/album/132126741',
      spotify:
        'https://open.spotify.com/track/3PXxZHuWxwJcU3RBmd0dDk?si=02ed8f3c6c64407d',
      bandcamp: 'https://ditchdays.bandcamp.com/track/baltimore',
    },
  },
  {
    image: andyKaufmanCover,
    alt: '"Andy Kaufman" cover',
    links: {
      appleMusic:
        'https://music.apple.com/us/album/andy-kaufman/1495462957?i=1495462984',
      tidal: 'https://tidal.com/album/128630139',
      spotify:
        'https://open.spotify.com/track/5l9qqi0Cdy5XAWvpI4iNXT?si=f3e5d2f99ae6443b',
      bandcamp: 'https://ditchdays.bandcamp.com/track/andy-kaufman',
    },
  },
  {
    image: evenIfYouKnowCover,
    alt: '"Even If You Know" cover',
    links: {
      appleMusic:
        'https://music.apple.com/us/album/even-if-you-know-feat-terry-vs-tori/1454591008?i=1454591023',
      tidal: 'https://tidal.com/album/104951688',
      spotify:
        'https://open.spotify.com/track/28FvBbHEcrmowPsvWzaUbE?si=5af79b7f7b5d4595',
      bandcamp:
        'https://ditchdays.bandcamp.com/track/even-if-you-know-feat-terry-vs-tori-2',
    },
  },
  {
    image: sethRogenCover,
    alt: '"Seth Rogen" cover',
    links: {
      appleMusic:
        'https://music.apple.com/us/album/seth-rogen/1437141767?i=1437141780',
      tidal: 'https://tidal.com/album/95881437',
      spotify:
        'https://open.spotify.com/track/4mbZMRJ1YWzJQZ8QuzcGl5?si=ed2a8324776c49e0',
      bandcamp: 'https://ditchdays.bandcamp.com/track/seth-rogen',
    },
  },
  {
    image: downtownCover,
    alt: '"Downtown" cover',
    links: {
      appleMusic:
        'https://music.apple.com/us/album/downtown-feat-calcut%C3%A1/1376080708?i=1376080824',
      tidal: 'https://tidal.com/album/88192377',
      spotify:
        'https://open.spotify.com/track/7IyKYl4L3Zg3rPAomXjhKe?si=53100c81dc104cac',
      bandcamp: 'https://ditchdays.bandcamp.com/track/downtown',
    },
  },
  {
    image: liquidSpringsCover,
    alt: '"Liquid Springs" cover',
    links: {
      appleMusic: 'https://music.apple.com/us/album/liquid-springs/1151460681',
      tidal: 'https://tidal.com/album/65177250',
      spotify:
        'https://open.spotify.com/album/6218T8YSaVsF40zDPSBkRH?si=HcN1McyeSUS6KzdhL27z_w',
      bandcamp: 'https://ditchdays.bandcamp.com/album/liquid-springs',
    },
  },
]

const Tour: NextPage = () => {
  const { setOpen } = useOffCanvasNavContext()
  useEffect(() => setOpen(false), [setOpen])

  return (
    <div className="flex flex-col gap-4 px-8 container pt-6 pb-20">
      {albums.map(({ image, alt, links }) => (
        <AlbumCover
          key={links.appleMusic}
          image={image}
          alt={alt}
          links={links}
        />
      ))}
    </div>
  )
}

export default Tour
