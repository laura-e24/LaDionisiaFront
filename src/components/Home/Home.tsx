import Image                from 'next/image'
import Link                 from 'next/link'        
import NavBar               from '../Navbar/NavBar'
import Footer               from '../Footer/Footer'
import React, { useEffect } from 'react';



const Home = () => {
  const goHome = (e) => {
    e.preventDefault()
    const 
         id = 'passion-for-wine',
         element = document.getElementById(id)
    let  y = element.getBoundingClientRect().top + window.pageYOffset 
         y+= (window.innerWidth < 1200) ? 0 : -50 
         window.scrollTo({top: y, behavior: 'smooth'})
    //  document
    //  .querySelector('#passion-for-wine')
    //  .scrollIntoView({block: "start", behavior: "smooth"})
  }
  const goAge = (e) => {
    e.preventDefault()
    let modalAge = document.getElementById('modal-age')
        modalAge.style.display = 'none'
        localStorage.setItem('age', '18+')
  }
  useEffect(() => {
    const  legalAge = localStorage.getItem('age')
   if   ( !legalAge ) {
      let  modalAge = document.getElementById('modal-age')
           modalAge.style.display = 'inline-block'
   } window.onresize = function(){ location.reload() }
     const hash     = window.location.hash
     if  ( hash ) {
      setTimeout(()=> {
         // document
         // .querySelector(hash)
         // .scrollIntoView({block: "start", behavior: "auto"})
         const 
         element = document.getElementById(hash)
         let y = element.getBoundingClientRect().top + window.pageYOffset 
             y+= (window.innerWidth < 1200) ? 0 : -50 
         window.scrollTo({top: y, behavior: 'smooth'})
      }, 10)
    }
  })
  return (
<>
<a onClick={goHome} href='#passion-for-wine' className="videologo top-4 w-28 h-28 absolute left-1/2 -translate-x-1/2 z-50">
  <img src="assets/logo.svg"/>
</a>
<div className="video">
<video autoPlay loop muted><source src="assets/video.mp4" type="video/mp4" /></video>
</div>
<a  href="#passion-for-wine" className="bottom-4 w-20 h-20 absolute left-1/2 -translate-x-1/2 opacity-50 z-50">
  <img onClick={goHome} src="assets/scrolldown.gif"/>
</a>  
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
  <div className="
    w-full 
    flex 
    justify-around 
    items-center 
    mt-8
    wine-types
  ">
    <a href='/products/type/rose'>
    <div  className="rose text-center font-montserrat text-gray-600">
      <div className='w-32 h-32 relative mb-2'>
        <Image src="/assets/rose.png" layout='fill' />
      </div>
      Rose
    </div>
    </a>
    <a href='/products/type/whites'>
      <div className="white text-center font-montserrat text-gray-600">
        <div className='w-32 h-32 relative mb-2'>
          <Image src="/assets/white.png" layout='fill' />
        </div>
        White
      </div>
    </a>
    <a href='/products/type/reds'>
      <div className="red text-center font-montserrat text-gray-600">
        <div className='w-32 h-32 relative mb-2'>
          <Image src="/assets/red.png" layout='fill' />
        </div>
        Red
      </div>
    </a>
    <a href='/products/type/sparkling'>
      <div className="sparkling text-center font-montserrat text-gray-600">
        <div className='w-32 h-32 relative mb-2'>
          <Image src="/assets/sparkling.png" layout='fill' />
        </div>
        Sparkling
      </div>
    </a>
    <a href='/products/type/dessert'>
      <div className="dessert text-center font-montserrat text-gray-600">
        <div className='w-32 h-32 relative mb-2'>
          <Image src="/assets/dessert.png" layout='fill' />
        </div>
        Dessert
      </div>
    </a>
  </div>
  <a id="home-main-1" href="/products/2889"></a>
  <a id="home-main-2" href="/newsletter"></a>
  <Footer/>
</div>
</>)};export default Home;