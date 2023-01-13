import Link   from "next/link";
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer/Footer";
import Modal  from "../Modal";

const Home = () => {
  return (
    <>
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
        absolute
        text-white 
        left-1/2 
        -translate-x-1/2
        bottom-4
        opacity-50	
        z-10
        ">
        <a href="#top">
        <img width="75px" src="assets/scrolldown.gif"/>
        </a>
      </div>
    </div>
    <a name="top"></a>
    <div className="
      pt-12 
      mb-12 
      m-auto
      min-h-screen
      max-w-screen-xl
      bg-bg-body 
      ">
      <NavBar></NavBar>
      <img src="assets/homeprov.png"/>
      <div className="
        w-full 
        flex 
        justify-around 
        items-center 
        mt-8">
        <Link href='/products/rose'>
          <a className="text-center font-montserrat text-gray-600">
            <img className="w-32 h-32 mb-2" src="assets/rose.png"/>
            Rose
          </a>
        </Link>
        <Link href='/products/white'>
          <a className="text-center font-montserrat text-gray-600">
            <img className="w-32 h-32 mb-2" src="assets/white.png"/>
            White
          </a>
        </Link>
        <Link href='/products/red'>
          <a className="text-center font-montserrat text-gray-600">
            <img className="w-32 h-32 mb-2" src="assets/red.png"/>
            Red
          </a>
        </Link>
        <Link href='/products/sparkling'>
          <a className="text-center font-montserrat text-gray-600">
            <img className="w-32 h-32 mb-2" src="assets/sparkling.png"/>
            Sparkling
          </a>
        </Link>
        <Link href='/products/dessert'>
          <a className="text-center font-montserrat text-gray-600">
            <img className="w-32 h-32 mb-2" src="assets/dessert.png"/>
             Dessert
          </a>
        </Link>
      </div>
      <img className="mt-12" src="assets/main.png"/>
    </div>
    <Footer></Footer>
</>
)}
export default Home;