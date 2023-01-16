import NavBar from '../../components/Navbar/NavBar'
import Footer from '../../components/Footer/Footer'
import Link from 'next/link'
 
const Shipping = () => {
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
      <img src="assets/copaa.jpg"/>
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
          text-3xl" >SHIPPING & RETURNS</h1>
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
            All purchases through our site or other transactions for the sale of goods, or services formed through the Website, by phone, or resulting from visits made by you, are governed by this Shipping & Returns section and our Terms and Conditions of Sale, which are hereby incorporated into these Terms of Use.
            Additional terms and conditions may also apply to specific portions, services, or features of the Website.          
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
          text-3xl" >RETURN POLICY</h1>
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
            La Dionisia fully guarantees any wine purchased directly from our winery or ladionisia.com. If you feel you have opened an unsatisfactory bottle, please save the contents, and contact us. We will be happy to replace or exchange it at no additional cost to you.
            Any orders that you wish to cancel must be canceled before the shipment leaves our facility.
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
          text-3xl" >CANCELLED ORDERS</h1>
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
            Any orders that you wish to cancel must be canceled before the shipment leaves our facility.
            Shipping and handling charges are non-refundable.
            For items such as event tickets where there are no shipments, please see our Event Ticket section below.
            By placing your order, you agree to the best of your knowledge that you are aware of the product and/or service you are purchasing, and that it is not being done in/with error, or without your consent.
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
 
 
export default Shipping
 
 

