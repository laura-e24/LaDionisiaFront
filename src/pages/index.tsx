import Head from 'next/head'
// import { useUser } from '@auth0/nextjs-auth0/client';

export default function Home() {
  // const { user, error, isLoading } = useUser();

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>{error.message}</div>;
  // console.log(user)
  // if (user) return (
    // user && (
    //   <div>
    //     <img src={user.picture} alt={user.name} />
    //     <h2>{user.name}</h2>
    //     <p>{user.email}</p>
    //     <a href="/api/auth/logout">Logout</a>
    //   </div>
    // )
  //   <>
  //     {user[`/roles`].includes('administrador') ? (
  //       <>
  //         <h2>binevenido admin</h2>
  //         <a href="dashboard">dashboard</a><br />
  //         <a href="api/auth/logout">logout</a>
  //       </>
  //     ) : (
  //       <>
  //         <h1>Bienvenido user</h1>
  //         <a href="api/auth/logout">logout</a>
  //       </>
  //     )}
  //   </>

  // );

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
        <a href="/api/auth/login">Login</a>
      </main>

      <footer>

      </footer>
    </div>
  )
}
