import { useTheme } from "next-themes"
import Link from "next/link";
import { useEffect, useState } from "react";
import { useUser } from '@auth0/nextjs-auth0/client';

const NavBar = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme();
  const { user, error, isLoading } = useUser();

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  if (isLoading) return <div>...loading</div>
  if (error) return <div>{error.message}</div>

  return (
    <nav className="w-full flex justify-between p-10">
      <span className="block">La Dionisia</span>
      <span className="block mx-20">
        <input className="p-2 rounded-md focus:outline-none" type="text" placeholder="Buscar..." />
      </span>
      <Link href='/' className="block">
        Home
      </Link>
      <Link href='#' className="block">
        About
      </Link>
      <Link href='#' className="block">
        Productos
      </Link>
      {user && (
        <Link href='api/auth/logout' className="block">
          Logout
        </Link>
      )}
      {!user && (
        <Link href='api/auth/login' className="block">
          Login
        </Link>
      )}
      <span className="block">
        Carrito
      </span>
      <span className='block justify-center'>
        <label>
          Modo Oscuro
        </label>
        <input
          className='ml-2'
          checked={theme !== 'light'}
          name="darkMode"
          type="checkbox"
          onChange={() => setTheme(
            theme === 'light' ? 'dark' : 'light'
          )}
        />
      </span>
    </nav>
  )
}

export default NavBar;