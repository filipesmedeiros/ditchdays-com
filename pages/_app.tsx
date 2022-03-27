import type { AppProps } from 'next/app'
import { FC } from 'react'
import 'tailwindcss/tailwind.css'

import Layout from '../components/Layout'
import '../styles/global.css'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
