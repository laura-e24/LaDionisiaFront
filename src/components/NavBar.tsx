import { useTheme } from "next-themes"
import Link from "next/link";
import { useEffect, useState } from "react";
import { useUser } from '@auth0/nextjs-auth0/client';
import axios from 'axios';
import { useRouter } from "next/router";
import Logo from "../assets/img/dionisio.svg"
import Night from "../assets/img/night.svg"
import Day from "../assets/img/day.svg"
import PersonLogoBlack from "../assets/img/PersonBlack.svg"
import PersonLogoWhite from "../assets/img/PersonWhite.svg"
const NavBar = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme();
  const { user, error, isLoading } = useUser();
  const router = useRouter();

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
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  if (isLoading) return <div>...loading</div>
  if (error) return <div>{error.message}</div>

  return (
    <nav className="w-full flex justify-between items-center p-2">
      <ul className="w-1/3 flex inline-flex justify-between divide-x-2 divide-black">
        <li className="px-2">
          <Link href='/' className="block">Home</Link>
        </li>
        <li className="px-2">
          <Link href='/' className="block">Wine List</Link>
        </li>
        <li className="px-2">
          <Link href='/products' className="block">New Products</Link>
        </li>
        <li className="px-2">
          <Link href='/products' className="block">Bestseller</Link>
        </li>
      </ul>
      <div className="w-2/3 inline-flex items-center">
        <span className="flex items-center w-1/2 justify-center">La Dionisia
          <Logo className="w-20 h-20"></Logo>
        </span>
        {!user && (
          <Link href='api/auth/login' className="block">
            Login
          </Link>
        )}
        {user && (
          <Link href='api/auth/logout' className="block" onClick={handleCookieLogout}>
            Logout
          </Link>
        )}
        <span className='flex items-center w-1/2 justify-end'>
          <button className='w-12 h-12 rounded-full'>❤</button>
          <button className='w-12 h-12 rounded-full'>🔎</button>
          <button className='w-12 h-12 rounded-full'><PersonLogoBlack className='w-8 h-8'/></button>
          <button className='w-12 h-12 rounded-full'>🛒</button>
          <label className='flex items-center'>
            <input
              className='hidden'
              checked={theme !== 'light'}
              name="darkMode"
              type="checkbox"
              onChange={() => setTheme(
                theme === 'light' ? 'dark' : 'light'
              )}
            />
            {theme === 'light' ? <Day className="w-8 h-8"/> : <Night className="w-8 h-8"/>}
          </label>
        </span>
      </div>
    </nav>
  )
}

export default NavBar;