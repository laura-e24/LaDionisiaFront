import Link   from 'next/link'
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/Navbar/NavBar';

const NewsletterReceived = () => {

  return (
<>
<div className="
  main-body  
  pt-12 
  mb-8
  m-auto
  min-h-screen
  max-w-screen-xl
  bg-bg-body 
  ">
  <NavBar/>
  <img className="object-cover h-96 w-full" src="assets/newsletter.jpg"/>
  <h1 className="font-montserrat text-gray-600 text-3xl mt-8" >THANK YOU!</h1>
  <p  className="font-montserrat text-gray-600 text-xl text-justify mt-6 mb-7">
  Hey there,
  </p>
  <p  className="font-montserrat text-gray-600 text-xl text-justify mt-6 mb-7">
   First off, I’d like to extend a warm welcome and ‘thank you’ for subscribing to the Dionisia blog newsletter. I recognize that your time is valuable and I’m seriously flattered that you chose to join us.
   </p>
   <p  className="font-montserrat text-gray-600 text-xl text-justify mt-6 mb-7">
   The Dionisia blog endeavors to send you only the best content, with actionable steps you can take to grow your business online and off. If we ever stray from that, just send me an email and I’ll do my damndest to get it straightened out.
   </p>
   <p  className="font-montserrat text-gray-600 text-xl text-justify mt-6 mb-7">
   In the meantime, I’d love to hear from you about why you’ve subscribed to our list, and what you’re interested in learning about. So long as you reply to this email, I promise I will too.
   </p>
   <Footer/>
</div>
</>
)}
export default NewsletterReceived;

