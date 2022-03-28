import { NextPage } from 'next'
import Image from 'next/image'
import { useEffect } from 'react'

import ComingSoonLayout from '../components/ComingSoonLayout'
import { useOffCanvasNavContext } from '../hooks/useOffCanvasNav'
import merchPicture from '../public/pictures/merch.jpg'

const Tour: NextPage = () => {
  const { setOpen } = useOffCanvasNavContext()
  useEffect(() => setOpen(false), [setOpen])

  return (
    <>
      <ComingSoonLayout>MERCH & CLOTHES</ComingSoonLayout>
      <div className="absolute -z-20 -right-6 top-0 opacity-70">
        <Image
          priority
          src={merchPicture}
          width={269}
          height={403}
          alt="Background picture TODO"
          role="presentation"
        />
      </div>
    </>
  )
}

export default Tour
