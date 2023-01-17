import { useTheme } from "next-themes"
import Link from "next/link";
import { useEffect, useState } from "react";
import { useUser } from '@auth0/nextjs-auth0/client';
import axios from 'axios';
import { useRouter } from "next/router";
import { useAppDispatch } from "../../app/store"
import { setFilters, selectAllRegions, getAllWinesByName, orderByName } from "../../features/products/productsSlice"
import { useSelector } from "react-redux";
import Image from "next/image";
import Header from "../shopCartComponents/Header";
import { selectCart } from "../../features/products/cartSlice";


const NavBar = () => {
  const [mounted, setMounted] = useState(false);
  const [search, setSearch] = useState('')
  const router = useRouter();
  const cart = useSelector(selectCart)
  const { user } = useUser()
  const dispatch = useAppDispatch()
  useEffect(() => {
    setMounted(true)
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
  function getWinesByName(e) {
    e.preventDefault(e)
    dispatch(getAllWinesByName(search))
    router.push({
      pathname: `/products`
    },
      undefined,
      { shallow: true }
    );
    setSearch('')
  }
  function handleInputName(e) {
    setSearch(e.target.value)
  }
  function handleSort(e) {
    dispatch(orderByName(e.target.value))
    // <button value="atoz" onClick={e => handleSort(e)}>A - Z </button>
    // <button value="ztoa" onClick={e => handleSort(e)}>Z - A</button>
  }
  if (!mounted) return null
  function handleFilters(e) {
    const { value, name } = e.target;
    dispatch(setFilters({ [name]: value }));
  }

  const scores = [
    "100",
    "99-97",
    "96-94",
    "93-91",
    "90-under"
  ]

  const vintage = [
    "2010-Present",
    "2000-2009",
    "1980-1989",
    "1970-1979",
    "1960-1969",
    "1959-older",
  ]

  const countries = [
    'France',
    'Argentina',
    'Portugal',
    'South Africa',
    'Spain',
    'Italy',
    'Australia',
    'United States',
  ]
  // console.log(filters)
  return (
    <>

      <div className="w-28 h-28 absolute left-1/2 -translate-x-1/2">
        <Image layout="fill" src="/assets/logonav.svg" />
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
              <Image layout="fill" src="/assets/search.svg" />
            </div>
          </summary>
          <form className="wine-search  float-right -mt-7 pl-8" onSubmit={(e) => { getWinesByName(e) }}>
            <input type="search" onChange={(e) => { handleInputName(e) }} value={search} placeholder="Search Wines" />
            <button>GO</button>
          </form>
        </details>
        <div className="w-7 h-7 mt-1 ml-2 relative float-right">
          <details>
            <summary>
              <Image layout="fill" src="/assets/cart.svg" />
            </summary>
            <div className="">
              {<Header wines={cart} />}
            </div>
          </details>
        </div>
        <details className="ml-2 float-right">
          <summary>
            <div className="w-7 h-7 mt-1 relative">
              <Image layout="fill" src="/assets/person.svg" />
            </div>
          </summary>
          <div className="usermenu">
            <a href="#">Settings</a><br />
            <a href="#">Support</a><br />
            <a href="#">License</a><br />
            {user && <a href="/api/auth/logout">Logout</a>}
            {!user && <a href="/api/auth/login">Login</a>}
          </div>
        </details>
        {/* 
        <div className="w-7 h-7 mt-1 relative float-right">
          <Image layout="fill" src="/assets/heart.svg" />
        </div>
*/}
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
            <div className="submenu z-50">
              <h3>Country</h3>
              <div className="columns-3 text-left mt-2 mb-4 pl-3">
                <a href="/products/filters/Argentina">Argentina</a>
                <br /><a href="/products/filters/Australia">Australia</a>
                <br /><a href="/products/filters/Austria">Austria</a>
                <br /><a href="/products/filters/Brazil">Brazil</a>
                <br /><a href="/products/filters/Canada">Canada</a>
                <br /><a href="/products/filters/Chile">Chile</a>
                <br /><a href="/products/filters/France">France</a>
                <br /><a href="/products/filters/Georgia">Georgia</a>
                <br /><a href="/products/filters/Germany">Germany</a>
                <br /><a href="/products/filters/Greece">Greece</a>
                <br /><a href="/products/filters/Hungary">Hungary</a>
                <br /><a href="/products/filters/Israel">Israel</a>
                <br /><a href="/products/filters/Italy">Italy</a>
                <br /><a href="/products/filters/Moldova">Moldova</a>
                <br /><a href="/products/filters/New Zealand">New Zealand</a>
                <br /><a href="/products/filters/Portugal">Portugal</a>
                <br /><a href="/products/filters/Romania">Romania</a>
                <br /><a href="/products/filters/Slovenia">Slovenia</a>
                <br /><a href="/products/filters/South Africa">South Africa</a>
                <br /><a href="/products/filters/Spain">Spain</a>
                <br /><a href="/products/filters/Switzerland">Switzerland</a>
                <br /><a href="/products/filters/Turkey">Turkey</a>
                <br /><a href="/products/filters/United States">United States</a>
                <br /><a href="/products/filters/Uruguay">Uruguay</a>
                {/* En un futuro se usara */}
                {/* {regions.map((region, index) => (
                    <li key={index}>
                      <input type="radio" name="region" value={region} onChange={handleFilters} />
                      {region}
                    </li>
                  ))} */}
              </div>
              <b>«<a href="/products">Show All</a>»</b>
              {/* <h3>Vintage</h3>
              <div className="columns-3 text-left mt-2 mb-2">
                <input type="radio" name="score" value="all-score" onChange={handleFilters} />ALL
                {vintage.map((v, index) => (
                  <>
                    <input type="radio" name="vintage" value={v} onChange={handleFilters} key={index} />
                    {v}
                  </>
                ))}
                 <a href="#">2020-2023</a>
                  <br /><a href="#">2010-2019</a>
                  <br /><a href="#">2000-2009</a>
                  <br /><a href="#">1990-1999</a>
                  <br /><a href="#">1980-1989</a>
                  <br /><a href="#">1970-1979</a>
                  <br /><a href="#">1960-1969</a>
                  <br /><a href="#">1950-1959</a>
                  <br /><a href="#">1940-older</a> 
              </div>
              <h3>Price</h3>
              <div className="columns-4 text-left mt-2 mb-2">
                <a href="#">$101-$200</a><br />
                <a href="#">$50 - $100</a><br />
                <a href="#">$30-49</a><br />
                <a href="#">$20-29</a><br />
                <a href="#">$16-19</a><br />
                <a href="#">$10-15</a><br />
                <a href="#">$6 - $9</a><br />
                <a href="#">ALL</a><br />
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
                <input type="radio" name="score" value="all-score" onChange={handleFilters} />ALL
                {scores.map((s, index) => (
                  <>
                    <input type="radio" name="score" value={s} onChange={handleFilters} key={index} />
                    {s}
                  </>
                ))}
                <a href="#">10</a>
                  <a href="#">09</a>
                  <a href="#">08</a>
                  <a href="#">07</a>
                  <a href="#">06</a>
                  <a href="#">ALL</a>
                <b>«<a href="#">Show All</a>»</b>
              </div> */}
            </div>
          </details>
        </a>
        <a href='#contact' className="menu w-24  h-6 inline-block text-center align-sub">
          Contact
        </a>
      </nav>


    </>

  )
}

export default NavBar;
