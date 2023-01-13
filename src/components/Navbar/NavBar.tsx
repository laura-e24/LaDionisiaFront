import { useTheme } from "next-themes"
import Link from "next/link";
import { useEffect, useState } from "react";
import { useUser } from '@auth0/nextjs-auth0/client';
import axios from 'axios';
import { useRouter } from "next/router";
import Logo from "../../assets/img/logoD.svg"
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
import styles from "../../assets/style/winery.module.css"
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
  function handleInputName(e) {
    setSearch(e.target.value)
  }
  if (!mounted) {
    return null
  }

  function handleCategoryFilterClick(event) {
    const { name } = event.target;
    router.push({
      // pathname: `/products`,
      pathname: `/products/filters/${name}`,
      query: { filter: name },
    });
  }
  // console.log(search)

  return (
<>
<nav className="nav bg-bg-body h-8 divide-x-2 divide-neutral-400 mt-2">
  <Link href='/'>
    <a className="w-24  h-6 inline-block text-center align-sub">
      Home
    </a>
  </Link>
  <Link href='/'>
    <a className="w-24 h-6 inline-block text-center align-sub">
      Winery
    </a>
  </Link>
  <Link href='/'>
    <a className="w-24  h-6 inline-block text-center align-sub">
      Contact
    </a>
  </Link>

  <div className="inline-block float-right border-none">
    <label className="inline-block w-8">
    <input
      className='hidden'
      checked={theme !== 'light'}
      name="darkMode"
      type="checkbox"
      onChange={() => setSearchBar(true)}
    />
    {!searchBar && (theme === 'light' ? <SearchLogoBlack className='w-8 h-8 ' /> : <SearchLogoWhite className='w-8 h-8' />)
    }
    </label>
    {searchBar ? (
    <div className="inline-block">
      <form className="gap-2 p-2" onSubmit={(e) => { handleWinesByName(e) }}>
        <input placeholder="Type something here..." type="text" className="rounded focus:outline-none focus:ring focus:ring-violet-300" onChange={(e) => { handleInputName(e) }}></input>
        <button type='submit' className="p-2 rounded border border-gray-300"> Search</button>
      </form>
    </div>
    ) : null
    }
    <Menu as="div" className="relative inline-block text-left">
     <div>
      <Menu.Button className="
       w-8
       inline-block
       justify-center 
       font-medium 
       text-gray-700 
       shadow-sm 
       hover:bg-gray-50 
       focus:outline-none 
       focus:ring-2 
       focus:ring-indigo-500 
       focus:ring-offset-2 
       focus:ring-offset-gray-100 
       dark:bg-black">
       {theme === 'light' ? <HeartLogoBlack className='w-8 h-8' /> : <HeartLogoWhite className='w-8 h-8' />}
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
      <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
  <Menu.Button className="
   w-8
   inline-block
   justify-center 
   font-medium 
   text-gray-700 
   shadow-sm 
   hover:bg-gray-50 
   focus:outline-none 
   focus:ring-2 
   focus:ring-indigo-500 
   focus:ring-offset-2 
   focus:ring-offset-gray-100 
   dark:bg-black">
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
<Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
              <Menu.Button className="
              inline-block
              justify-center 
              font-medium 
              text-gray-700 
              shadow-sm 
              hover:bg-gray-50 
              focus:outline-none 
              focus:ring-2 
              focus:ring-indigo-500 
              focus:ring-offset-2 
              focus:ring-offset-gray-100 
              dark:bg-black">
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
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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

          <label className='inline-block w-8'>
            <input
              className='hidden'
              checked={theme !== 'light'}
              name="darkMode"
              type="checkbox"
              onChange={() => setTheme(
                theme === 'light' ? 'dark' : 'light'
              )}
            />
            {theme === 'light' ? <Day className="w-8 h-8 " /> : <Night className="w-8 h-8" />}
          </label>
      </div>




</nav>
<Logo className="w-28 h-28 fixed left-1/2 -translate-x-1/2 top-4 z-50 drop-shadow-lg"></Logo>







</>

 )
}

export default NavBar;

