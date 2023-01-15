import Image from 'next/image'
import Link   from "next/link";

import NavBar from "../Navbar/NavBar";
import Footer from "../Footer/Footer";
import Modal  from "../Modals/LegalAgeModal";

const Home = () => {
  return (
  <>
  <img src="assets/logo.svg" className="w-28 h-28 absolute left-1/2 -translate-x-1/2 top-4 z-50 drop-shadow-lg"/>
    <div className="
      relative 
      flex 
      items-center 
      justify-center 
      h-screen 
      mb-12 
      overflow-hidden">
      <video autoPlay loop muted className="
        absolute 
        z-10 
        w-auto 
        min-w-full 
        min-h-full 
        max-w-none">
          <source src="assets/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
       </video>
      <div className="
        smooth
        absolute
        text-white 
        left-1/2 
        -translate-x-1/2
        bottom-4
        opacity-50	
        z-10
        ">
        <a href="#passion-for-wine">
        <img width="75px" src="assets/scrolldown.gif"/>
        </a>
      </div>
    </div>
    <div className="
      pt-12 
      mb-12 
      m-auto
      min-h-screen
      max-w-screen-xl
      bg-bg-body 
      ">
      <a id="passion-for-wine"></a>
      <NavBar></NavBar>
      <a id="top"></a>
      <img src="assets/homeprov.png"/>
      <div className="
        w-full 
        flex 
        justify-around 
        items-center 
        mt-8">
        <Link href='/products/type/rose'>
          <a className="text-center font-montserrat text-gray-600">
          <div className='w-32 h-32 relative mb-2'>
            <Image src="/assets/rose.png" layout='fill'/>
          </div>
            Rose
          </a>
        </Link>
        <Link href='/products/type/whites'>
          <a className="text-center font-montserrat text-gray-600">
          <div className='w-32 h-32 relative mb-2'>
            <Image src="/assets/white.png" layout='fill'/>
          </div>
            White
          </a>
        </Link>
        <Link href='/products/type/reds'>
          <a className="text-center font-montserrat text-gray-600">
          <div className='w-32 h-32 relative mb-2'>
            <Image src="/assets/red.png" layout='fill'/>
          </div>
            Red
          </a>
        </Link>
        <Link href='/products/type/sparkling'>
          <a className="text-center font-montserrat text-gray-600">
          <div className='w-32 h-32 relative mb-2'>
            <Image src="/assets/sparkling.png" layout='fill'/>
          </div>
            Sparkling
          </a>
        </Link>
        <Link href='/products/type/dessert'>
          <a className="text-center font-montserrat text-gray-600">
            <div className='w-32 h-32 relative mb-2'>
              <Image src="/assets/dessert.png" layout='fill'/>
            </div>
            Dessert
          </a>
        </Link>
      </div>
      <img className="mt-12" src="assets/main.png"/>
      <img className="mt-4 pb-8" src="assets/main2.png"/>
    </div>
    <Footer></Footer>
</>
)}
export default Home;