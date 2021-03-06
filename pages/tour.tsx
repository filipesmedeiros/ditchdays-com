import { NextPage } from 'next'
import Image from 'next/image'
import { useEffect } from 'react'

import ComingSoonLayout from '../components/ComingSoonLayout'
import { useOffCanvasNavContext } from '../hooks/useOffCanvasNav'
import tourPicture from '../public/pictures/tour.jpg'

const Tour: NextPage = () => {
  const { setOpen } = useOffCanvasNavContext()
  useEffect(() => setOpen(false), [setOpen])

  return (
    <>
      <ComingSoonLayout>TOUR DATES</ComingSoonLayout>

      <div className="absolute -z-20 -left-12 top-0 opacity-50">
        <Image
          priority
          src={tourPicture}
          width={207}
          height={268}
          alt="Background picture TODO"
          role="presentation"
        />
      </div>
    </>
  )
}

export default Tour
