import Head from 'next/head'
import Link from 'next/link'
import '../style.css'
import { unstable_useRefreshRoot as useRefreshRoot } from 'next/streaming'
export default function MyApp({ Component, pageProps }) { 
  const refresh = useRefreshRoot()

  

  return (
    <>
    <h1 className='ct-my'>hello</h1>
    <div className='flex'>
      <Link href='/server' onClick={() => refresh()}>
        <div className='button' >serverpage</div>
        </Link>
      <Link href='/client'><div className='button'>client </div></Link>
    </div>
      <Component {...pageProps} />
    </>
  )
}
