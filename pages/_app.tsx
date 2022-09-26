import type { AppProps } from 'next/app'
import GlobeStyle from "../styles/GlobeStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <GlobeStyle />
        <Component {...pageProps} />
      </>
      )

}

export default MyApp
