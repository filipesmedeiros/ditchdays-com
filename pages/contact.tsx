import { NextPage } from 'next'
import Image from 'next/image'
import { useEffect } from 'react'

import { useOffCanvasNavContext } from '../hooks/useOffCanvasNav'
import contactPicture from '../public/pictures/contact.jpg'

const Tour: NextPage = () => {
  const { setOpen } = useOffCanvasNavContext()
  useEffect(() => setOpen(false), [setOpen])

  return (
    <>
      <div className="flex flex-col justify-end gap-6 pl-16 text-2xl h-full max-h-[650px] pb-8 leading-none">
        <a href="mailto:general@ditch-days.com" className="max-w-fit">
          <p>
            Booking & Press <span className="text-orange">International</span>
          </p>
          <p className="font-extralight">general@ditch-days.com</p>
        </a>
        <a href="mailto:joao.vaz.silva@fproducao.pt" className="max-w-fit">
          <p>
            Booking <span className="text-green">Portugal</span>
          </p>
          <p className="font-extralight">joao.vaz.silva@fproducao.pt</p>
        </a>
        <a href="mailto:teresa.sequeira@fproducao.pt" className="max-w-fit">
          <p>
            Press <span className="text-green">Portugal</span>
          </p>
          <p className="font-extralight">teresa.sequeira@fproducao.pt</p>
        </a>
      </div>

      <div className="absolute -z-20 -right-6 top-24 opacity-50">
        <Image
          priority
          src={contactPicture}
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
