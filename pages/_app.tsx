import '/styles/global.css'
import {AppProps, NextWebVitalsMetric} from 'next/app'
import {Analytics} from '@vercel/analytics/react'

export default ({Component, pageProps}: AppProps) => (
  <>
    <Component {...pageProps}/>
    <Analytics/>
  </>
)

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
}