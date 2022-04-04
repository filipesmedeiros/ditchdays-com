import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'

import xIcon from '../public/icons/x.png'
import privateeyesCover from '../public/pictures/private-eyes.jpeg'

const Popup: FC = () => {
  const [show, setShow] = useState({ show: false, render: false })
  useEffect(() => {
    const shouldOpen = localStorage.getItem('hasOpenedPopup') !== 'true'
    if (shouldOpen) {
      setShow({ render: true, show: false })
      const timeout = setTimeout(() => setShow({ render: true, show: true }), 0)
      return () => clearTimeout(timeout)
    }
  }, [])

  return (
    <div
      className={clsx(
        'absolute top-0 left-0 p-5 h-screen w-screen z-20 transition',
        {
          hidden: !show.render,
        },
        show.show ? 'opacity-1 scale-100' : 'opacity-0 scale-95'
      )}
      onTransitionEnd={() => {
        if (!show.show) setShow({ show: false, render: false })
      }}
    >
      <div className="bg-black/90 h-full w-full flex flex-col justify-between py-3 px-5 items-center gap-2">
        <div
          className={`
            relative w-full text-center flex justify-center
            before:border-b-2 before:w-full before:border-b-white before:block before:absolute before:top-1/2
          `}
        >
          <h2 className="font-extralight font-lc text-3xl bg-black z-10 px-3">
            new single
          </h2>
        </div>
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-purple font-hc font-semibold text-5xl sm:text-6xl text-center">
            Private Eyes
          </h1>
          <div className="leading-[0px] !w-48 !h-48 xs:!w-72 xs:!h-72">
            <Image
              priority
              src={privateeyesCover}
              alt="Private Eyes cover"
              className=""
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <h2 className="font-extralight font-lc text-2xl sm:text-3xl">
            on <b className="font-medium">April 8</b>
          </h2>
          <a
            href="https://distrokid.com/hyperfollow/ditchdays/private-eyes-3"
            className="rounded-none border-2 border-orange text-orange px-6 pt-4 pb-2 text-3xl sm:text-4xl font-lc"
          >
            PRE-SAVE NOW
          </a>
        </div>
        <button
          className="hover:cursor-pointer"
          onClick={() => {
            localStorage.setItem('hasOpenedPopup', 'true')
            setShow({ show: false, render: true })
          }}
        >
          <Image src={xIcon} alt="Close popup" />
        </button>
      </div>
    </div>
  )
}

export default Popup
