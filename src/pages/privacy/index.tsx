import NavBar from '../../components/Navbar/NavBar'
import Footer from '../../components/Footer/Footer'
import Link from 'next/link'
 
const Privacy = () => {
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
      flex 
      flex-col 
      space-y-16  
      ">
      <NavBar></NavBar>
      <img src="assets/copas.jpg"/>
      <div className="
      flex 
      flex-col 
      space-y-16 
      mb-18...">
        <div className="
        flex 
        flex-col 
        space-y-4 
        mb-18...">
          <h1 className="
          px-20 h-1/2 
          flex flex-col 
          justify 
          font-montserrat 
          text-gray-600 
          text-3xl" >PRIVACY STATEMENT</h1>
          <p className="
          px-20 
          h-1/2 
          flex 
          flex-col 
          justify 
          text-justify 
          font-montserrat 
          text-gray-600 
          text-xl 
          mb-18...">
          Protecting your privacy is fundamental to the way La Dionisia and its partners and subsidiaries (collectively, “Company,” “we,” “us,” or “our”) conduct business. Although privacy regulations require companies to inform you of their practices regarding the collection and use of your personal information, keeping client information confidential has always been our policy. We have always known that privacy is important to you, and we are committed to safeguarding your personal information. This Privacy Statement explains how we may collect, use and disclose your personal information.    
          </p>
        </div>
        <div className="
        flex 
        flex-col 
        space-y-4 
        mb-18...">
          <h1 className="
          px-20 
          h-1/2 
          flex 
          flex-col 
          justify 
          font-montserrat 
          text-gray-600 
          text-3xl" >PERSONAL INFORMATION</h1>
          <p className="
          px-20 
          h-1/2 
          flex 
          flex-col 
          justify 
          text-justify 
          font-montserrat 
          text-gray-600 
          text-xl 
          mb-28...">
          In the course of offering and providing our products and services, it is common for us to receive sensitive information from and about our clients, including financial and business information, some of which constitutes personal information. Generally speaking, personal information is any information that can be used, directly or indirectly, to identify, locate or contact someone. Types of personal information include names, physical addresses, mailing addresses, social security numbers, email addresses, phone numbers, bank account numbers and driver’s license numbers. Under certain circumstances, personal information may also include other information that can reasonably link to a particular person, such as internet protocol (IP) addresses, unique device identification numbers, employment information, medical information and internet activity.   
          </p>
        </div>
      </div>
     </div>
     <div>.</div>
     <div>.</div>
    <Footer></Footer>
    </>
  )
}
 
 
export default Privacy
 

