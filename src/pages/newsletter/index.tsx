import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import style  from "../../assets/style/newsletter.module.css";
import React, { useEffect } from 'react';

const Newsletter = () => {
  useEffect(() => {
    const emailfield = document.getElementById('emailfield')
          emailfield.focus()
  })
  return (
<>
<div className="
  main-about
  main-body  
  pt-12 
  m-auto
  min-h-screen
  max-w-screen-xl
  bg-bg-body 
  ">
  <NavBar></NavBar>
  <img className="object-cover h-96 w-full" src="assets/newsletter.jpg"/>
  <h2 className="font-montserrat text-gray-600 text-3xl mt-16" >JOIN OUR NEWSLETTER</h2>
  <p  className="font-montserrat text-gray-600 text-xl text-justify mt-6 mb-20">
  Every day we publish articles to pique your interest and awaken your thirst for wine knowledge. Too busy to visit? No problem – just sign up for our newsletter for weekly highlights from our articles, with links to the stories you may have missed.
  </p>
  <div id={style.newsletter}>
    <form id="newsletterform" action="/newsletter-received" method="post">
      <img className="mt-4" src="assets/stamp.png"/>
      <div className="title font-montserrat text-gray-600 text-xl pl-10 mt-4">
       Newsletter
      </div>
      <label htmlFor="email" className=" pl-10 font-montserrat text-gray-600 text-xl">
         Send us your email, we'll make sure you never miss a thing!
       </label>
       <input id="emailfield" className="font-montserrat text-xl" type="email" required placeholder="enter your email" />
       <input type="submit" value="subscribe now" />
    </form>
  </div>
  <Footer/>
</div>
</>
)}
export default Newsletter;

