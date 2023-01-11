import Navbar from "../../components/Navbar/NavBar";
import { useAppDispatch } from "../../app/store";
import { useSelector } from "react-redux";
import { getOneWine, selectOneWine, selectOneWineStatus } from "../../features/products/productsSlice";
import { useEffect } from "react";
import { StateGeneric } from "../../utils/general";
import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const wine = useSelector(selectOneWine)
  const wineStatus = useSelector(selectOneWineStatus)
  const { id } = router.query

  useEffect(() => {
    const fetchData = async () => {
      if (router.isReady) {
        if (wineStatus === StateGeneric.IDLE) {
          await dispatch(getOneWine(id?.toString()));
        }
      }
    }
    fetchData()
  }, [id])

  return (
    <div>
      <Navbar></Navbar>
      <div className="w-full h-full flex flex-wrap self-center justify-center">
        {wineStatus !== StateGeneric.SUCCEEDED ? <p>Cargando...</p>
        : (
          <>
          <div className="w-1/5 h-1/5 flex flex-wrap self-center justify-left">
          <img src={wine.image} alt="" />
        </div>
        <div className="w-1/2 h-1/2 flex flex-col items-left text-left font-bold mt-10 mb-5">
          <h1>{wine.wine}</h1>
          <p>$100</p>
          <h5>(5 stars) 10 reviews</h5>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <div>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </div>
          <h5>{wine.description}</h5>
          <p>cantidad</p>
          <div className="mb-3 pt-0">
            <input type="text" placeholder="1" className=" text-center shrink h-14 px-3 py-4 placeholder-slate-300 text-slate-600 relative bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full" />

            <button className="w-80 flex flex-col items-center text-center8 bg-btn-color text-white py-4 px-8 hover:bg-red-600" type="button"
            >
              Añadir al carrito
            </button>
            <br />
            <button className="w-80 flex flex-col items-center text-center bg-btn-color text-white py-4 px-8 hover:bg-red-600" type="button"
            >
              Añadir a lista de deseos
            </button>

          </div>
        </div></>
        )}
      </div>

      <div className="p-5">
        <h1 className="font-bold mt-10 mb-5r" >RESEÑAS Y PUNTUACIONES</h1>
        <h2 className="font-bold mt-10 mb-5">Escribi una reseña</h2>
        <div className="mb-3 pt-0">
          <input type="text" placeholder="Escribir..." className="shrink w-66 px-3 py-4 placeholder-slate-300 text-slate-600 relative bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full" />
        </div>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <h5 className="font-bold mt-10 mb-5" >Puntuar</h5>
        <span className="heading"></span>
        <span className="fa fa-star-o"></span>
        <span className="fa fa-star-o"></span>
        <span className="fa fa-star-o"></span>
        <span className="fa fa-star-o"></span>
        <span className="fa fa-star-o"></span>
        <br />
      </div>
      <div className="flex justify-end p-2" >
        <button className="bg-btn-color text-white py-4 px-8 hover:bg-red-600 " type="button"
        >
          Enviar
        </button>

      </div>
    </div>

  )
}
