import Link from "next/link";
import { useEffect, useState } from "react";
import FAIcon from "../FAIcon";
import {
  selectCart,
  minusOneProduct,
  plusOneProduct,
  minusAllProducts,
  selectDisplay,
} from "../../features/products/cartSlice";
import { useAppDispatch } from "../../app/store";
import GenericModal from "../Modals/GenericModal";


export default function MiniCard({ wine }) {
    const [isLoading, setIsLoading] = useState(true);
    const [wineCounter, setWineCounter] = useState(1);
    const [subtotalPrice, setSubtotalPrice] = useState(0);
  const [modalConfirmClear, setModalConfirmClear] = useState(false);

    const dispatch = useAppDispatch()

    const subtotalCalculation = (quantity, price) => quantity * price

    const counterPlus = () => dispatch(plusOneProduct(wine.id))
    const counterLess = () => dispatch(minusOneProduct(wine.id))
    const removeAllProducts = () => dispatch(minusAllProducts(wine.id))

    useEffect(() => {
        setIsLoading(false);
    }, []);
    if (isLoading) {
        return null;
    }

    return (
    <>
    <div className="flex">
      <img src={wine.product.image} alt={wine.product.wine} height={25} width={45} />
      <span className="block">
        <p className="my-auto text-2xl font-bold px-6 font-poppins">
          {wine.product.wine}
        </p>
        <p className="my-auto text-2xl font-bold px-6">
          {wine.product.winery}
        </p>
      </span>
      <span className="flex my-auto space-x-4">
        <button 
          className="p-2 border rounded-full border-gray-400" 
          onClick={() => wine.quantity > 1  ?  counterLess() :  setModalConfirmClear(true)}
        >
          <FAIcon className="pt-1 text-gray-400" size="md" name="minus" />
        </button>
        <p className="my-auto text-2xl font-medium">{wine.quantity}</p> 
        <button className="text-xl p-2 my-auto border rounded-full border-gray-400" onClick={counterPlus}>
          <FAIcon className="pt-1 text-gray-400" size="md" name="plus" />
        </button>
        <p className="my-auto text-2xl font-medium px-4">${subtotalCalculation(wine.quantity, 100)}</p>
        <button className="p-2 border rounded-full border-red-600" onClick={() => setModalConfirmClear(true)}>
          <FAIcon className="pt-1 text-red-600" size="md" name="trash" />
        </button>
      </span>
    </div>
    <GenericModal
      display={modalConfirmClear}
      setDisplay={setModalConfirmClear}
      title='Remove products'
      onClickAccept={() => removeAllProducts()}
      acceptBtnLabel="Yes"
      message={`Are you sure you want to remove all "${wine.product.wine}" from your cart?`}
    />
    </>
  )
}