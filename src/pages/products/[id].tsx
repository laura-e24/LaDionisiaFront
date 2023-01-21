import Navbar from "../../components/Navbar/NavBar";
import { useAppDispatch } from "../../app/store";
import { useSelector } from "react-redux";
import { clearOneWine, createFavorite, deleteAllFavorites, getOneWine, selectOneWine, selectOneWineStatus } from "../../features/products/productsSlice";
import { useEffect, useState } from "react";
import { EStateGeneric } from "../../utils/general";
import { useRouter } from "next/router";
import Footer from "../../components/Footer/Footer";
import Link from "next/link";
import Comments from "../../components/Comments/Comments";
import { useUser } from "@auth0/nextjs-auth0/client";
import { selectAllUsers } from "../../features/comments/commentsSlice";

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
  const productCurrent = id?.toString()
  function añadirfavoritos() {
    dispatch(createFavorite({userId: currentUser, productId: productCurrent}))
  }

  return (
    <div className="
    main-body  
    pt-12 
    mb-12 
    m-auto
    min-h-screen
    max-w-screen-xl
    bg-bg-body 
    ">
      <Navbar></Navbar>
      <Link href="/products" >Volver</Link>
      <div className="w-full grid grid-cols-2 p-8">
        <div className="flex flex-col pl-16">
          <span className="text-xl font-montserrat text-price-color">{wine.winery}</span>
          <p className="text-7xl font-montserrat text-font-color" ><b>{wine.wine}</b></p>
          <p className="text-2xl font-montserrat text-gray-600"><span className="text-price-color">$ {wine.price ? wine.price : 100} </span>rating {wine.rating}/100</p>
          <p className="text-lg font-montserrat text-gray-600">{wine.description}</p>
          <button className="p-2 border border-gray-600 w-2/12 self-center justify-self-end text-gray-600 mt-8">TASTE IT</button>
          <button className="p-2 border border-gray-600 w-2/12 self-center justify-self-end text-gray-600 mt-8" onClick={añadirfavoritos}>MG</button>
          <button className="p-2 border border-gray-600 w-2/12 self-center justify-self-end text-gray-600 mt-8" onClick={añadirfavoritos}>Borrar todos los favorites</button>
        </div>
        <div className="w-full h-full flex justify-center">
          <div className={`flex w-96 h-96 justify-center items-center bgProduct`}>
            <img src={wine.image} alt={wine.wine} className="object-scale-down h-4/12" />
          </div>
        </div>
      </div>
      <Comments />
      <Footer></Footer>
    </div>
  )
}