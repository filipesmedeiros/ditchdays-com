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
      <div className="flex flex-col justify-end gap-6 pl-16 text-2xl h-full max-h-[650px] pb-8">
        <div>
          <p>
            Booking & Press <span className="text-orange">International</span>
          </p>
          <p className="font-extralight">
            <a href="mailto:general@ditch-days.com">general@ditch-days.com</a>
          </p>
        </div>
        <div>
          <p>
            Booking <span className="text-green">Portugal</span>
          </p>
          <p className="font-extralight">
            <a href="mailto:joao.vaz.silva@fproducao.pt">
              joao.vaz.silva@fproducao.pt
            </a>
          </p>
        </div>
        <div>
          <p>
            Press <span className="text-green">Portugal</span>
          </p>
          <p className="font-extralight">
            <a href="mailto:teresa.sequeira@fproducao.pt">
              teresa.sequeira@fproducao.pt
            </a>
          </p>
        </div>
      </div>

      <div className="absolute -z-20 -right-6 top-24 opacity-70">
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
