import Head from 'next/head'
import NavBar from '../components/NavBar'

export default function Home() {
  
  return (
    <div>
      <Head>
        <title>La Dionisia - Tienda de vinos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='h-screen bg-white dark:bg-[#121212] text-black dark:text-white '>
      <NavBar />
      {/* <Home /> */}
      </main>

      <footer>
       
      </footer>
    </div>
  )
}
