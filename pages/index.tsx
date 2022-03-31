import { NextPage } from 'next'
import Image from 'next/image'
import { useEffect } from 'react'

import { useOffCanvasNavContext } from '../hooks/useOffCanvasNav'
import aboutPicture from '../public/pictures/about.jpg'
import contactPicture from '../public/pictures/contact.jpg'
import merchPicture from '../public/pictures/merch.jpg'
import subscribePicture from '../public/pictures/subscribe.jpg'
import tourPicture from '../public/pictures/tour.jpg'

const Home: NextPage = () => {
  const { setOpen } = useOffCanvasNavContext()
  useEffect(() => setOpen(false), [setOpen])

  return (
    <div className="flex flex-col justify-center h-full relative items-center">
      <h1 className="text-center text-transparent text-10xl py-2 max-w-fit font-bold font-lc leading-[0.8] bg-clip-text bg-[url('/pictures/subscribe.jpg')] bg-[position:-px_-46px] bg-[length:520px]">
        DITCH
        <br />
        DAYS
      </h1>
      <div className="hidden">
        <Image
          priority
          src={subscribePicture}
          width={613}
          height={922}
          alt="Background picture TODO"
          role="presentation"
          className="hidden"
        />
      </div>
    </div>
  )
}

export default Home
