import clsx from 'clsx'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'

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
      <div className="bg-black/90 h-full w-full flex flex-col justify-between p-2 items-center">
        <h2 className="font-extralight font-lc text-5xl">new single</h2>
        <h1 className="text-purple font-hc font-semibold text-7xl text-center">
          Private Eyes
        </h1>
        <Image
          src={privateeyesCover}
          width={324}
          height={324}
          alt="Private Eyes cover"
        />
        <h2 className="font-extralight font-lc text-4xl">
          on <b className="font-medium">April 8</b>
        </h2>
        <button className="rounded-none border-2 border-orange text-orange px-6 pt-4 pb-2 text-4xl font-lc">
          PRE-SAVE NOW
        </button>
        <span
          className="hover:cursor-pointer"
          onClick={() => {
            localStorage.setItem('hasOpenedPopup', 'true')
            setShow({ show: false, render: true })
          }}
        >
          X
        </span>
      </div>
    </div>
  )
}

export default Popup
