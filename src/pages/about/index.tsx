import NavBar from '../../components/Navbar/NavBar'
import Footer from '../../components/Footer/Footer'
import Link from 'next/link'
 
const About = () => {
  return (
    <>
    <a id="top"></a>
    <div className="
      pt-12
      mb-12
      m-auto
      min-h-screen
      max-w-screen-xl
      bg-bg-body
      flex flex-col space-y-16  
      ">
      <NavBar></NavBar>
      <img src="assets/img.jpg"/>
      <div className="flex flex-col space-y-4 ...">
        <h1 className="px-20 h-1/2 flex flex-col justify font-montserrat text-gray-600 text-3xl" >ABOUT US</h1>
          <p className="px-20 h-1/2 flex flex-col justify text-justify font-montserrat text-gray-600 text-xl">
            What do we believe? The wine is for all. You don't have to be a connoisseur to be able to enjoy it. We want everyone to approach this great drink without fear, without prejudice.  
            There are no rules for enjoying wine. Everything changed. How to enjoy wine, too. Each bottle accompanies an experience, a unique pairing. Watching a movie in bed or hanging out on the terrace with friends. The possibilities are endless, it's just a matter of trying. There are no rules or formulas, just a desire to enjoy and share. We are, after all, accomplices of your moments lived.
          </p>
          <p className="px-20 h-1/2 flex flex-col justify text-justify font-montserrat text-gray-600 text-xl">
            Dionisia is a young company, with a different and innovative concept in the wine market. We are versatile independent professionals, lovers of wine and our own, who work to make the best of the products of our land known. Our company is from Argentina, it has a wide spectrum of associated wineries and of course its best wine production available to our customers.
            Our company's mission is to generate a commercialization that meets what our clients are looking for at this time in the field of wine and related products in Argentina. We are certain that our work team is highly trained, proactive, and capable of guiding our clients to meet our products. We aim to be the best option for the sale of wines and the like; demonstrate that our service is exceptional, personalized and of the highest level; stand out as a modern alternative that does not lose elegance or quality. We propose to innovate in the area that we appreciate so much; be versatile and adapt to the demands of our customers; as well as being dynamic and original when we present our products.
          </p>
          <h1 className="px-20 h-1/2 flex flex-col justify font-montserrat text-gray-600 text-3xl" >OUR TEAM</h1>
          <div className="w-full
          flex
          justify-around
          items-center
          mt-8">
          <p className="text-center font-montserrat text-gray-600">
            <img className="w-28 h-28 mb-2 rounded-full object-scale-down opacity-90" src="assets/luciano.jpeg"/>
            Luciano Pereira
          </p>
          <p className="text-center font-montserrat text-gray-600">
            <img className="w-28 h-28 mb-2 rounded-full object-scale-down opacity-90" src="assets/carmelo.jpeg"/>
            Carmelo Cabezon
          </p>
          <p className="text-center font-montserrat text-gray-600">
            <img className="w-28 h-28 mb-2 rounded-full object-scale-down opacity-90" src="assets/genesis.png"/>
            Genesis Ureta
          </p>
          <p className="text-center font-montserrat text-gray-600">
            <img className="w-28 h-28 mb-2 rounded-full object-scale-down opacity-90" src="assets/flor.jpeg"/>
            Florencia Pongetti
          </p>
          </div>
          <div className="w-full
          flex
          justify-around
          items-center
          mt-8">
          <p className="text-center font-montserrat text-gray-600">
            <img className="w-28 h-28 mb-2 rounded-full object-scale-down opacity-90" src="assets/junior.jpeg"/>
            Junior Huanca
          </p>
          <p className="text-center font-montserrat text-gray-600">
            <img className="w-28 h-28 mb-2 rounded-full object-scale-down opacity-90" src="assets/laura.jpeg"/>
            Laura Eliceiry
          </p>
          <p className="text-center font-montserrat text-gray-600">
            <img className="w-28 h-28 mb-2 rounded-full object-scale-down opacity-90" src="assets/sixto.jpeg"/>
            Sixto Mendoza
          </p>
          <p className="text-center font-montserrat text-gray-600">
            <img className="w-28 h-28 mb-2 rounded-full object-scale-down opacity-90" src="assets/guille.png"/>
            Guillermo Ojeda
          </p>
          </div>
        </div>
     </div>
    <Footer></Footer>
    </>
  )
}
 
 
export default About
 
 

