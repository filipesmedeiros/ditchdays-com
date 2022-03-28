import { NextPage } from 'next'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

import { useOffCanvasNavContext } from '../hooks/useOffCanvasNav'
import subscribePicture from '../public/pictures/subscribe.jpg'

const Subscribe: NextPage = () => {
  const { setOpen } = useOffCanvasNavContext()
  useEffect(() => setOpen(false), [setOpen])

  const emailRef = useRef<HTMLInputElement>(null)

  return (
    <>
      <div className="flex flex-col justify-end pl-16 text-2xl h-full max-h-[650px] pb-8 gap-4">
        <div>
          <h1 className="text-orange text-3xl">STAY IN THE LOOP</h1>
          <p>
            Get first-hand access to new releases, shows, exclusive content and
            everything DITCH DAYS.
          </p>
        </div>
        <form
          className="contents"
          onSubmit={ev => {
            ev.preventDefault()
            fetch('/api/saveEmail', {
              method: 'POST',
              headers: [['Content-Type', 'application/json']],
              body: JSON.stringify({ email: emailRef.current?.value }),
            })
          }}
        >
          <input
            ref={emailRef}
            className="self-start bg-transparent border-2 border-white px-5 py-2 leading-none placeholder:font-extralight"
            placeholder="Email address"
          />
          <button
            type="submit"
            className="text-orange border-2 border-orange px-5 py-2 leading-none self-start"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>

      <div className="absolute -z-20 -left-10 top-4">
        <Image
          priority
          src={subscribePicture}
          width={302}
          height={453}
          alt="Background picture TODO"
          role="presentation"
        />
      </div>
    </>
  )
}

export default Subscribe
