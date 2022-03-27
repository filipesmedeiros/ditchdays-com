import { FC, useState } from 'react'

import { OffCanvasNavContextProvider } from '../hooks/useOffCanvasNav'
import DesktopPlaceholder from './DesktopPlaceholder'
import MenuBar from './MenuBar'
import OffCanvasNav from './OffCanvasNav'
import SocialLinks from './SocialLinks'

const Layout: FC = ({ children }) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <OffCanvasNavContextProvider isOpen={isOpen} setOpen={setOpen}>
      <div className="flex flex-col py-10 md:hidden w-full h-full relative overflow-x-hidden">
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
