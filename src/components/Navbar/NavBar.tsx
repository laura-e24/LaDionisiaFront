import Link from 'next/link'
import Image from 'next/image'

import { useEffect, useState } from "react";
import { filterByScore, filterByRegion, filterByVintage, selectCountryFilter, setFilters, selectAllFilters, selectAllRegions, getAllWinesByName } from "../../features/products/productsSlice";
import { useAppDispatch } from "../../app/store"

//import axios from 'axios';
//import { Fragment } from 'react'
import { useSelector } from "react-redux";

import { useRouter } from 'next/router'


const NavBar = () => {

const [search, setSearch] = useState('')
const dispatch = useAppDispatch()
const router = useRouter();
//const { filter } = router.query;
//const regions = useSelector(selectAllRegions)
//const { user } = useUser();

const filters = useSelector(selectAllFilters)
const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true)
}, [])
if (!mounted) return null

function handleFilters(e) {
  const { value, name } = e.target;
  dispatch(setFilters({ [name]: value }));
}

function handleInputName(e) {
  setSearch(e.target.value)
}

function getWinesByName(e) {
  e.preventDefault(e)
  router.push ({
      pathname: `/products`
    },
    undefined,
    {shallow: true}
);



  dispatch(getAllWinesByName(search))
  setSearch('')
}

return (
<>
<div className="w-28 h-28 absolute left-1/2 -translate-x-1/2">
  <Image layout="fill" src="/assets/logonav.svg"/>
</div>
<nav className="
  float-right   
  mt-10 
  bg-bg-body 
  h-8 
  w-2/5
">
  <details className="float-right ml-2">
    <summary>
      <div className="w-7 h-7 mt-1 relative">
        <Image layout="fill" src="/assets/search.svg"/>
      </div>
    </summary>
    <form className="wine-search  float-right -mt-7 pl-8" onSubmit={(e) => { getWinesByName(e) }}>
     <input type="search"  onChange={(e) => { handleInputName(e) }} value={search} placeholder="Search Wines"/>
     <button>GO</button>
    </form>
  </details>
  <div className="w-7 h-7 mt-1 ml-2 relative float-right">
    <Image layout="fill" src="/assets/cart.svg"/>
  </div>
  <details className="ml-2 float-right">
    <summary>
      <div className="w-7 h-7 mt-1 relative">
        <Image layout="fill" src="/assets/person.svg"/>
      </div>
    </summary>
    <div className="usermenu">
      <a href="#">Settings</a><br/>
      <a href="#">Support</a><br/>
      <a href="#">License</a><br/>
      <a href="#">Sign out</a>
    </div>
  </details>
  <div className="w-7 h-7 mt-1 relative float-right">
    <Image layout="fill" src="/assets/heart.svg"/>
  </div>
</nav>
<nav className="
  nav 
  bg-bg-body 
  h-8 
  w-2/5
  divide-x-2 
  divide-neutral-400 
  mt-10 
  mb-14">
  <Link href='/#passion-for-wine'>
    <a className="menu w-24  h-6 inline-block text-center align-sub">
      Home
    </a>
  </Link>
  <a className="menu w-24  h-6 inline-block text-center align-sub">
    <details>
      <summary>
      Winery
      </summary>
      <div className="submenu">
        <h3>Country</h3>
        <div className="columns-3 text-left mt-2 mb-4 pl-3">
               <a href="#">Argentina</a>
          <br/><a href="#">Australia</a>
          <br/><a href="#">Austria</a>
          <br/><a href="#">Brazil</a>
          <br/><a href="#">Canada</a>
          <br/><a href="#">Chile</a>
          <br/><a href="#">France</a>
          <br/><a href="#">Georgia</a>
          <br/><a href="#">Germany</a>
          <br/><a href="#">Greece</a>
          <br/><a href="#">Hungary</a>
          <br/><a href="#">Israel</a>
          <br/><a href="#">Italy</a>
          <br/><a href="#">Moldova</a>
          <br/><a href="#">New Zealand</a>
          <br/><a href="#">Portugal</a>
          <br/><a href="#">Romania</a>
          <br/><a href="#">Slovenia</a>
          <br/><a href="#">South Africa</a>
          <br/><a href="#">Spain</a>
          <br/><a href="#">Switzerland</a>
          <br/><a href="#">Turkey</a>
          <br/><a href="#">United States</a>
          <br/><a href="#">Uruguay</a>
        </div>
        <h3>Vintage</h3>
        <div className="columns-3 text-left mt-2 mb-2">
               <a href="#">2020-2023</a>
          <br/><a href="#">2010-2019</a>
          <br/><a href="#">2000-2009</a>
          <br/><a href="#">1990-1999</a>
          <br/><a href="#">1980-1989</a>
          <br/><a href="#">1970-1979</a>
          <br/><a href="#">1960-1969</a>
          <br/><a href="#">1950-1959</a>
          <br/><a href="#">1940-older</a>
        </div>
        <h3>Price</h3>
        <div className="columns-4 text-left mt-2 mb-2">
          <a href="#">$101-$200</a><br/>
          <a href="#">$50 - $100</a><br/>
          <a href="#">$30-49</a><br/>
          <a href="#">$20-29</a><br/>
          <a href="#">$16-19</a><br/>
          <a href="#">$10-15</a><br/>
          <a href="#">$6 - $9</a><br/>
          <a href="#">ALL</a><br/>
        </div>
        <h3>Type</h3>
        <div className="wine-types-submenu text-center mt-2 mb-2">
          <a href="/products/type/reds">Red</a>
          <a href="/products/type/whites">White</a>
          <a href="/products/type/rose">Rose</a>
          <a href="/products/type/sparkling">Sparkling</a>
          <a href="/products/type/dessert">Dessert</a>
          <a href="#">ALL</a>
        </div>
        <h3>Score</h3>
        <div className="wine-types-submenu text-center mt-2 mb-2">
          <a href="#">10</a>
          <a href="#">09</a>
          <a href="#">08</a>
          <a href="#">07</a>
          <a href="#">06</a>
          <a href="#">ALL</a>
        </div>
          <b>«<a href="#">Show All</a>»</b>
      </div>
    </details>
  </a>
  <a href='#contact' className="menu w-24  h-6 inline-block text-center align-sub">
    Contact
  </a>
</nav>
</>
)
}; export default NavBar;

