import { useEffect, useState } from "react";
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

const Cart = ({ wines }) => {
  const dispatch = useAppDispatch();
  const display = useSelector(selectDisplay);
  const cart = useSelector(selectCart);
  const [modalConfirmClear, setModalConfirmClear] = useState(false);
  const clearAllCart = () => dispatch(clearCart())

  const totalPrice = cart.reduce((acc, curr) => acc + (curr.quantity * 100), 0)
  if (display)
  return (
    <>
    <div className="fixed z-50 rounded-2xl shadow-md bg-gray-100 py-4" style={{minWidth: 500, top: 150, right: 200, zIndex: 999}}>
      {!!wines.length ? (
        <>
        <button className="flex ml-auto mr-6 text-xl my-auto" onClick={() => dispatch(displayCart())}>
          <FAIcon size="lg" name="close" />
        </button>
          {wines.map((e, index) => <MiniCard key={index} wine={e} />)}
          <div className="flex w-full justify-around border-t border-gray-300 border-opacity-75  pt-3">
            <button
              className="text-xl font-bold"
              onClick={() => setModalConfirmClear(true)}
            >
              Clear cart
            </button>
            <button
              className="text-xl font-bold"
            >
              Go to checkout
            </button>
            <span className="text-xl font-bold">Total:&nbsp; &nbsp;</span>
            <span className="text-xl font-bold">${totalPrice}</span>
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
