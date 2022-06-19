import type { AppProps } from 'next/app'
import { FC } from 'react'

import Layout from '../components/Layout'
// import Popup from '../components/Popup'
import '../styles/global.css'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
      {/* <Popup /> */}
    </Layout>
  )
}

export default MyApp
