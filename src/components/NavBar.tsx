import { useTheme } from "next-themes"
import Link from "next/link";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

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
      <Link href='#'  className="block">
        Productos
      </Link> 
      <Link href='#'  className="block">
        Login
      </Link> 
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