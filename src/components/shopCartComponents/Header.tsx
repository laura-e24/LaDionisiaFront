import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { persistor, useAppDispatch } from "../../app/store";
import {
  selectCart,
  removeProduct,
  removeAllProducts,
  selectDisplay,
} from "../../features/products/cartSlice";
import MiniCard from "../MiniCard/MiniCard";
import axios from "axios"

const Header = ({ wines }) => {
  const [active, setActive] = useState(false);
  const [TotalPrice, setTotalPrice] = useState(0);
  const dispatch = useAppDispatch();
  const display = useSelector(selectDisplay);
  const cart = useSelector(selectCart);

  const onDeleteProduct = (product) => {
    const result = cart.filter((item) => item.id !== product.id);
  };
  // funciones para el local storage:
  function handleClearStorage() {
    dispatch(removeAllProducts())
    persistor.purge();
    console.log('Local storage cleared');
  }
  function handleForceSave() {
    persistor.flush();
    console.log('Forced save to Local storage');
  }
  useEffect(() => { }, [cart]);

  //   if (display) {
  //     <>
  //       <div className="row-product">
  //         {wines.map((e, index) => (
  //           <MiniCard wine={e} />
  //         ))}
  //       </div>
  //       <button
  //         className="btn-clear-all"
  //         onClick={() => dispatch(removeAllProducts())}
  //       >
  //         Pagar
  //       </button>
  //       <button
  //         className="btn-clear-all"
  //         onClick={() => dispatch(removeAllProducts())}
  //       >
  //         Vaciar Carrito
  //       </button>
  //       <div className="cart-total">
  //         <h3>Total:</h3>
  //         <span className="total-pagar">${TotalPrice}</span>
  //       </div>
  //     </>;
  //   }
  const send = async () => {
    const response = await axios.post(`http://localhost:3001/sendEmail`, 'sixtoorden@gmail.com')
    console.log(response)
    alert('enviado')
  }
  return (
    <div className="absolute z-50 rounded-2xl shadow-md bg-white py-4" style={{ minWidth: 500, top: 60, right: -300, zIndex: 999 }}>
      {wines.length ? (
        <>
          <div className="">
            {wines.map((e, index) => (
              <MiniCard wine={e} />
            ))}
          </div>
          <div className="flex w-full justify-around border-t border-gray-300 border-opacity-75  pt-3">
            <button
              className="btn-clear-all"
              onClick={async () => await send()}
            >
              Pagar
            </button>
            <button
              className="btn-clear-all"
              onClick={handleClearStorage}
            >
              Vaciar Carrito
            </button>
            <div className="flex ">
              <strong>Total:&nbsp; &nbsp;</strong>
              <span className="total-pagar">${TotalPrice}</span>
            </div>
          </div>
        </>
      ) : <div className="text-center font-semibold">Your cart is empty.</div>}
    </div>
  );
};

export default Header;