/*
import { useTheme } from "next-themes"
import { useEffect, useState } from "react";
import { useUser } from '@auth0/nextjs-auth0/client';
import axios from 'axios';
import { useRouter } from "next/router";
import { useAppDispatch } from "../../app/store"
import { filterByScore } from "../../features/products/productsSlice"
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
  const dispatch = useAppDispatch()
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
      pathname: `/products`,
      // pathname: `/products/filters/${name}`,
      query: { filter: name },
    });
  }
  function handleFilterByScore(e){
    dispatch(filterByScore(e.target.value))
  }
  // console.log(search)
  return (
    <>
      <Logo className="w-28 h-28 absolute left-1/2 -translate-x-1/2"></Logo>
      <nav className="nav bg-bg-body h-8 divide-x-2 divide-neutral-400 mt-10 mb-14">
        <Link href='/#passion-for-wine'>
          <a className="w-24  h-6 inline-block text-center align-sub">
            Home
          </a>
        </Link>
        <span>
          <a className="w-24 h-6 inline-block text-center align-sub">
            <p className={`${styles.menu} px-2`}>
              Winery
              <div className={`${styles.sub} bg-pagination-color p-6 w-max`}>
                <ul className="w-2/4 mx-8">
                  <label>COUNTRY</label>
                  <li><label>France</label><input type="checkbox" name="France" onChange={(e) => handleCategoryFilterClick(e)} /></li>
                  <li><label>Argentina</label><input type="checkbox" name="Argentina" onChange={(e) => handleCategoryFilterClick(e)} /></li>
                  <li><label>Spain</label><input type="checkbox" name="Spain" onChange={(e) => handleCategoryFilterClick(e)} /></li>
                  <li><label>United States</label><input type="checkbox" name="United States" onChange={(e) => handleCategoryFilterClick(e)} /></li>
                  <li><label>Italy</label><input type="checkbox" name="Italy" onChange={(e) => handleCategoryFilterClick(e)} /></li>
                  <li><label>Portugal</label><input type="checkbox" name="Portugal" onChange={(e) => handleCategoryFilterClick(e)} /></li>
                  <li><label>South Africa</label><input type="checkbox" name="South Africa" onChange={(e) => handleCategoryFilterClick(e)} /></li>
                  <li><label>Australia</label><input type="checkbox" name="Australia" onChange={(e) => handleCategoryFilterClick(e)} /></li>
                  <li><a href="/products">ALL</a></li>
                </ul>
                <ul className="w-1/3 mx-8">
                  <label>SCORE</label>
                  <li><button onClick={handleFilterByScore}>100</button></li>
                  <li><button onClick={handleFilterByScore}>99 - 97</button></li>
                  <li><button onClick={handleFilterByScore}>96 - 94</button></li>
                  <li><button onClick={handleFilterByScore}>93 - 91</button></li>
                  <li><button onClick={handleFilterByScore}>90 - Under</button></li>
                  <li><button onClick={handleFilterByScore}>New Wines</button></li>
                  <li><button onClick={handleFilterByScore}>ALL</button></li>
                </ul>
              </div>
            </p>
          </a>
        </span>
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
              <form className="gap-2 p-2">
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


//<Logo className="w-28 h-28 absolute left-1/2 -translate-x-1/2 top-4 z-50 drop-shadow-lg"></Logo>







    </>

  )
}

export default NavBar;


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

