import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import Link   from 'next/link'

const Newsletter = () => {

  return (
<>
<div className="
  main-body  
  pt-12 
  mb-12 
  m-auto
  min-h-screen
  max-w-screen-xl
  bg-bg-body 
  ">
  <NavBar></NavBar>
  <img className="object-cover h-96 w-full" src="assets/newsletter.jpg"/>
  <h1 className="font-montserrat text-gray-600 text-3xl mt-8" >JOIN OUR NEWSLETTER</h1>
  <p  className="font-montserrat text-gray-600 text-xl text-justify mt-6 mb-7">
  Every day we publish articles to pique your interest and awaken your thirst for wine knowledge. Too busy to visit? No problem – just sign up for our newsletter for weekly highlights from our articles, with links to the stories you may have missed.
  </p>

  <div id="newsletter">
    <form id="newsletterform" action="/newsletter-received" method="post">
      <img className="mt-4" src="assets/stamp.png"/>
      <div className="title">
       Newsletter
      </div>
      <label htmlFor="email">
         Send us your email, we'll make sure you never miss a thing!
       </label>
       <input type="email" required placeholder="enter your email here" />
       <input type="submit" value="subscribe now" />
    </form>

  </div>
  <div className="newslettershadow"></div>







</div>
<Footer></Footer>
</>
)}
export default Newsletter;

