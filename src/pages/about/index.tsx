import members from '../../components/componentsAbout/membersInfo'
import MembersCard from '../../components/componentsAbout/membersCards'
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";

const About = () => {
  return (
<>
<title>La Dionisia - About</title>
<div className="
  main-about
  main-body  
  pt-12 
  mb-8 
  m-auto
  max-w-screen-xl
  bg-bg-body 
  ">
  <NavBar></NavBar>
  <img src="assets/about.jpg"/>

  <h2 className="font-playfair text-gray-600 text-4xl mt-12" >ABOUT US</h2>
  <p  className="font-bodony text-gray-600 text-xl text-justify mt-6">
     What do we believe? The wine is for all. You don't have to be a connoisseur to be able to enjoy it. We want everyone to approach this great drink without fear, without prejudice.  
     There are no rules for enjoying wine. Everything changed. How to enjoy wine, too. Each bottle accompanies an experience, a unique pairing. Watching a movie in bed or hanging out on the terrace with friends. The possibilities are endless, it's just a matter of trying. There are no rules or formulas, just a desire to enjoy and share. We are, after all, accomplices of your moments lived.
  </p>
  <p className="font-bodony text-gray-600 text-xl text-justify mt-6">
     Dionisia is a young company, with a different and innovative concept in the wine market. We are versatile independent professionals, lovers of wine and our own, who work to make the best of the products of our land known. Our company is from Argentina, it has a wide spectrum of associated wineries and of course its best wine production available to our customers.
     Our company's mission is to generate a commercialization that meets what our clients are looking for at this time in the field of wine and related products in Argentina. We are certain that our work team is highly trained, proactive, and capable of guiding our clients to meet our products. We aim to be the best option for the sale of wines and the like; demonstrate that our service is exceptional, personalized and of the highest level; stand out as a modern alternative that does not lose elegance or quality. We propose to innovate in the area that we appreciate so much; be versatile and adapt to the demands of our customers; as well as being dynamic and original when we present our products.
  </p>
  <h2 className="font-playfair text-gray-600 text-4xl mt-8" >OUR TEAM</h2>

  <div className=" 
    div-members
    mt-8
    pb-16
    grid 
  ">
   {members?.map((e,index)=>{
     return(
      <MembersCard key={index}
        name={e.name}
        image={e.image}
        github={e.github}
        linkedin={e.linkedin}
      />
     )
    })}
  </div>
  <Footer/>
</div>
</>
)}
export default About;

