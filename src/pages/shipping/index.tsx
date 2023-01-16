import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import Link   from 'next/link'

const Shipping = () => {
  return (
<>
<a id="passion-for-wine"></a>
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
  <img src="assets/copaa.jpg"/>

  <h1 className="font-montserrat text-gray-600 text-3xl mt-8" >SHIPPING & RETURNS</h1>
  <p  className="font-montserrat text-gray-600 text-xl text-justify mt-6">
  All purchases through our site or other transactions for the sale of goods, or services formed through the Website, by phone, or resulting from visits made by you, are governed by this Shipping & Returns section and our Terms and Conditions of Sale, which are hereby incorporated into these Terms of Use.
  Additional terms and conditions may also apply to specific portions, services, or features of the Website.          
  </p>
  <h1 className="font-montserrat text-gray-600 text-3xl mt-8" >
  RETURN POLICY
  </h1>
  <p className="font-montserrat text-gray-600 text-xl text-justify mt-6">
  La Dionisia fully guarantees any wine purchased directly from our winery or ladionisia.com. If you feel you have opened an unsatisfactory bottle, please save the contents, and contact us. We will be happy to replace or exchange it at no additional cost to you.
  Any orders that you wish to cancel must be canceled before the shipment leaves our facility.
  </p>
  <h1 className="font-montserrat text-gray-600 text-3xl mt-8" >
  CANCELLED ORDERS
  </h1>
  <p className="font-montserrat text-gray-600 text-xl text-justify mt-6">
  Any orders that you wish to cancel must be canceled before the shipment leaves our facility.
  Shipping and handling charges are non-refundable.
  For items such as event tickets where there are no shipments, please see our Event Ticket section below.
  By placing your order, you agree to the best of your knowledge that you are aware of the product and/or service you are purchasing, and that it is not being done in/with error, or without your consent.
  </p>
</div>
<Footer></Footer>
</>
)}
export default Shipping;

