import Navbar from "../../components/Navbar/NavBar";
import { useAppDispatch } from "../../app/store";
import { useSelector } from "react-redux";
import { clearOneWine, createFavorite, deleteAllFavorites, getOneWine, selectOneWine, selectOneWineStatus, } from "../../features/products/productsSlice";
import { useEffect, useState } from "react";
import { EStateGeneric } from "../../utils/general";
import { useRouter } from "next/router";
import Footer from "../../components/Footer/Footer";
import Link from "next/link";
import Comments from "../../components/Comments/Comments";
import { useUser } from "@auth0/nextjs-auth0/client";
import { selectAllUsers } from "../../features/comments/commentsSlice";
import { addNewProduct } from "../../features/products/cartSlice";

export default function Product() {
  const { user } = useUser();
  const router = useRouter()
  const dispatch = useAppDispatch()
  const wine = useSelector(selectOneWine)
  const wineStatus = useSelector(selectOneWineStatus)
  const users = useSelector(selectAllUsers)
  const { id } = router.query
  const userExistente = users.find(u => u.email === user?.email)
  const currentUser = userExistente?.id

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



  useEffect(() => {
    const fetchData = async () => {
      if (router.isReady) {
        if (wineStatus === EStateGeneric.IDLE) {
          await dispatch(getOneWine(id?.toString()));
        }
      }
    }
    fetchData()
    return () => {
      dispatch(clearOneWine());
    }
  }, [id])
  function añadirfavoritos() {
    dispatch(createFavorite({ userId: currentUser, product: wine }))
    alert("New Favorite added")
  }

  return (
    <>
      <div className="
    main-body  
    pt-12 
    mb-8
    m-auto
    max-w-screen-xl
    bg-bg-body 
    ">
        <Navbar></Navbar>
        <Link href="/products" >Volver</Link>

        <div className="w-2/3 float-right pt-4">
          <p className="text-xl font-poppins text-price-color">{wine.winery}</p>
          <p className="text-4xl font-poppins text-font-color" ><b>{wine.wine}</b></p>
          <p className="text-4xl font-poppins text-gray-600 pt-4 pb-4 price">
            <span className="text-price-color">
              <Price amount={wine.price} />
            </span>
            <span className="w-12 text-2xl ml-2 mt-4 pts">{wine.rating}<small>&nbsp;pts.</small></span>
          </p>
          <p className="text-lg font-poppins text-gray-600 wine-description">
            <WineDescription text={wine.description} />
          </p>
          <button className="wine-button p-2 rounded border border-gray-600 w-18 self-center justify-self-end text-gray-600 " onClick={() => {
            dispatch(addNewProduct(wine))
          }}>TASTE&nbsp;IT</button>
          {user && (<button onClick={añadirfavoritos} className="wine-button p-2 border rounded border-gray-600 w-18 self-center justify-self-end text-gray-600">
            ❤
          </button>)}
        </div>
        <div className="w-1/3 h-96 flex justify-center items-center bg-product">
          <img src={wine.image} alt={wine.wine} className="object-scale-down h-4/12" />
        </div>
        <Comments />
        <Footer />
      </div>
    </>)
}