import axios from "axios";
import { Formik, Form } from "formik";
import Router from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../app/store";
import CustomField from "../../../components/CustomField";
import FAIcon from "../../../components/FAIcon";
import MiniCard from "../../../components/MiniCard/MiniCard";
import GenericModal from "../../../components/Modals/GenericModal";
import NavBar from "../../../components/Navbar/NavBar"
import StripeComponent from "../../../components/stripe/StripeComponent";
import { clearCart, minusAllProducts, minusOneProduct, plusOneProduct, selectCart } from "../../../features/products/cartSlice";

const Checkout = () => {
  const cart = useSelector(selectCart);
  const dispatch = useAppDispatch();
  const [modalConfirmRemoveAll, setModalConfirmRemoveAll] = useState(false);
  const [modalConfirmClear, setModalConfirmClear] = useState(false);
  const [productToRemove, setProductToRemove] = useState({ id: null, wine: '', year: '' });


  
  const subtotalCalculation = (quantity, price) => quantity * price
  const totalPrice = cart.reduce((acc, curr) => acc + (curr.quantity * curr.product.price), 0)
  const counterPlus = (id) => dispatch(plusOneProduct(id))
  const counterLess = (id) => dispatch(minusOneProduct(id))
  const removeAllProducts = (id) => dispatch(minusAllProducts(id))
  const clearAllCart = () => dispatch(clearCart())

  useEffect(() => {
    if (!cart.length) Router.push('/')
  }, [cart.length])

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
        <div className="block w-2/3">
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
          <div className="text-sm w-full border-2 border-[#e5a91f] border-dotted bg-[#e5a91f] bg-opacity-25 rounded-3xl p-10 mt-6">
            <span className="flex">
              <FAIcon name="triangle-exclamation" className="text-yellow-600" size="lg" type="light" />
              <p className="font-medium ml-4 my-auto">
                No colocar datos de tarjeta auténticos, ya que esta plataforma de pago es sólo con fines de prueba.
                Para probar el funcionamiento de la misma utilizar las siguientes credenciales:
              </p>
            </span>
            <ul className="mt-4 space-y-2 font-medium">
              <li className="text-green-600">Pago exitoso: <span className="font-semibold">4242 4242 4242 4242</span></li>
              <li className="text-yellow-600">El pago requiere autenticación: <span className="font-semibold">4000 0025 0000 3155</span></li>
              <li className="text-red-600">Pago rechazado: <span className="font-semibold">4000 0000 0000 9995</span></li>
              <li>
                Para la fecha, utilizar cualquiera que sea válida (no expirada). CVC cualquier combinación de tres números.
              </li>
            </ul>
          </div>
        </div>
        <div className="w-2/5 bg-default border border-black rounded-3xl py-6 px-10">
          <h3 className="font-bold text-3xl w-full my-auto pb-4 border-b border-tertiary">Card details</h3>
          <StripeComponent totalPrice={totalPrice} />
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