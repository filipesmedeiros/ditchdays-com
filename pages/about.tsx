import { NextPage } from 'next'
import Image from 'next/image'
import { useEffect } from 'react'

import { useOffCanvasNavContext } from '../hooks/useOffCanvasNav'
import aboutPicture from '../public/pictures/about.jpg'

const About: NextPage = () => {
  const { setOpen } = useOffCanvasNavContext()
  useEffect(() => setOpen(false), [setOpen])

  return (
    <>
      <div className="text-3xl px-8 font-normal pt-48 pb-16">
        <p className="py-4">
          “In the past couple of years, we’ve been stuck inside ourselves. Left
          some songs in the drawer, cancelled a tour around Europe. It became
          quite easy to just let life happen and not think about what we wanted
          to say.
        </p>
        <p className="py-4">
          The best way we found to get back to the place we were missing was to
          start writing together again. Turns out, we haven’t been sitting idly
          by. We’ve been listening. Traveling. Exploring. Finding something new.
          And that is our <span className="text-green">LP #2.</span>”
        </p>
        <p className="py-4">
          <span className="text-orange">DITCH DAYS</span> is Crespo, Guilherme
          and Luis. Live since 2016.
        </p>
      </div>

      <div className="absolute -z-20 -right-36 top-6 opacity-70">
        <Image
          priority
          src={aboutPicture}
          width={511}
          height={341}
          alt="Background picture TODO"
          role="presentation"
        />
      </div>
    </>
  )
}

export default About
