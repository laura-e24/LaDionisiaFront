import { useState } from "react";
import Card from "../../../components/Card/Card"
import NavBar from "../../../components/Navbar/NavBar"
import Pagination from "../../../components/Pagination"
import Footer from "../../../components/Footer/Footer";
import { useAppDispatch } from "../../../app/store";
import { useSelector } from "react-redux";
import { getAllWineTypes, selectAllFilters, selectAllWineTypes, selectAllWineTypesStatus } from "../../../features/products/productsSlice";
import { EStateGeneric, filterWines } from "../../../utils/general";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Reds({ }) {
  const router = useRouter()
  const { type } = router.query;
  const dispatch = useAppDispatch()
  const wines = useSelector(selectAllWineTypes)
  const filters = useSelector(selectAllFilters)
  const winesStatus = useSelector(selectAllWineTypesStatus)
  const [filteredWines, setFilteredWines] = useState(wines);

  useEffect(() => {
    const fetchData = async () => {
      if (router.isReady) {
        if (winesStatus === EStateGeneric.IDLE)
          await dispatch(getAllWineTypes(type.toString()));
      }
    }
    fetchData()
    setFilteredWines(filterWines(wines, filters));
  }, [type, wines, filters])

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 24
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredWines.slice(indexOfFirstItem, indexOfLastItem);
  const onPageChange = (event) => {
    setCurrentPage(Number(event.target.id));
  };

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
      <NavBar></NavBar>
      <div className="flex flex-col p-4 bg-bg-body">
        <div className="w-full flex justify-around items-center">
          <div className="flex flex-col items-center">
            <a href="/products/type/reds" className="flex items-center justify-center w-32 h-32 rounded-full text-black py-4 px-8 bg-btn-color text-center bg-[url('https://www.akros.gr/media/23088.jpg')] bg-cover"></a>REDS
          </div>
          <div className="flex flex-col items-center">
            <a href="/products/type/whites" className="flex items-center justify-center w-32 h-32 rounded-full text-black py-4 px-8 bg-btn-color text-center bg-[url('https://sonomawinegarden.com/wp-content/uploads/2022/07/Popular-Types-of-White-Wine.jpg')] bg-cover bg-no-repeat bg-center"></a>WHITES
          </div>
          <div className="flex flex-col items-center">
            <a href="/products/type/rose" className="flex items-center justify-center w-32 h-32 rounded-full text-black py-4 px-8 bg-btn-color text-center bg-[url('https://cdn.shopify.com/s/files/1/0589/7882/8473/products/Vanderpump-930CroppedIII_540x.jpg?v=1653057805')] bg-cover bg-no-repeat bg-center"></a>ROSE
          </div>
          <div className="flex flex-col items-center">
            <a href="/products/type/sparkling" className="flex items-center justify-center w-32 h-32 rounded-full text-black py-4 px-8 bg-btn-color text-center bg-[url('https://1.bp.blogspot.com/-RJbKZ7oWMiI/WB02n2TQNjI/AAAAAAAAMe0/zlvt1Q-zn-8Yof0V_bst-gwTZSIIhmdAACLcB/s1600/Beauty%2B-%2BCarta%2BNevada%2BBrut%2B.jpg')] bg-cover bg-no-repeat bg-center"></a>SPARKLING
          </div>
          <div className="flex flex-col items-center">
            <a href="/products/type/dessert" className="flex items-center justify-center w-32 h-32 rounded-full text-black py- px-8 bg-btn-color text-center bg-[url('https://www.bordeaux.com/wp-content/uploads/2017/06/red.jpg')] bg-cover bg-no-repeat bg-center"></a>DESSERT
          </div>
        </div>
        {wines && wines[0]?.error && (<div className="text-center"><p className="text-9xl font-bold">Product not found</p></div>)}
        {filteredWines.length &&
          <div className="w-full h-full flex flex-wrap self-center justify-center gap-y-8">
            {
              currentItems.map((wine) => (
                <Card wine={wine}></Card>
              ))
            }
          </div>
        }
      </div>
      <Pagination
        onPageChange={onPageChange}
        wines={filteredWines}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Footer />
    </div>
  )
}