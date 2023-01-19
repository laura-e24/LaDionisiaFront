import { useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/store";
import {
  selectCart,
  clearCart,
  selectDisplay,
  displayCart
} from "../../features/products/cartSlice";
import FAIcon from "../FAIcon";
import MiniCard from "../MiniCard/MiniCard";
import GenericModal from "../Modals/GenericModal";
import Router  from "next/router";

const Cart = ({ wines }) => {
  const dispatch = useAppDispatch();
  const display = useSelector(selectDisplay);
  const cart = useSelector(selectCart);
  const [modalConfirmClear, setModalConfirmClear] = useState(false);
  const clearAllCart = () => dispatch(clearCart())

  const totalPrice = cart.reduce((acc, curr) => acc + (curr.quantity * curr.product.price), 0)
  
  if (display)
    return (
      <>
        <div className="px-6 font-body fixed z-50 rounded-2xl shadow-md bg-initial bg-opacity-40 py-6 overflow-auto border border-black" style={{ minWidth: 300, maxWidth:'50%',top: 150, right: 200, zIndex: 999, maxHeight: 'calc(100vh - 200px)' }}>
          {!!wines.length ? (
            <>
              <div className="w-full">
                <span className="flex border-b border-tertiary pb-4 mb-4">
                  <button className="my-auto" onClick={() => dispatch(displayCart())}>
                    <FAIcon size="lg" type="solid" name="angle-left" />
                  </button>
                  <p className="font-bold text-2xl ml-2 text-black">Shopping cart</p>
                </span>
                <div className="space-y-8">
                  {wines.map((e, index) => <MiniCard key={index} wine={e} />)}
                </div>
              </div>
              <div className="w-full mt-6">
                {/* <button
                  className="text-xl font-bold bg-[#3D3A35] rounded-lg py-6 px-16"
                  onClick={() => setModalConfirmClear(true)}
                >
                  Clear cart
                </button> */}
                <button
                  className="text-xl py-6 px-4 bg-[#3D3A35] rounded-2xl w-full flex justify-between"
                  onClick={() => {
                    Router.push('/products/checkout')
                    dispatch(displayCart())
                  }}
                >
                  <p className="text-2xl font-medium  text-gray-400">${totalPrice}</p>
                  <span className="flex">
                    <p className="text-2xl font-regular mr-4 text-white">Checkout</p>
                    <FAIcon className="text-white" type="light" size="lg" name="arrow-right-long" />
                  </span>
                </button>
                
              </div>
            </>
          ) : <div className="text-center font-semibold">
            <p className="pt-2 pb-3 font-bold text-xl">Your cart is empty.</p>
            <p onClick={() => dispatch(displayCart())} className="hover:underline pt-2 border-t border-gray-300 mx-10 cursor-pointer">Close</p>
          </div>}
        </div>
        <GenericModal
          display={modalConfirmClear}
          setDisplay={setModalConfirmClear}
          title='Remove products'
          onClickAccept={() => clearAllCart()}
          acceptBtnLabel="Yes"
          message={`Are you sure you want to clear your cart? This will remove ALL productos from it.`}
        />
      </>
    );
};

export default Cart;
