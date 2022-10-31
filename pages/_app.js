import '../styles/globals.scss'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#171717" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
