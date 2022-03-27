import clsx from 'clsx'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'

import { OffCanvasNavContextProvider } from '../hooks/useOffCanvasNav'
import DesktopPlaceholder from './DesktopPlaceholder'
import MenuBar from './MenuBar'
import OffCanvasNav from './OffCanvasNav'
import SocialLinks from './SocialLinks'

const Layout: FC = ({ children }) => {
  const [isOpen, setOpen] = useState(false)
  const { pathname } = useRouter()
  const hideOverflow = pathname !== '/music' && pathname !== '/about'

  return (
    <OffCanvasNavContextProvider isOpen={isOpen} setOpen={setOpen}>
      <div
        className={clsx(
          'flex flex-col md:hidden w-full h-full relative overflow-x-hidden',
          {
            'overflow-y-hidden': hideOverflow,
          }
        )}
      >
        <MenuBar />
        <main className="flex-1">{children}</main>
        <SocialLinks />
      </div>
      <DesktopPlaceholder />
      <OffCanvasNav open={isOpen} onClose={() => setOpen(false)} />
    </OffCanvasNavContextProvider>
  )
}

export default Layout
