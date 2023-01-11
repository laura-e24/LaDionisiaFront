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
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
// import 'tw-elements';
const NavBar = () => {
  const [mounted, setMounted] = useState(false);
  const [searchBar, setSearchBar] = useState(false)
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
          <Link href='/' className="block">Winery</Link>
        </li>
        <li className="px-2">
          <Link href='/products' className="block">Contact Us</Link>
        </li>
        <li className="px-2">
          <Link href='/products' className="block">Bestseller</Link>
        </li>
      </ul>
      <div className="w-2/3 inline-flex items-center">
        <span className="flex items-center w-2/4 justify-center">La Dionisia
          <Logo className="w-20 h-20"></Logo>
        </span>
        <span className='flex items-center w-2/4 justify-end gap-2'>
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
                <button type='submit' className="p-2 rounded border border-gray-300"> Search</button>
              </form>
            </div>
          ) : null
          }
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center rounded-md border border-gray-300 bg-white font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 dark:bg-black">
                {theme === 'light' ? <CartLogoBlack className='w-8 h-8' /> : <CartLogoWhite className='w-8 h-8' />}

              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Account settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Support
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        License
                      </a>
                    )}
                  </Menu.Item>
                  <form method="POST" action="#">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type="submit"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block w-full px-4 py-2 text-left text-sm'
                          )}
                        >
                          Sign out
                        </button>
                      )}
                    </Menu.Item>
                  </form>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center rounded-md border border-gray-300 bg-white font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 dark:bg-black">
                {theme === 'light' ? <PersonLogoBlack className='w-8 h-8' /> : <PersonLogoWhite className='w-8 h-8' />}
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Account settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Support
                      </a>
                    )}
                  </Menu.Item>
                  {!user &&
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/api/auth/login"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Login
                      </a>
                    )}
                  </Menu.Item>
                  }
                  {user &&
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/api/auth/logout"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                          onClick={handleCookieLogout}
                        >
                          Logout
                        </a>
                      )}
                    </Menu.Item>
                  }
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
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