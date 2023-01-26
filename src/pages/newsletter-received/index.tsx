import Image from 'next/image'
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import React from 'react';

const NewsletterReceived = () => {

  return (
<>
<NavBar></NavBar>
<div id="passion-for-wine" className="
  main-body
  home
  mb-8
  m-auto
  max-w-screen-xl
  pb-24
  sm:rounded-2xl	
  mt-42
">
<div className="h-100">
    <div className="relative max-w-screen-xl h-full opacity-90">
      <Image className="object-cover mainimage sm:rounded-t-2xl" layout="fill" loading="lazy" src="/assets/newsletter.jpg"/>
    </div>
  </div>

<h1>Suscription<span className="divider"></span></h1>
  <p className="mt-0 font-bodony text-gray-600 text-lg sm:text-xl text-justify m-auto max-w-prose hyphens
     pl-4 pr-4 
  sm:pl-8 sm:pr-8 
  md:pl-8 md:pr-8 
  lg:pl-1 lg:pr-1 
  xl:pl-0 xl:pr-0
  -mt-24
  mb-16
  ">
  Hey there<br/><br/>
  First off, I’d like to extend a warm welcome and ‘thank you’ for subscribing to the Dionisia blog newsletter. I recognize that your time is valuable and I’m seriously flattered that you chose to join us.
  <br/><br/>  The Dionisia blog endeavors to send you only the best content, with actionable steps you can take to grow your business online and off. If we ever stray from that, just send me an email and I’ll do my damndest to get it straightened out.
  <br/><br/>  In the meantime, I’d love to hear from you about why you’ve subscribed to our list, and what you’re interested in learning about. So long as you reply to this email, I promise I will too.
</p>
</div>
<Footer/>
</>
  )
}
export default NewsletterReceived;

