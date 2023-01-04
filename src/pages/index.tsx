import Head from 'next/head'

export default function Home() {
  
  return (
    <div>
      <Head>
        <title>La Dionisia - Tienda de vinos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='h-screen bg-white dark:bg-black text-black dark:text-white '>
        <h1 className='font-bold text-4xl'>
          Hola a todos, esto es NextJS + TypeScript + TailwindCSS
        </h1>
      </main>

      <footer>
       
      </footer>
    </div>
  )
}
