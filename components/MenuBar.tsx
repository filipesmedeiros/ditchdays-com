import clsx from 'clsx'
import { FC } from 'react'

import { useOffCanvasNavContext } from '../hooks/useOffCanvasNav'

const MenuBar: FC = () => {
  const { setOpen } = useOffCanvasNavContext()

  return (
    <div
      className={clsx(
        'text-4xl font-extralight text-center relative w-full leading-none pt-10',
        "before:absolute before:content-[''] before:border-white before:border-b-2 before:border-solid before:w-[30%] sm:before:w-[40%] before:left-0 before:top-1/2 before:-z-10 before:-translate-y-1 before:ml-6 before:pt-5",
        "after:absolute after:content-[''] after:border-white after:border-b-2 after:border-solid after:w-[30%] sm:after:w-[40%] after:right-0 after:top-1/2 after:-z-10 after:-translate-y-1 after:mr-6 after:pt-5"
      )}
    >
      <button
        className="hover:cursor-pointer font-extralight font-hc"
        onClick={() => setOpen(true)}
      >
        MENU
      </button>
    </div>
  )
}

export default MenuBar
