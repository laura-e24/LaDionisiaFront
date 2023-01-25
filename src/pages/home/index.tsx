import Image from 'next/image'
import Link from 'next/link'
import NavBar from '../../components/Navbar/NavBar'
import Footer from '../../components/Footer/Footer'
import React, { useEffect } from 'react';
import Types from '../../components/Types/Types';

const HomePage = () => {
  const goAge = (e) => {
    e.preventDefault()
    let modalAge = document.getElementById('modal-age')
    modalAge.style.display = 'none'
    localStorage.setItem('age', '18+')
  }
  useEffect(() => {
    //  console.warn = () => {};
    const legalAge = localStorage.getItem('age')
    if (!legalAge) {
      let modalAge = document.getElementById('modal-age')
      modalAge.style.display = 'inline-block'
    } window.onresize = function () { location.reload() }
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        // document
        // .querySelector(hash)
        // .scrollIntoView({block: "start", behavior: "auto"})
        const
          element = document.getElementById(hash)
        let y = element.getBoundingClientRect().top + window.pageYOffset
        y += (window.innerWidth < 1200) ? 0 : -50
        window.scrollTo({ top: y, behavior: 'smooth' })
      }, 10)
    }
  })
  return (
    <>
      <div id="passion-for-wine" className="
  main-body
  pt-12 
  mb-8
  m-auto
  max-w-screen-xl
  bg-bg-body 
">
        <NavBar></NavBar>
        <img src="assets/homeprov.webp" />
        <Types/>
        <a id="home-main-1" href="/products/2889"></a>
        <a id="home-main-2" href="/newsletter"></a>
        <div id="modal-age">
          You must be of legal drinking age to access this Site. <button onClick={goAge}>Accept</button>
        </div>
        <Footer />
      </div>
    </>
  )
}
export default HomePage;

