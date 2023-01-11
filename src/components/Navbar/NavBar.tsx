import { useTheme } from "next-themes"
import Link from "next/link";
import { useEffect, useState } from "react";
import { useUser } from '@auth0/nextjs-auth0/client';
import axios from 'axios';
import { useRouter } from "next/router";
import Logo from "../../assets/img/dionisio.svg"
import Night from "../../assets/img/night.svg"
import Day from "../../assets/img/day.svg"
import HeartLogoWhite from "../../assets/img/HeartWhite.svg"
import HeartLogoBlack from "../../assets/img/HeartBlack.svg"
import SearchLogoWhite from "../../assets/img/SearchWhite.svg"
import SearchLogoBlack from "../../assets/img/SearchBlack.svg"
import PersonLogoBlack from "../../assets/img/PersonBlack.svg"
import PersonLogoWhite from "../../assets/img/PersonWhite.svg"
import CartLogoWhite from "../../assets/img/CartWhite.svg"
import CartLogoBlack from "../../assets/img/CartBlack.svg"
// import 'tw-elements';
const NavBar = () => {
  const [mounted, setMounted] = useState(false);
  const [searchBar, setSearchBar] = useState(false)
  const [favorites, setFavorites] = useState(false)
  const [search, setSearch] = useState('')
  const { theme, setTheme } = useTheme();
  const { user } = useUser();
  const router = useRouter();
  useEffect(() => {
    setMounted(true)
    setSearchBar(false)
  }, [])
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
  async function handleWinesByName(e) {
    e.preventDefault(e)
    try {
      const response = await axios.get(`${process.env.RESTURL_PRODUCTS}/products/?wines=${search}`);
      // console.log(response.status);
      if (response.status === 200) {
        router.push(`/products?wine=${search}`);
        setSearch('')
      }
      // alert('this is ok!')
    } catch (error) {
      alert('error product not found')
    }
  }
  function handleInputName(e) {
    setSearch(e.target.value)
  }
  if (!mounted) {
    return null
  }
  // console.log(search)
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
        <span className="flex items-center w-1/4 justify-center">La Dionisia
          <Logo className="w-20 h-20"></Logo>
        </span>
        <span className="flex items-center w-1/4 justify-center">
          {!user && (
            <Link href='/api/auth/login' className="block">
              Login
            </Link>
          )}
          {user && (
            <Link href='/api/auth/logout' className="block" onClick={handleCookieLogout}>
              Logout
            </Link>
          )}
        </span>
        <span className='flex items-center w-2/4 justify-end'>
          <label>
            <input
              className='hidden'
              checked={theme !== 'light'}
              name="darkMode"
              type="checkbox"
              onChange={() => setSearchBar(true)}
            />
            {!searchBar && (theme === 'light' ? <SearchLogoBlack className='w-8 h-8' /> : <SearchLogoWhite className='w-8 h-8' />)
            }
          </label>
          {searchBar ? (
            <div className="flex">
              <form className="flex gap-2 p-2" onSubmit={(e) => { handleWinesByName(e) }}>
                <input placeholder="Type something here..." type="text" className="rounded focus:outline-none focus:ring focus:ring-violet-300" onChange={(e) => { handleInputName(e) }}></input>
                <button type='submit' className="p-2 rounded  bg-sky-800"> Search</button>
              </form>
            </div>
          ) : null
          }
          {/* <label>
            <input
              className='hidden'
              checked={theme !== 'light'}
              name="darkMode"
              type="checkbox"
              onChange={() => setFavorites(true)}
            />
            {!searchBar && (theme === 'light' ? <HeartLogoBlack className='w-8 h-8' /> : <HeartLogoWhite className='w-8 h-8' />)
            }
          </label>
          {favorites ? (
            <div className="flex">
              <p>dadaaaaaaaaa</p>
            </div>
          ) : null
          } */}
          {/* <button className='w-12 h-12 rounded-full'>
            {theme === 'light' ? <HeartLogoBlack className='w-8 h-8' /> : <HeartLogoWhite className='w-8 h-8' />}
          </button> */}
          <button className='w-12 h-12 rounded-full'>
            {theme === 'light' ? <PersonLogoBlack className='w-8 h-8' /> : <PersonLogoWhite className='w-8 h-8' />}
          </button>
          <button className='w-12 h-12 rounded-full'>
            {theme === 'light' ? <CartLogoBlack className='w-8 h-8' /> : <CartLogoWhite className='w-8 h-8' />}
          </button>
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
            {theme === 'light' ? <Day className="w-8 h-8" /> : <Night className="w-8 h-8" />}
          </label>
        </span>
      </div>
    </nav>
  )
}

export default NavBar;