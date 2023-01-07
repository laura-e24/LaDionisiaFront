import Head from 'next/head'
import Home from '../components/Home'
import { useUser } from '@auth0/nextjs-auth0/client';
import axios from 'axios';
import { useRouter } from "next/router";


export default function index() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  // console.log(user);
  const handleCookieLogin = async () => {
    const res = await axios.post("/api/login", user);
    // console.log(res);
    if(user){
      const response = await axios.post("http://localhost:3001/users/register", user);
      console.log(response.data);
    }
    if (res.status === 200 && res.data.message === "Successful login: admin" || res.data.message === "Successful login: user") {
      router.push("/");
    }
  }
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
            <main className='h-screen bg-white dark:bg-[#121212] text-black dark:text-white '>
              <Home />
              <h2>binevenido admin</h2>
              <a href="dashboard">dashboard</a><br />
              <a href="api/auth/logout">logout</a>
            </main>
          </>
        ) : (
          <>
            <Head>
              <title>La Dionisia - Tienda de vinos</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='h-screen bg-white dark:bg-[#121212] text-black dark:text-white '>
              <Home />
              <h1>Bienvenido user</h1>
              <a href="api/auth/logout">logout</a>
            </main>
          </>
        )}
      </>
    )
  } else {
    return (
      <div>
        <Head>
          <title>La Dionisia - Tienda de vinos</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className='h-screen bg-white dark:bg-[#121212] text-black dark:text-white '>
          <Home />
        </main>


        <footer>

        </footer>
      </div>
    )
  }

}