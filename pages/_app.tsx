import '/styles/global.css'
import {AppProps, NextWebVitalsMetric} from "next/app";

export default ({Component, pageProps}: AppProps) => (
  <Component {...pageProps}/>
)

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
}