import Link from "next/link";
import { useEffect, useState } from "react";
import { useUser } from '@auth0/nextjs-auth0/client';
import axios from 'axios';
import { useRouter } from "next/router";
import { useAppDispatch } from "../../app/store"
import { getAllWinesByName } from "../../features/products/productsSlice"
import { useSelector } from "react-redux";
import Image from "next/image";
import { persistor } from '../../app/store';
import Cart from "../Cart/Cart";
import { selectCart, selectDisplay, displayCart } from "../../features/products/cartSlice";
import { setMaxPageNumLim, setMinPageNumLim } from "../../features/generalSlice";
function isUser(obj: any): obj is { '/roles': string[] } {
  return '/roles' in obj;
}
const Btn = () => {
  const { user } = useUser()
  if (user) {
    const usuario = isUser(user) ? user[`/roles`] : [];
    if (usuario.includes('administrador')) {
      return (
        <a href="/dashboard">Dashboard</a>
      )
    }
  }
}

const NavBar = ({ setCurrentPage }: any) => {
  const [mounted, setMounted] = useState(false);
  const [search, setSearch] = useState('')
  const router = useRouter();
  const display = useSelector(selectDisplay)
  const cart = useSelector(selectCart)
  const { user } = useUser()
  const dispatch = useAppDispatch()
  useEffect(() => {
    setMounted(true)
    const unsubscribe = persistor.subscribe(() => {
      console.log('Local storage updated with latest state: ', cart);
    });

    return () => {
      unsubscribe();
    }
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
    setCurrentPage(1)
    dispatch(setMaxPageNumLim(10))
    dispatch(setMinPageNumLim(0));
    setSearch('')
  }
  function handleInputName(e) {
    setSearch(e.target.value)
  }

  if (!mounted) return null

  const goContact = (e) => {
    e.preventDefault()
    let menu = document.getElementById('portableMenu')
    menu.style.display = 'none'
    document
      .querySelector('#contact')
      .scrollIntoView({ block: "start", behavior: "smooth" })
  }

  const goHome = (e) => {
    if (e.target.href == window.location || e.target.href === window.location + 'home') {
      e.preventDefault()
      let menu = document.getElementById('portableMenu')
      menu.style.display = 'none'
    }
  }

  const goMobile = (e) => {
    e.preventDefault()
    let menu = document.getElementById('portableMenu')
    document
      .querySelector('#portableMenu')
      .scrollIntoView({ block: "start", behavior: "smooth" })
    menu.style.display = 'block'
  }

  const closeMobile = (e) => {
    e.preventDefault()
    let menu = document.getElementById('portableMenu')
    menu.style.display = 'none'
  }

  const goProducts = (e) => {
    let menu = document.getElementById('portableMenu')
    menu.style.display = 'none'
    if (e.target.href == window.location) {
      e.preventDefault()
    }
  }

  return (
    <>
      <div id="navbar" className="w-28 h-28 absolute left-1/2 -translate-x-1/2">
        <Image layout="fill" src="/assets/logonav.svg" alt="La Dionisia Logo" />
      </div>
      <nav className="
      float-right   
      mt-10 
      bg-bg-body 
      h-8 
      w-2/5
      nav-icons
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
          <Image onClick={() => dispatch(displayCart())} layout="fill" src="/assets/cart.svg" />
          <Cart wines={cart} />
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
            {user && <a href="/api/auth/logout" onClick={handleCookieLogout}>Logout</a>}
            <Btn/>
            {!user && <a href="/api/auth/login">Login</a>}
          </div>
        </details>
        <a href='/favorite'>
          <div className="w-7 h-7 mt-1 relative float-right">
            <Image layout="fill" src="/assets/heart.svg" />
          </div>
        </a>
      </nav>

      <a id="goMobile" onClick={goMobile} href='/home' className="menu w-24  h-6 inline-block text-center align-sub">
        MENU
      </a>
      <div id="portableMenu">
        <a id="gohome2" onClick={goHome} href='/home'>Home</a>
        <a id="goproducts" onClick={goProducts} href='/products'>Products</a>
        <a id="gocontacts" onClick={goContact} href='#contact'>Contact</a>
        <a id="closecell" onClick={closeMobile} href="#">Return</a>
      </div>
      <nav className="
  nav 
  bg-bg-body 
  h-8 
  w-2/5
  divide-x-2 
  divide-neutral-400 
  mt-10 
  mb-14">
        <a id="gohome" onClick={goHome} href='/home' className="menu w-24  h-6 inline-block text-center align-sub">
          Home
        </a>
        <div className="menu w-24  h-6 inline-block text-center align-sub">
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
              </div>
              <b>«<a href="/products">Show All</a>»</b>
            </div>
          </details>
        </div>
        <a onClick={goContact} href='#contact' className="menu w-24  h-6 inline-block text-center align-sub">
          Contact
        </a>
      </nav>
    </>
  )
}

export default NavBar;
