import Head from 'next/head'
import NavBar from '../components/NavBar'
import { useUser } from '@auth0/nextjs-auth0/client';
import axios from 'axios';
import { useEffect } from "react";
import { useRouter } from "next/router";


export default function Home() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  // console.log(user);
  const handleCookieLogin = async () => {
    const res = await axios.post("/api/login", user);
    // console.log(res);
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
            <Head>
              <title>La Dionisia - Tienda de vinos</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <h2>binevenido admin</h2>
            <a href="dashboard">dashboard</a><br />
            <a href="api/auth/logout">logout</a>
          </>
        ) : (
          <>
            <Head>
              <title>La Dionisia - Tienda de vinos</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <h1>Bienvenido user</h1>
            <a href="api/auth/logout">logout</a>
          </>
        )}
      </>
    )
  } else {
    return handleCookieLogout() && (
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

}