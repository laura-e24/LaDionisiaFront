import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/store";
import { addNewProduct, selectDisplay, displayCart } from "../../features/products/cartSlice";

export default function Card({ wine }) {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const display = useSelector(selectDisplay)
  useEffect(() => {
    setIsLoading(false);
  }, []);
  if (isLoading) {
    return null;
  }
  return (
    <>
      <div className="w-4/5" key={wine.id}>
        <div className="grid grid-cols-2">
          <div className="grid grid-rows-4 p-6 items-center">
            <a href={`/products/${wine.id}`}>
              <div>
                <span className="text-xl font-montserrat text-price-color w-full">
                  {wine.winery} - {wine.year}
                </span>
                <p className="text-5xl font-montserrat text-font-color">
                  <b>{wine.wine}</b>
                </p>
              </div>
            </a>
            <p className="text-2xl font-montserrat text-gray-600">
              <span className="text-price-color">
                $ {wine.price ? wine.price : 100}
              </span>
            </p>
            {/* <a className="text-black border border-gray-600 w-28 h-12 p-4" href={`/products/${wine.id}`}>TASTE IT</a> */}
            <button
              className="text-black border border-gray-600 w-fit p-4"
              onClick={() => {
                dispatch(addNewProduct(wine))
                if (!display) dispatch(displayCart())
              }}
            >
              ADD TO CART
            </button>
          </div>
          <div className="w-full h-full flex justify-center">
            <div
              className={`flex  w-96 h-96 justify-center items-center bgProduct`}
            >
              {/* <Link href={`/products/${wine.id}`}> */}
              <img
                src={wine.image}
                alt={wine.wine}
                className="object-scale-down h-4/12"
              />
              {/* <img src={wine.image} alt={wine.wine} className="object-scale-down h-4/12" /> */}
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
