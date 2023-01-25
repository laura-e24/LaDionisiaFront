import Link from "next/link";
import Image from 'next/image'

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/store";
import { addNewProduct, selectDisplay, displayCart } from "../../features/products/cartSlice";
import { createFavorite, getFavorite } from "../../features/products/productsSlice";
import { AllUsersStatus, getAllUsers, selectAllUsers } from "../../features/comments/commentsSlice";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";
import { EStateGeneric } from "../../utils/general";

export default function Card({ wine }) {
  const { user } = useUser();
  const router = useRouter()
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const display = useSelector(selectDisplay)
  const usersStatus = useSelector(AllUsersStatus)
  const users = useSelector(selectAllUsers)
  const userExistente = users.find(u => u.email === user?.email)
  const currentUser = userExistente?.id


  useEffect(() => {
    const fetchData = async () => {
      if (router.isReady) {
        if (usersStatus === EStateGeneric.IDLE) {
          await dispatch(getAllUsers());
        }
      }
    }
    fetchData()
  }, [users])

  const Price = ({ amount }) => {
    let price = (amount < 1) ? 100 : amount
    let entero = Math.trunc(price);
    let decimal = "" + (price - entero) * 100
    decimal = ("00" + decimal).slice(-2);
    return (<><i className="-mt-8 "><small>$</small></i> {entero}<small><sup>{decimal}</sup></small></>);
  }

  const WineDescription = ({ text }) => {
    let texto = "" + text;
    const desc = texto.split("(")
    texto = desc[0]
    desc[1] = (desc[1] == "") ? "" : "(" + desc[1]
    return (<>{texto}<small>{desc[1]}</small></>);
  }
  function añadirfavoritos() {
    dispatch(createFavorite({ userId: currentUser, product: wine }))
    alert('Agregado')
  }
  useEffect(() => {
    setIsLoading(false);
  }, []);
  if (isLoading) {
    return null;
  }

  return (
    <>
      <div key={wine.id} className="wine-card w-2/3 float-right pt-4">
        <p className="text-xl font-montserrat text-price-color wine-winery">{wine.winery} - {wine.year}</p>
        <a href={`/products/${wine.id}`}>
          <p className="wine-name font-montserrat text-font-color" ><b>{wine.wine}</b></p>
        </a>
        <p className="font-montserrat text-gray-600 pt-4 pb-4 price">
          <span className="text-price-color">
            <Price amount={wine.price} />
          </span>
          <span className="w-12 text-2xl ml-2 mt-4 pts">{wine.rating}<small>&nbsp;pts.</small></span>
        </p>
        <p className="text-lg font-montserrat text-gray-600 wine-description">
          <WineDescription text={wine.description} />
        </p>
        <button
          onClick={() => {
            dispatch(addNewProduct(wine))
            if (!display) dispatch(displayCart())
          }}
          className="wine-button p-2 border border-gray-600 w-18 self-center justify-self-end text-gray-600 ">TASTE&nbsp;IT</button>
        <button onClick={añadirfavoritos} className="wine-button p-2 border border-gray-600 w-18 self-center justify-self-end text-gray-600 ">
          ❤
        </button>
      </div>
      <div className="w-1/3 h-96 flex justify-center items-center bg-product wine-bootle">
        <img src={wine.image} alt={wine.wine} className="object-scale-down" style={{ maxHeight: 300 }} />
      </div>
    </>
  );
}
