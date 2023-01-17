import Navbar from "../../../components/Navbar/NavBar";
import { useAppDispatch } from "../../../app/store";
import { useSelector } from "react-redux";
import { getOneWine, selectOneWine, selectOneWineStatus } from "../../../features/products/productsSlice";
import { EStateGeneric } from "../../../utils/general";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Footer from "../../../components/Footer/Footer";
export default function Product() {
 
  const router = useRouter()
  const dispatch = useAppDispatch()
  const wine = useSelector(selectOneWine)
  const wineStatus = useSelector(selectOneWineStatus)
  const { id } = router.query

  useEffect(() => {
    const fetchData = async () => {
      if (router.isReady) {
        if (wineStatus === EStateGeneric.IDLE) {
          await dispatch(getOneWine(id?.toString()));
        }
      }
    }
    fetchData()
  }, [id])

  return (
    <div className="bg-bg-body min-h-screen">
      <Navbar></Navbar>
      <div className="w-full grid grid-cols-2 p-8">
        <div className="flex flex-col pl-16">
          <span className="text-xl font-montserrat text-price-color">{wine.winery}</span>
          <p className="text-7xl font-montserrat text-font-color" ><b>{wine.wine}</b></p>
          <p className="text-2xl font-montserrat text-gray-600"><span className="text-price-color">$ {wine.price ? wine.price : 100} </span>rating {wine.rating}/10</p>
          <p className="text-lg font-montserrat text-gray-600">{wine.description}</p>
          <button className="p-2 border border-gray-600 w-2/12 self-center justify-self-end text-gray-600 mt-8">TASTE IT</button>
        </div>
        <div className="w-full h-full flex justify-center">
          <div className={`flex w-96 h-96 justify-center items-center bgProduct`}>
            <img src={wine.image} alt={wine.wine} className="object-scale-down h-4/12" />
            {/* <img src={wine.image} alt={wine.wine} className="object-scale-down h-4/12" /> */}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}