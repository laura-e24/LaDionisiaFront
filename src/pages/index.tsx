import Head from 'next/head'
import Home from '../components/Home'
import { useUser } from '@auth0/nextjs-auth0/client';
import axios from 'axios';
import { useRouter } from "next/router";
function isUser(obj: any): obj is { '/roles': string[] } {
  return '/roles' in obj;
}

export default function index() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  // console.log(user);
  const handleCookieLogin = async () => {
    const res = await axios.post(`/api/login`, user);
    // console.log(res);
    if (user) {
      const response = await axios.post(`${process.env.RESTURL_PRODUCTS}/users/register`, user);
      console.log(response.data);
    }
    if (res.status === 200 && res.data.message === "Successful login: admin" || res.data.message === "Successful login: user") {
      router.push("/");
    }
  }
  if (isLoading) return <div>...loading</div>
  if (error) return <div>{error.message}</div>
  console.log(user)
  if (user) {
    const usuario = isUser(user) ? user[`/roles`] : [];
    console.log(usuario)
    return handleCookieLogin && (
      <>
        {usuario.includes('administrador') ? (
          <>
            <Head>
              <title>La Dionisia - Tienda de vinos</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='h-screen bg-white dark:bg-[#121212] text-black dark:text-white '>
              <Home />
              {/* administrador */}
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
              {/* user */}
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
          {/* guest */}
        </main>


        <footer>

        </footer>
      </div>
    )
  }

}