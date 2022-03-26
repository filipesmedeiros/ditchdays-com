import type { AppProps } from 'next/app'
import { FC, useState } from 'react'
import 'tailwindcss/tailwind.css'

import OffCanvasNav from '../components/OffCanvasNav'
import { OffCanvasNavContextProvider } from '../hooks/useOffCanvasNav'
import '../styles/global.css'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <OffCanvasNavContextProvider isOpen={isOpen} setOpen={setOpen}>
      <Component {...pageProps} />
      <OffCanvasNav open={isOpen} onClose={() => setOpen(false)} />
    </OffCanvasNavContextProvider>
  )
}

export default MyApp
