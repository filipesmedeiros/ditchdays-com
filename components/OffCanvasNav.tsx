import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

export interface Props {
  open: boolean
  onClose: () => void
}

const links = ['about', 'music', 'tour', 'merch', 'contact', 'subscribe']

const OffCanvasNav: FC<Props> = ({ open, onClose }) => {
  const { pathname } = useRouter()

  const showHome = pathname !== '/'

  return (
    <div
      className={clsx(
        'absolute flex flex-col items-center top-0 w-full h-full bg-gray transition-transform duration-700 py-10 font-extralight font-hc',
        {
          '-translate-y-full': !open,
        }
      )}
    >
      <nav className="flex flex-col items-center justify-between h-full py-10">
        {showHome && (
          <Link href="/">
            <a className="text-6xl text-orange">HOME</a>
          </Link>
        )}
        {links
          .filter(link => !pathname.includes(link))
          .map(linkName => (
            <Link href={`/${linkName}`} key={linkName}>
              <a className="text-6xl">{linkName.toLocaleUpperCase()}</a>
            </Link>
          ))}
      </nav>
      <button onClick={onClose}>
        <Image
          src="/icons/arrow-up.png"
          width={24}
          height={14}
          alt="Arrow to close menu"
        />
      </button>
    </div>
  )
}

export default OffCanvasNav