/*
 <Logo className="w-28 h-28"></Logo>
<nav className="w-full items-center p-2 bg-bg-body">
      <ul className="w-1/6 flex inline-flex justify-between divide-x-2 divide-black">
        <li className="px-2">
          <Link href='/' className="block">Home</Link>
        </li>
        <li className={`${styles.menu} px-2`}>
          Winery
          <div className={`${styles.sub} bg-pagination-color p-6 w-max`}>
            <ul className="w-2/4 mx-8">
              <label>COUNTRY</label>
              <li><label>France</label><input type="checkbox" name="France" onChange={(e) => handleCategoryFilterClick(e)}/></li>
              <li><label>Argentina</label><input type="checkbox" name="Argentina" onChange={(e) => handleCategoryFilterClick(e)}/></li>
              <li><label>Spain</label><input type="checkbox" name="Spain" onChange={(e) => handleCategoryFilterClick(e)}/></li>
              <li><label>United States</label><input type="checkbox" name="United States" onChange={(e) => handleCategoryFilterClick(e)}/></li>
              <li><label>Italy</label><input type="checkbox" name="Italy" onChange={(e) => handleCategoryFilterClick(e)}/></li>
              <li><label>Portugal</label><input type="checkbox" name="Portugal" onChange={(e) => handleCategoryFilterClick(e)}/></li>
              <li><label>South Africa</label><input type="checkbox" name="South Africa" onChange={(e) => handleCategoryFilterClick(e)}/></li>
              <li><label>Australia</label><input type="checkbox" name="Australia" onChange={(e) => handleCategoryFilterClick(e)}/></li>
              <li><a href="/products">ALL</a></li>
            </ul>
            <ul className="w-1/3 mx-8">
              <label>REGION</label>
              <li><a href="#">filter 1</a></li>
              <li><a href="#">filter 2</a></li>
              <li><a href="#">filter 3</a></li>
              <li><a href="#">filter 4</a></li>
              <li><a href="#">filter 5</a></li>
              <li><a href="#">filter 6</a></li>
              <li><a href="#">filter 7</a></li>
              <li><a href="#">filter 8</a></li>
              <li><a href="#">filter 9</a></li>
              <li><a href="#">ALL</a></li>
            </ul>
            <ul className="w-1/3 mx-8">
              <label>VINTAGE</label>
              <li><a href="#">2010 - Present</a></li>
              <li><a href="#">France</a></li>
              <li><a href="#">Germany</a></li>
              <li><a href="#">Italy</a></li>
              <li><a href="#">Uruguay</a></li>
              <li><a href="#">Usa</a></li>
              <li><a href="#">ALL</a></li>
            </ul>
            <ul className="w-1/3 mx-8">
              <label>SCORE</label>
              <li><a href="#">100</a></li>
              <li><a href="#">99 - 97</a></li>
              <li><a href="#">96 - 94</a></li>
              <li><a href="#">93 - 91</a></li>
              <li><a href="#">90 - Under</a></li>
              <li><a href="#">New Wines</a></li>
              <li><a href="#">ALL</a></li>
            </ul>
          </div>
        </li>
        <li className="px-2">
          <Link href='/about' className="block">Contact Us</Link>
        </li>
      </ul>
      <div className="w-4/6 inline-flex items-center">
        <span className="flex items-center w-2/4 justify-center">
          <Logo className="w-28 h-28"></Logo>
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
            {!searchBar && (theme === 'light' ? <SearchLogoBlack className='w-8 h-8 ' /> : <SearchLogoWhite className='w-8 h-8' />)
            }
          </label>
          {searchBar ? (
            <div className="flex">
              <form className="flex gap-2 p-2">
                <input placeholder="Type something here..." type="text" className="rounded focus:outline-none focus:ring focus:ring-violet-300" onChange={(e) => { handleInputName(e) }}></input>
                <button type='submit' className="p-2 rounded border border-gray-300"> Search</button>
              </form>
            </div>
          ) : null
          }
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center rounded-md border border-gray-300 font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 dark:bg-black">
                {theme === 'light' ? <HeartLogoBlack className='w-8 h-8' /> : <HeartLogoWhite className='w-8 h-8' />}

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
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-bg-body">
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
              <Menu.Button className="inline-flex justify-center rounded-md border border-gray-300 font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 dark:bg-black">
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
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-bg-body">
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
              <Menu.Button className="inline-flex justify-center rounded-md border border-gray-300 font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 dark:bg-black">
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
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-bg-body">
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
            {theme === 'light' ? <Day className="w-8 h-8 " /> : <Night className="w-8 h-8" />}
          </label>
        </span>
      </div>
    </nav>
              */

