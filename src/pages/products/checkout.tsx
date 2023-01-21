import { Formik, Form } from "formik";
import Router from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/store";
import CustomField from "../../components/CustomField";
import FAIcon from "../../components/FAIcon";
import MiniCard from "../../components/MiniCard/MiniCard";
import GenericModal from "../../components/Modals/GenericModal";
import NavBar from "../../components/Navbar/NavBar"
import { clearCart, minusAllProducts, minusOneProduct, plusOneProduct, selectCart } from "../../features/products/cartSlice";

const Checkout = () => {
  const cart = useSelector(selectCart);
  const dispatch = useAppDispatch();
  const [modalConfirmRemoveAll, setModalConfirmRemoveAll] = useState(false);
  const [modalConfirmClear, setModalConfirmClear] = useState(false);
  const [productToRemove, setProductToRemove] = useState({ id: null, wine: '', year: '' });

  // const send = async () => {
  //   const response = await axios.post(`http://localhost:3001/sendEmail`,
  //     //aca debe ir el email de usuario loggeado
  //     {
  //       userEmail: 'grosservonsirius@gmail.com',
  //       products: wines
  //     })
  //     .then(() => console.log(wines))
  // }
  
  const subtotalCalculation = (quantity, price) => quantity * price
  const totalPrice = cart.reduce((acc, curr) => acc + (curr.quantity * curr.product.price), 0)
  const counterPlus = (id) => dispatch(plusOneProduct(id))
  const counterLess = (id) => dispatch(minusOneProduct(id))
  const removeAllProducts = (id) => dispatch(minusAllProducts(id))
  const clearAllCart = () => dispatch(clearCart())

  return (
    <>
    <div className="main-body pt-12 mb-12 m-auto min-h-screen max-w-screen-xl bg-bg-body">
     <NavBar />
     <div className="w-full">
      <div className="w-full flex justify-between pb-4 border-b border-tertiary">
        <span className="flex">
          <button
            type="button"
            onClick={() => Router.back()}
          >
            <FAIcon type="solid" name="angle-left" size="xl" />
          </button>
          <h3 className="font-bold text-3xl my-auto">Checkout</h3>
        </span>
        <button 
          type="button"
          onClick={() => setModalConfirmClear(true)}
          className="font-semibold text-xl text-gray-500 hover:underline"
        >
          Clear cart
        </button>
      </div>
      <div className="w-full flex justify-between space-x-6 pt-8">
        <div className="space-y-6">
          {cart.map((c, i) => (
            <div key={i} className="flex bg-default border border-black rounded-3xl py-6 px-10">
              <div className="flex justify-between w-1/2">
                <img src={c.product.image} alt={c.product.wine} height={25} width={35} />
                <span className="block my-auto">
                  <p className="my-auto text-2xl font-semibold px-6 font-body text-black">
                    {c.product.wine}
                  </p>
                  <p className="my-auto text-xl font-medium px-6 font-body mt-2 text-gray-700 ">
                    {c.product.winery} - {c.product.year}
                  </p>
                </span>
              </div>
              <div className="flex justify-between w-1/2">
                <p className="my-auto text-3xl font-bold text-black">{c.quantity}</p> 
                <span className="block my-auto">
                  <button className="w-full" onClick={() => counterPlus(c.id)}>
                    <FAIcon className="text-black active:text-gray-400" type="solid" size="md" name="caret-up" />
                  </button>
                  <button className="w-full" onClick={() => c.quantity > 1  ?  counterLess(c.id) :  setModalConfirmRemoveAll(true)}>
                    <FAIcon className="text-black active:text-gray-400" type="solid" size="md" name="caret-down" />
                  </button>
                </span>
              <p className="my-auto text-2xl font-semibold px-4 text-black">${subtotalCalculation(c.quantity, c.product.price)}</p>
              <button 
                onClick={() => {
                  setProductToRemove({ id: c.id, wine: c.product.wine, year: c.product.year })
                  setModalConfirmRemoveAll(true)
                }}
               >
                  <FAIcon className="text-black" type="light" size="lg" name="trash-can" />
               </button>
             </div>
          </div>
          ))}
        </div>
        <div className="  bg-default border border-black rounded-3xl py-6 px-10">
          <h3 className="font-bold text-3xl w-full my-auto pb-4 border-b border-tertiary">Card details</h3>
          <h3 className="font-semibold text-xl mt-4">Card type</h3>
          <div className="flex w-full justify-around py-4">
            <img width={150} src='/assets/visa.svg' />
            <img width={100} src='/assets/mastercard.svg' />
          </div>
          <Formik initialValues={{}} onSubmit={() => {}}>
            {() => (
              <Form className="grid grid-flow-row gap-6 w-full">
                <CustomField label="Name on card" name="name" />
                <CustomField label="Card number" name="card" />
                <div className="grid grid-cols-2 gap-6 border-b border-black pb-10">
                  <CustomField label="Expiration date" name="expDate" />
                  <CustomField label="CVV" name="cvv" />
                </div>
                <span className="flex font-semibold text-2xl justify-between">
                  <p>Subtotal</p>
                  <p className="text-gray-700">$200</p>
                </span>
                <span className="flex font-semibold text-2xl justify-between">
                  <p>Shipping</p>
                  <p className="text-gray-700">$4</p>
                </span>
                <span className="flex font-semibold text-2xl justify-between">
                  <p>Total</p>
                  <p className="text-gray-700">${totalPrice}</p>
                </span>
                <button
                  className="py-6 px-4 bg-[#3D3A35] rounded-2xl w-full"
                  onClick={() => {}}
                  type="button"
                >
                  <p className="text-2xl text-center text-white">Pay</p>
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
     </div>
  </div>
  <GenericModal
    display={modalConfirmRemoveAll}
    setDisplay={setModalConfirmRemoveAll}
    title='Remove products'
    onClickAccept={() => removeAllProducts(productToRemove.id)}
    acceptBtnLabel="Yes"
    message={`Are you sure you want to remove all "${productToRemove.wine + `(${productToRemove.year})`}" from your cart?`}
  />
  <GenericModal
    display={modalConfirmClear}
    setDisplay={setModalConfirmClear}
    title='Clear cart'
    onClickAccept={() => clearAllCart()}
    acceptBtnLabel="Yes"
    message={`Are you sure you want to clear your cart? This will remove ALL productos from it.`}
  />
  </>
  )
}

export default Checkout