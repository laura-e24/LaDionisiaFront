import Head from 'next/head'
import { useUser } from '@auth0/nextjs-auth0/client';
import axios from 'axios';
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  console.log(user);
  const handleCookieLogin = async () => {
    const res = await axios.post("/api/login", user);
    console.log(res);
    if (res.status === 200 && res.data.message === "Successful login: admin" || res.data.message === "Successful login: user") {
      router.push("/");
    }
  }
  const handleCookieLogout = async () => {
    try {
      const res = await axios.get("/api/logout");
      if (res.status === 200) {
        router.push("/");
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  if (isLoading) return <div>...loading</div>
  if (error) return <div>{error.message}</div>
  if (user) {
    return handleCookieLogin() && (
      <>
        {user[`/roles`].includes('administrador') ? (
          <>
            <h2>binevenido admin</h2>
            <a href="dashboard">dashboard</a><br />
            <a href="api/auth/logout">logout</a>
          </>
        ) : (
          <>
            <h1>Bienvenido user</h1>
            <a href="api/auth/logout">logout</a>
          </>
        )}
        {/* <h2>Welcome {user.name}!</h2> */}
        {/* <a href='#' onClick={handleCookieLogin}>Login cookies</a><br></br>
        <a href='#' onClick={handleCookieLogout}>Logout cookies</a><br></br> */}
      </>
    )
  } else {
    return handleCookieLogout() && (
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

}